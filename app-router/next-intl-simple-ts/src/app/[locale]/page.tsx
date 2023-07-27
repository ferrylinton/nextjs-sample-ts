
import {useTranslations} from 'next-intl';

export default function HomePage() {

  const t = useTranslations('common');

  return (
    <main className='flex flex-col h-full items-center justify-center'>
      <div className='mb-3'>{t('home')}</div>
    </main>
  )
}
