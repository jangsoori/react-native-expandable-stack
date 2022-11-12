import React, { Children, useCallback } from 'react';
import Animated, {
  useAnimatedStyle,
  withSpring,
  WithSpringConfig,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';
import { StackItem } from '../StackItem';
import type { StackProps } from './Stack.types';

const defaultSpringConfig: WithSpringConfig = {
  damping: 8,
  mass: 0.5,
};

const defaultLinearConfig: WithTimingConfig = {
  duration: 300,
};

export const Stack: React.FC<StackProps> = ({
  children,
  gap = 10,
  offset = -20,
  expanded,
  animation = {
    type: 'linear',
    config: defaultLinearConfig,
  },
}) => {
  const animateExpansion = useCallback(
    (targetValue: number) => {
      'worklet';

      if (animation.type === 'spring') {
        return withSpring(targetValue, animation.config || defaultSpringConfig);
      }

      return withTiming(targetValue, animation.config || defaultLinearConfig);
    },
    [animation.config, animation.type]
  );

  if (!gap) {
    throw new Error('You need to provide a "gap" property!');
  }

  if (!offset) {
    throw new Error('You need to provide an "offset" property!');
  }

  const childrenCount = Children.count(children);

  const rStyle = useAnimatedStyle(() => {
    return {
      marginBottom: animateExpansion(
        expanded ? gap * (childrenCount - 1) : offset * (childrenCount - 1)
      ),
    };
  });

  return (
    <Animated.View style={rStyle}>
      {Children.map(children, (child, index) => {
        return (
          <StackItem
            index={index}
            expanded={expanded}
            gap={gap}
            offset={offset}
            animateExpansion={animateExpansion}
          >
            {child}
          </StackItem>
        );
      })}
    </Animated.View>
  );
};
