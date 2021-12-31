# useActions

> a reusable hook for creating actions that manipulate state. 

For those of us who enjoyed the feel of working with [bindActionCreators](https://redux.js.org/api/bindactioncreators) from [Redux](https://redux.js.org). This package aims to supply the benefits of actions without the need for a reducer.

## Installation

useActions requires a peer dependency of **React 16.8.0** or later

```
npm install --save er1cstotle/useActions#master
```

useActions is **not** hosted on npm yet. The master branch will always have a working version of the package.


<!-- This assumes that you’re using the [npm](https://npmjs.com) package manager with a module bundler like [Webpack](https://webpack.js.org/) or [Browserify](http://browserify.org/) to consume [CommonJS](http://webpack.github.io/docs/commonjs.html) modules. -->


## Example Usage
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
w
## Implementation

Pulled directly from the  [source code](https://github.com/EricTheGray/use-actions/blob/master/src/index.ts)

```js
function useActions {
  const [state, setState] = useState(initial);

  const wiredActions = Object.entries(actions).reduce((acc, [actionName, action]) => {
    return {
      ...acc,
      // this is where the magic happens
      [actionName]: (...params): void => {
        setState((prev) => action(prev, ...params))
      }
    }
  }, {})

  return [state, wiredActions];
};
```

## Credits

[Initial implementation](https://codesandbox.io/s/use-actions-yorxu?file=/src/App.js) provided by [@pyrolistical](https://github.com/Pyrolistical)


## License

- See [LICENSE](https://github.com/er1cstotle/use-actions/blob/master/LICENSE)

