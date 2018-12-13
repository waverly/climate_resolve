import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Seventeen extends Component {
  render() {
    let _17_1_encountered_difficulties = null;
    if (this.props.surveyData) {
      ({ _17_1_encountered_difficulties } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          encountered_difficulties: _17_1_encountered_difficulties || []
        }}
        validationSchema={Yup.object().shape({
          encountered_difficulties: Yup.array().required(
            "At least one checkbox is required"
          )
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = {
              _17_1_encountered_difficulties: values.encountered_difficulties
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
                id="encountered_difficulties"
                label="I've encountered these difficulties while applying (check all that apply)"
                value={values.encountered_difficulties}
                error={errors.encountered_difficulties}
                touched={touched.encountered_difficulties}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="encountered_difficulties"
                  id="Confusing application process"
                  label="Confusing application process"
                />
                <Field
                  component={Checkbox}
                  name="encountered_difficulties"
                  id="I have no time to complete the application"
                  label="I have no time to complete the application"
                />
                <Field
                  component={Checkbox}
                  name="encountered_difficulties"
                  id="I do not understand if I qualify"
                  label="I do not understand if I qualify"
                />
                <Field
                  component={Checkbox}
                  name="encountered_difficulties"
                  id="I have no access to internet"
                  label="I have no access to internet"
                />
                <Field
                  component={Checkbox}
                  name="encountered_difficulties"
                  id="I have trouble traveling to the nearest customer service center"
                  label="I have trouble traveling to the nearest customer service center"
                />
                <Field
                  component={Checkbox}
                  name="encountered_difficulties"
                  id="Other"
                  label="Other"
                />
                <Field
                  component={Checkbox}
                  name="encountered_difficulties"
                  id="None of the above"
                  label="None of the above"
                />
              </CheckboxGroup>

              {errors.encountered_difficulties &&
                touched.encountered_difficulties && (
                  <InputFeedback>
                    {errors.encountered_difficulties}
                  </InputFeedback>
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

export default Seventeen;
