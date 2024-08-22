/**
 * TESTING: Mock implementation of useApplyWidgetOverrides
 * This version logs the overrides instead of applying them to a TradingView widget.
 * Remove this mock and uncomment the original implementation to re-enable TradingView functionality.
 */

import { WIDGET_CONFIG } from '../config/widgetConfig';
// import { IChartingLibraryWidget } from 'public/charting_library/charting_library';
import { IChartingLibraryWidget } from 'public/charting_library/mock_interfaces';

import { useEffect } from 'react';

export function useApplyWidgetOverrides(tvWidget?: IChartingLibraryWidget) {
  useEffect(() => {
    if (!tvWidget) {
      return;
    }

    tvWidget.applyOverrides(WIDGET_CONFIG.overrides);

    // Object.entries(WIDGET_CONFIG.styling).forEach(([property, color]) => {
    //   tvWidget.setCSSCustomProperty(property, color);
    // });

    console.debug(
      '[useApplyWidgetOverrides] Overrides and styling applied to chart',
    );
  }, [tvWidget]);
}
