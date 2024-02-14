import { useState, useEffect, useCallback } from "react";

export const useFormValidation = (stateSchema, validationSchema, callback) => {
  const [state, setState] = useState(stateSchema);
  const [disable, setDisable] = useState(true);

  const validateState = useCallback(() => {
    const hasError = Object.keys(validationSchema).some((key) => {
      const isInputRequired = validationSchema[key].required;
      if (state[key].type === 'checkbox') {
        return isInputRequired && (state[key].selected === undefined || state[key].error);
      }

      const stateValue = state[key].value
      const stateError = state[key].error
      return isInputRequired && (!stateValue || stateError);
    });
    return hasError;
  }, [state, validationSchema]);

  useEffect(() => {
    setDisable(validateState());
  }, [validateState]);

  const handleChange = ({ target }) => {
    const { selected, type, value, key } = target;

    const field = validationSchema[key];

    let error = "";

    if (type === "checkbox") {
      if (selected === undefined) {
        error = field.validator.error;
      }

      setState((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected,
          type,
          error,
        },
      }));
      return;
    }

    if (type === "question") {
      if (field.required) {
        if (!value) {
          error = "Поле обязательно для заполнения";
        } else {
          if (field.validator.regEx) {
            if (!field.validator.regEx.test(value.toString())) {
              error = field.validator.error;
            }
          } else if (field.validator.length) {
            if (field.validator.length > value.length) {
              error = field.validator.error;
            }
          }
        }
      }

      setState((prevState) => ({
        ...prevState,
        [key]: { ...prevState[key], type, value, error },
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateState()) {
      callback();
      // reset
      setState(stateSchema);
    }
  };

  return { state, disable, handleChange, handleSubmit };
};
