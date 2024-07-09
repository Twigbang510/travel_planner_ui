import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Col, Row } from "components/elements";
import TimePicker from "components/elements/TimePicker";
import AppLoading from "components/shared/AppLoading";
import { PAGES } from "constants/app";
import { DUMMY_TRIP_DATA } from "constants/new-trip";
import "mapbox-gl/dist/mapbox-gl.css";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { FaHeart, FaHome, FaRegHeart, FaStar } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import ReactMapboxGl, { Marker, Popup, Layer, Feature } from "react-mapbox-gl";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppDispatch } from "redux/root-store";
import { setTripData } from "redux/ui/slice";
import { PlaceListData } from "types/models/trip";
import request from "utils/request";
// @ts-ignore
import mapboxSdk from "@mapbox/mapbox-sdk";
import directions from "@mapbox/mapbox-sdk/services/directions";
import { RootState } from "redux/root-reducer";

const CustomMarker = ({
  placePos,
  onClick,
}: {
  placePos?: number;
  onClick?: () => void;
}) => {
  const isFirstPlace = placePos === 0;

  return (
    <Col
      position="relative"
      cursor="pointer"
      className="custom-marker"
      onClick={onClick}
    >
      <div
        className={`app__marker-icon ${isFirstPlace && "app__marker-icon-start"}`}
      />
      <Text
        position="absolute"
        top="-2.5"
        left={isFirstPlace ? "-2" : "-1"}
        fontSize={16}
        fontWeight={600}
        color="white"
      >
        {isFirstPlace ? <FaHome /> : placePos}
      </Text>
    </Col>
  );
};

const LocationItem = ({ place }: { place: PlaceListData }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const { details } = place;
  const lat = details.geometry.location.lat;
  const lng = details.geometry.location.lng;

  const handlePressMarker = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <Col>
      <Marker coordinates={[lng, lat]} anchor="bottom">
        <CustomMarker placePos={place.position} onClick={handlePressMarker} />
      </Marker>
      {openPopup && (
        <Popup
          coordinates={[lng, lat]}
          offset={{
            // @ts-ignore
            "bottom-left": [12, -38],
            bottom: [0, -38],
            "bottom-right": [-12, -38],
          }}
          anchor="bottom"
          style={{
            top: -27,
            left: -16,
            maxWidth: "250px",
            zIndex: 99999,
          }}
        >
          <Text fontSize="16px" fontWeight="600" mb={2}>
            {place.details.name}
          </Text>
          <Text>{place.details.formatted_address}</Text>
          <Row alignItems="center" gap={2}>
            <Text as="b">Website:</Text>
            <Text color="blue.500">{place.details.website}</Text>
          </Row>
          <Row alignItems="center" gap={2}>
            <Text as="b">Rating:</Text>
            <Text>{place.details.rating}</Text>
          </Row>
          <Row alignItems="center" gap={2}>
            <Text as="b">Total Ratings:</Text>
            <Text>{place.details.user_ratings_total}</Text>
          </Row>
        </Popup>
      )}
    </Col>
  );
};

