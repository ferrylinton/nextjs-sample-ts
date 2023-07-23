import pick from 'lodash/pick';
import { GetStaticProps } from "next";
import { useTranslations } from 'next-intl';


export default function NotFoundPage() {

  const t = useTranslations('common');

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('notFound')}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = pick((await import(`../../messages/${locale}.json`)), ['common']);

  return {
    props: {
      messages
    }
  }
}
