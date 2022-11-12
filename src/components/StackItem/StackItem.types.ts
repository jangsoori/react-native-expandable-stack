import type { StackProps } from '../Stack/Stack.types';

export interface StackItemProps
  extends Required<Omit<StackProps, 'animation'>> {
  index: number;
  animateExpansion: (x: number) => number;
}
