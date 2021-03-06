import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Four extends Component {
  render() {
    let _04_1_socioEconomic = null;
    if (this.props.surveyData) {
      ({ _04_1_socioEconomic } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          socioEconomic: _04_1_socioEconomic || []
        }}
        validationSchema={Yup.object().shape({
          socioEconomic: Yup.array().required(
            "At least one checkbox is required"
          )
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = { _04_1_socioEconomic: values.socioEconomic };
            this.props.updateSurveyData(checkboxData);
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
              <CheckboxGroup
                id="socioEconomic"
                label="I or someone in my family (check all that apply):"
                value={values.socioEconomic}
                error={errors.socioEconomic}
                touched={touched.socioEconomic}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="socioEconomic"
                  id="is low income"
                  label="is low income"
                />
                <Field
                  component={Checkbox}
                  name="socioEconomic"
                  id="is a senior citizen"
                  label="is a senior citizen"
                />
                <Field
                  component={Checkbox}
                  name="socioEconomic"
                  id="is using life support"
                  label="is using life support"
                />
                <Field
                  component={Checkbox}
                  name="socioEconomic"
                  id="has a disability"
                  label="has a disability"
                />
                <Field
                  component={Checkbox}
                  name="socioEconomic"
                  id="is treated for a life threatening illness"
                  label="is treated for a life threatening illness"
                />
                <Field
                  component={Checkbox}
                  name="socioEconomic"
                  id="has a compromised immune system"
                  label="has a compromised immune system"
                />
                <Field
                  component={Checkbox}
                  name="socioEconomic"
                  id="none of the above"
                  label="none of the above"
                />
              </CheckboxGroup>

              {errors.socioEconomic && touched.socioEconomic && (
                <InputFeedback>{errors.socioEconomic}</InputFeedback>
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

export default Four;
