import { GetStaticPropsContext } from "next";
import nextI18nextConfig from "../../next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export function getI18nPaths() {
    return nextI18nextConfig.i18n.locales.map(lng => ({
        params: {
            locale: lng,
        },
    }))
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: getI18nPaths(),
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const locale = params?.locale as string || nextI18nextConfig.i18n.defaultLocale;
    const props = await serverSideTranslations(locale, ['common']);
    return {
        props
    }
}