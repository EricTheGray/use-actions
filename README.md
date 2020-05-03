# useActions

> a reusable hook for creating actions that manipulate state. 

For those of us who enjoyed working with [bindActionCreators](https://redux.js.org/api/bindactioncreators) from [Redux](https://redux.js.org) but could do without so much boiler plate code.

## Installation

useActions requires a peer dependency of **React 16.8.0** or later

Not hosted on npm yet. For now the master branch will always have a working version of the package.

```
npm install --save er1cstotle/useActions#master
```

<!-- This assumes that you’re using the [npm](https://npmjs.com) package manager with a module bundler like [Webpack](https://webpack.js.org/) or [Browserify](http://browserify.org/) to consume [CommonJS](http://webpack.github.io/docs/commonjs.html) modules. -->


## Example
```js
const actions = {
  increment({ count }) {
    return { count: count + 1 };
  },
  decrement({ count }) {
    return { count: count - 1 };
  }
};

const ActionsCounter = () => {
  const [{ count }, { increment, decrement }] = useActions(actions, {
    count: 0
  });

  return (
    <>
      <p>Count: {count}<p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
}
```

## Implementation

Pulled directly from the  [source code](https://github.com/er1cstotle/use-actions/blob/master/index.js)

```js
const useActions = (actions, initial) => {
  const [state, setState] = useState(initial);
  const wired = {};

  for (const action in actions) {
    wired[action] = (...params) =>
      setState((prev) => actions[action](prev, ...params));
  }

  return [state, wired];
};
```

## License

- See [LICENSE](https://github.com/er1cstotle/use-actions/blob/master/LICENSE)

