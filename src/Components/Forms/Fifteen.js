import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Fifteen extends Component {
  render() {
    let _15_1_utilize_resources = null;
    if (this.props.surveyData) {
      ({ _15_1_utilize_resources } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          utilize_resources: _15_1_utilize_resources || []
        }}
        validationSchema={Yup.object().shape({
          utilize_resources: Yup.array().required(
            "At least one checkbox is required"
          )
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = {
              _15_1_utilize_resources: values.utilize_resources
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
                id="utilize_resources"
                label="When applying to the rebates or energy efficiency programs, I utilize the following resource (check all that apply):"
                value={values.utilize_resources}
                error={errors.utilize_resources}
                touched={touched.utilize_resources}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="utilize_resources"
                  id="The LADWP website"
                  label="The LADWP website"
                />
                <Field
                  component={Checkbox}
                  name="utilize_resources"
                  id="An LADWP Customer Service Center"
                  label="An LADWP Customer Service Center"
                />
                <Field
                  component={Checkbox}
                  name="utilize_resources"
                  id="A paper application (mail)"
                  label="A paper application (mail)"
                />
                <Field
                  component={Checkbox}
                  name="utilize_resources"
                  id="I have not applied"
                  label="I have not applied"
                />
              </CheckboxGroup>

              {errors.utilize_resources && touched.utilize_resources && (
                <InputFeedback>{errors.utilize_resources}</InputFeedback>
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

export default Fifteen;
