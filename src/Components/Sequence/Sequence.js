// @flow
import * as React from "react";
import * as R from "ramda";
import Step from "./Step";
import { Prev, Next } from "./PrevNext";
import { SequenceProvider } from "./sequenceContext";
import type { ContextValue, StepType, PartialStep } from "./sequenceContext";

/**
 * Sequence
 */

type Props = {
  /** Allow the sequence to loop from beginning to end */
  loop?: boolean, // what
  initialStep?: number,
  children?: React.Node,
  /** If supplied, children will be ignored */
  render?: null | (ContextValue => React.Node)
};

type State = {
  currentStep: number,
  steps: Array<StepType>
};

class Sequence extends React.Component<Props, State> {
  static Step = Step;

  static Next = Next;

  static Prev = Prev;

  steps = [];

  static defaultProps = {
    loop: false,
    initialStep: 0,
    render: null,
    children: null
  };

  state = {
    currentStep: this.props.initialStep || 0,
    steps: []
  };

  getContextValue = (): ContextValue => ({
    currentStep: this.state.currentStep,
    steps: this.state.steps,
    advance: this.step(),
    goBack: this.step(true),
    goToStep: this.goToStep,
    registerStep: this.registerStep,
    updateStep: this.updateStep,
    unRegisterStep: this.unRegisterStep
  });

  step = (reverse?: boolean = false) => () => {
    const { loop } = this.props;
    const { steps, currentStep } = this.state;
    // If we're going back, reverse the array so we are searching from the back first
    const sorted = R.pipe(
      R.sortBy(R.prop("number")),
      R.when(() => reverse, R.reverse)
    )(steps);

    const maybeNext = reverse
      ? // If we're going back, look for the first step with a number lesser than the current step.
        sorted.find(step => step.number < currentStep)
      : // Otherwise, look for the first step with a number greater than
        sorted.find(step => step.number > currentStep);

    // If nothing was found, fall back to
    const next = maybeNext || (loop ? R.head(sorted) : R.last(sorted));

    if (!next || next.number === currentStep) return;
    this.setState({
      currentStep: next.number
    });
  };

  goToStep = (newStep: number) => {
    this.setState({
      currentStep: newStep
    });
  };

  /**
   * registerStep
   *
   * @param {PartialStep} { number }
   * @returns {number}
   *
   * Child `<Step>` components may mount and unmount dynamically. As they do, they call back up here
   * to register & unregister their presence.
   */
  registerStep = ({ number }: PartialStep): number => {
    this.setState(({ steps, currentStep }) => {
      const newStep = {
        id: number,
        number
      };
      if (currentStep === null && newStep.number === this.props.initialStep) {
        return {
          steps: [...steps, newStep],
          currentStep: newStep.number
        };
      }
      return {
        steps: [...steps, newStep]
      };
    });
    // return the new step's ID
    return number;
  };

  unRegisterStep = (id: number) => {
    this.setState(({ steps }) => ({
      steps: steps.filter(step => step.id !== id)
    }));
  };

  updateStep = (id: number, { number }: PartialStep) => {
    this.setState(({ steps }) => {
      const stepIndex = steps.findIndex(s => s.id === id);
      const stepToUpdate = steps[stepIndex];
      const newStep = {
        ...stepToUpdate,
        number
      };
      const newSteps = [
        ...steps.slice(0, stepIndex),
        newStep,
        ...steps.slice(stepIndex + 1)
      ];
      return {
        steps: newSteps
      };
    });
  };

  render() {
    const { render } = this.props;
    const value = this.getContextValue();
    return (
      <SequenceProvider value={value}>
        {render ? render(value) : this.props.children}
      </SequenceProvider>
    );
  }
}

export default Sequence;
