// @flow
import * as React from "react";
import { SequenceConsumer } from "./sequenceContext";
import type { ContextValue } from "./sequenceContext";

/**
 * Step
 */

type RenderProps = ContextValue & {
  currentStep: number,
  active: boolean,
  advance: () => void,
  goBack: () => void,
  goToStep: number => void
};

type BaseProps = {
  number: number,
  children?: React.Node,
  render?: RenderProps => void
};

type Props = BaseProps & ContextValue;

class Step extends React.Component<Props> {
  componentDidMount = () => {
    const { registerStep, number } = this.props;
    if (number === null || number === undefined)
      throw new Error("Sequence.Step must have a `number` prop");
    this.id = registerStep({ number });
  };

  componentWillReceiveProps({ number }) {
    if (number !== this.props.number) {
      this.props.updateStep(this.id, { number });
    }
  }

  componentWillUnmount() {
    const { unRegisterStep } = this.props;
    unRegisterStep(this.id);
  }

  id: number;

  render() {
    const { number, render, children, currentStep, ...props } = this.props;

    if (number === null || number === undefined) return null;
    const active = currentStep === this.props.number;
    // Prefer a render prop
    if (render) {
      // $FlowFixMe
      return render({ active, currentStep, ...props });
    }
    // If no render prop, use children instead
    // $FlowFixMe
    return active ? children : null;
  }
}

const StepWithContext = (props: any) => (
  <SequenceConsumer>
    {context => <Step {...props} {...context} />}
  </SequenceConsumer>
);

export default StepWithContext;
