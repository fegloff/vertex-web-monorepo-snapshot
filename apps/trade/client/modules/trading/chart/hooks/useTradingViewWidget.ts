/**
 * TESTING: Mock implementation of useTradingViewWidget
 * This version logs the overrides instead of applying them to a TradingView widget.
 * Remove this mock and uncomment the original implementation to re-enable TradingView functionality.
 */

import { TradingViewSymbolInfo } from 'client/modules/trading/chart/config/datafeedConfig';
// import {
//   ChartingLibraryWidgetConstructor,
//   IBasicDataFeed,
//   IChartingLibraryWidget,
//   Timezone,
// } from 'public/charting_library';

import {
  ChartingLibraryWidgetConstructor,
  IBasicDataFeed,
  IChartingLibraryWidget,
  Timezone,
  ChartingLibraryWidgetOptions,
} from 'public/charting_library/mock_interfaces';

import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { WIDGET_CONFIG } from '../config/widgetConfig';
import { useSyncedRef } from 'client/hooks/util/useSyncedRef';
import { useIsClient } from '@vertex-protocol/web-common';

interface UseTradingViewWidget {
  tvWidget: IChartingLibraryWidget | undefined;
  chartContainerRef: MutableRefObject<HTMLDivElement | null>;
}

interface Params {
  selectedSymbolInfo: TradingViewSymbolInfo | undefined;
  datafeed: IBasicDataFeed | undefined;
}

// Cached import for the TV charting library widget
let _widgetConstructor: ChartingLibraryWidgetConstructor | undefined;

// async function getImportedWidgetConstructor() {
//   if (_widgetConstructor) {
//     return _widgetConstructor;
//   }
//   const constructor = (await import('public/charting_library')).widget; //  public/charting_library
//   _widgetConstructor = constructor;
//   return constructor;
// }

// Mock function for testing purposes
async function getImportedWidgetConstructor(): Promise<ChartingLibraryWidgetConstructor> {
  if (_widgetConstructor) {
    return _widgetConstructor;
  }

  const MockConstructor: ChartingLibraryWidgetConstructor = class
    implements IChartingLibraryWidget
  {
    constructor(config: ChartingLibraryWidgetOptions) {
      console.log('Mock TradingView widget constructed with config:', config);
    }

    onChartReady(callback: () => void): void {
      setTimeout(callback, 0);
    }

    setSymbol(symbol: string, interval: string, callback: () => void): void {
      setTimeout(callback, 0);
    }

    remove(): void {}

    applyOverrides(overrides: Record<string, any>): void {}

    setCSSCustomProperty(key: string, value: string): void {}

    activeChart(): any {
      return {};
    }

    symbol(): string {
      return 'MOCK_SYMBOL';
    }

    resolution(): string {
      return '1D';
    }

    subscribe(event: string, callback: () => void): void {}

    unsubscribe(event: string, callback: () => void): void {}

    saveChartToServer(
      undefined: undefined,
      undefined1: undefined,
      arg2: { defaultChartName: string },
    ): void {} // unknown;

    // saveChartToServer(onComplete: () => void, onFail: (error: string) => void, options: any): void {
    //   onComplete();
    // }
  };

  _widgetConstructor = MockConstructor;
  return MockConstructor;
}

export function useTradingViewWidget({
  selectedSymbolInfo,
  datafeed,
}: Params): UseTradingViewWidget {
  const isClient = useIsClient();
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState<boolean>();
  const [tvWidget, setTvWidget] = useState<IChartingLibraryWidget>();

  // Use synced refs as we don't want to reload the widget on changes of these data
  const selectedSymbolRef = useSyncedRef(selectedSymbolInfo);
  // However, we want reloads when selected symbol goes from undefined -> defined
  const hasSymbol = !!selectedSymbolRef.current;

  useEffect(() => {
    const initialTicker = selectedSymbolRef.current?.ticker;
    if (
      !chartContainerRef.current ||
      !hasSymbol ||
      !datafeed ||
      !initialTicker ||
      !isClient
    ) {
      return;
    }

    // Create an async fn to call for better readability
    const createWidget = async () => {
      const ChartWidget = await getImportedWidgetConstructor();
      const widget = new ChartWidget({
        ...WIDGET_CONFIG.options,
        symbol: selectedSymbolRef.current?.ticker ?? initialTicker,
        // Tradingview expects olsendb as the timezone, which is close to, but not the same, as IANA
        // This is good enough for most cases
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone as
          | Timezone
          | undefined,
        datafeed,
      });

      console.debug('[useCreateWidget] Chart widget created');

      await new Promise<void>((resolve) => {
        widget.onChartReady(() => {
          console.debug('[useCreateWidget] onChartReady called');
          resolve();
        });
      });

      // Listen to save requests & call save on the save load adapter
      widget.subscribe('onAutoSaveNeeded', () => {
        widget?.saveChartToServer(undefined, undefined, {
          defaultChartName: 'Default',
        });
      });

      return widget;
    };

    let isCancelled = false;
    setIsReady(false);
    console.debug('[useCreateWidget] Creating chart widget');

    createWidget().then((widget) => {
      if (isCancelled) {
        return;
      }
      setTvWidget(widget);
      setIsReady(true);
    });

    return () => {
      isCancelled = true;
    };
  }, [chartContainerRef, datafeed, hasSymbol, isClient, selectedSymbolRef]);

  const prevWidgetRef = useRef<IChartingLibraryWidget>();
  useEffect(() => {
    if (prevWidgetRef.current !== tvWidget) {
      prevWidgetRef.current?.remove();
      prevWidgetRef.current = tvWidget;
    }
  }, [tvWidget]);

  return {
    tvWidget: isReady ? tvWidget : undefined,
    chartContainerRef,
  };
}
