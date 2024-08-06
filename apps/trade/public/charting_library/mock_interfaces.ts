/**
 * TESTING: Mock interfaces for TradingView library
 * These are defined to allow compilation without TradingView Advanced.
 * No actual implementation is provided.
 */
import { 
  CrossHairMovedEventParams, 
  DOMCallback, 
  GetMarksCallback, 
  HistoryCallback, 
  ISubscription, 
  LibrarySymbolInfo, 
  Mark, 
  PeriodParams, 
  ResolutionString, 
  ResolveCallback, 
  SearchSymbolsCallback, 
  ServerTimeCallback, 
  SubscribeBarsCallback, 
  SymbolResolveExtension, 
  TimescaleMark, 
  Timezone 
} from "./charting_library";

export type ChartingLibraryWidgetConstructor = new (config: ChartingLibraryWidgetOptions) => IChartingLibraryWidget;

interface DatafeedConfiguration {
  supported_resolutions?: string[];
  exchanges?: string[];
  symbols_types?: string[];
  supports_marks?: boolean;
  supports_time?: boolean;
  supports_timescale_marks?: boolean;
}

export type IBasicDataFeed = IDatafeedChartApi & IExternalDatafeed;

export interface IExternalDatafeed {
	onReady: (callback: (configuration: DatafeedConfiguration) => void) => void;
}

export interface IDatafeedChartApi {
	getMarks?(symbolInfo: LibrarySymbolInfo, from: number, to: number, onDataCallback: GetMarksCallback<Mark>, resolution: ResolutionString): void;
	getTimescaleMarks?(symbolInfo: LibrarySymbolInfo, from: number, to: number, onDataCallback: GetMarksCallback<TimescaleMark>, resolution: ResolutionString): void;
	getServerTime?(callback: ServerTimeCallback): void;
	searchSymbols(userInput: string, exchange: string, symbolType: string, onResult: SearchSymbolsCallback): void;
	resolveSymbol(symbolName: string, onResolve: ResolveCallback, onError: ErrorCallback, extension?: SymbolResolveExtension): void;
	getBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, periodParams: PeriodParams, onResult: HistoryCallback, onError: ErrorCallback): void;
	subscribeBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, onTick: SubscribeBarsCallback, listenerGuid: string, onResetCacheNeededCallback: () => void): void;
	unsubscribeBars(listenerGuid: string): void;
	subscribeDepth?(symbol: string, callback: DOMCallback): string;
	unsubscribeDepth?(subscriberUID: string): void;
	getVolumeProfileResolutionForPeriod?(currentResolution: ResolutionString, from: number, to: number, symbolInfo: LibrarySymbolInfo): ResolutionString;
}
export interface ChartingLibraryWidgetOptions {
  symbol?: string;
  interval?: string;
  container?: string | HTMLElement;
  datafeed?: IBasicDataFeed;
  library_path?: string;
  locale?: string;
  timezone?: Timezone;
}

export interface IPositionLineAdapter {
  remove: () => void;
  setText: (text: string) => IPositionLineAdapter;
  setPrice: (price: number) => IPositionLineAdapter;
  setQuantity: (quantity: string) => IPositionLineAdapter;
  setBodyTextColor: (color: string) => IPositionLineAdapter;
  setBodyBorderColor: (color: string) => IPositionLineAdapter;
  setBodyBackgroundColor: (color: string) => IPositionLineAdapter;
  setBodyFont: (font: string) => IPositionLineAdapter;
  setLineLength: (length: number) => IPositionLineAdapter;
  setLineStyle: (style: number) => IPositionLineAdapter;
  setLineColor: (color: string) => IPositionLineAdapter;
  onClose: (callback: () => void) => IPositionLineAdapter;
  setCloseButtonBackgroundColor: (color: string) => IPositionLineAdapter;
  setCloseButtonBorderColor: (color: string) => IPositionLineAdapter;
  setCloseButtonIconColor: (color: string) => IPositionLineAdapter;
}

