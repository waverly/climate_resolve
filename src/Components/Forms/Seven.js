import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Six extends Component {
  render() {
    let _07_1_race = null;
    if (this.props.surveyData) {
      ({ _07_1_race } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          race: _07_1_race || []
        }}
        validationSchema={Yup.object().shape({
          race: Yup.array().required("At least one checkbox is required")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = { _07_1_race: values.race };
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
                id="race"
                label="I identify as (check all that apply):"
                value={values.race}
                error={errors.race}
                touched={touched.race}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="race"
                  id="Non-Hispanic White"
                  label="Non-Hispanic White"
                />
                <Field
                  component={Checkbox}
                  name="race"
                  id="Latinx"
                  label="Latinx"
                />
                <Field
                  component={Checkbox}
                  name="race"
                  id="African American"
                  label="African American"
                />
                <Field
                  component={Checkbox}
                  name="race"
                  id="Asian"
                  label="Asian"
                />
                <Field
                  component={Checkbox}
                  name="race"
                  id="Native American or Alaskan Native"
                  label="Native American or Alaskan Native"
                />
                <Field
                  component={Checkbox}
                  name="race"
                  id="Native Hawaiian or other Pacific Islander"
                  label="Native Hawaiian or other Pacific Islander"
                />
                <Field
                  component={Checkbox}
                  name="race"
                  id="other"
                  label="Other"
                />
                <Field
                  component={Checkbox}
                  name="race"
                  id="Decline to state"
                  label="Decline to state"
                />
              </CheckboxGroup>

              {errors.race && touched.race && (
                <InputFeedback>{errors.race}</InputFeedback>
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
