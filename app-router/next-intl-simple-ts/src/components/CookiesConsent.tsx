'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { CONSENT_COOKIE_EXPIRE_DATE, CONSENT_COOKIE_KEY } from '@/libs/constants';


export default function CookiesConsent() {

    const [consentCookie, setConsentCookie] = useState(true);

    useEffect(() => {
        const consentCookie = Cookies.get(CONSENT_COOKIE_KEY) === 'true'
        setConsentCookie(consentCookie)
    }, [])

    const handleConsentCookie = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!consentCookie) {
            Cookies.set(CONSENT_COOKIE_KEY, 'true', { expires: CONSENT_COOKIE_EXPIRE_DATE })
            setConsentCookie(true)
        }
    }

    if (consentCookie) {
        return null;
    } else {
        return (
            <div className="fixed bottom-0 left-0 w-full py-4 px-2 lg:px-20 bg-slate-300 z-[60]">
                <div className="flex gap-1 justify-between items-center">
                    <div className="flex-grow text-sm md:text-base">
                        This site uses cookies.
                    </div>
                    <div className="flex items-center">
                        <button
                            className="py-2 md:py-3 px-3 md:px-4 min-w-[90px] md:min-w-[120px] rounded-full text-sm md:text-base font-bold text-slate-100 hover:text-white uppercase bg-slate-600 hover:bg-slate-700 whitespace-nowrap"
                            onClick={handleConsentCookie} >
                            Got it
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}