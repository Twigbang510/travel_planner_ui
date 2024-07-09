import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
  const hour = String(Math.floor(i / 4)).padStart(2, "0");
  const minutes = String((i % 4) * 15).padStart(2, "0");
  return `${hour}:${minutes}:00`;
});

const TimePicker = ({
  fromTimeVal,
  nextTimeVal,
  onChangeFromTime,
  onChangeNextTime,
}: any) => {
  const [fromTime, setFromTime] = useState(fromTimeVal);
  const [nextTime, setNextTime] = useState(nextTimeVal);

  const handleFromTimeSelect = (time: any) => {
    setFromTime(time);
    onChangeFromTime(time);

    // Ensure nextTime is always later than fromTime
    if (time >= nextTime) {
      const nextIndex = timeOptions.indexOf(time) + 1;
      setNextTime(timeOptions[nextIndex]);
      onChangeFromTime(timeOptions[nextIndex]);
    }
  };

  const handleNextTimeSelect = (time: any) => {
    setNextTime(time);
    onChangeNextTime(time);
  };

  return (
    <ChakraProvider>
      <Box border="1px solid black" borderRadius={10} width="fit-content">
        <HStack>
          <FormControl id="from-time" width="unset">
            <Menu>
              <MenuButton fontSize={14} as={Button} background="transparent">
                {fromTime}
              </MenuButton>
              <MenuList maxHeight="200px" overflowY="auto">
                {timeOptions.map((time) => (
                  <MenuItem
                    key={time}
                    onClick={() => handleFromTimeSelect(time)}
                  >
                    {time}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </FormControl>
          <FaLongArrowAltRight size={12} />
          <FormControl id="next-time" width="unset">
            <Menu>
              <MenuButton fontSize={14} background="transparent" as={Button}>
                {nextTime}
              </MenuButton>
              <MenuList maxHeight="200px" overflowY="auto">
                {timeOptions
                  .filter((time) => time > fromTime)
                  .map((time) => (
                    <MenuItem
                      key={time}
                      onClick={() => handleNextTimeSelect(time)}
                    >
                      {time}
                    </MenuItem>
                  ))}
              </MenuList>
            </Menu>
          </FormControl>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default TimePicker;
