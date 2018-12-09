// @flow

import React, { Component } from "react";
import { withRouter } from "react-router";

import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import { injectGlobal, ThemeProvider } from "styled-components";
import { globalStyles } from "Styles/global";
import { theme } from "Styles/themes";

import Home from "./Views/Home";
import Survey from "./Views/Survey";
import Nav from "./Components/Nav";

injectGlobal`
	${globalStyles}
`;

const LoadWrapper = styled.div`
  transition: 1s all;
`;

const InnerLoadWrapper = styled.div`
  opacity: ${props => (props.innerLoaded ? "1" : "0")};
  transition: 1s all;
`;

class App extends Component {
  state = {
    loaded: false,
    innerLoaded: false,
    width: 0,
    height: 0,
    surveyData: {}
  };

  // iterate over object, set state value

  updateSurveyData = (id, data) => {
    let surveyDataCopy = Object.assign({}, this.state.surveyData);

    Object.keys(data).forEach(function(key, index) {
      const value = data[key];
      surveyDataCopy[key] = value;
    });

    this.setState({ surveyData: surveyDataCopy });
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ innerLoaded: true });
    }, 2000);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    const baseTheme = {
      ...theme,
      keyColor: "blue"
    };

    return (
      <Route
        render={({ location }) => (
          <ThemeProvider theme={baseTheme}>
            <ReactCSSTransitionReplace
              transitionName="fade-wait"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={400}
            >
              <LoadWrapper loaded={this.state.loaded} key={location.pathname}>
                <InnerLoadWrapper
                  innerLoaded={this.state.loaded}
                  key={location.pathname}
                >
                  <Nav width={this.state.width} />
                  <Switch location={location}>
                    <Route path="/" exact render={props => <Home />} />
                    <Route
                      path="/survey"
                      exact
                      render={props => (
                        <Survey
                          surveyData={this.state.surveyData}
                          updateSurveyData={this.updateSurveyData}
                        />
                      )}
                    />
                  </Switch>
                </InnerLoadWrapper>
              </LoadWrapper>
            </ReactCSSTransitionReplace>
          </ThemeProvider>
        )}
      />
    );
  }
}

export default withRouter(App);
