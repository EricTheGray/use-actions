import { useRef, useState } from 'react';

export function useStableActions <T, G extends InputFunctions<T>>(actions: G, initial: T): [T, WiredActions<G>]{
  const [state, setState] = useState(initial);

  const wiredActionsRef = useRef(Object.entries(actions).reduce<WiredActions<G>>((acc, [actionName, action]) => {
    return {
      ...acc,
      [actionName]: (...params): void => {
        setState((prev) => action(prev, ...params))
      }
    }
  }, {} as WiredActions<G>))

  return [state, wiredActionsRef.current];
};

