import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import firebase from "../../firebase.js";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper } from "./Utils";

class Four extends Component {
  pushToFirebase = e => {
    console.log("inside of push to firebase");
    // e.preventDefault();
    const itemsRef = firebase.database().ref("userdata");
    itemsRef.push(this.props.surveyData);

    //RESET STATE
    // no function to do that yet
  };

  render() {
    let basics = null;
    if (this.props.surveyData) {
      ({ basics } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          checkboxGroup: basics || []
        }}
        validationSchema={Yup.object().shape({
          checkboxGroup: Yup.array().required(
            "At least one checkbox is required"
          )
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = { basics: values.checkboxGroup };
            this.props.updateSurveyData(2, checkboxData);
            // does this need to be async ?
            this.pushToFirebase();
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
          <Form>
            <CheckboxGroup
              id="checkboxGroup"
              label="I or someone in my family (check all that apply):"
              value={values.checkboxGroup}
              error={errors.checkboxGroup}
              touched={touched.checkboxGroup}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            >
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="is low income"
                label="is low income"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="is a senior citizen"
                label="is a senior citizen"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="is using life support"
                label="is using life support"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="has a disability"
                label="has a disability"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="is treated for a life threatening illness"
                label="is treated for a life threatening illness"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="has a compromised immune system"
                label="has a compromised immune system"
              />
              <Field
                component={Checkbox}
                name="checkboxGroup"
                id="none of the above"
                label="none of the above"
              />
            </CheckboxGroup>

            {errors.checkboxGroup && touched.checkboxGroup && (
              <InputFeedback>{errors.checkboxGroup}</InputFeedback>
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
        )}
      />
    );
  }
}

export default Four;
