import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Five extends Component {
  render() {
    let _05_1_ownership = null;
    if (this.props.surveyData) {
      ({ _05_1_ownership } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          ownership: _05_1_ownership || []
        }}
        validationSchema={Yup.object().shape({
          ownership: Yup.array().required("At least one checkbox is required")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = { _05_1_ownership: values.ownership };
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
                id="ownership"
                label="Check all that apply"
                value={values.ownership}
                error={errors.ownership}
                touched={touched.ownership}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="I am also a property landlord"
                  label="I am also a property landlord"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="I own/run a small business"
                  label="I own/run a small business"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="I own/run a large business"
                  label="I own/run a large business"
                />
              </CheckboxGroup>

              {errors.ownership && touched.ownership && (
                <InputFeedback>{errors.ownership}</InputFeedback>
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

export default Five;
