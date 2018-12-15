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

  console.log(currentstep, steps);

  return (
    <ProgressBarWrapper>
      <ProgressItem active={perc < 26 || perc > 25} />
      <ProgressItem active={(perc > 25 && perc < 51) || perc > 50} />
      <ProgressItem active={(perc > 50 && perc < 76) || perc > 75} />
      <ProgressItem active={perc > 75} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
