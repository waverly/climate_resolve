import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Eighteen extends Component {
  render() {
    let _18_1_handling_diffulties = null;
    if (this.props.surveyData) {
      ({ _18_1_handling_diffulties } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          handling_diffulties: _18_1_handling_diffulties || []
        }}
        validationSchema={Yup.object().shape({
          handling_diffulties: Yup.array().required(
            "At least one checkbox is required"
          )
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = {
              _18_1_handling_diffulties: values.handling_diffulties
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
                id="handling_diffulties"
                label="If the process is difficult, I take the following action (check all that apply) "
                value={values.handling_diffulties}
                error={errors.handling_diffulties}
                touched={touched.handling_diffulties}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="handling_diffulties"
                  id="Call LADWP"
                  label="Call LADWP"
                />
                <Field
                  component={Checkbox}
                  name="handling_diffulties"
                  id="Email LADWP"
                  label="Email LADWP"
                />
                <Field
                  component={Checkbox}
                  name="handling_diffulties"
                  id="Visit an LADWP Customer Service Center"
                  label="Visit an LADWP Customer Service Center"
                />
                <Field
                  component={Checkbox}
                  name="handling_diffulties"
                  id="Ask a family/friend for help"
                  label="Ask a family/friend for help"
                />
                <Field
                  component={Checkbox}
                  name="handling_diffulties"
                  id="I ask a community organization for help"
                  label="I ask a community organization for help"
                />
                <Field
                  component={Checkbox}
                  name="handling_diffulties"
                  id="Do not apply for rebate/program"
                  label="Do not apply for rebate/program"
                />
                <Field
                  component={Checkbox}
                  name="handling_diffulties"
                  id="N/A"
                  label="N/A"
                />
              </CheckboxGroup>

              {errors.handling_diffulties && touched.handling_diffulties && (
                <InputFeedback>{errors.handling_diffulties}</InputFeedback>
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

export default Eighteen;
