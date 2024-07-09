// src/components/AuthModal.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import request from "utils/request";
import { toast } from "react-toastify";
import { getStorageProvider } from "providers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/root-store";
import { setUserInfo } from "redux/apps/slice";

const SignIn = ({ onSignIn }: { onSignIn: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const storageProvider = getStorageProvider();

  const handleSignIn = async () => {
    try {
      const response = await request.post(
        "/auth/login/",
        {
          email,
          password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      await dispatch(setUserInfo(response?.data.userData));
      storageProvider.setItem("access_token", response?.data.token);
      storageProvider.setItem(
        "user_info",
        JSON.stringify(response?.data.userData)
      );
      onSignIn();
    } catch (error) {
      toast.error("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <Box>
      <Stack spacing={4}>
        <Heading fontSize={"2xl"}>Sign in to your account</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Button
          bg={"#ffdf80"}
          color={"black"}
          _hover={{
            bg: "#ffc180",
          }}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </Stack>
    </Box>
  );
};

const SignUp = ({ onSignUp }: { onSignUp: () => void }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await request.post(
      "/auth/register/",
      {
        email,
        password,
        username,
        picture: "",
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    onSignUp();
  };

  return (
    <Box>
      <Stack spacing={4}>
        <Heading fontSize={"2xl"}>Create a new account</Heading>
        <FormControl id="username">
          <FormLabel>User name</FormLabel>
          <Input
            type="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Button
          bg={"#ffdf80"}
          color={"black"}
          _hover={{
            bg: "#ffc180",
          }}
          onClick={handleSignUp}
        >
          Sign up
        </Button>
      </Stack>
    </Box>
  );
};

const AuthModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignUp = () => {
    toast("Create account successfully!");
    setIsSignUp(false);
  };

  const handleSignIn = () => {
    toast("Sign in successfully!");
    onClose();
  };

  return (
    <Modal isOpen={visible} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isSignUp ? "Sign Up" : "Sign In"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isSignUp ? (
            <SignUp onSignUp={handleSignUp} />
          ) : (
            <SignIn onSignIn={handleSignIn} />
          )}
          <Box textAlign="center" mt={4}>
            <Button
              color="black"
              fontWeight={400}
              textDecoration="underline"
              onClick={toggleForm}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button
            background="#ffdf80"
            color="black"
            borderRadius={30}
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
