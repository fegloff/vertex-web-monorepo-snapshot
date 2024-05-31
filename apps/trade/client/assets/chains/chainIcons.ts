import { NextImageSrc } from '@vertex-protocol/web-common';
import { PrimaryChainID } from '@vertex-protocol/web-data';
import arbitrumLogo from 'client/assets/chains/arbitrum.svg';
import blastLogo from 'client/assets/chains/blast.svg';
import mantleLogo from 'client/assets/chains/mantle.svg';
import harmonyLogo from 'client/assets/chains/one.svg';

import {
  arbitrum,
  arbitrumSepolia,
  blast,
  blastSepolia,
  hardhat,
  harmonyMainnet,
  localhost,
  mantleSepoliaTestnet,
} from '@vertex-protocol/web-data';

export const CHAIN_ICON_BY_CHAIN: Record<number, NextImageSrc> = {
  [localhost.id]: arbitrumLogo,
  [hardhat.id]: arbitrumLogo,
  [arbitrumSepolia.id]: arbitrumLogo,
  [arbitrum.id]: arbitrumLogo,
  [blastSepolia.id]: blastLogo,
  [blast.id]: blastLogo,
  [mantleSepoliaTestnet.id]: mantleLogo,
  [harmonyMainnet.id]: harmonyLogo,
} satisfies Record<PrimaryChainID, NextImageSrc>;
