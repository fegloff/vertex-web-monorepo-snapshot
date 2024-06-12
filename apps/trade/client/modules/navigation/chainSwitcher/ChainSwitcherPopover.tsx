import * as Popover from '@radix-ui/react-popover';
import { ChainEnv } from '@vertex-protocol/client';
import {
  joinClassNames,
  NextImageSrc,
  VERTEX_SPECIFIC_LINKS,
  WithChildren,
} from '@vertex-protocol/web-common';
import {
  harmonyTestnet,
  PrimaryChainID,
  useEVMContext,
} from '@vertex-protocol/web-data';
import {
  Divider,
  Icons,
  NavBarCardButton,
  PrimaryButton,
} from '@vertex-protocol/web-ui';
import { CHAIN_ICON_BY_CHAIN } from 'client/assets/chains/chainIcons';
import { ChainSwitcherItemButton } from 'client/modules/navigation/chainSwitcher/components/ChainSwitcherItemButton';
import { NavPopoverContentContainer } from 'client/modules/navigation/components/NavPopoverContentContainer';
import { clientEnv } from 'common/environment/clientEnv';
import { startCase } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

import blitzIcon from './assets/blitz-chain-switcher-icon.svg';
import harmonyIcon from './assets/one.svg';

import {
  harmonyMainnet,
  arbitrum,
  arbitrumSepolia,
  mantleSepoliaTestnet,
} from '@vertex-protocol/web-data';

interface NetworkOption {
  icon: NextImageSrc;
  label: string;
  primaryChainId: PrimaryChainID;
  chainEnv: ChainEnv;
}

const NETWORK_OPTIONS = ((): NetworkOption[] => {
  switch (clientEnv.base.dataEnv) {
    case 'vertexTestnet':
      return [
        {
          icon: CHAIN_ICON_BY_CHAIN[arbitrumSepolia.id],
          label: 'Arbitrum',
          primaryChainId: arbitrumSepolia.id,
          chainEnv: 'testnet',
        },
        {
          icon: CHAIN_ICON_BY_CHAIN[mantleSepoliaTestnet.id],
          label: 'Mantle',
          primaryChainId: mantleSepoliaTestnet.id,
          chainEnv: 'mantleTestnet',
        },
      ];
    case 'vertexMainnet':
      return [
        {
          icon: CHAIN_ICON_BY_CHAIN[arbitrum.id],
          label: 'Arbitrum',
          primaryChainId: arbitrum.id,
          chainEnv: 'mainnet',
        },
      ];
    case 'harmonyMainnet':
      return [
        {
          icon: CHAIN_ICON_BY_CHAIN[harmonyMainnet.id],
          label: 'Harmony',
          primaryChainId: harmonyMainnet.id,
          chainEnv: 'harmonyMainnet',
        },
      ];
    case 'harmonyTestnet':
      return [
        {
          icon: CHAIN_ICON_BY_CHAIN[harmonyTestnet.id],
          label: 'Harmony Testnet',
          primaryChainId: harmonyTestnet.id,
          chainEnv: 'harmonyTestnet',
        },
      ];
    default:
      console.error(
        '[ChainSwitcherPopover] Invalid dataEnv for chain switcher',
      );
      return [];
  }
})();

export function ChainSwitcherPopover() {
  const {
    primaryChain,
    setPrimaryChainEnv,
    chainStatus: { isIncorrectChain },
    switchChain,
    supportedChains,
  } = useEVMContext();

  const triggerChainIcon = (
    <div className="relative">
      <Image
        src={CHAIN_ICON_BY_CHAIN[primaryChain.id]}
        alt={primaryChain.name}
        className="h-5 w-auto"
      />
      {isIncorrectChain && (
        <Icons.BsExclamation
          className="bg-warning-muted text-warning absolute -bottom-0.5 -right-0.5 rounded-full"
          size={12}
        />
      )}
    </div>
  );

  const switchChainCta = isIncorrectChain && (
    <PrimaryButton
      size="md"
      onClick={() => {
        switchChain();
      }}
    >
      Switch to {startCase(primaryChain.name)}
    </PrimaryButton>
  );

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <NavBarCardButton
          className={joinClassNames(
            'flex aspect-square items-center justify-center',
            'data-[state=open]:bg-surface-2',
          )}
        >
          {triggerChainIcon}
        </NavBarCardButton>
      </Popover.Trigger>
      <Popover.Content sideOffset={8} side="top" align="end" asChild>
        <NavPopoverContentContainer className="z-10 flex min-w-[180px] flex-col gap-y-2 p-1 text-sm">
          {switchChainCta}
          <Section title="Network">
            {NETWORK_OPTIONS.map((option) => {
              const isActive = option.primaryChainId === primaryChain.id;
              return (
                <ChainSwitcherItemButton
                  key={option.label}
                  icon={option.icon}
                  label={option.label}
                  active={option.primaryChainId === primaryChain.id}
                  onClick={() => {
                    if (!isActive) {
                      setPrimaryChainEnv(option.chainEnv);
                    }
                  }}
                />
              );
            })}
          </Section>
          <Divider />
          <Section title="Apps on other networks">
            <ChainSwitcherItemButton
              as={Link}
              external
              href={VERTEX_SPECIFIC_LINKS.blitzApp}
              icon={blitzIcon}
              label="Blitz on Blast"
            />
          </Section>
        </NavPopoverContentContainer>
      </Popover.Content>
    </Popover.Root>
  );
}

function Section({ title, children }: WithChildren<{ title: string }>) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <span className="text-text-tertiary pl-1.5 text-xs">{title}</span>
      <div className="flex flex-col gap-y-1">{children}</div>
    </div>
  );
}
