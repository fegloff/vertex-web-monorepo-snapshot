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
    vertex: '',
    blitz: '',
    harmony: '',
  },
  notifiCardId: {
    prod: '',
    dev: '',
  },
  sentryDsn: '',
};
