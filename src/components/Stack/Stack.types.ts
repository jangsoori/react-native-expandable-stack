import type {
  WithSpringConfig,
  WithTimingConfig,
} from 'react-native-reanimated';

interface LinearAnimation {
  type: 'linear';
  config?: WithTimingConfig;
}

interface SpringAnimation {
  type: 'spring';
  config?: WithSpringConfig;
}

export interface StackProps {
  gap: number;
  offset: number;
  expanded: boolean;
  animation?: SpringAnimation | LinearAnimation;
}
