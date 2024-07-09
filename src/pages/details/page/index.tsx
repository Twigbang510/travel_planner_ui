import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Col, Row } from "components/elements";
import AppLoading from "components/shared/AppLoading";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import {
  FaHeart,
  FaHome,
  FaLongArrowAltRight,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import ReactMapboxGl, { Feature, Layer, Marker, Popup } from "react-mapbox-gl";
import { useParams } from "react-router-dom";
import { PlaceListData } from "types/models/trip";
import request from "utils/request";
// @ts-ignore
import mapboxSdk from "@mapbox/mapbox-sdk";
import directions from "@mapbox/mapbox-sdk/services/directions";

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
      <div className="app__marker-icon" />
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
          {/* <Image src={place.details.photos} /> */}
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

const PlanDetails = () => {
  const accessToken =
    "pk.eyJ1IjoidHdpZ2JhbmciLCJhIjoiY2x2eG80enNzMmxldzJpcDYyaG56Y2gxOCJ9.7OzJrjGjQUYrj50f7sHpRg";
  const Map = ReactMapboxGl({
    accessToken,
  });
  const [openIndex, setOpenIndex] = useState(0);
  const [loadingFetchTrip, setLoadingFetchTrip] = useState(false);
  const { id: planId } = useParams<{ id: any }>();
  const [route, setRoute] = useState<any>(null);
  const [tripData, setTripData] = useState<any>();
  const [selectedDate, setSelectedDate] = useState(
    tripData?.placeList[Object.keys(tripData?.placeList)[openIndex]] || null
  );
  const mapboxClient = mapboxSdk({
    accessToken,
  });
  const directionsClient = directions(mapboxClient);

  useEffect(() => {
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
  }, [selectedDate, tripData]);

  const handleAccordionChange = (index: number) => {
    if (index !== openIndex && tripData) {
      setOpenIndex(index);
      setSelectedDate(
        tripData?.placeList[Object.keys(tripData?.placeList)[index]]
      );
    }
  };

  const fetchPlanDetails = useCallback(async () => {
    setLoadingFetchTrip(true);
    const response = await request.get(`/plan/${planId}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    setLoadingFetchTrip(false);
    if (response) {
      setSelectedDate(
        response.data?.placeList[
          Object.keys(response.data?.placeList)[openIndex]
        ]
      );
    }
    setTripData(response.data);
  }, [openIndex, planId]);

  useEffect(() => {
    fetchPlanDetails();
  }, [fetchPlanDetails, planId]);

  if (!tripData) {
    return <AppLoading visible />;
  }

  return (
    <Row>
      <AppLoading visible={loadingFetchTrip} />
      <Col flex={1} marginRight={6} height="80vh">
        <Col flex={1} height="80vh" overflow="scroll">
          <Accordion
            allowToggle
            defaultIndex={0}
            onChange={handleAccordionChange}
            mt={4}
          >
            {tripData &&
              Object.keys(tripData?.placeList)?.map((placeTime, index) => {
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
                                <Row
                                  alignItems="center"
                                  border="1px solid black"
                                  width="fit-content"
                                  paddingX={2}
                                  paddingY={1}
                                  borderRadius={10}
                                  mb={2}
                                >
                                  <Text
                                    fontWeight={700}
                                    fontSize={14}
                                    marginRight={2}
                                  >
                                    {place.fromTime}
                                  </Text>
                                  <FaLongArrowAltRight size={12} />
                                  <Text
                                    fontWeight={700}
                                    fontSize={14}
                                    marginLeft={2}
                                  >
                                    {place.nextTime}
                                  </Text>
                                </Row>
                                <Row alignItems="center">
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
                                <FaHeart size={22} />
                              ) : (
                                <FaRegHeart size={22} />
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

export default PlanDetails;
