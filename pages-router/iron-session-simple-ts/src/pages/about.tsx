import { GetServerSidePropsContext, GetStaticProps } from "next";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type AboutResponse = {
  message: string
}


export default function AboutPage({ message }: AboutResponse) {

  const { t } = useTranslation('common');

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('about')}
      <div className="border border-slate-300 p-3">{message}</div>
    </main>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const locale = context.locale || 'id';
  const props = await serverSideTranslations(context.locale ?? 'id', ['common'])
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/about`);

  if (res.ok) {
    const { message } = await res.json() as AboutResponse;

    return {
      message,
      ...props
    }
  } else {
    const destination = (locale === 'id' ? '/login' : `/${locale}/login`)
    return {
      redirect: {
        destination,
        permanent: false
      }
    };
  }

};

