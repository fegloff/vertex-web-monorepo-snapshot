/**
 * TESTING: TradingView WidgetConfig temporarily modified
 * This file contains a mock WidgetConfig for testing purposes.
 * To re-enable full TradingView functionality, uncomment the original implementation
 * and remove the mock version.
 */

// Comment out the original import
// import {
//   ChartingLibraryWidgetOptions,
//   Overrides,
// } from 'public/charting_library/charting_library';

// Mock types to replace TradingView types
type Overrides = Record<string, any>;
type ChartingLibraryWidgetOptions = Record<string, any>;

export interface WidgetConfig {
  // Custom css properties -> colors
  styling: Record<string, string>;
  // Specific overrides for the chart
  overrides: Overrides;
  // Specific options for the chart
  options: Omit<ChartingLibraryWidgetOptions, 'datafeed'>;
}
