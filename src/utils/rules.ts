import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().required("Email is required.").email("Email is invalid."),
  phoneNumber: yup.string(),
  company: yup.string(),
  description: yup.string(),
});

export type Schema = yup.InferType<typeof schema>;
