import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = {
    className?: string
} & PropsWithChildren<LinkProps>

export default function NavLink({ children, className, ...props }: Props) {
    const { asPath } = useRouter();
    const isActive = asPath === props.href || asPath === props.href + '/';

    return (
        <Link className={clsx({ className, active: isActive })} {...props}>
            {children}
        </Link>
    );
}