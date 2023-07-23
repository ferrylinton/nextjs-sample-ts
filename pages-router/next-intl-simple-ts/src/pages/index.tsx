import pick from 'lodash/pick';
import { GetStaticProps } from "next";
import { useTranslations } from 'next-intl';


export default function HomePage() {

  const t = useTranslations('common');

  const handleRedirect = () => {
    console.log('redirect...');
  }

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      <div>{t('home')}</div>
      <button type='button' onClick={handleRedirect}>{t('redirect')}</button>
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
