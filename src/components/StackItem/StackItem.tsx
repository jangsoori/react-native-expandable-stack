import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import type { StackItemProps } from './StackItem.types';

export const StackItem: React.FC<StackItemProps> = ({
  children,
  index,
  gap,
  offset,
  progress,
  firstItemOnTop,
}) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      zIndex: firstItemOnTop ? -index : index,
      transform: [
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [offset * index, gap * index]
          ),
        },
      ],
    };
  });

  return <Animated.View style={rStyle}>{children}</Animated.View>;
};
