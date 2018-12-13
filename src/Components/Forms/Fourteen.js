import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Fourteen extends Component {
  render() {
    let _14_1_applied_to = null;
    if (this.props.surveyData) {
      ({ _14_1_applied_to } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          applied_to: _14_1_applied_to || []
        }}
        validationSchema={Yup.object().shape({
          applied_to: Yup.array().required("At least one checkbox is required")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = {
              _14_1_applied_to: values.applied_to
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
            <SectionTitle>Rebates and energy efficiency services</SectionTitle>
            <Form>
              <CheckboxGroup
                id="applied_to"
                label="I have applied to the following"
                value={values.applied_to}
                error={errors.applied_to}
                touched={touched.applied_to}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="Residential Free Showerhead and Faucet Aerator Program"
                  label="Residential Free Showerhead and Faucet Aerator Program"
                />
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="Custom Rebate Program"
                  label="Custom Rebate Program"
                />
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="Efficient Product Marketplace"
                  label="Efficient Product Marketplace"
                />
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="Refrigerator Recycling Program"
                  label="Refrigerator Recycling Program"
                />
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="Refrigerator Exchange Program"
                  label="Refrigerator Exchange Program"
                />
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="AC Optimization Program"
                  label="AC Optimization Program"
                />
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="Home Energy Improvement Program"
                  label="Home Energy Improvement Program"
                />
                <Field
                  component={Checkbox}
                  name="applied_to"
                  id="None of the above"
                  label="None of the above"
                />
              </CheckboxGroup>

              {errors.applied_to && touched.applied_to && (
                <InputFeedback>{errors.applied_to}</InputFeedback>
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

export default Fourteen;
