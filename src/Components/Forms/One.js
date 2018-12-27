import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import MySelect from "Components/Select";

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

    let _01_0_email,
      _01_1_firstname,
      _01_2_lastname,
      _01_3_01_address,
      _01_3_02_address2,
      _01_3_03_city,
      _01_3_04_state,
      _01_3_05_zip,
      _01_4_current_customer = " ";

    if (this.props.surveyData) {
      ({
        _01_0_email,
        _01_1_firstname,
        _01_2_lastname,
        _01_3_01_address,
        _01_3_02_address2,
        _01_3_03_city,
        _01_3_04_state,
        _01_3_05_zip,
        _01_4_current_customer
      } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          _01_0_email: _01_0_email || "",
          _01_1_firstname: _01_1_firstname || "",
          _01_2_lastname: _01_2_lastname || "",
          _01_3_01_address: _01_3_01_address || "",
          _01_3_02_address2: _01_3_02_address2 || "",
          _01_3_03_city: _01_3_03_city || "",
          _01_3_04_state: _01_3_04_state || "",
          _01_3_05_zip: _01_3_05_zip || "",
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
        validationSchema={
          Yup.object().shape({
            _01_0_email: Yup.string()
              .email("Must be a valid email")
              .typeError("Must be a valid email")
              .required("Email is required"),
            _01_1_firstname: Yup.string().required("First name required"),
            _01_2_lastname: Yup.string().required("Last name required"),
            _01_3_01_address: Yup.string().required("Address required"),
            _01_3_03_city: Yup.string().required("City required"),
            _01_3_04_state: Yup.string()
              .typeError("you need to enter a state")
              .required("State required"),
            _01_3_05_zip: Yup.number()
              .test(
                "len",
                "Zip code must be exactly 5 characters",
                val => val.toString().length === 5
              )
              .typeError("Zip code must be a number")
              .positive()
              .integer()
              .required("Zip code required"),
            _01_4_current_customer: Yup.string().required(
              "Please select one option"
            )
          }) // the second address line doesn't need to be required or validated // _01_3_02_address2,
        }
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
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
                <label htmlFor="_01_0_email" style={{ display: "block" }}>
                  Email
                </label>
                <input
                  id="_01_0_email"
                  placeholder="Enter your email"
                  type="text"
                  value={values._01_0_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_0_email && touched._01_0_email}
                />
                {errors._01_0_email && touched._01_0_email && (
                  <InputFeedback>{errors._01_0_email}</InputFeedback>
                )}
                {/* start address */}
                <label htmlFor="_01_3_01_address" style={{ display: "block" }}>
                  Address
                </label>
                <input
                  id="_01_3_01_address"
                  placeholder="Enter your address"
                  type="text"
                  value={values._01_3_01_address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_3_01_address && touched._01_3_01_address}
                />
                {errors._01_3_01_address && touched._01_3_01_address && (
                  <InputFeedback>{errors._01_3_01_address}</InputFeedback>
                )}
                <input
                  id="_01_3_02_address2"
                  placeholder="Enter your addresss"
                  type="text"
                  value={values._01_3_02_address2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_3_02_address2 && touched._01_3_02_address2}
                />
                {errors._01_3_02_address2 && touched._01_3_02_address2 && (
                  <InputFeedback>{errors._01_3_02_address2}</InputFeedback>
                )}
                <input
                  id="_01_3_03_city"
                  placeholder="Enter your city"
                  type="text"
                  value={values._01_3_03_city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_3_03_city && touched._01_3_03_city}
                />
                {errors._01_3_03_city && touched._01_3_03_city && (
                  <InputFeedback>{errors._01_3_03_city}</InputFeedback>
                )}
                <Field
                  id="_01_3_04_state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_3_04_state && touched._01_3_04_state}
                  touched={touched._01_3_04_state}
                  name="_01_3_04_state"
                  component="select"
                  placeholder="Select a state"
                >
                  <option value="">Select a state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Field>
                {errors._01_3_04_state && touched._01_3_04_state && (
                  <InputFeedback>{errors._01_3_04_state}</InputFeedback>
                )}

                <input
                  id="_01_3_05_zip"
                  placeholder="Enter your zip code"
                  type="text"
                  value={values._01_3_05_zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors._01_3_05_zip && touched._01_3_05_zip}
                />
                {errors._01_3_05_zip && touched._01_3_05_zip && (
                  <InputFeedback>{errors._01_3_05_zip}</InputFeedback>
                )}
                {/* end address */}
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
