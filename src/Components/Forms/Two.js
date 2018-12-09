import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper } from "./Utils";

class Two extends Component {
  render() {
    let checkboxData = null;

    if (this.props.surveyData[2]) {
      checkboxData = this.props.surveyData[2].checkboxGroup;
    }

    return (
      <Formik
        initialValues={{
          checkboxGroup: checkboxData || []
        }}
        validationSchema={Yup.object().shape({
          checkboxGroup: Yup.array().required(
            "At least one checkbox is required"
          )
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            this.props.updateSurveyData(2, values);
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
            <CheckboxGroup
              id="checkboxGroup"
              label="The language I speak at home is:"
              value={values.checkboxGroup}
              error={errors.checkboxGroup}
              touched={touched.checkboxGroup}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            >
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="english"
                label="English"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="spanish"
                label="Spanish"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="korean"
                label="Korean"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="vietnamese"
                label="Vietnamese"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="chinese"
                label="Chinese"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="other"
                label="Other"
              />
            </CheckboxGroup>

            {errors.checkboxGroup && touched.checkboxGroup && (
              <InputFeedback>{errors.checkboxGroup}</InputFeedback>
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
