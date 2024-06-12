/**
 * A centralized place to store sensitive (but not "secret") items such that we can easily delete the items
 * in this file for open sourcing.
 */
export const SENSITIVE_DATA = {
  spindlApiKey: '',
  transakApiKey: {
    prod: '',
    staging: '',
  },
  googleAnalyticsId: {
    vertex: '',
    blitz: '',
    harmony: '',
  },
  walletConnectProjectId: {
    vertex: process.env.NEXT_PUBLIC_WALLET_CONNECT_KEY ?? '',
    blitz: '',
    harmony: process.env.NEXT_PUBLIC_WALLET_CONNECT_KEY ?? '',
  },
  notifiCardId: {
    prod: '',
    dev: '',
  },
  sentryDsn: '',
};
