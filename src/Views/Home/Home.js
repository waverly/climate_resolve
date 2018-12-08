import React, { Component, Fragment } from "react";
import styled from "styled-components";
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
  width: 70%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 100px 0;
  min-height: 100vh;

  h1 {
    text-align: center;
  }

  ${media.handheld_landscape`
    width: 90vw;
    margin-right: auto;
  `};
`;

class Home extends Component {
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
            <h1>Home page</h1>
          </InnerWrapper>
        </PageWrap>
      );
    } else return null;
  }
}

export default Home;
