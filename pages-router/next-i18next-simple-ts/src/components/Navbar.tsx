import Link from 'next/link';
import React from 'react';
import LocaleMenu from './LocaleMenu';
import MenuIcon from '@/icons/MenuIcon';
import CloseIcon from '@/icons/CloseIcon';
import { useTranslation } from 'next-i18next';


export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        setIsOpen(false);
    }

    const { t } = useTranslation('common');

    return (
        <>
            <nav className='flex-none fixed top-0 left-0 w-full h-[50px] bg-white border-b border-slate-300 flex items-center px-2 z-50 shadow-md shadow-gray-200 '>
                <div className='text-2xl font-bold uppercase'>logo</div>
                <div className={`nav-menu  ${isOpen ? 'open' : 'close'}`}>
                    <Link onClick={onClickHandler} href='/'>{t('home')}</Link>
                    <Link onClick={onClickHandler} href='/about'>{t('about')}</Link>
                </div>
                <div onClick={() => setIsOpen(false)} className={` bg-transparent fixed inset-0 ${isOpen ? 'z-[51] md:hidden' : 'hidden'}`} />
                <div className='ml-auto flex items-center gap-3'>
                    <div className='flex gap-1'>
                        <LocaleMenu />
                    </div>
                    <button type='button' onClick={() => setIsOpen(!isOpen)} className='md:hidden text-gray-600'>
                        {!isOpen && <MenuIcon className=' w-[45px] h-[45px]' />}
                        {isOpen && <CloseIcon className=' w-[45px] h-[45px]' />}
                    </button>
                </div>
            </nav>

        </>
    )
}