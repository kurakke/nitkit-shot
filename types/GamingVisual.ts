export interface GamingVisualProps {
  type: 'video' | 'picture';
  id: string;
  source: string;
  title: string;
  description: string;
}

export type GamingVisual = Record<string, GamingVisualProps>;
