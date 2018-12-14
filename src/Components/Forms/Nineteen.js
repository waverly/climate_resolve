import React, { Component, Fragment } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import firebase from "../../firebase.js";

import { Checkbox } from "./Inputs";
import CheckboxGroup from "./CheckboxGroup";
import { InputFeedback, ButtonWrapper, SectionTitle } from "./Utils";

class Eighteen extends Component {
  pushToFirebase = e => {
    console.log("inside of push to firebase");
    const itemsRef = firebase.database().ref("userdata");
    itemsRef.push(this.props.surveyData);
  };

  render() {
    let _19_1_free_items = null;
    if (this.props.surveyData) {
      ({ _19_1_free_items } = this.props.surveyData);
    }

    return (
      <Formik
        initialValues={{
          free_items: _19_1_free_items || []
        }}
        validationSchema={Yup.object().shape({
          free_items: Yup.array().required("At least one checkbox is required")
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            let checkboxData = {
              _19_1_free_items: values.free_items
            };

            // add current date to dataset
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const returndate = `${year}/${month}/${day}`;
            checkboxData.date = returndate;

            this.props.updateSurveyData(checkboxData);
            this.pushToFirebase();
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
              <CheckboxGroup
                id="free_items"
                label="I would like to receive a free"
                value={values.free_items}
                error={errors.free_items}
                touched={touched.free_items}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Showerhead"
                  label="Showerhead"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Shower timer"
                  label="Shower timer"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Kitchen sink aerator"
                  label="Kitchen sink aerator"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Bathroom sink aerator"
                  label="Bathroom sink aerator"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Receive free trees"
                  label="Receive free trees"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Get an AC tuneup"
                  label="Get an AC tuneup"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Get an efficiency retrofit"
                  label="Get an efficiency retrofit"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="Recycle my Refrigerator or Freezer"
                  label="Recycle my Refrigerator or Freezer"
                />
                <Field
                  component={Checkbox}
                  name="free_items"
                  id="None of the above"
                  label="None of the above"
                />
              </CheckboxGroup>

              {errors.free_items && touched.free_items && (
                <InputFeedback>{errors.free_items}</InputFeedback>
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

export default Eighteen;
