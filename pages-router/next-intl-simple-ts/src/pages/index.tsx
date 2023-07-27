import pick from 'lodash/pick';
import { GetServerSideProps } from "next";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';


export default function HomePage() {

  const t = useTranslations('common');
  const { push } = useRouter();

  const handleRedirect = () => {
    push('/redirect1')
  }

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      <div className='mb-3'>{t('home')}</div>
      <button className='border border-slate-300 px-5 py-2 rounded-full hover:bg-slate-200' type='button' onClick={handleRedirect}>{t('redirect')}</button>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const messages = pick((await import(`../../messages/${locale}.json`)), ['common']);

  return {
    props: {
      messages
    }
  }
}
