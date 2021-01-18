import { useReducer } from "react";

const reducer = (state) => {
  return !state;
};

export const useToggle = (state) => {
  const [isOpen, toggleisOpenn] = useReducer(reducer, state);

  return [isOpen, toggleisOpenn];
};
