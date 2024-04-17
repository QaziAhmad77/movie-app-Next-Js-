import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <div className='flex gap-4'>
                <MenuItem title="home" address="/" Icon={AiFillHome} />
                <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            <Link href={"/"} className='flex items-center gap-1'>
                <span className='text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>
    )
}

export default Header
