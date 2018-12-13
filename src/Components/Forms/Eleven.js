import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Eleven extends Component {
  render() {
    let _11_1_unplug = null;
    if (this.props.surveyData) {
      ({ _11_1_unplug } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          unplug: _11_1_unplug || []
        }}
        validationSchema={Yup.object().shape({
          unplug: Yup.array().required("At least one checkbox is required")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = {
              _11_1_unplug: values.unplug
            };
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
            <SectionTitle>Energy Efficiency</SectionTitle>
            <Form>
              <CheckboxGroup
                id="unplug"
                label="When no one is using them, I unplug (check all that apply):"
                value={values.unplug}
                error={errors.unplug}
                touched={touched.unplug}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="unplug"
                  id="Kitchen appliances (coffee maker, toaster, microwave, etc.)"
                  label="Kitchen appliances (coffee maker, toaster, microwave, etc.)"
                />
                <Field
                  component={Checkbox}
                  name="unplug"
                  id="Phone charger"
                  label="Phone charger"
                />
                <Field
                  component={Checkbox}
                  name="unplug"
                  id="Portable heater or fan"
                  label="Portable heater or fan"
                />
                <Field
                  component={Checkbox}
                  name="unplug"
                  id="Entertainment appliances (television radio, computer, etc.)"
                  label="Entertainment appliances (television radio, computer, etc.)"
                />
              </CheckboxGroup>

              {errors.unplug && touched.unplug && (
                <InputFeedback>{errors.unplug}</InputFeedback>
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

export default Eleven;
