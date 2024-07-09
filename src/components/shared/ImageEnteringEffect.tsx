import { Box, BoxProps, ImageProps } from "@chakra-ui/react";
import AppImage from "components/elements/AppImage";
import { AnimationProps, useInView, motion } from "framer-motion";
import { useRef } from "react";
import { colors } from "theme";

export interface ImageEnteringEffectProps extends ImageProps {
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  containerProps?: BoxProps;
  containerImgProps?: BoxProps;
}

export default function ImageEnteringEffect({ initial, animate, containerProps, containerImgProps, src, ...rest }: ImageEnteringEffectProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(boxRef, { once: true });
  return (
    <Box ref={boxRef} width={"full"}>
      {isInView && (
        <Box position={"relative"}>
          <Box as={motion.div} position={"absolute"} initial={initial} animate={animate} inset={0} bgColor={colors.alabaster}></Box>
          <Box overflow={"hidden"} {...containerProps}>
            <AppImage url={src} {...rest} containerObj={containerImgProps} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
