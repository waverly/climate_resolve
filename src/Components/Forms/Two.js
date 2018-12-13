import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Two extends Component {
  render() {
    let _02_1_account_holder = null;
    if (this.props.surveyData) {
      ({ _02_1_account_holder } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{ accountHolder: _02_1_account_holder || "" }}
        validationSchema={Yup.object().shape({
          accountHolder: Yup.string().required("Please select one option")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const radioData = { _02_1_account_holder: values.accountHolder };
            this.props.updateSurveyData(radioData);
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
              <RadioButtonGroup
                id="accountHolder"
                label="I am the account holder"
                value={values.accountHolder}
                error={errors.accountHolder}
                touched={touched.accountHolder}
              >
                <Field
                  component={RadioButton}
                  name="accountHolder"
                  id="Yes"
                  label="Yes"
                />
                <Field
                  component={RadioButton}
                  name="accountHolder"
                  id="No"
                  label="No"
                />
                <Field
                  component={RadioButton}
                  name="accountHolder"
                  id="Family member/friend is account holder"
                  label="Family member/friend is account holder"
                />
                <Field
                  component={RadioButton}
                  name="accountHolder"
                  id="Not sure"
                  label="Not sure"
                />
              </RadioButtonGroup>
              {errors.accountHolder && touched.accountHolder && (
                <InputFeedback>{errors.accountHolder}</InputFeedback>
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

export default Two;
