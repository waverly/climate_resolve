import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { One, Two, Three } from "Components/Forms";
import Sequence from "Components/Sequence";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
`;

const InputFeedback = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
  color: red;
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
            <Sequence>
              <Sequence.Step number={0}>
                <One
                  surveyData={this.props.surveyData}
                  updateSurveyData={this.props.updateSurveyData}
                />
              </Sequence.Step>
              <Sequence.Step number={1}>
                <Two
                  surveyData={this.props.surveyData}
                  updateSurveyData={this.props.updateSurveyData}
                />
              </Sequence.Step>
              <Sequence.Step number={2}>
                <Three
                  surveyData={this.props.surveyData}
                  updateSurveyData={this.props.updateSurveyData}
                />
              </Sequence.Step>

              <Sequence.Prev />
              <Sequence.Next />
            </Sequence>
          </InnerWrapper>
        </PageWrap>
      );
    } else return null;
  }
}

export default Survey;
