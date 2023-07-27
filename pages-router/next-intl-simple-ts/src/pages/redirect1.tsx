import { GetServerSideProps } from "next";
import { i18n } from '../../locale-config';


export default function Redirect1Page() {

  return (
    <main className='flex flex-col h-full items-center justify-center'>This should redirect to '/login'</main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const destination = (locale === i18n.defaultLocale) ? '/login' : `/${locale}/login`;
  console.log(destination);

  return {
    redirect: {
      destination,
      permanent: false,
    },
  }
}
