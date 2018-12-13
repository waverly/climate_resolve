import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import firebase from "../../firebase.js";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Five extends Component {
  pushToFirebase = e => {
    console.log("inside of push to firebase");
    // e.preventDefault();
    const itemsRef = firebase.database().ref("userdata");
    itemsRef.push(this.props.surveyData);

    //RESET STATE
    // no function to do that yet
  };

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
          <Fragment>
            <SectionTitle>The Basics</SectionTitle>
            <Form>
              <CheckboxGroup
                id="ownership"
                label="I or someone in my family (check all that apply):"
                value={values.ownership}
                error={errors.ownership}
                touched={touched.ownership}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="is low income"
                  label="is low income"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="is a senior citizen"
                  label="is a senior citizen"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="is using life support"
                  label="is using life support"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="has a disability"
                  label="has a disability"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="is treated for a life threatening illness"
                  label="is treated for a life threatening illness"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="has a compromised immune system"
                  label="has a compromised immune system"
                />
                <Field
                  component={Checkbox}
                  name="ownership"
                  id="none of the above"
                  label="none of the above"
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
