import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import LocaleMenu from './LocaleMenu';
import ProfileMenu from './ProfileMenu';
import { useAppContext } from '@/app-context';
import { useRouter } from 'next/router';


export default function Navbar() {

    const router = useRouter();

    const { user } = useAppContext() as AppContextType;

    const [isOpen, setIsOpen] = React.useState(false);

    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        setIsOpen(false);
        //e.preventDefault();
        //console.log(e.currentTarget.href);
        //router.push(e.currentTarget.href);
    }

    return (
        <>
            <nav className='flex-none fixed top-0 left-0 w-full h-[50px] bg-white border-b border-slate-300 flex items-center px-2 z-50 shadow-md shadow-gray-200 '>
                <div className='text-2xl font-bold uppercase'>logo</div>
                <div className={`nav-menu  ${isOpen ? 'open' : 'close'}`}>
                    <Link onClick={onClickHandler} href='/'>Home</Link>
                    <Link onClick={onClickHandler} href='/post'>Post</Link>
                    <Link onClick={onClickHandler} href='/tag'>Tag</Link>
                    <Link onClick={onClickHandler} href='/about'>About</Link>
                </div>
                <div onClick={() => setIsOpen(false)} className={` bg-transparent fixed inset-0 ${isOpen ? 'z-[51] md:hidden' : 'hidden'}`} />
                <div className='ml-auto flex items-center gap-2'>
                    <div className='flex gap-1'>
                        <LocaleMenu />
                        {user && <ProfileMenu />}
                        {!user &&
                            <div className='flex'>
                                <Link href='/login' className='h-[35px] flex items-center border border-e-0 border-slate-300 ps-4 pe-2 rounded-s-full hover:bg-slate-200'>Login</Link>
                                <Link href='/register' className='h-[35px] flex items-center border border-slate-300 ps-2 pe-4 rounded-e-full hover:bg-slate-200'>Register</Link>
                            </div>
                        }
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