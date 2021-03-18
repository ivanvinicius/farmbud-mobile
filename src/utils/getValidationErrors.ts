import {ValidationError} from 'yup';

interface IValidationError {
  [key: string]: string;
}

export function getValidationErrors(err: ValidationError): IValidationError {
  const validationErrors: IValidationError = {};

  err.inner.forEach((error) => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
