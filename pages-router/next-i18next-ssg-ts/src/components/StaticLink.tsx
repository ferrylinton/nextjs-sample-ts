import React, { HTMLProps, PropsWithChildren } from 'react'
import Link , { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  skipLocaleHandling?: boolean,
  locale?: string
} & LinkProps & HTMLProps<HTMLAnchorElement>;

const StaticLink = ({ children, skipLocaleHandling, href, className, ...rest }: Props) => {
  const router = useRouter()
  const locale = rest.locale || router.query.locale || ''

  let newHref = href || router.asPath
  if (newHref.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    newHref = newHref
      ? `/${locale}${newHref}`
      : router.pathname.replace('[locale]', locale as string)
  }

  return (
    <>
      <Link href={newHref} className={className}>
        {children}
      </Link >
    </>
  )
}

export default StaticLink