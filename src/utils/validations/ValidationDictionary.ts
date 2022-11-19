import * as Yup from "yup";

export const fullnameValidation = Yup.object().shape({
  fullname: Yup.string()
    .required("Fullname required")
    .min(4, "Fullname should contain at least 4 characters"),
});

export const firstNameValidation = Yup.object().shape({
  firstName: Yup.string()
    .required("First name required")
    .min(2, "First name should contain at least 2 characters"),
});

export const lastNameValidation = Yup.object().shape({
  lastName: Yup.string()
    .required("Last name required")
    .min(3, "Last name should contain at least 3 characters"),
});
