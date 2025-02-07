import { joinClassNames } from '@vertex-protocol/web-common';
import { Icons, SecondaryButton } from '@vertex-protocol/web-ui';
import {
  TableCell,
  TableCellProps,
} from 'client/components/DataTable/cells/TableCell';
import { useUserActionState } from 'client/hooks/subaccount/useUserActionState';
import { useUserStateError } from 'client/hooks/subaccount/useUserStateError';
import { useDialog } from 'client/modules/app/dialogs/hooks/useDialog';
import { useIsSingleSignatureSession } from 'client/modules/singleSignatureSessions/hooks/useIsSingleSignatureSession';
import { formatNumber } from 'client/utils/formatNumber/formatNumber';
import { PerpPositionsTableItem } from '../hooks/usePerpPositionsTable';
import { getTableButtonOnClickHandler } from '../utils/getTableButtonOnClickHandler';

interface Props extends TableCellProps {
  productId: number;
  reduceOnlyOrders: PerpPositionsTableItem['reduceOnlyOrders'] | undefined;
  formatSpecifier: string;
}

export function PerpTpSlCell({
  productId,
  reduceOnlyOrders,
  className,
  formatSpecifier,
  ...rest
}: Props) {
  const { show } = useDialog();
  const userStateError = useUserStateError();
  const userActionState = useUserActionState();
  const isSingleSignatureSession = useIsSingleSignatureSession();

  const hasReduceOnlyOrders =
    !!reduceOnlyOrders?.stopLossTriggerPrice ||
    !!reduceOnlyOrders?.takeProfitTriggerPrice;

  const content = (() => {
    // Edit button
    if (hasReduceOnlyOrders) {
      return (
        <>
          <div className="flex flex-col justify-center gap-y-1">
            <div className="text-positive">
              {formatNumber(reduceOnlyOrders?.takeProfitTriggerPrice, {
                formatSpecifier,
              })}
            </div>
            <div className="text-negative">
              {formatNumber(reduceOnlyOrders?.stopLossTriggerPrice, {
                formatSpecifier,
              })}
            </div>
          </div>
          <SecondaryButton
            className="p-1"
            disabled={userActionState === 'block_all'}
            size="sm"
            startIcon={<Icons.MdEdit size={14} />}
            onClick={getTableButtonOnClickHandler(() =>
              show({ type: 'tp_sl', params: { productId } }),
            )}
          />
        </>
      );
    }

    // Add / invalid state buttons
    const { message, onClick, startIcon } = (() => {
      if (!isSingleSignatureSession) {
        return {
          startIcon: undefined,
          message: 'Enable 1CT',
          onClick: () => show({ type: 'signature_mode_settings', params: {} }),
        };
      } else if (userStateError === 'requires_sign_once_approval') {
        return {
          startIcon: undefined,
          message: 'Approve 1CT',
          onClick: () =>
            show({ type: 'single_signature_reapproval', params: {} }),
        };
      } else {
        return {
          startIcon: <Icons.BiPlus size={14} />,
          message: `Add`,
          onClick: () => show({ type: 'tp_sl', params: { productId } }),
        };
      }
    })();

    return (
      <SecondaryButton
        className="gap-x-1 px-2 py-0.5"
        disabled={userActionState === 'block_all'}
        size="sm"
        startIcon={startIcon}
        onClick={getTableButtonOnClickHandler(onClick)}
      >
        {message}
      </SecondaryButton>
    );
  })();

  return (
    <TableCell
      className={joinClassNames(
        'pointer-events-auto flex items-center gap-x-2',
        className,
      )}
      {...rest}
    >
      {content}
    </TableCell>
  );
}
