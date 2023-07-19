'use client';

import AngelDownIcon from '@/icons/AngelDownIcon';
import CheckIcon from '@/icons/CheckIcon';
import EnIcon from '@/icons/EnIcon';
import IdIcon from '@/icons/IdIcon';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'next-i18next';
import languageDetector from '@/libs/languageDetector';

const locales = [
    { "value": "id", "label": "Indonesia", "flag": <IdIcon className='w-[28px] h-[21px] border border-slate-300 rounded shadow-md' /> },
    { "value": "en", "label": "English", "flag": <EnIcon className='w-[28px] h-[21px] border border-slate-300 rounded shadow-md' /> }
]

const LocaleMenu = () => {

    const router = useRouter();

    const { i18n } = useTranslation('common');

    const handleSelectLocale = (value: string) => {
        if (languageDetector.cache) {
            languageDetector.cache(value as string);
        }

        const query = JSON.parse(JSON.stringify(router.query));
        delete query.locale;
        router.push({ pathname: getUrl(value), query });
    }

    const getFlag = () => {
        for (let i = 0; i < locales.length; i++) {
            if (locales[i].value === i18n.language) {
                return locales[i].flag
            }
        }

        return '-';
    }

    const getUrl = (locale: string) => {
        let href = router.asPath
        let pName = router.pathname
        Object.keys(router.query).forEach(k => {
            if (k === 'locale') {
                pName = pName.replace(`[${k}]`, locale)
                return
            }
        })

        if (locale) {
            href = pName
        }

        if (href.indexOf(`/${locale}`) < 0) {
            href = `/${locale}${href}`
        }

        return href;
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className='nav-dropdown-trigger' asChild>
                <button aria-label="Customise options" >
                    {getFlag()} <AngelDownIcon className='w-[10px] h-[10px]' />
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="nav-dropdown-content" side='bottom' sideOffset={5} align='end' alignOffset={5}>
                    <DropdownMenu.RadioGroup value={i18n.language} onValueChange={handleSelectLocale}>
                        {
                            locales.map((locale) => {
                                return (
                                    <DropdownMenu.RadioItem key={locale.label} className="nav-dropdown-item" value={locale.value} >
                                        <DropdownMenu.ItemIndicator className="nav-dropdown-indicator">
                                            <CheckIcon className='nav-dropdown-indicator-icon' />
                                        </DropdownMenu.ItemIndicator>
                                        <div className='flex justify-center items-center gap-2'>
                                            {locale.flag} <span>{locale.label}</span>
                                        </div>
                                    </DropdownMenu.RadioItem>
                                )
                            })
                        }
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default LocaleMenu;