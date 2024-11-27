import { registerPlugin } from '@capacitor/core';

import type { CapacitorSwipeControlPlugin } from './definitions';

const CapacitorSwipeControl = registerPlugin<CapacitorSwipeControlPlugin>(
  'CapacitorSwipeControl',
  {
    web: () => import('./web').then(m => new m.CapacitorSwipeControlWeb()),
  },
);

export * from './definitions';
export { CapacitorSwipeControl };
