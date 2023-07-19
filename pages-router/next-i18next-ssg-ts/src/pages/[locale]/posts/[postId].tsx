import { findPostByID, findAll } from '@/libs/post-service';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../../../../next-i18next.config';


type Props = {
    content: string
}

export default function PostPageById({ content }: Props) {
    return (
        <main className='flex flex-col h-full items-center justify-center'>{content}</main>
    )
}

export function getStaticPaths() {
    const paths: any = [];

    for (let i = 0; i < nextI18nextConfig.i18n.locales.length; i++) {
        for (let j = 0; j < findAll().length; j++) {
            paths.push({
                params: {
                    locale: nextI18nextConfig.i18n.locales[i],
                    postId: findAll()[j].id
                }
            })
        }
    }
    
    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const postId = params?.postId as string;
    const post = findPostByID(postId);

    const locale = params?.locale as string || nextI18nextConfig.i18n.defaultLocale;
    const content = (locale === 'en') ? post?.contentEN : post?.contentID

    const props = await serverSideTranslations(locale, ['common']);

    return {
        props: {
            content,
            ...props
        }
    }
}