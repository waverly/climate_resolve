import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { generateKey } from "Utils/helpers";
import { media } from "Styles/style-utils";

const PageWrap = styled.div`
  text-align: left;
  display: block;
  position: relative;
  opacity: ${props => (props.loaded ? "1" : "0")};
  transition: 1s opacity;
`;

const InnerWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

class Survey extends Component {
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
    if (1 > 0) {
      return (
        <PageWrap loaded={this.state.loaded}>
          <InnerWrapper>
            <Formik
              initialValues={{ email: "", firstname: "", lastname: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email()
                  .required("Required")
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
                  <form onSubmit={handleSubmit} onReset={handleReset}>
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
                      <div className="input-feedback">{errors.lastname}</div>
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
                  </form>
                );
              }}
            </Formik>
          </InnerWrapper>
        </PageWrap>
      );
    } else return null;
  }
}

export default Survey;
