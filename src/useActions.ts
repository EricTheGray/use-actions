import { useState } from 'react';

export function useActions <T, G extends InputFunctions<T>>(actions: G, initial: T): [T, WiredActions<G>]{
  const [state, setState] = useState(initial);

  const wiredActions = Object.entries(actions).reduce<WiredActions<G>>((acc, [actionName, action]) => {
    return {
      ...acc,
      [actionName]: (...params): void => {
        setState((prev) => action(prev, ...params))
      }
    }
  }, {} as WiredActions<G>)

  return [state, wiredActions];
};

