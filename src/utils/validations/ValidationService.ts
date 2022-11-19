import {
  firstNameValidation,
  fullnameValidation,
  lastNameValidation,
} from "./ValidationDictionary";

interface ExampleValidationProps {
  fullname: string;
  firstName: string;
  lastName: string;
}

interface ResultProps {
  type: string;
  message: string;
  isValid: boolean;
}

export const exampleValidation = (props: ExampleValidationProps) => {
  const { fullname, firstName, lastName } = props;

  const validation = fullnameValidation
    .validate({ fullname: fullname })
    .then(() => {
      firstNameValidation
        .validate({ firstName: firstName })
        .then(() => {
          lastNameValidation
            .validate({ lastName: lastName })
            .then(() => {
              const result: ResultProps = {
                type: "exampleValidation",
                message: "Valid",
                isValid: true,
              };
              return result;
            })
            .catch(lastnameErr => {
              const error: ResultProps = {
                type: "lastname",
                message: lastnameErr.errors[0],
                isValid: false,
              };
              return error;
            });
        })
        .catch(firstnameErr => {
          const error: ResultProps = {
            type: "firstname",
            message: firstnameErr.errors[0],
            isValid: false,
          };
          return error;
        });
    })
    .catch(fullnameErr => {
      const error: ResultProps = {
        type: "fullname",
        message: fullnameErr.errors[0],
        isValid: false,
      };
      return error;
    });

  return validation;
};
