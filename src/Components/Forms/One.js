import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const InputFeedback = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
  color: red;
`;

class One extends Component {
  state = {
    loaded: false
  };

  async componentDidMount() {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  render() {
    return (
      <Formik
        initialValues={{ email: "", firstname: "", lastname: "" }}
        // on submit
        // i want to validate values (can use an alert for now)
        // not submit if all values aren't valid
        // if all values are valid, store data in state

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
            this.props.updateSurveyData(1, values);
            console.log(this.props.surveyData);
            setSubmitting(false);
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
                <div className="input-feedback">{errors.firstname}</div>
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
                <div className="input-feedback">{errors.email}</div>
              )}

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default One;
