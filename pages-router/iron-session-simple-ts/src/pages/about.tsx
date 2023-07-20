import { GetStaticProps } from "next";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function AboutPage() {

  const { t } = useTranslation('common');

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('about')}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await serverSideTranslations(locale ?? 'id', ['common'])
  return {
    props
  }
}