import {
  BLITZ_TAILWIND_CONFIG,
  VERTEX_TAILWIND_CONFIG,
} from '@vertex-protocol/web-ui/tailwind';
import { Config } from 'tailwindcss';

import brandName from './common/environment/envBrandName';

const preset = {
  vertex: VERTEX_TAILWIND_CONFIG,
  blitz: BLITZ_TAILWIND_CONFIG,
  harmony: VERTEX_TAILWIND_CONFIG,
}[brandName];

console.log(`Initializing TW Config for ${brandName}.`);

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './client/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        'mobile-bottom-sheet': '80px',
      },
      minWidth: {
        'trade-sidebar': '320px',
      },
      width: {
        'subnav-menu': '150px',
        'market-orders': '260px',
        'trade-sidebar': '320px',
      },
      height: {
        navbar: '4rem',
        footer: '2rem',
        'desktop-navbar-item': '2.5rem',
        'trading-top-bar': '3rem',
      },
      // :HARMONY: TEMPORARY ADDED FOR ISSUES WITH BUILD PROCESS
      // colors: {
      //   background: {
      //     DEFAULT: '#0D0D12',
      //   },
      //   surface: {
      //     card: '#16161D',
      //     1: '#1B1B22',
      //     2: '#21212B',
      //     3: '#373748',
      //   },
      //   stroke: {
      //     DEFAULT: '#1B1B22',
      //   },
      //   text: {
      //     primary: '#FFFFFF',
      //     secondary: '#CDCDD0',
      //     tertiary: '#95959D',
      //   },
      //   disabled: {
      //     DEFAULT: '#424247',
      //   },
      //   accent: {
      //     DEFAULT: '#A39EFB',
      //   },
      //   positive: {
      //     DEFAULT: '#3DF57B',
      //     muted: '#1A2C26',
      //   },
      //   primary: {
      //     DEFAULT: '#8062F1',
      //   },
      //   negative: {
      //     DEFAULT: '#EA435C',
      //     muted: '#281A21',
      //   },
      //   warning: {
      //     DEFAULT: '#D1A816',
      //     muted: '#232015',
      //   },
      //   overlay: {
      //     divider: '#FFFFFF',
      //     accent: '#A39EFB',
      //     hover: '#FFFFFF',
      //     disabled: '#0D0D12',
      //   },
      //   'grad-slider': {
      //     start: '#1B1B22',
      //     mid: '#A39EFB',
      //     end: '#1B1B22',
      //   },
      //   'grad-nav-surface': {
      //     start: '#21212B',
      //     end: '#13151C',
      //   },
      //   // Risk Bar
      //   risk: {
      //     low: '#00C287',
      //     medium: '#C7B653',
      //     high: '#E26D7E',
      //     extreme: '#CC113F',
      //   },
      // }
    },
  },
  presets: [preset],
};

export default config;
