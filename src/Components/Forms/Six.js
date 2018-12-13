import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Six extends Component {
  render() {
    let _06_1_language = null;
    if (this.props.surveyData) {
      ({ _06_1_language } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          language: _06_1_language || []
        }}
        validationSchema={Yup.object().shape({
          language: Yup.array().required("At least one checkbox is required")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = { _06_1_language: values.language };
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
                id="language"
                label="The language I speak at home is:"
                value={values.language}
                error={errors.language}
                touched={touched.language}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="language"
                  id="english"
                  label="English"
                />
                <Field
                  component={Checkbox}
                  name="language"
                  id="spanish"
                  label="Spanish"
                />
                <Field
                  component={Checkbox}
                  name="language"
                  id="korean"
                  label="Korean"
                />
                <Field
                  component={Checkbox}
                  name="language"
                  id="vietnamese"
                  label="Vietnamese"
                />
                <Field
                  component={Checkbox}
                  name="language"
                  id="chinese"
                  label="Chinese"
                />
                <Field
                  component={Checkbox}
                  name="language"
                  id="other"
                  label="Other"
                />
              </CheckboxGroup>

              {errors.language && touched.language && (
                <InputFeedback>{errors.language}</InputFeedback>
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

export default Six;
