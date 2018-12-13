import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Twelve extends Component {
  render() {
    let _12_1_rent_own = null;
    if (this.props.surveyData) {
      ({ _12_1_rent_own } = this.props.surveyData);
    }

    const validationSchema = () => {
      return Yup.object().shape({
        quiz1: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct",
            "The correct value is > 25 gallons. Please revise your answer.",
            value => value === "> 25 gallons"
          ),
        quiz2: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct-2",
            "The correct value is 2.5 gallons per minute. Please revise your answer.",
            value => value === "2.5 gallons per minute"
          ),
        quiz3: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct-3",
            "The correct value is 1.5 gallons per minute. Please revise your answer.",
            value => value === "1.5 gallons per minute"
          ),
        quiz4: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct-4",
            "The correct value is all of the above. Please revise your answer.",
            value => value === "all of the above"
          )
      });
    };

    return (
      <Formik
        initialValues={{ quiz1: _12_1_rent_own || "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            // const checkboxData = {
            //   _09_1_turn_off_water: values.turn_off_water
            // };
            // this.props.updateSurveyData(checkboxData);
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
            <SectionTitle>Energy Efficiency</SectionTitle>
            <Form>
              <RadioButtonGroup
                id="quiz1"
                label="How much water does a 10-minute shower use"
                value={values.quiz1}
                error={errors.quiz1}
                touched={touched.quiz1}
              >
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="< 10 gallons"
                  label="< 10 gallons"
                />
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="50 gallons"
                  label="50 gallons"
                />
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="100 gallons"
                  label="100 gallons"
                />
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="> 25 gallons"
                  label="> 25 gallons"
                />
              </RadioButtonGroup>
              {errors.quiz1 && touched.quiz1 && (
                <InputFeedback>{errors.quiz1}</InputFeedback>
              )}
              <br />
              <br />

              <RadioButtonGroup
                id="quiz2"
                label="A low flow showerhead flows at"
                value={values.quiz2}
                error={errors.quiz2}
                touched={touched.quiz2}
              >
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="10 gallons per minute"
                  label="10 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="5 gallons per minute"
                  label="5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="1.5 gallons per minute"
                  label="1.5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="2.5 gallons per minute"
                  label="2.5 gallons per minute"
                />
              </RadioButtonGroup>
              {errors.quiz2 && touched.quiz2 && (
                <InputFeedback>{errors.quiz2}</InputFeedback>
              )}

              <RadioButtonGroup
                id="quiz3"
                label="A low flow faucet flows at"
                value={values.quiz3}
                error={errors.quiz3}
                touched={touched.quiz3}
              >
                <Field
                  component={RadioButton}
                  name="quiz3"
                  id="1.5 gallons per minute"
                  label="1.5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz3"
                  id="3-5 gallons per minute"
                  label="3-5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz3"
                  id="2.5 gallons per minute"
                  label="2.5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz3"
                  id="4 gallons per minute"
                  label="4 gallons per minute"
                />
              </RadioButtonGroup>
              {errors.quiz3 && touched.quiz3 && (
                <InputFeedback>{errors.quiz3}</InputFeedback>
              )}

              <RadioButtonGroup
                id="quiz4"
                label="A low flow faucet flows at"
                value={values.quiz4}
                error={errors.quiz4}
                touched={touched.quiz4}
              >
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="1.5 gallons per minute"
                  label="1.5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="3-5 gallons per minute"
                  label="3-5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="2.5 gallons per minute"
                  label="2.5 gallons per minute"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="4 gallons per minute"
                  label="4 gallons per minute"
                />
              </RadioButtonGroup>
              {errors.quiz4 && touched.quiz4 && (
                <InputFeedback>{errors.quiz4}</InputFeedback>
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

export default Twelve;
