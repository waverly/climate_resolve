import React from "react";
import styled from "styled-components";

import { InputFeedback } from "./Utils";

const Wrapper = styled.div``;

const RadioButtonGroup = ({ value, error, touched, id, label, children }) => {
  return (
    <Wrapper error={!!error && touched}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </Wrapper>
  );
};

export default RadioButtonGroup;
