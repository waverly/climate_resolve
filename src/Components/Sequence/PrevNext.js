// @flow
import * as React from "react";
import { SequenceConsumer } from "./sequenceContext";

/**
 * AdvanceOrBack
 */

/* eslint-disable react/require-default-props */
type Props = {
  children?: React.Node,
  onClick?: Event => void
};

const advanceOrBack = (direction: "next" | "back") => (props: Props) => {
  if (direction !== "next" && direction !== "back")
    throw new Error('`direction` must either be "advance" or "back"');
  const handleClick = sequenceHandler => e => {
    if (props.onClick) props.onClick(e);
    sequenceHandler();
  };
  return (
    <SequenceConsumer>
      {({ advance, goBack }) => (
        <button
          type="button"
          onClick={handleClick(direction === "next" ? advance : goBack)}
          {...props}
        />
      )}
    </SequenceConsumer>
  );
};

export const Next = advanceOrBack("next");
export const Prev = advanceOrBack("back");

Next.defaultProps = {
  children: "Next"
};

Prev.defaultProps = {
  children: "Back"
};
