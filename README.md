# react-native-expandable-stack

This is a simple library that allows you to create a stack of items that can be expanded or collapsed.

## Installation
npm:
```sh
npm install react-native-expandable-stack react-native-reanimated
```
yarn:
```sh
yarn add react-native-expandable-stack react-native-reanimated
```

## Usage

### Basic
```js
import { Stack } from 'react-native-expandable-stack';

const Component = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return <Stack expanded={isExpanded} gap={20} offset={-40}>{/* Your items here */}</Stack>;
};
```

### Custom Spring config

```js
import { Stack } from 'react-native-expandable-stack';

const springConfig = {
  damping: 8,
  mass: 0.5,
};


const Component = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return <Stack expanded={isExpanded} animation={{type: 'spring', config: springConfig}}>{/* Your items here */}</Stack>;
};
```

### Custom Timing config

```js
import { Stack } from 'react-native-expandable-stack';

const timingConfig = {
  duration: 600
}

const Component = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return <Stack expanded={isExpanded} animation={{type: 'timing', config: linearConfig}}>{/* Your items here */}</Stack>;
};
```



## Props

| Name      | Type                                                                                       | Required | Default                                     | Description                                                                                                                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------ | -------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded  | `boolean`                                                                                  | Yes      | `false`                                     | Determines if the stack should be expanded or collapsed.                                                                                                                                                                                                                                                  |
| gap       | `number`                                                                                   | No       | `10`                                        | Determines the gap between items in expanded state.                                                                                                                                                                                                                                                       |
| offset    | `number`                                                                                   | No       | `-20`                                       | Determines the overlap of the items in collapsed state. Usually you will want a negative number.                                                                                                                                                                                                                                                |
| animation | `{type: 'timing', config: WithTimingConfig}`,<br />`{type: 'spring', config: WithSpringConfig}` | No       | `{type: 'timing', config: {duration: 300}}` | Determines the animation to run. `config` is optional and takes in `react-native-reanimated` options, depending on the `type`:<br/>`type: 'timing'`: [withTiming options](https://docs.swmansion.com/react-native-reanimated/docs/api/animations/withTiming/#options-object) <br />`type: 'spring'`: [withSpring options](https://docs.swmansion.com/react-native-reanimated/docs/api/animations/withSpring#options-object) |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