export interface IOrderLineAdapter {
  getLineLength: () => number;
  getPrice: () => string;
  getText: () => string;
  setPrice: (price: number) => IOrderLineAdapter;
  setBodyTextColor: (color: string) => IChartWidgetApi;
  setBodyBackgroundColor: (color: string) => IChartWidgetApi;
  setBodyBorderColor: (color: string) => IOrderLineAdapter;
  setLineStyle: (style: number) => IOrderLineAdapter;
  setLineColor: (color: string) => IOrderLineAdapter;
  setBodyFont: (font: string) => IOrderLineAdapter;
  setText: (text: string) => IOrderLineAdapter;
  setLineLength: (lineHorizontalPosition: number) => IOrderLineAdapter;
  setQuantity: (quantity: string) => IOrderLineAdapter;
  setQuantityFont: (font: string) => IOrderLineAdapter;
  setQuantityTextColor: (color: string) => IOrderLineAdapter;
  setQuantityBackgroundColor: (color: string) => IOrderLineAdapter;
  setQuantityBorderColor: (color: string) => IOrderLineAdapter;
  setCancelButtonBackgroundColor: (color: string) => IOrderLineAdapter;
  setCancelButtonBorderColor: (color: string) => IOrderLineAdapter;
  setCancelButtonIconColor: (color: string) => IOrderLineAdapter;
  onMove: (callback: () => void) => IOrderLineAdapter;
  onCancel: (callback: () => void) => IOrderLineAdapter;
  remove: () => void;
}

export type IChartingLibraryWidget = {
  saveChartToServer(undefined: undefined, undefined1: undefined, arg2: { defaultChartName: string; }): unknown;
  subscribe(arg0: string, arg1: () => void): unknown;
  unsubscribe(arg0: string, arg1: () => void): unknown;
  onChartReady(arg0: () => void): unknown;
  applyOverrides: (overrides: Record<string, any>) => void;
  setCSSCustomProperty: (key: string, value: string) => void;
  activeChart: () => IChartWidgetApi;
  setSymbol(ticker: string, arg1: any, arg2: () => void): unknown;
  remove: () => void;
  // applyOverrides, setCSSCustomProperty, activeChart, setSymbol, remove
};

export interface IChartWidgetApi {
  crossHairMoved: () => ISubscription<(params: CrossHairMovedEventParams) => void>
  remove: () => void;
  resolution: () => IChartWidgetApi;
  createOrderLine: () => IChartWidgetApi;
  createPositionLine: () => IChartWidgetApi;
  symbol: () => string
  setPrice: (price: number) => IChartWidgetApi;
  setBodyTextColor: (color: string) => IChartWidgetApi;
  setBodyBackgroundColor: (color: string) => IChartWidgetApi;
  setBodyBorderColor: (color: string) => IChartWidgetApi;
  setLineStyle: (style: number) => IChartWidgetApi;
  setLineColor: (color: string) => IChartWidgetApi;
  setBodyFont: (font: string) => IChartWidgetApi;
  setText: (text: string) => IChartWidgetApi;
  setQuantity: (quantity: string) => IChartWidgetApi;
  setQuantityFont: (font: string) => IChartWidgetApi;
  setQuantityTextColor: (color: string) => IChartWidgetApi;
  setQuantityBackgroundColor: (color: string) => IChartWidgetApi;
  setQuantityBorderColor: (color: string) => IChartWidgetApi;
  setCancelButtonBackgroundColor: (color: string) => IChartWidgetApi;
  setCancelButtonBorderColor: (color: string) => IChartWidgetApi;
  setCancelButtonIconColor: (color: string) => IChartWidgetApi;
  setCloseButtonBackgroundColor: (sideColor: string) => IChartWidgetApi;
  setCloseButtonBorderColor: (color: string) => IChartWidgetApi;
  setCloseButtonIconColor: (sideTextColor: string) => IChartWidgetApi;
  getLineLength: () => number;
  getPrice: () => string;
  getText: () => string;
  setLineLength: (lineHorizontalPosition: number) => IChartWidgetApi;
  onMove: (callback: () => void) => IChartWidgetApi;
  onCancel: (callback: () => void) => IChartWidgetApi
  onClose: (callback: () => void) => IChartWidgetApi;

}
