import { Text } from "@chakra-ui/react";
import { Col, Row } from "components/elements";

const Footer = () => {
  return (
    <Col
      px={{ base: "1rem", sm: "3rem", md: "5rem", "2xl": "7rem" }}
      pt={"4rem"}
      pb="2rem"
      backgroundColor="white"
    >
      <Row
        justifyContent="space-between"
        direction={{ base: "column", lg: "row" }}
        alignItems={"flex-start"}
        width="100%"
      >
        <Col
          maxW={{ base: "full", lg: "300px" }}
          flexDirection={{ base: "row", lg: "column" }}
        >
          <Text fontWeight={600} fontSize={20}>
            Trip Planner
          </Text>
          <Text fontSize={14} color="#616161" marginTop={3}>
            Turn your next trip into a hassle-free experience with Trip Planner
          </Text>
        </Col>
        <Row
          justifyContent={{ sm: "space-between", md: "normal" }}
          direction={{ base: "column", md: "row" }}
          gap={{ base: "2rem", md: "4rem", xl: "6rem" }}
        >
          <Col alignItems="flex-start" gap={"0.5rem"}>
            <Text fontSize="md" fontWeight="bold">
              Legal
            </Text>
            <Col alignItems="flex-start" color="gray.500" gap={"0.25rem"}>
              <Text fontSize={"sm"}>Terms and Conditions</Text>
              <Text fontSize={"sm"}>Privacy Policy</Text>
            </Col>
          </Col>
          <Col alignItems="flex-start" gap={"0.25rem"}>
            <Text fontSize="md" fontWeight="bold">
              Support
            </Text>
            <Col alignItems="flex-start" color="gray.500" gap={"0.25rem"}>
              <Text fontSize={"sm"}>Contact Us</Text>
            </Col>
          </Col>
          <Col alignItems="flex-start" gap={"0.25rem"}>
            <Text fontSize="md" fontWeight="bold">
              Itineraries
            </Text>
            <Col alignItems="flex-start" color="gray.500" gap={"0.25rem"}>
              <Text fontSize={"sm"}>Community Trips</Text>
              <Text fontSize={"sm"}>Find Destinations</Text>
            </Col>
          </Col>
        </Row>
      </Row>
      <Row marginTop={5} paddingTop={5} borderTop="1px solid #61616140">
        <Text color="#616161">© 2023 Trip Planner. All rights reserved</Text>
      </Row>
    </Col>
  );
};

export default Footer;
