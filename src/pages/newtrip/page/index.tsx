import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Spinner,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { Col, Row } from "components/elements";
import AppCalendar from "components/shared/AppCalendar";
import AppLoading from "components/shared/AppLoading";
import { PAGES } from "constants/app";
import { NEW_TRIP_ACTIVITIES } from "constants/new-trip";
import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppDispatch } from "redux/root-store";
import { setTripData } from "redux/ui/slice";
import request from "utils/request";
import { debounce } from "lodash";

const HotelCard = ({
  title,
  desc,
  isSelected,
  onClick,
}: {
  title: string;
  desc: string;
  isSelected?: boolean;
  onClick?: any;
}) => (
  <Box
    minW="200px"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    mr={4}
    mb={10}
    p={4}
    cursor="pointer"
    onClick={onClick}
    bg={isSelected ? "blue.200" : "white"}
    _hover={{ bg: "blue.100" }}
  >
    <Text mt={2} fontSize="xl" fontWeight="semibold">
      {title}
    </Text>
    <Text mt={2}>{desc}</Text>
  </Box>
);

const NewTrip = () => {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState<Date>(null);
  const [endDate, setEndDate] = useState<Date>(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [loadingCreateTrip, setLoadingCreateTrip] = useState(false);
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const [cityInput, setCityInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [hotels, setHotels] = useState<any[]>([]);
  const [loadingHotel, setLoadingHotel] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState({
    placeId: "",
    lat: 0,
    lng: 0,
  });
  const [selectedCity, setSelectedCity] = useState({
    description: "",
    place_id: "",
  });

  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => setShowSuggestions(false),
  });

  const fetchHotels = useCallback(async () => {
    setLoadingHotel(true);
    try {
      const response = await request.get(
        `/googlemaps-place/hotels/?placeId=${selectedCity?.place_id}`
      );
      setHotels(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoadingHotel(false);
  }, [selectedCity.place_id]);

  useEffect(() => {
    if (selectedCity && selectedCity.place_id) {
      fetchHotels();
    }
  }, [fetchHotels, selectedCity]);

  const fetchSuggestions = async (query: string) => {
    setLoadingSuggestion(true);
    try {
      const response = await request.get(
        `/googlemaps-place/autocomplete/?input=${query}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoadingSuggestion(false);
  };

  const debouncedFetchSuggestions = useCallback(
    debounce((value) => {
      fetchSuggestions(value);
    }, 1000),
    []
  );

  useEffect(() => {
    if (cityInput) {
      debouncedFetchSuggestions(cityInput);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [cityInput, debouncedFetchSuggestions]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setCityInput(value);
  };

  const handleConfirmSelectDays = (range?: any) => {
    if (range) {
      setStartDate(range[0]);
      setEndDate(range[1]);
    }
    setIsShowCalendar(false);
  };

  const handleSelectActivity = (activityValue: string) => {
    const index = selectedActivities.findIndex(
      (selectedActivity) => selectedActivity === activityValue
    );

    if (index !== -1) {
      setSelectedActivities(
        selectedActivities.filter((o) => o !== activityValue)
      );
    } else {
      setSelectedActivities([...selectedActivities, activityValue]);
    }
  };

  const handleCreateNewTrip = async () => {
    setLoadingCreateTrip(true);
    const postParams = {
      ...selectedHotel,
      types: selectedActivities,
      date_range: [startDate, endDate],
    };

    const response = await request.post(
      "/googlemaps-place/getplan/",
      postParams,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    await dispatch(setTripData(response.data));
    setLoadingCreateTrip(false);
    if (response) {
      history.push(`${PAGES.BUILD_PAGE}`);
    }
  };

  return (
    <Col alignItems="center" mt={31} minH="70vh">
      <AppLoading visible={loadingCreateTrip} />
      <AppCalendar visible={isShowCalendar} onClose={handleConfirmSelectDays} />
      <Text fontSize={30} fontWeight={500} mb={12} textAlign="center">
        Plan your next adventure
      </Text>
      <Col width={{ base: "unset", md: 600 }} flex={1}>
        <Text fontWeight={400} fontSize={18} mb={6}>
          Where do you want to go?
        </Text>
        <Box ref={ref} position="relative" mb={4}>
          <InputGroup>
            <Input
              value={cityInput}
              onChange={handleChange}
              placeholder="Type to search..."
            />
            {loadingSuggestion && (
              <InputRightElement>
                <Spinner size="sm" />
              </InputRightElement>
            )}
          </InputGroup>
          {showSuggestions && (
            <List
              position="absolute"
              zIndex="1"
              backgroundColor="white"
              border="1px solid #ccc"
              width="100%"
              maxHeight="200px"
              overflowY="auto"
            >
              {suggestions?.map((suggestion, index) => (
                <ListItem
                  key={index}
                  padding="5px"
                  _hover={{ backgroundColor: "gray.200" }}
                  cursor="pointer"
                  onClick={() => {
                    setCityInput(suggestion.description);
                    setSelectedCity(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  <Text>{suggestion.description}</Text>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Row
          alignItems="center"
          paddingX={4}
          cursor="pointer"
          height="48px"
          border="1px solid #e2e8f0"
          borderRadius="0.375rem"
          width="fit-content"
          mb={6}
          onClick={() => setIsShowCalendar(true)}
        >
          <FaRegCalendarAlt size={20} />
          {!endDate && !startDate ? (
            <Text ml={2} mt=".15rem" fontWeight={600} fontSize={14}>
              Select dates
            </Text>
          ) : (
            <Text ml={2} mt=".15rem" fontSize={14}>
              {moment(startDate).format("DD MMM YY") || "--:--"} ~{" "}
              {moment(endDate).format("DD MMM YY") || "--:--"}
            </Text>
          )}
        </Row>
        <Flex
          alignItems={loadingHotel ? "center" : "unset"}
          justifyContent={loadingHotel ? "center" : "unset"}
          overflowX="auto"
          minH={loadingHotel || hotels.length > 0 ? "300px" : "unset"}
        >
          {loadingHotel ? (
            <Spinner />
          ) : (
            hotels &&
            hotels.map((hotel, index) => (
              <HotelCard
                key={index}
                title={hotel?.name}
                desc={hotel?.formatted_address}
                isSelected={selectedHotel.placeId === hotel?.place_id}
                onClick={() =>
                  setSelectedHotel({
                    placeId: hotel?.place_id,
                    lat: hotel?.geometry.location.lat,
                    lng: hotel?.geometry.location.lng,
                  })
                }
              />
            ))
          )}
        </Flex>
        <Text fontWeight={400} fontSize={18} mb={6}>
          Select the kind of activities you want to do
        </Text>
        <Row flexWrap="wrap">
          {NEW_TRIP_ACTIVITIES.map((activity) => {
            const isActivitySelected = selectedActivities.some(
              (selectedActivity) => selectedActivity === activity.value
            );
            return (
              <Row
                key={activity.value}
                borderRadius={8}
                marginRight={2}
                marginBottom={3}
                paddingX={3}
                paddingY={1}
                cursor="pointer"
                border={`1px solid ${
                  isActivitySelected ? "#ffc180" : "#e2e8f0"
                }`}
                background={isActivitySelected ? "#ffdf8080" : "white"}
                onClick={() => handleSelectActivity(activity.value)}
              >
                {activity.label}
              </Row>
            );
          })}
        </Row>
      </Col>
      <Col alignItems="center">
        <Button
          background="#ffdf80"
          color="black"
          borderRadius={30}
          marginTop={10}
          onClick={handleCreateNewTrip}
          width="fit-content"
        >
          Create New Trip
        </Button>
        <Text mt={3} fontSize={13} color="#f6f80">
          By clicking Create New Trip, you agree to our Terms and Conditions and
          Privacy Policy.
        </Text>
      </Col>
    </Col>
  );
};

export default NewTrip;
