// @flow
import * as React from "react";
import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const ProgressItem = styled.div`
  width: 24%;
  height: 6px;
  background-color: ${props => (props.active ? "#9DC284" : "white")};
  border-radius: 4px;
`;

const ProgressBar = props => {
  const { currentstep, steps } = props;
  const perc = (currentstep * 100) / steps.length;
  const lastTrue = currentstep === steps.length - 1;

  return (
    <ProgressBarWrapper>
      <ProgressItem active={perc < 31 || perc > 30} />
      <ProgressItem active={(perc > 30 && perc < 61) || perc > 60} />
      <ProgressItem active={(perc > 60 && perc < 91) || perc > 90} />
      <ProgressItem active={lastTrue} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
