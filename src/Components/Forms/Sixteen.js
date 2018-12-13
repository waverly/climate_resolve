import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Sixteen extends Component {
  render() {
    let _16_1_difficulty = null;
    if (this.props.surveyData) {
      ({ _16_1_difficulty } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{ difficulty: _16_1_difficulty || "" }}
        validationSchema={Yup.object().shape({
          difficulty: Yup.string().required("Please select one option")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const radioData = {
              _16_1_difficulty: values.difficulty
            };
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
            <SectionTitle>Rebates and energy efficiency services</SectionTitle>
            <Form>
              <RadioButtonGroup
                id="difficulty"
                label="I found the process of applying for a rebate/program"
                value={values.difficulty}
                error={errors.difficulty}
                touched={touched.difficulty}
              >
                <Field
                  component={RadioButton}
                  name="difficulty"
                  id="Easy"
                  label="Easy"
                />
                <Field
                  component={RadioButton}
                  name="difficulty"
                  id="Somewhat easy"
                  label="Somewhat easy"
                />
                <Field
                  component={RadioButton}
                  name="difficulty"
                  id="Average"
                  label="Average"
                />
                <Field
                  component={RadioButton}
                  name="difficulty"
                  id="Somewhat difficult"
                  label="Somewhat difficult"
                />
                <Field
                  component={RadioButton}
                  name="difficulty"
                  id="Difficult"
                  label="Difficult"
                />
              </RadioButtonGroup>

              {errors.difficulty && touched.difficulty && (
                <InputFeedback>{errors.difficulty}</InputFeedback>
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

export default Sixteen;
