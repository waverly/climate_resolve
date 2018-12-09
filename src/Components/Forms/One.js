import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { InputFeedback, ButtonWrapper } from "./Utils";

class One extends Component {
  render() {
    // once submitted, store values in state to use as initial values
    let email,
      firstname,
      lastname = null;

    if (this.props.surveyData[1]) {
      ({ email, firstname, lastname } = this.props.surveyData[1]);
    }

    return (
      <Formik
        initialValues={{
          email: email || "",
          firstname: firstname || "",
          lastname: lastname || ""
        }} // on submit
        // i want to validate values (can use an alert for now)
        // not submit if all values aren't valid
        // if all values are valid, store data in state

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            this.props.updateSurveyData(1, values);
            console.log(this.props.surveyData);
            setSubmitting(false);
            this.props.advance();
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Email is required"),
          firstname: Yup.string().required("First name required"),
          lastname: Yup.string().required("Last name required")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;

          return (
            <Form>
              <label htmlFor="firstname" style={{ display: "block" }}>
                First Name
              </label>
              <input
                id="firstname"
                placeholder="Enter your first name"
                type="text"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstname && touched.firstname}
              />
              {errors.firstname && touched.firstname && (
                <InputFeedback>{errors.firstname}</InputFeedback>
              )}
              <label htmlFor="lastname" style={{ display: "block" }}>
                Last Name
              </label>
              <input
                id="lastname"
                placeholder="Enter your last name"
                type="text"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastname && touched.lastname}
              />
              {errors.lastname && touched.lastname && (
                <InputFeedback>{errors.lastname}</InputFeedback>
              )}
              <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
              />
              {errors.email && touched.email && (
                <InputFeedback>{errors.email}</InputFeedback>
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
          );
        }}
      </Formik>
    );
  }
}

export default One;
