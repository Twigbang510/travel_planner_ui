import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema, schema } from "utils/rules";
import { colors } from "theme";
import { TextEnteringEffect } from "components/shared/TextEnteringEffect";
import { AppTitle } from "components/elements/AppTitle";
import TextStroke from "components/elements/TextStroke";
import { Col } from "components/elements";
import ImageEnteringEffect from "components/shared/ImageEnteringEffect";
import { location } from "assets/images";
import CustomInput from "components/elements/CustomInput";

const contactSchema = schema;
type FormData = Schema;
const ContactPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: FormData) => {
    // handle submit
  };

  return (
    <Box pb={"4rem"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box
          width={{ base: "full", lg: "60%" }}
          padding={{ base: "4rem", md: "6rem", xl: "10rem" }}
          pb={{ base: 0, xl: "6rem" }}
          pl={{ base: "1rem", sm: "2rem", md: "6rem", xl: "12rem" }}
        >
          <Box width={{ base: "full", "2xl": "80%" }}>
            <TextEnteringEffect
              durationValue={0.6}
              containerProps={{ minHeight: "90px" }}
            >
              <AppTitle>Let's talk!</AppTitle>
            </TextEnteringEffect>
            <TextEnteringEffect
              durationValue={0.6}
              delayValue={0.15}
              easeValue={[0.7, 0.3, 0.3, 0.7]}
            >
              <Text
                fontSize="md"
                mt={{ base: 5, "2xl": 10 }}
                mb={{ base: 10, "2xl": 20 }}
              >
                Have an idea or want to share your thoughts? Together we can
                make a difference. You've come to the right place.
              </Text>
            </TextEnteringEffect>
          </Box>
        </Box>

        <TextEnteringEffect
          durationValue={0.6}
          delayValue={0.5}
          easeValue={[0.7, 0.3, 0.3, 0.7]}
          direction="horizontal"
          containerProps={{ display: { base: "none", lg: "block" } }}
        >
          <TextStroke title="Contact" />
        </TextEnteringEffect>
      </Flex>
      <Flex width={"full"} px={{ base: "1rem", sm: "2rem", lg: "6rem" }}>
        <Col width={{ base: "full", xl: "60%" }}>
          <TextEnteringEffect
            durationValue={0.6}
            delayValue={0.15}
            easeValue={[0.7, 0.3, 0.3, 0.7]}
          >
            <Text
              fontWeight={"bold"}
              fontSize="3xl"
              mt={{ base: 5, "2xl": 10 }}
              mb={{ base: 10, "2xl": 20 }}
            >
              Fill in our short form. Contact us.
            </Text>
          </TextEnteringEffect>
          <TextEnteringEffect
            durationValue={0.6}
            delayValue={0.15}
            easeValue={[0.7, 0.3, 0.3, 0.7]}
            containerProps={{ padding: "1px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Flex
                gap={{ base: 0, lg: "2rem" }}
                flexDirection={{ base: "column", lg: "row" }}
              >
                <CustomInput<Pick<FormData, "name">>
                  forms={{
                    register: register,
                    name: "name",
                    label: "Phone number",
                    errorMessage: errors.name?.message,
                  }}
                  isRequired={true}
                />
                <CustomInput<Pick<FormData, "email">>
                  forms={{
                    register: register,
                    name: "email",
                    label: "Email address",
                    errorMessage: errors.email?.message,
                  }}
                  isRequired={true}
                />
              </Flex>
              <Flex
                gap={{ base: 0, lg: "2rem" }}
                flexDirection={{ base: "column", lg: "row" }}
              >
                <CustomInput<Pick<FormData, "phoneNumber">>
                  forms={{
                    register: register,
                    name: "phoneNumber",
                    label: "Phone number",
                    errorMessage: errors.phoneNumber?.message,
                  }}
                />
                <CustomInput<Pick<FormData, "company">>
                  forms={{
                    register: register,
                    name: "company",
                    label: "Company",
                    errorMessage: errors.company?.message,
                  }}
                />
              </Flex>
              <CustomInput<Pick<FormData, "description">>
                forms={{
                  register: register,
                  name: "description",
                  label: "Description",
                  errorMessage: errors.description?.message,
                }}
                pt={"1.5rem"}
                resize={"vertical"}
                height={"16rem"}
                wordBreak={"break-word"}
                elementType="textarea"
              />
              <Button
                mt={8}
                bgColor={colors.primaryText}
                isLoading={isSubmitting}
                type="submit"
                width={"full"}
                borderRadius={0}
                py={8}
              >
                Send
              </Button>
            </form>
          </TextEnteringEffect>
        </Col>
      </Flex>
      <Flex
        width={"full"}
        px={{ base: "1rem", sm: "2rem", lg: "6rem" }}
        mt={"6rem"}
        flexDirection={{ base: "column", xl: "row" }}
        gap={{ base: "1rem", lg: "2rem", xl: "4rem", "2xl": "8rem" }}
      >
        <Box width={{ base: "full", xl: "60%" }} flexShrink={0}>
          <ImageEnteringEffect
            src={location}
            w={"full"}
            maxH={"380px"}
            objectFit={"cover"}
            containerProps={{ width: "full" }}
            initial={{ scaleX: 1, originX: 1 }}
            animate={{
              scaleX: 0,
              transition: {
                duration: 0.75,
                times: [0, 0.3, 1],
              },
            }}
          />
        </Box>
        <Col
          width={{ base: "full", xl: "40%" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={"1rem"}
          gap={"2rem"}
          flexDirection={{ base: "column", md: "row", xl: "column" }}
        >
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <Col key={index} width={"full"} gap={"1rem"}>
                <TextEnteringEffect
                  durationValue={0.6}
                  delayValue={0.15}
                  easeValue={[0.7, 0.3, 0.3, 0.7]}
                >
                  <Text fontWeight={"bold"} fontSize="2xl">
                    Da Nang, Viet Nam
                  </Text>
                </TextEnteringEffect>
                <TextEnteringEffect
                  durationValue={0.6}
                  delayValue={0.15}
                  easeValue={[0.7, 0.3, 0.3, 0.7]}
                >
                  <Col>
                    <Text fontSize="lg">abc</Text>
                    <Text fontSize="lg">123</Text>
                  </Col>
                </TextEnteringEffect>
              </Col>
            ))}
        </Col>
      </Flex>
    </Box>
  );
};

export default ContactPage;
