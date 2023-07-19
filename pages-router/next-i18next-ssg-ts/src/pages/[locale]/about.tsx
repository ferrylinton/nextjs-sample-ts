import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../libs/getStatic'

const AboutPage = () => {
  const { t } = useTranslation(['common'])

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('about')}
    </main>
  )
}

export default AboutPage

const getStaticProps = makeStaticProps(['common']);

export { getStaticPaths, getStaticProps }
