import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../libs/getStatic'

import Link from '../../components/StaticLink'

const Homepage = () => {
  const { t } = useTranslation(['404', 'common', 'footer'])

  return (
    <>
      <main>
        <div>
          <Link href="/">
            <button type="button">{t('common:back-to-home')}</button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
