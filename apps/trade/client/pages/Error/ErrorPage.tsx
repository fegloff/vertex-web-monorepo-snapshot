import { PrimaryButton } from '@vertex-protocol/web-ui';
import { ROUTES } from 'client/modules/app/consts/routes';
import Link from 'next/link';

export function ErrorPage({ statusCode }: { statusCode: 404 | 500 }) {
  return (
    <div className="flex h-svh w-screen flex-col items-center justify-center gap-y-12">
      <div className="flex flex-col items-center gap-y-2">
        <div className="text-text-secondary text-[96px] font-medium leading-none lg:text-[16rem]">
          {statusCode}
        </div>
        <p className="text-text-secondary lg:text-3xl">
          {statusCode === 404 ? 'Page not found' : 'Server error'}
        </p>
      </div>
      <PrimaryButton size="lg" as={Link} href={ROUTES.portfolio.overview}>
        Take me to Overview
      </PrimaryButton>
    </div>
  );
}
