/**
 * TESTING: Mock implementation of BarSubscriber
 * This version logs the overrides instead of applying them to a TradingView widget.
 * Remove this mock and uncomment the original implementation to re-enable TradingView functionality.
 */

// import type { Bar } from 'public/charting_library';

import { Bar } from 'public/charting_library/mock_interfaces';

export interface BarSubscriber {
  refreshInterval: NodeJS.Timer;
  chartIntervalSeconds: number;
  updateLatestBar(bar: Bar, callContext: string): void;
  productId: number;
}
