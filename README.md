# react-native-expandable-stack

This is a simple library that allows you to create a stack of items that can be expanded or collapsed.

## Installation

```sh
npm install react-native-expandable-stack react-native-reanimated
```

## Usage

```js
import { Stack } from 'react-native-expandable-stack';

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <Stack expanded={open}>{/* Your items here */}</Stack>;
};
```

## Props

| Name      | Type                                                                                       | Required | Default                                     | Description                                                                                                                                                                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------ | -------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded  | `boolean`                                                                                  | Yes      | `false`                                     | Determines if the stack should be expanded or collapsed.                                                                                                                                                                                                                                                       |
| gap       | `number`                                                                                   | No       | `10`                                        | Determines the gap between items in expanded state.                                                                                                                                                                                                                                                            |
| offset    | `number`                                                                                   | No       | `-20`                                       | Determines the overlap of the items in collapsed state.                                                                                                                                                                                                                                                        |
| animation | `{type: 'linear', config: withTimingConfig}`, `{type: 'spring', config: withSpringConfig}` | No       | `{type: 'linear', config: {duration: 300}}` | Determines the animation to run. For more info about config visit:\n `type: 'linear'`: https://docs.swmansion.com/react-native-reanimated/docs/api/animations/withTiming/#options-object \n `type: 'spring'`: https://docs.swmansion.com/react-native-reanimated/docs/api/animations/withSpring#options-object |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
