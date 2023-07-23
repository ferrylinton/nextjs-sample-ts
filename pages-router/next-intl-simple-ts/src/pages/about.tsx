import pick from 'lodash/pick';
import { GetStaticProps } from "next";
import { useTranslations } from 'next-intl';

export default function AboutPage() {

  const t = useTranslations('common');

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('about')}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const messages = pick((await import(`../../messages/${context.locale}.json`)), ['common']);

  return {
    props: {
      messages
    }
  }
}