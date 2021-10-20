import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.css";
import { createNewPlayer, getPlayerDetails } from "../../services";

const inputFieldValues = [
  {
    name: "name",
    label: "Name",
    id: "name",
  },
  {
    name: "email",
    label: "Email",
    id: "email",
  },
];

const initialFormValues = {
  name: "",
  email: "",
  formSubmitted: false,
  success: false,
};

const Login = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.name &&
      fieldValues.email &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      // do stuff

      const body = {
        email: values.email,
        name: values.name,
        data: {
          currentPosition: 0,
          path: [
            { coord: [3, 0], state: "" },
            { coord: [3, 1], state: "" },
            { coord: [3, 2], state: "" },
            { coord: [3, 3], state: "" },
            { coord: [2, 3], state: "" },
            { coord: [1, 3], state: "" },
            { coord: [0, 3], state: "" },
          ],
        },
      };

      createNewPlayer(body).then((response) => {
        if (response && response.success) {
          history.push(`/grid/?email=${values.email}`);
        }
      });

      // console.log(values);
    }
  };

  return (
    <div className="loginPage">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleFormSubmit} className="form">
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <TextField
                key={index}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                style={{ margin: 10 }}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                error={errors[inputFieldValue.name]}
                multiline={inputFieldValue.multiline ?? false}
                // fullWidth
                rows={inputFieldValue.rows ?? 1}
                autoComplete="none"
                formControlProps={{
                  fullWidth: true,
                }}
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
              />
            );
          })}
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            disabled={!formIsValid()}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
