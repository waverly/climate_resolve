import React, { Component, Fragment } from "react";
import styled from "styled-components";

import { Results, Zero, One, Two, Three, Four } from "Components/Forms";
import Sequence from "Components/Sequence";
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
            <Sequence
              render={({ advance, goBack }) => (
                <React.Fragment>
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
                    <Results
                      surveyData={this.props.surveyData}
                      updateSurveyData={this.props.updateSurveyData}
                    />
                  </Sequence.Step>
                  {/* <ButtonWrapper>
                    <button onClick={goBack}>previous</button>
                    <button onClick={advance}>next</button>
                  </ButtonWrapper> */}
                </React.Fragment>
              )}
            />

            {/* <Sequence>
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

              <ButtonWrapper>
                <Sequence.Prev />
                <Sequence.Next />
              </ButtonWrapper>
            </Sequence> */}
          </InnerWrapper>
        </PageWrap>
      );
    } else return null;
  }
}

export default Survey;
