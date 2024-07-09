import { Box } from "@chakra-ui/react";
import AuthModal from "components/AuthModal";
import { Col } from "components/elements";
import Footer from "components/layouts/Footer";
import Navigation from "components/layouts/Navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { setShowAuthModal } from "redux/ui/slice";
import { SHARED_STYLES } from "theme/shared";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStorageProvider } from "providers";
import { setTokenRequestHeader } from "utils/request";
import { setUserInfo } from "redux/apps/slice";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const currentUser =
    useSelector((state: RootState) => state.apps.userInfo) || false;
  const isShowAuthModal = useSelector(
    (state: RootState) => state.ui.isShowAuthModal
  );
  const dispatch: AppDispatch = useDispatch();
  const storageProvider = getStorageProvider();
  const userAccessToken = storageProvider.getItem("access_token");
  const userData = storageProvider.getItem("user_info");

  useEffect(() => {
    setTokenRequestHeader(userAccessToken);
    dispatch(setUserInfo(JSON.parse(userData)));
  }, [userAccessToken, dispatch, userData]);

  return (
    <Box
      pos="relative"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
      backgroundColor="white"
    >
      <ToastContainer />
      <Col
        margin="auto"
        maxW={SHARED_STYLES.screenMaxWidth}
        paddingX={SHARED_STYLES.screenPadding}
      >
        {!currentUser && (
          <AuthModal
            visible={isShowAuthModal}
            onClose={() => {
              dispatch(setShowAuthModal(false));
            }}
          />
        )}
        <Navigation />
        <Box marginTop="80px">{children}</Box>
        <Footer />
      </Col>
    </Box>
  );
};

export default Layout;
