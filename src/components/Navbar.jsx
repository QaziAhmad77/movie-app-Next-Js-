import React, { Suspense } from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    return (
        <div className='flex dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 justify-center gap-6'>
            <Suspense>
                <NavbarItem title="Trending" param="fetchTrending" />
            </Suspense>
            <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
    )
}

export default Navbar
