import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Thirteen extends Component {
  render() {
    let _13_1_previously_applied = null;
    if (this.props.surveyData) {
      ({ _13_1_previously_applied } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{ previously_applied: _13_1_previously_applied || "" }}
        validationSchema={Yup.object().shape({
          previously_applied: Yup.string().required("Please select one option")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const radioData = {
              _13_1_previously_applied: values.previously_applied
            };
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
            <SectionTitle>Rebates and energy efficiency services</SectionTitle>
            <Form>
              <RadioButtonGroup
                id="previously_applied"
                label="I have previously applied to use the rebate or energy efficiency services offered by LADWP"
                value={values.previously_applied}
                error={errors.previously_applied}
                touched={touched.previously_applied}
              >
                <Field
                  component={RadioButton}
                  name="previously_applied"
                  id="Yes, I have applied for both"
                  label="Yes, I have applied for both"
                />
                <Field
                  component={RadioButton}
                  name="previously_applied"
                  id="I have applied for a rebate OR a service"
                  label="I have applied for a rebate OR a service"
                />
                <Field
                  component={RadioButton}
                  name="previously_applied"
                  id="No, I have never applied for a rebate or service"
                  label="No, I have never applied for a rebate or service"
                />
              </RadioButtonGroup>
              {errors.previously_applied && touched.previously_applied && (
                <InputFeedback>{errors.previously_applied}</InputFeedback>
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

export default Thirteen;
