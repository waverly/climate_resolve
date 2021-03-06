import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Three extends Component {
  render() {
    let _03_1_rent_own = null;
    if (this.props.surveyData) {
      ({ _03_1_rent_own } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{ rentOrOwn: _03_1_rent_own || "" }}
        validationSchema={Yup.object().shape({
          rentOrOwn: Yup.string().required("Please select one option")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const radioData = { _03_1_rent_own: values.rentOrOwn };
            this.props.updateSurveyData(radioData);
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
          <Fragment>
            <SectionTitle>The Basics</SectionTitle>
            <Form>
              <RadioButtonGroup
                id="rentOrOwn"
                label="My family or I"
                value={values.rentOrOwn}
                error={errors.rentOrOwn}
                touched={touched.rentOrOwn}
              >
                <Field
                  component={RadioButton}
                  name="rentOrOwn"
                  id="rent"
                  label="Rent our home"
                />
                <Field
                  component={RadioButton}
                  name="rentOrOwn"
                  id="own"
                  label="Own our home"
                />
                <Field
                  component={RadioButton}
                  name="rentOrOwn"
                  id="N/A"
                  label="N/A"
                />
              </RadioButtonGroup>
              {errors.rentOrOwn && touched.rentOrOwn && (
                <InputFeedback>{errors.rentOrOwn}</InputFeedback>
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
          </Fragment>
        )}
      />
    );
  }
}

export default Three;
