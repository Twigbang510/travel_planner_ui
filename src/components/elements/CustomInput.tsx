import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Textarea,
} from "@chakra-ui/react";
import {
  Path,
  UnPackAsyncDefaultValues,
  UseFormRegister,
} from "react-hook-form";

export interface CustomInputProps<T> extends InputProps {
  forms: {
    register: UseFormRegister<T>;
    name: Path<UnPackAsyncDefaultValues<T>>;
    label: string;
    errorMessage?: string;
  };
  containerProps?: BoxProps;
  isRequired?: boolean;
  elementType?: "textarea" | "normal";
}

export default function CustomInput<T>({
  forms: { register, name, errorMessage, label },
  containerProps,
  isRequired,
  elementType,
  ...rest
}: CustomInputProps<T>) {
  const Element = elementType === "textarea" ? (Textarea as any) : Input;
  return (
    <FormControl
      variant="floating"
      isInvalid={Boolean(errorMessage)}
      minH="6rem"
      {...containerProps}
      isRequired={isRequired}
    >
      <Element
        placeholder=""
        {...register(name)}
        border={0}
        borderRadius={0}
        focusBorderColor={"transparent"}
        height={"4rem"}
        pt={"0.5rem"}
        bgColor={"#efefef"}
        {...rest}
      />
      <FormLabel htmlFor="phoneNumber">{label}</FormLabel>
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
}
