import Navbar from '@/components/Navbar';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';


type Props = {
    children: ReactNode;
    params: { locale: string };
};


export default async function LocaleLayout({
    children,
    params
}: Props) {

    const locale = useLocale();

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale}>
                    <div className='flex flex-col w-full h-screen min-w-[350px] pt-[60px]'>
                        <Navbar />
                        {children}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
