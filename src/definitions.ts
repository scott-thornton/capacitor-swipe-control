export interface CapacitorSwipeControlPlugin {
  setWebViewNavigationGestures(options: { enabled: boolean }): Promise<{ success: boolean }>;
}
