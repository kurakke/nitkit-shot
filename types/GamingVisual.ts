import { Sentence } from './Sentence';

export interface GamingVisualProps {
  type: 'video' | 'picture';
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: any;
  title: string;
  description: Sentence;
}

export type GamingVisual = Record<string, GamingVisualProps>;
