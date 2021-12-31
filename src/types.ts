type OmitFirstArgument<T> = T extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : T

type WiredActions<T> = {[K in keyof T]: OmitFirstArgument<T[K]>}

type InputFunctions<T> = {[key: string]: (prev: T, ...rest: any[]) => T}