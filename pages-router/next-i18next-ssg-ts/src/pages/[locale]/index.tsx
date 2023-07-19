import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../libs/getStatic'

const Homepage = () => {
  const { t } = useTranslation(['common'])

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('home')}
    </main>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common']);

export { getStaticPaths, getStaticProps }
