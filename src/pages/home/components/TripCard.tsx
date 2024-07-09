import { Box, Button, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Col, Row } from "components/elements";
import { formatLongDateTime } from "utils/date-time";
import { NEW_TRIP_ACTIVITIES } from "constants/new-trip";

const TripCard = ({
  imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Parthenon_%2830276156187%29.jpg/300px-Parthenon_%2830276156187%29.jpg",
  title,
  description = [],
  onExport,
  onDelete,
  onClickTrip,
}: {
  imageSrc?: string;
  title: string;
  description?: string[];
  onExport?: () => void;
  onDelete?: () => void;
  onClickTrip?: () => void;
}) => {
  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    callback?: () => void
  ) => {
    event.stopPropagation();
    if (callback) {
      callback();
    }
  };
  const getActivityLabel = (value: string) => {
    const activity = NEW_TRIP_ACTIVITIES.find(
      (activity) => activity.value === value
    );
    return activity ? activity.label : value;
  };
  return (
    <Card maxW="sm" onClick={onClickTrip} cursor="pointer">
      <Image src={imageSrc} alt={title} objectFit="cover" />
      <CardBody>
        <Text mb={4} fontWeight="600">
          {formatLongDateTime(title)}
        </Text>
        <Box fontSize="sm">
          <Col>
            {description.map((type) => (
              <Box key={type} display="flex" alignItems="center" mr={1}>
                <Text>{getActivityLabel(type)}</Text>
              </Box>
            ))}
          </Col>
        </Box>
        <Row gap={4} mt={4} width="100%" justifyContent="space-between">
          <Button
            color="black"
            background="#ffdf80"
            height={10}
            fontSize={14}
            flex={1}
            onClick={(e) => handleButtonClick(e, onExport)}
          >
            Export
          </Button>
          <Button
            color="#F44949"
            border="1px solid #F44949"
            height={10}
            fontSize={14}
            flex={1}
            onClick={(e) => handleButtonClick(e, onDelete)}
          >
            Delete
          </Button>
        </Row>
      </CardBody>
    </Card>
  );
};

export default TripCard;
