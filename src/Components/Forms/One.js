import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";

import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class One extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    // once submitted, store values in state to use as initial values

    let _01_3_email,
      _01_1_firstname,
      _01_2_lastname,
      _01_3_address,
      _01_4_current_customer = null;

    if (this.props.surveyData) {
      console.log("we got datas");
      ({
        _01_3_email,
        _01_1_firstname,
        _01_2_lastname,
        _01_3_address,
        _01_4_current_customer
      } = this.props.surveyData);
    }

    console.log(this.props.surveyData);

    return (
      <Formik
        initialValues={{
          _01_3_email: _01_3_email || "",
          _01_1_firstname: _01_1_firstname || "",
          _01_2_lastname: _01_2_lastname || "",
          _01_3_address: _01_3_address || "",
          _01_4_current_customer: _01_4_current_customer || ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          // on submit
          setTimeout(() => {
            this.props.updateSurveyData(values);
            setSubmitting(false);
            this.props.advance();
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          _01_3_email: Yup.string()
            .email()
            .required("Email is required"),
          _01_1_firstname: Yup.string().required("First name required"),
          _01_2_lastname: Yup.string().required("Last name required"),
          _01_3_address: Yup.string().required("_01_3_Address required"),
          _01_4_current_customer: Yup.string().required(
            "Please select one option"
          )
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
            <Fragment>
              <SectionTitle>The Basics</SectionTitle>
              <Form>
                <label htmlFor="_01_1_firstname" style={{ display: "block" }}>
                  First Name
                </label>
                <input
                  id="_01_1_firstname"
                  placeholder="Enter your first name"
                  type="text"
                  value={values._01_1_firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_1_firstname && touched._01_1_firstname}
                />
                {errors._01_1_firstname && touched._01_1_firstname && (
                  <InputFeedback>{errors._01_1_firstname}</InputFeedback>
                )}
                <label htmlFor="_01_2_lastname" style={{ display: "block" }}>
                  Last Name
                </label>
                <input
                  id="_01_2_lastname"
                  placeholder="Enter your last name"
                  type="text"
                  value={values._01_2_lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_2_lastname && touched._01_2_lastname}
                />
                {errors._01_2_lastname && touched._01_2_lastname && (
                  <InputFeedback>{errors._01_2_lastname}</InputFeedback>
                )}
                <label htmlFor="_01_3_email" style={{ display: "block" }}>
                  Email
                </label>
                <input
                  id="_01_3_email"
                  placeholder="Enter your email"
                  type="text"
                  value={values._01_3_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_3_email && touched._01_3_email}
                />
                {errors._01_3_email && touched._01_3_email && (
                  <InputFeedback>{errors._01_3_email}</InputFeedback>
                )}
                <label htmlFor="_01_3_address" style={{ display: "block" }}>
                  Address
                </label>
                <input
                  id="_01_3_address"
                  placeholder="Enter your addresss"
                  type="text"
                  value={values._01_3_address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_3_address && touched._01_3_address}
                />
                {errors._01_3_address && touched._01_3_address && (
                  <InputFeedback>{errors._01_3_address}</InputFeedback>
                )}

                <RadioButtonGroup
                  id="_01_4_current_customer"
                  label="Are you a current DWP customer"
                  value={values._01_4_current_customer}
                  error={errors._01_4_current_customer}
                  touched={touched._01_4_current_customer}
                >
                  <Field
                    component={RadioButton}
                    name="_01_4_current_customer"
                    id="yes"
                    label="Yes"
                  />
                  <Field
                    component={RadioButton}
                    name="_01_4_current_customer"
                    id="no"
                    label="No"
                  />
                </RadioButtonGroup>
                {errors._01_4_current_customer &&
                  touched._01_4_current_customer && (
                    <InputFeedback>
                      {errors._01_4_current_customer}
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
          );
        }}
      </Formik>
    );
  }
}

export default One;
