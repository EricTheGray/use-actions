import { useState } from 'react';

const useActions = (actions, initial) => {
  const [state, setState] = useState(initial);
  const bound = {};

  for (const action in actions) {
    bound[action] = (...params) =>
      setState((prev) => actions[action](prev, ...params));
  }

  return [state, bound];
};

export default useActions;