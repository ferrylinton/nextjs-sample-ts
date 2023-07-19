import { useTranslation } from 'next-i18next';
import { getStaticPaths, getStaticProps } from '../../libs/ssg-locale-helper';

export default function AboutPage() {
  const { t } = useTranslation(['common'])

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('about')}
    </main>
  )
}


export { getStaticPaths, getStaticProps };
