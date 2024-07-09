import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Row } from "components/elements";
import { AppLink } from "components/elements/AppLink";
import { PAGES, QUERY_MOBILE } from "constants/app";
import { getStorageProvider } from "providers";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logout } from "redux/apps/slice";
import { AppDispatch } from "redux/root-store";
import { setShowAuthModal } from "redux/ui/slice";
import { SHARED_STYLES } from "theme/shared";
import { removeTokenRequestHeader } from "utils/request";

const Navigation = () => {
  const inputRef = useRef<any>(null);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  const storageProvider = getStorageProvider();
  const userAccessToken = storageProvider.getItem("access_token");

  useEffect(() => {
    document.addEventListener("keydown", handleSearchKey, true);
  }, []);

  const handleSearchKey = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault();
      e.stopPropagation();
      inputRef.current.focus();
    }
  };

  const handleLogout = async () => {
    try {
      storageProvider.removeItem("access_token");
      storageProvider.removeItem("user_info");
      await dispatch(logout());
      removeTokenRequestHeader();
      history.push(PAGES.HOME);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
  }, []);

  return (
    <Box
      pos="fixed"
      right={0}
      left={0}
      top={0}
      bg={!isAtTop ? "white" : "transparent"}
      zIndex={999}
      sx={{ transition: "all .3s ease-in" }}
      borderBottom={!isAtTop ? "2px" : "0"}
      borderStyle="solid"
      borderColor="rgb(227, 227, 227)"
    >
      <Flex
        py={4}
        gap={6}
        alignItems="center"
        justifyContent="space-between"
        maxW={SHARED_STYLES.screenMaxWidth}
        px={SHARED_STYLES.screenPadding}
        margin="auto"
      >
        <Row align="flex-end" flex={!isDesktop ? "1" : undefined}>
          <AppLink as={Link} to="/" _hover={{ textDecoration: "none" }}>
            <Text
              as="b"
              _hover={{ cursor: "pointer" }}
              fontWeight="bold"
              fontSize="xl"
              w="100%"
            >
              Trip Planner
            </Text>
          </AppLink>
        </Row>
        <Row
          alignItems="center"
          justifyContent="flex-end"
          color={isHomePage && isAtTop ? "white" : "black"}
        >
          {userAccessToken ? (
            <Text cursor="pointer" color="black" onClick={handleLogout}>
              Sign out
            </Text>
          ) : (
            <Button
              backgroundColor="black"
              fontWeight="semibold"
              fontSize="sm"
              px="20px"
              ml="1.5em"
              borderRadius={30}
              onClick={() => {
                dispatch(setShowAuthModal(true));
              }}
            >
              Sign in
            </Button>
          )}
        </Row>
      </Flex>
    </Box>
  );
};

export default Navigation;
