import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper } from "./Utils";

class Three extends Component {
  render() {
    let rent_own = null;
    if (this.props.surveyData) {
      ({ rent_own } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{ radioGroup: rent_own || "" }}
        validationSchema={Yup.object().shape({
          radioGroup: Yup.string().required("Please select one option")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const radioData = { rent_own: values.radioGroup };
            this.props.updateSurveyData(3, radioData);
            this.props.advance();
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
                id="rent"
                label="Rent our home"
              />
              <Field
                component={RadioButton}
                name="radioGroup"
                id="own"
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
                Submit Form
              </button>
            </ButtonWrapper>
          </Form>
        )}
      />
    );
  }
}

export default Three;