const BuildPage = () => {
  const accessToken =
    "pk.eyJ1IjoidHdpZ2JhbmciLCJhIjoiY2x2eG80enNzMmxldzJpcDYyaG56Y2gxOCJ9.7OzJrjGjQUYrj50f7sHpRg";
  const Map = ReactMapboxGl({
    accessToken,
  });
  const history = useHistory();
  // const tripData: any = useSelector((state: RootState) => state.ui.newTripData);
  const tripData = DUMMY_TRIP_DATA as any;
  const [openIndex, setOpenIndex] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(
    tripData.placeList[Object.keys(tripData.placeList)[openIndex]]
  );
  const [loadingAddPlan, setLoadingAddPlan] = useState(false);
  const [route, setRoute] = useState<any>(null);
  const mapboxClient = mapboxSdk({
    accessToken,
  });
  const directionsClient = directions(mapboxClient);

  useEffect(() => {
    if (!tripData) {
      history.push(`${PAGES.HOME}`);
    }

    const fetchRoute = async () => {
      const coordinates = selectedDate.map((place: any) => [
        place.details.geometry.location.lng,
        place.details.geometry.location.lat,
      ]);

      try {
        const response = await directionsClient
          .getDirections({
            profile: "driving",
            waypoints: coordinates.map((coord: any) => ({
              coordinates: coord,
            })),
            geometries: "geojson",
          })
          .send();

        const routeCoordinates: any[] =
          response.body.routes[0]?.geometry?.coordinates;

        if (routeCoordinates) {
          setRoute(routeCoordinates);
        } else {
          console.error("No route found");
        }
      } catch (error) {
        console.error("Error fetching directions: ", error);
      }
    };

    if (selectedDate) {
      fetchRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, history, tripData]);

  const handleAccordionChange = (index: number) => {
    if (index === -1) {
      setRoute([]);
    }

    if (index !== openIndex) {
      setOpenIndex(index);
      setSelectedDate(
        tripData.placeList[Object.keys(tripData.placeList)[index]]
      );
    }
  };

  const handleAddPlan = async () => {
    setLoadingAddPlan(true);
    const { userID, ...rest } = tripData;
    await request.post(
      "/plan",
      {
        userId: userID,
        ...rest,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    setLoadingAddPlan(false);
    history.push(PAGES.HOME);
  };

  const handleOnChangeFromTime = (
    timeValue: any,
    placeId: any,
    placeTime: any
  ) => {
    const newTripData = { ...tripData };

    const placeIndex = newTripData.placeList[placeTime].findIndex(
      (place: any) => place.id === placeId
    );

    if (placeIndex !== -1) {
      newTripData.placeList[placeTime][placeIndex].fromTime = timeValue;
      dispatch(setTripData(newTripData));
    }
  };

  const handleOnChangeNextTime = (
    timeValue: any,
    placeId: any,
    placeTime: any
  ) => {
    const newTripData = { ...tripData };

    const placeIndex = newTripData.placeList[placeTime].findIndex(
      (place: any) => place.id === placeId
    );

    if (placeIndex !== -1) {
      newTripData.placeList[placeTime][placeIndex].nextTime = timeValue;
      dispatch(setTripData(newTripData));
    }
  };

  const handleLikePlace = async (
    isLike: boolean,
    placeId: any,
    placeTime: any
  ) => {
    await request.post(
      "/place/like",
      {
        placeId: placeId,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const newTripData = { ...tripData };

    const placeIndex = newTripData.placeList[placeTime].findIndex(
      (place: any) => place.id === placeId
    );

    if (placeIndex !== -1) {
      newTripData.placeList[placeTime][placeIndex].liked = isLike;
      dispatch(setTripData(newTripData));
    }
  };

  return (
    <Row>
      <AppLoading visible={loadingAddPlan} />
      <Col flex={1} marginRight={6} height="80vh">
        <Col flex={1} height="80vh" overflow="scroll">
          <Accordion
            allowToggle
            defaultIndex={0}
            onChange={handleAccordionChange}
            mt={4}
          >
            {tripData &&
              Object.keys(tripData.placeList)?.map((placeTime, index) => {
                return (
                  <AccordionItem key={index} py={4}>
                    <AccordionButton>
                      <Col flex="1" textAlign="left">
                        <Row alignItems="center">
                          <GiPositionMarker size={22} />
                          <Text fontSize={22} fontWeight={500} ml={2}>
                            {moment(placeTime).format("dddd, MMMM Do")}
                          </Text>
                        </Row>
                        <Text fontSize={14} mt={2}>
                          Total Locations:{" "}
                          {tripData?.placeList[placeTime]?.length}
                        </Text>
                      </Col>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      {(tripData?.placeList[placeTime] || [])?.map(
                        (place: any, index: any) => (
                          <Col key={`${place.placeId}_${index}`}>
                            {index !== 0 && <Divider marginY={4} />}
                            <Row justifyContent="space-between">
                              <Col>
                                <Text
                                  fontSize={18}
                                  color="#ffc180"
                                  fontWeight={600}
                                >
                                  {place.details.name}
                                </Text>
                                <Text fontSize={16} width="80%" mb={4}>
                                  {place.details.formatted_address}
                                </Text>
                                <TimePicker
                                  fromTimeVal={place.fromTime}
                                  nextTimeVal={place.nextTime}
                                  onChangeFromTime={(timeVal: any) =>
                                    handleOnChangeFromTime(
                                      timeVal,
                                      place.placeId,
                                      placeTime
                                    )
                                  }
                                  onChangeNextTime={(timeVal: any) =>
                                    handleOnChangeNextTime(
                                      timeVal,
                                      place.placeId,
                                      placeTime
                                    )
                                  }
                                />
                                <Row mt={2} alignItems="center">
                                  <FaStar
                                    stroke="0"
                                    color="#ffc180"
                                    fill="#ffc180"
                                  />
                                  <Text fontSize={16} ml={2}>
                                    Rating: {place.details.rating || "--"}
                                  </Text>
                                </Row>
                                <Row alignItems="center">
                                  <FaStar
                                    stroke="0"
                                    color="#ffc180"
                                    fill="#ffc180"
                                  />
                                  <Text fontSize={16} ml={2}>
                                    Total Rates:{" "}
                                    {place.details.user_ratings_total || "--"}
                                  </Text>
                                </Row>
                              </Col>
                              {place.liked ? (
                                <FaHeart
                                  size={22}
                                  cursor="pointer"
                                  onClick={() =>
                                    handleLikePlace(
                                      false,
                                      place.place_id,
                                      placeTime
                                    )
                                  }
                                />
                              ) : (
                                <FaRegHeart
                                  size={22}
                                  cursor="pointer"
                                  onClick={() =>
                                    handleLikePlace(
                                      true,
                                      place.place_id,
                                      placeTime
                                    )
                                  }
                                />
                              )}
                            </Row>
                          </Col>
                        )
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </Col>
        <Button color="black" border="1px solid black" onClick={handleAddPlan}>
          Add Plan
        </Button>
      </Col>
      <Col flex={1}>
        <Map
          // eslint-disable-next-line react/style-prop-object
          style="mapbox://styles/mapbox/streets-v8"
          containerStyle={{
            height: "80vh",
            width: "100%",
          }}
          center={[
            tripData?.startLocation.lng || 0,
            tripData?.startLocation.lat || 0,
          ]}
          zoom={[14]}
        >
          {tripData &&
            selectedDate?.map((place: any, index: any) => {
              return (
                <LocationItem key={`${place.placeId}_${index}`} place={place} />
              );
            })}

          {/* Add Layer for drawing lines */}
          <Layer
            type="line"
            layout={{ "line-join": "round", "line-cap": "round" }}
            paint={{ "line-color": "#ffc180", "line-width": 4 }}
          >
            {route && <Feature coordinates={route} />}
          </Layer>
        </Map>
      </Col>
    </Row>
  );
};

export default BuildPage;
