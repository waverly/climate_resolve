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
    let _12_1_turn_off_water = null;
    if (this.props.surveyData) {
      ({ _12_1_turn_off_water } = this.props.surveyData);
    }

    const validationSchema = () => {
      return Yup.object().shape({
        quiz1: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct",
            "The correct value is caulking and sealing. Please revise your answer.",
            value => value === "Caulking and sealing"
          ),
        quiz2: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct-2",
            "The correct value is monthly. Please revise your answer.",
            value => value === "Monthly"
          ),
        quiz3: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct-3",
            "The correct value is false. Please revise your answer.",
            value => value === "False"
          ),
        quiz4: Yup.string()
          .required("Please select an answer")
          .test(
            "is-correct-4",
            "The correct value is freezer on top. Please revise your answer.",
            value => value === "Freezer on top"
          )
      });
    };

    return (
      <Formik
        initialValues={{
          quiz1: _12_1_turn_off_water ? _12_1_turn_off_water.quiz1 : "",
          quiz2: _12_1_turn_off_water ? _12_1_turn_off_water.quiz2 : "",
          quiz3: _12_1_turn_off_water ? _12_1_turn_off_water.quiz3 : "",
          quiz4: _12_1_turn_off_water ? _12_1_turn_off_water.quiz4 : ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            const radioData = { _12_1_turn_off_water: values };
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
            <SectionTitle>Energy Efficiency</SectionTitle>
            <Form>
              <RadioButtonGroup
                id="quiz1"
                label="What is the best way to cut down on air leaks in your home?"
                value={values.quiz1}
                error={errors.quiz1}
                touched={touched.quiz1}
              >
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="Adding more insulation"
                  label="Adding more insulation"
                />
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="Caulking and sealing"
                  label="Caulking and sealing"
                />
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="Cover leaks with play-doh"
                  label="Cover leaks with play-doh"
                />
                <Field
                  component={RadioButton}
                  name="quiz1"
                  id="Using duct tape"
                  label="Using duct tape"
                />
                <br />
              </RadioButtonGroup>
              {errors.quiz1 && touched.quiz1 && (
                <InputFeedback>{errors.quiz1}</InputFeedback>
              )}
              <br />

              <RadioButtonGroup
                id="quiz2"
                label="How often should you check your AC and furnace filters?"
                value={values.quiz2}
                error={errors.quiz2}
                touched={touched.quiz2}
              >
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="Monthly"
                  label="Monthly"
                />
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="Annually"
                  label="Annually"
                />
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="Every 5 years"
                  label="Every 5 years"
                />
                <Field
                  component={RadioButton}
                  name="quiz2"
                  id="Every other year"
                  label="Every other year"
                />
                <br />
              </RadioButtonGroup>
              {errors.quiz2 && touched.quiz2 && (
                <InputFeedback>{errors.quiz2}</InputFeedback>
              )}
              <br />
              <RadioButtonGroup
                id="quiz3"
                label="Raising or lowering your thermostat a degree or two doesn't have that much impact on your energy bill"
                value={values.quiz3}
                error={errors.quiz3}
                touched={touched.quiz3}
              >
                <Field
                  component={RadioButton}
                  name="quiz3"
                  id="True"
                  label="True"
                />
                <Field
                  component={RadioButton}
                  name="quiz3"
                  id="False"
                  label="False"
                />
                <Field
                  component={RadioButton}
                  name="quiz3"
                  id="Sometimes"
                  label="Sometimes"
                />
                <br />
              </RadioButtonGroup>

              {errors.quiz3 && touched.quiz3 && (
                <InputFeedback>{errors.quiz3}</InputFeedback>
              )}
              <br />
              <RadioButtonGroup
                id="quiz4"
                label="Which style of refrigerator is the most energy efficient?"
                value={values.quiz4}
                error={errors.quiz4}
                touched={touched.quiz4}
              >
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="Side by side"
                  label="Side by side"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="Freezer on top"
                  label="Freezer on top"
                />
                <Field
                  component={RadioButton}
                  name="quiz4"
                  id="Freezer on bottom"
                  label="Freezer on bottom"
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
