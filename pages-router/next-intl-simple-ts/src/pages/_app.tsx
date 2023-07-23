import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { IntlError, IntlErrorCode, NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';

function onError(error: IntlError) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    console.warn(error.message);
  } else {
    console.error(error);
  }
}

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextIntlClientProvider messages={pageProps.messages} onError={onError}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlClientProvider>

  )
}
