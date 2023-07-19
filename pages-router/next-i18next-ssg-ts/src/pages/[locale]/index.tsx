import { useTranslation } from 'next-i18next';
import { getStaticPaths, getStaticProps } from '../../libs/ssg-locale-helper';

export default function Homepage() {
  const { t } = useTranslation(['common'])

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      {t('home')}
    </main>
  )
}

export { getStaticPaths, getStaticProps };

