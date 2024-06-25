import { Suspense } from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    return (
        <div className='flex dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 justify-center gap-6'>
            <Suspense>
                <NavbarItem title="Qazi Ahmad" param="fetchTrending" />
                <NavbarItem title="Top Rated" param="fetchTopRated" />
            </Suspense>
        </div>
    )
}

export default Navbar
