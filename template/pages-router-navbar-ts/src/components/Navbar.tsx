import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import LocaleSwitcher from './LocaleSwitcher';
import ProfileMenu from './ProfileMenu';
import LocaleMenu from './LocaleMenu';
import { useOutsideClick } from '@/hooks/useOutsideClick';

type Props = {}

export default function Navbar({ }: Props) {

    const [isOpen, setIsOpen] = React.useState(false);

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className='fixed top-0 left-0 w-full h-[50px] bg-white border-b border-slate-300 flex items-center px-2 z-50 shadow-md shadow-gray-200 '>
                <div className='text-2xl font-bold uppercase'>logo</div>
                <div className={`nav-menu  ${isOpen ? 'open' : 'close'}`}>
                    <Link onClick={onClickHandler} href='/'>Home</Link>
                    <Link onClick={onClickHandler} href='/post'>Post</Link>
                    <Link onClick={onClickHandler} href='/tag'>Tag</Link>
                    <Link onClick={onClickHandler} href='/login'>Login</Link>
                    <Link onClick={onClickHandler} href='/register'>Register</Link>
                </div>
                <div onClick={() => setIsOpen(false)} className={` bg-transparent fixed inset-0 ${isOpen ? 'z-[51] md:hidden' : 'hidden'}`} />
                <div className='ml-auto flex items-center gap-2'>
                    <div className='flex gap-1'>
                        <LocaleMenu />
                        <ProfileMenu />
                    </div>
                    <button type='button' onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                        {!isOpen && <HamburgerMenuIcon className=' w-[35px] h-[35px]' />}
                        {isOpen && <Cross1Icon className=' w-[35px] h-[35px]' />}
                    </button>
                </div>
            </nav>

        </>
    )
}