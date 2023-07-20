import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {}

export default function ProfilePage({}: Props) {
  return (
    <main className='flex flex-col h-full items-center justify-center'>
      Profile Page
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await serverSideTranslations(locale ?? 'id', ['common'])
  return {
    props
  }
}