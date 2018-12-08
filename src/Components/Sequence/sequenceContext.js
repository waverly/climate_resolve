// @flow
import * as React from "react";

/**
 * Types
 */

export type PartialStep = {
  number: number
};

export type StepType = {
  number: number,
  id: number,
  skip?: boolean
};

export type ContextValue = {
  advance: () => void,
  goBack: () => void,
  currentStep: number,
  registerStep: PartialStep => number,
  updateStep: (number, PartialStep) => void,
  unRegisterStep: number => void,
  steps: Array<StepType>
};

/**
 * Context
 */

const defaults = {
  advance: () => {},
  goBack: () => {},
  currentStep: 0,
  registerStep: () => -1,
  updateStep: () => {},
  unRegisterStep: () => {},
  steps: []
};

const SequenceContext = React.createContext(defaults);
export const SequenceProvider = SequenceContext.Provider;
export const SequenceConsumer = SequenceContext.Consumer;
