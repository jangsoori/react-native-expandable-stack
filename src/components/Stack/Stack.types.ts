import type {
  WithSpringConfig,
  WithTimingConfig,
} from 'react-native-reanimated';

interface TimingAnimation {
  type: 'timing';
  options?: WithTimingConfig;
}

interface SpringAnimation {
  type: 'spring';
  options?: WithSpringConfig;
}

export interface StackProps {
  expanded: boolean;
  gap?: number;
  offset?: number;
  animation?: SpringAnimation | TimingAnimation;
  onExpandStart?: () => void;
  onExpandEnd?: () => void;
  firstItemOnTop?: boolean;
}
