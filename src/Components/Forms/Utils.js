import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export const InputFeedback = styled.div`
  color: red;
  margin: 10px 0;
`;

// export const InputFeedback = ({ error }) =>
//   error ? <Wrapper>{error}</Wrapper> : null;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
