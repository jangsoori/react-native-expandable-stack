import type Animated from 'react-native-reanimated';

export interface StackItemProps {
  gap: number;
  offset: number;
  index: number;
  progress: Animated.SharedValue<number>;
}
