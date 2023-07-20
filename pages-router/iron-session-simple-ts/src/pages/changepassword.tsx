import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {}

export default function ChangePasswordPage({}: Props) {
  return (
    <main className='flex flex-col h-full items-center justify-center'>
      Change Password Page
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await serverSideTranslations(locale ?? 'id', ['common'])
  return {
    props
  }
}