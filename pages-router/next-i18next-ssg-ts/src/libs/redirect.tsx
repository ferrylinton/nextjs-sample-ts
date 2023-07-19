import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'

export const useRedirect = (to?: string) => {
    const router = useRouter()
    const target = to || router.asPath

    // language detection
    useEffect(() => {
        const detectedLng = languageDetector.detect();
        if (
            target.startsWith('/' + detectedLng) &&
            router.route === '/404'
        ) {
            // prevent endless loop
            router.replace('/' + detectedLng + router.route)
            return
        }

        if (languageDetector.cache) {
            languageDetector.cache(detectedLng as string);
        }

        router.replace('/' + detectedLng + target)
    })

    return <></>
}

export const Redirect = () => {
    useRedirect()
    return <></>
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to: string) => () => {
    useRedirect(to)
    return <></>
}