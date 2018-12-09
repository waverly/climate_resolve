import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { InputFeedback, ButtonWrapper } from "./Utils";

const Zero = props => (
  <Fragment>
    <h1>LADWP Customer Survey</h1>
    <p>
      Thank you for agreeing to take part in this survey. Our purpose is to be
      able to identify and understand your experience with LADWP services, any
      barriers that you might have faced, and your energy/water knowledge.
      Additionally, using the results, we will connect you with services and
      rebates that will allow you to save money on your energy and water bills.
      This survey should take you 10 mins to complete.
    </p>
    <p>
      The survey is voluntary and honest answers are appreciated as they will
      allow us to connect you with the best money saving options for your
      household.
    </p>
    <ButtonWrapper>
      <button onClick={props.advance}>Continue</button>
    </ButtonWrapper>
  </Fragment>
);

export default Zero;
