import { WebPlugin } from '@capacitor/core';

import type { CapacitorSwipeControlPlugin } from './definitions';

export class CapacitorSwipeControlWeb
  extends WebPlugin
  implements CapacitorSwipeControlPlugin
{
  async setWebViewNavigationGestures(options: { enabled: boolean }): Promise<{ success: boolean }> {
    console.warn('setWebViewNavigationGestures is not supported on the web');
    return Promise.resolve({ success: false });
  }
}
