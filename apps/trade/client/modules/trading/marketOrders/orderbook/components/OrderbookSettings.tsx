import { BigDecimal } from '@vertex-protocol/client';
import { TickSpacingSelect } from 'client/modules/trading/marketOrders/orderbook/components/TickSpacingSelect';
import { ToggleViewButton } from 'client/modules/trading/marketOrders/orderbook/components/ToggleViewButton';
import { TotalAmountDenomSelect } from 'client/modules/trading/marketOrders/orderbook/components/TotalAmountDenomSelect';
import React from 'react';
import { OrderbookPriceTickSpacingMultiplier } from '../types';

interface Props {
  currentTickSpacing: number;
  tickSpacingMultiplier: OrderbookPriceTickSpacingMultiplier;
  setTickSpacingMultiplier: (
    value: OrderbookPriceTickSpacingMultiplier,
  ) => void;
  showOrderbookTotalInQuote: boolean;
  setShowOrderbookTotalInQuote: (value: boolean) => void;
  symbol: string | undefined;
  priceIncrement: BigDecimal | undefined;
}

function BaseOrderbookSettings({
  currentTickSpacing,
  tickSpacingMultiplier,
  setTickSpacingMultiplier,
  showOrderbookTotalInQuote,
  setShowOrderbookTotalInQuote,
  symbol,
  priceIncrement,
}: Props) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-x-1">
        <ToggleViewButton variant="bids_and_asks" />
        <ToggleViewButton variant="only_bids" />
        <ToggleViewButton variant="only_asks" />
      </div>
      <div className="flex gap-x-1.5">
        <TickSpacingSelect
          priceIncrement={priceIncrement}
          currentTickSpacing={currentTickSpacing}
          tickSpacingMultiplier={tickSpacingMultiplier}
          setTickSpacingMultiplier={setTickSpacingMultiplier}
        />
        <TotalAmountDenomSelect
          symbol={symbol}
          showOrderbookTotalInQuote={showOrderbookTotalInQuote}
          setShowOrderbookTotalInQuote={setShowOrderbookTotalInQuote}
        />
      </div>
    </div>
  );
}

export const OrderbookSettings = React.memo(BaseOrderbookSettings);
