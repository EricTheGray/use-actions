import { useState } from 'react';

const useActions = (actions, initial) => {
  const [state, setState] = useState(initial);
  const wired = {};

  for (const action in actions) {
    wired[action] = (...params) =>
      setState((prev) => actions[action](prev, ...params));
  }

  return [state, wired];
};

export default useActions;