import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { InputFeedback, CenteredButtonWrapper } from "./Utils";

const Results = props => (
  <Fragment>
    <h1>LADWP Customer Survey</h1>
    <br />
    <p>Thank you for filling out this form</p>
    <br />
    <p>Here are your results</p>
  </Fragment>
);

export default Results;
