import { Sentence } from './Sentence';

export interface GamingVisualProps {
  type: 'video' | 'picture';
  id: string;
  source: string;
  title: string;
  description: Sentence;
}

export type GamingVisual = Record<string, GamingVisualProps>;
