import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const Wrapper = styled.div`
  color: red;
`;

export const InputFeedback = ({ error }) =>
  error ? <Wrapper>{error}</Wrapper> : null;
