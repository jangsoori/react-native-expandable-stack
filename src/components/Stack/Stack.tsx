import React, { Children, useMemo } from 'react';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';
import { StackItem } from '../StackItem';
import type { StackProps } from './Stack.types';

const defaultSpringOptions: WithSpringConfig = {
  damping: 5,
  mass: 0.2,
};

const defaultTimingOptions: WithTimingConfig = {
  duration: 300,
};

export const Stack: React.FC<StackProps> = ({
  children,
  gap = 10,
  offset = -20,
  expanded,
  animation = {
    type: 'spring',
    options: defaultSpringOptions,
  },
  onExpandStart,
  onExpandEnd,
  firstItemOnTop = false,
  animatedProgress,
}) => {
  const progress = useSharedValue(0);

  const animationOptions = useMemo(() => {
    if (animation.type === 'timing') {
      return animation.options || defaultTimingOptions;
    }
    return animation.options;
  }, [animation.options, animation.type]);

  const animationFunction = useMemo(() => {
    if (animation.type === 'timing') {
      return withTiming;
    }
    return withSpring;
  }, [animation.type]);

  const childrenCount = Children.count(children);

  const rStyle = useAnimatedStyle(() => {
    return {
      marginBottom: interpolate(
        progress.value,
        [0, 1],
        [offset * (childrenCount - 1), gap * (childrenCount - 1)]
      ),
    };
  });

  useAnimatedReaction(
    () => expanded,
    (isExpanded) => {
      if (isExpanded) {
        if (onExpandStart) {
          runOnJS(onExpandStart)();
        }
        progress.value = animationFunction(1, animationOptions, () => {
          if (onExpandEnd) {
            runOnJS(onExpandEnd)();
          }
        });
      } else {
        progress.value = animationFunction(0, animationOptions);
      }
    },
    [expanded]
  );

  useAnimatedReaction(
    () => progress.value,
    (_progress) => {
      if (animatedProgress) {
        animatedProgress.value = _progress;
      }
    }
  );
  return (
    <Animated.View style={rStyle}>
      {Children.map(children, (child, index) => {
        return (
          <StackItem
            progress={progress}
            index={index}
            gap={gap}
            offset={offset}
            firstItemOnTop={firstItemOnTop}
          >
            {child}
          </StackItem>
        );
      })}
    </Animated.View>
  );
};
