import { Box, BoxProps, Image, ImageProps } from "@chakra-ui/react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

export interface AppImageProps extends ImageProps {
  url: string;
  inline?: boolean;
  onClose?: (arg0: any) => any;
  containerClasses?: string;
  containerObj?: BoxProps;
}

const AppImage = ({ url, containerClasses, onClose, inline, objectFit = "contain", containerObj, ...rest }: AppImageProps) => {
  const [imageSrc, setImageSrc] = useState(url || "placeholder");

  useEffect(() => {
    setImageSrc(url || "placeholder");
  }, [url]);

  return (
    <Box className={classNames(containerClasses, { inline })} {...containerObj}>
      <Image src={imageSrc} objectFit={objectFit} onError={() => setImageSrc("placeholder")} className={classNames({ inline })} {...rest} />
    </Box>
  );
};

export default AppImage;
