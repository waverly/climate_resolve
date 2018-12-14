import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { RadioButton } from "./Inputs";
import RadioButtonGroup from "./RadioButtonGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Ten extends Component {
  render() {
    let _10_1_turn_off_water_one = null;
    if (this.props.surveyData) {
      ({ _10_1_turn_off_water_one } = this.props.surveyData);
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
            value => value === "All of the above"
          )
      });
    };

    return (
      <Formik
        initialValues={{
          quiz1: _10_1_turn_off_water_one ? _10_1_turn_off_water_one.quiz1 : "",
          quiz2: _10_1_turn_off_water_one ? _10_1_turn_off_water_one.quiz2 : "",
          quiz3: _10_1_turn_off_water_one ? _10_1_turn_off_water_one.quiz3 : "",
          quiz4: _10_1_turn_off_water_one ? _10_1_turn_off_water_one.quiz4 : ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            const radioData = { _10_1_turn_off_water_one: values };
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
            <SectionTitle>Water Conservation</SectionTitle>
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
                <br />
              </RadioButtonGroup>
              {errors.quiz1 && touched.quiz1 && (
                <InputFeedback>{errors.quiz1}</InputFeedback>
              )}
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
                <br />
              </RadioButtonGroup>
              {errors.quiz2 && touched.quiz2 && (
                <InputFeedback>{errors.quiz2}</InputFeedback>
              )}
              <br />
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
                <br />
              </RadioButtonGroup>
              {errors.quiz3 && touched.quiz3 && (
                <InputFeedback>{errors.quiz3}</InputFeedback>
              )}
              <br />
              <RadioButtonGroup
                id="quiz4"
                label="Which of the following strategies helps conserve water?"
                value={values.quiz4}
                error={errors.quiz4}
                touched={touched.quiz4}
              >
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="Take shorter showers"
                  label="Take shorter showers"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="Installing aerators in your faucets"
                  label="Installing aerators in your faucets"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="Turning off the shower when you lather and shampoo"
                  label="Turning off the shower when you lather and shampoo"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="All of the above"
                  label="All of the above"
                />
                <br />
              </RadioButtonGroup>
              {errors.quiz4 && touched.quiz4 && (
                <InputFeedback>{errors.quiz4}</InputFeedback>
              )}
              <br />
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

export default Ten;
