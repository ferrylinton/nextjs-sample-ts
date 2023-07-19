import { findAll } from '@/libs/post-service';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from '../../../components/StaticLink';
import nextI18nextConfig from '../../../../next-i18next.config';


type Props = {
    posts: [{
        id: string,
        content: string
    }]
}

export default function PostPageById({ posts }: Props) {
    return (
        <main className='flex flex-col h-full items-center justify-center'>
            {
                posts.map((post) => {
                    return <Link key={post.id} href={`/posts/${post.id}`} className='min-w-[300px] mb-[2px] border border-slate-300 hover:bg-slate-100 p-3'>{post.content}</Link>
                })
            }
        </main>
    )
}

export function getStaticPaths() {
    const paths: any = [];

    for (let i = 0; i < nextI18nextConfig.i18n.locales.length; i++) {
        paths.push({
            params: {
                locale: nextI18nextConfig.i18n.locales[i],
            }
        })

    }

    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const locale = params?.locale as string || nextI18nextConfig.i18n.defaultLocale;
    const props = await serverSideTranslations(locale, ['common']);

    const posts = findAll().map(({ id, contentEN, contentID }) => {
        const content = (locale === 'en') ? contentEN : contentID;
        return { id, content }
    })

    return {
        props: {
            posts,
            ...props
        }
    }
}