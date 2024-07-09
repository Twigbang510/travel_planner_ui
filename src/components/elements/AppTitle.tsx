import { Text, TextProps } from "@chakra-ui/react";
import React, { memo } from "react";

interface Props extends TextProps {}

export const AppTitle = memo(function AppTitle({ ...rest }: Props) {
  return (
    <Text
      fontSize={{ base: "5xl", md: "6xl", "2xl": "8xl" }}
      fontWeight="800"
      lineHeight={{ base: "3rem", md: "4rem", "2xl": "5.625rem" }}
      {...rest}
    />
  );
});
