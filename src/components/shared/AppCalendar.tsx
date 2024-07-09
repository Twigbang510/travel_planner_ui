// src/components/CalendarModal.tsx
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { QUERY_MOBILE } from "constants/app";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppCalendar = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: (arg?: [Date, Date] | Date) => void;
}) => {
  const [selectedRange, setSelectedRange] = useState<
    [Date, Date] | Date | null
  >(null);
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });

  const handleDayChange = (range: [Date, Date] | Date) => {
    if (Array.isArray(range)) {
      const diffInDays = Math.ceil(
        Math.abs(range[1].getTime() - range[0].getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (diffInDays > 10) {
        alert("Maximum selection is 10 days");
        return;
      }
    }
    setSelectedRange(range);
    onClose(range);
  };

  return (
    <Modal isOpen={visible} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent maxWidth="670px">
        <ModalBody>
          <Box className="calendar">
            <Calendar
              onChange={handleDayChange}
              selectRange
              value={selectedRange}
              showDoubleView={isDesktop}
              goToRangeStartOnSelect={!isDesktop}
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Text>Maximum 10 days per destination</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AppCalendar;
