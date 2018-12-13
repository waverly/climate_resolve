import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export const InputFeedback = styled.div`
  color: orange;
  margin: 10px 0;
`;

// export const InputFeedback = ({ error }) =>
//   error ? <Wrapper>{error}</Wrapper> : null;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const CenteredButtonWrapper = styled(ButtonWrapper)`
  justify-content: center;
`;

export const SectionTitle = styled.h1`
  margin-bottom: 2rem;
`;
