import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className='pt-[60px]'>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}