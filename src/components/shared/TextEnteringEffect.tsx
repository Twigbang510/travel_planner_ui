import { Box, BoxProps, Text, TextProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Direction } from "types/models/app";

interface TextEnteringEffectProps extends TextProps {
  children: React.ReactNode;
  easeValue?: any;
  delayValue?: number;
  durationValue?: number;
  containerProps?: BoxProps;
  reverse?: 1 | -1;
  direction?: Direction;
}

export const TextEnteringEffect = ({
  children,
  easeValue = [1, 0, 0, 1],
  durationValue = 1.8,
  delayValue = 0,
  containerProps,
  reverse = 1,
  direction = "vertical",
  ...textProps
}: TextEnteringEffectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const renderContent = () => {
    if (typeof children === "string") {
      return <Text {...textProps}>{children}</Text>;
    }
    return children;
  };

  return (
    <Box
      ref={ref}
      overflow="hidden"
      minWidth={"fit-content"}
      {...containerProps}
    >
      {isInView && (
        <motion.div
          initial={{
            [direction === "vertical" ? "y" : "x"]: `${reverse * 100}px`,
            opacity: 0,
          }}
          animate={{
            [direction === "vertical" ? "y" : "x"]: "0",
            opacity: 1,
            transition: {
              duration: durationValue,
              ease: easeValue,
              delay: delayValue,
            },
          }}
        >
          {renderContent()}
        </motion.div>
      )}
    </Box>
  );
};
