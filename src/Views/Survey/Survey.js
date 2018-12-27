import React, { Component, Fragment } from "react";
import styled from "styled-components";

import {
  Results,
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
  Sixteen,
  Seventeen,
  Eighteen,
  Nineteen
} from "Components/Forms";
import Sequence from "Components/Sequence";
import ProgressBar from "Components/Sequence/ProgressBar";
import { generateKey } from "Utils/helpers";

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
  justify-content: flex-start;
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
            <Sequence
              render={({ advance, goBack, currentStep, steps }) => (
                <React.Fragment>
                  <ProgressBar steps={steps} currentstep={currentStep} />
                  <Sequence.Step number={0}>
                    <Zero advance={advance} />
                  </Sequence.Step>
                  <Sequence.Step number={1}>
                    <One
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={2}>
                    <Two
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={3}>
                    <Three
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={4}>
                    <Four
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={5}>
                    <Five
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={6}>
                    <Six
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={7}>
                    <Seven
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={8}>
                    <Eight
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={9}>
                    <Nine
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={10}>
                    <Ten
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={11}>
                    <Eleven
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={12}>
                    <Twelve
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={13}>
                    <Thirteen
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={14}>
                    <Fourteen
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={15}>
                    <Fifteen
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={16}>
                    <Sixteen
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={17}>
                    <Seventeen
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={18}>
                    <Eighteen
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={19}>
                    <Nineteen
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  <Sequence.Step number={20}>
                    <Results
                      goBack={goBack}
                      advance={advance}
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                </React.Fragment>
              )}
            />
          </InnerWrapper>
        </PageWrap>
      );
    } else return null;
  }
}

export default Survey;
