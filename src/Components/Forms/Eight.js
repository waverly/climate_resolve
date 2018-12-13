import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Eight extends Component {
  render() {
    let _08_1_knowledgable = null;
    if (this.props.surveyData) {
      ({ _08_1_knowledgable } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{ knowledgable: _08_1_knowledgable || "" }}
        validationSchema={Yup.object().shape({
          knowledgable: Yup.string().required("Please select one option")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const radioData = { _08_1_knowledgable: values.knowledgable };
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
                id="knowledgable"
                label="I am knowledgeable about what I can do to save energy"
                value={values.knowledgable}
                error={errors.knowledgable}
                touched={touched.knowledgable}
              >
                <Field
                  component={RadioButton}
                  name="knowledgable"
                  id="Yes"
                  label="Yes"
                />
                <Field
                  component={RadioButton}
                  name="knowledgable"
                  id="No"
                  label="No"
                />
                <Field
                  component={RadioButton}
                  name="knowledgable"
                  id="Not sure"
                  label="Not sure"
                />
              </RadioButtonGroup>
              {errors.knowledgable && touched.knowledgable && (
                <InputFeedback>{errors.knowledgable}</InputFeedback>
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
          </Fragment>
        )}
      />
    );
  }
}

export default Eight;
