import * as yup from "yup";
import { AppErrors } from "../../common/errors";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(AppErrors.invalidEmail)
    .required(AppErrors.requiredField),
  password: yup
    .string()
    .min(6, AppErrors.minLength)
    .required(AppErrors.requiredField)
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,16}/g,
      AppErrors.invalidPassword
    ),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email(AppErrors.invalidEmail)
    .required(AppErrors.requiredField),
  password: yup
    .string()
    .min(6, AppErrors.minLength)
    .required(AppErrors.requiredField)
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,16}/g,
      AppErrors.invalidPassword
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], AppErrors.matchPassword)
    .required(AppErrors.requiredField),
  name: yup.string().required(AppErrors.requiredField),
  username: yup.string().required(AppErrors.requiredField),
});
