import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper } from "./Utils";

class Two extends Component {
  render() {
    return (
      <Formik
        initialValues={{ radioGroup: "" }}
        validationSchema={Yup.object().shape({
          radioGroup: Yup.string().required("Please select one option")
        })}
        onSubmit={(values, actions) => {
          console.log(values, actions);
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            this.props.updateSurveyData(3, values);
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
            {errors.radioGroup && touched.radioGroup && (
              <InputFeedback>{errors.radioGroup}</InputFeedback>
            )}
            <ButtonWrapper>
              <button
                type="button"
                onClick={this.props.goBack}
                disabled={isSubmitting}
              >
                Go Back
              </button>
              <button type="submit" disabled={isSubmitting}>
                Continue
              </button>
            </ButtonWrapper>
          </Form>
        )}
      />
    );
  }
}

export default Two;
