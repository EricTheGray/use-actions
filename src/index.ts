import { useState } from 'react';

type OmitFirstArgument<T> = T extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : T

type WiredActions<T> = {[K in keyof T]: OmitFirstArgument<T[K]>}

type InputFunctions<T> = {[key: string]: (prev: T, ...rest: any[]) => T}


function useActions <T, G extends InputFunctions<T>>(actions: G, initial: T): [T, WiredActions<G>]{
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

export default useActions;

