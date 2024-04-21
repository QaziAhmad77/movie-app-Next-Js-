"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const NavbarItem = ({ title, param }) => {
    // const pathName = usePathname();
    const searchParams = useSearchParams()
    const genre = searchParams.get('genere')

    return (
        <div>
            <Link href={`/?genere=${param}`} className={`hover:text-amber-600 font-semibold ${genre === param ?
                "underline underline-offset-8 decoration-amber-500 rounded-lg" : ""}`}>
                {title}
            </Link>
        </div>
    )
}

export default NavbarItem
