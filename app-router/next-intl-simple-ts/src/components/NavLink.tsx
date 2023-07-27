import clsx from 'clsx';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';
import React, { PropsWithChildren } from 'react';

type Props = {
    href: string
    className?: string,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
} & PropsWithChildren


export default function NavLink({ className, children, href, onClick }: Props) {

    const pathname = usePathname();

    const isActive = pathname === href || pathname === href + '/';

    return (
        <Link className={clsx({ className, active: isActive })} onClick={onClick} href={href}>
            {children}
        </Link>
    );
}