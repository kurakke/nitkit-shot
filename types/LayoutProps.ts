import { ReactNode } from 'react';

import { PageId } from './PageId';

export interface LayoutProps {
  type: PageId;
  children: ReactNode;
}
