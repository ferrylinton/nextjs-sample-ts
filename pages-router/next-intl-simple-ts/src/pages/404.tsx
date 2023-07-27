import pick from 'lodash/pick';
import { GetStaticProps } from "next";
import { useTranslations } from 'next-intl';


export default function NotFoundPage() {

  const t = useTranslations('common');

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <div className='leading-none text-5xl'>404</div>
        <div className='leading-none text-lg'>{t('notFound')}</div>
      </div>
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
