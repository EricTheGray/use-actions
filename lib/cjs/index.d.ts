declare type OmitFirstArgument<T> = T extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : T;
declare type WiredActions<T> = {
    [K in keyof T]: OmitFirstArgument<T[K]>;
};
declare type InputFunctions<T> = {
    [key: string]: (prev: T, ...rest: any[]) => T;
};
declare function useActions<T, G extends InputFunctions<T>>(actions: G, initial: T): [T, WiredActions<G>];
export default useActions;
