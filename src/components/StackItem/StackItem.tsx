import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import type { StackItemProps } from './StackItem.types';

export const StackItem: React.FC<StackItemProps> = ({
  children,
  index,
  expanded,
  gap,
  offset,
  animateExpansion,
}) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: expanded
            ? animateExpansion(gap * index)
            : animateExpansion(offset * index),
        },
      ],
    };
  });

  return <Animated.View style={rStyle}>{children}</Animated.View>;
};
