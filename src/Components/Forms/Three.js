import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback } from "./Utils";

class Two extends Component {
  state = {
    loaded: false
  };

  async componentDidMount() {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  render() {
    return (
      <Formik
        initialValues={{ radioGroup: "" }}
        validationSchema={Yup.object().shape({
          radioGroup: Yup.string().required("A radio option is required")
        })}
        onSubmit={(values, actions) => {
          console.log(values, actions);
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 500);
        }}
        render={({
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched,
          isSubmitting
        }) => (
          <Form>
            <RadioButtonGroup
              id="radioGroup"
              label="My family or I"
              value={values.radioGroup}
              error={errors.radioGroup}
              touched={touched.radioGroup}
            >
              <Field
                component={RadioButton}
                name="radioGroup"
                id="Rent our home"
                label="Rent our home"
              />
              <Field
                component={RadioButton}
                name="radioGroup"
                id="Own our home"
                label="Own our home"
              />
            </RadioButtonGroup>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    );
  }
}

export default Two;
