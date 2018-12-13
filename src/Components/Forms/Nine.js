import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Nine extends Component {
  render() {
    let _09_1_turn_off_water = null;
    if (this.props.surveyData) {
      ({ _09_1_turn_off_water } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          turn_off_water: _09_1_turn_off_water || []
        }}
        validationSchema={Yup.object().shape({
          turn_off_water: Yup.array().required(
            "At least one checkbox is required"
          )
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const checkboxData = {
              _09_1_turn_off_water: values.turn_off_water
            };
            this.props.updateSurveyData(checkboxData);
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
              <CheckboxGroup
                id="turn_off_water"
                label="I turn off water when (check all that apply):"
                value={values.turn_off_water}
                error={errors.turn_off_water}
                touched={touched.turn_off_water}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="turn_off_water"
                  id="Brushing my teeth"
                  label="Brushing my teeth"
                />
                <Field
                  component={Checkbox}
                  name="turn_off_water"
                  id="Shaving"
                  label="Shaving"
                />
                <Field
                  component={Checkbox}
                  name="turn_off_water"
                  id="Washing Dishes"
                  label="Washing Dishes"
                />
                <Field
                  component={Checkbox}
                  name="turn_off_water"
                  id="Showering (washing face, hair, etc)"
                  label="Showering (washing face, hair, etc)"
                />
              </CheckboxGroup>

              {errors.turn_off_water && touched.turn_off_water && (
                <InputFeedback>{errors.turn_off_water}</InputFeedback>
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

export default Nine;
