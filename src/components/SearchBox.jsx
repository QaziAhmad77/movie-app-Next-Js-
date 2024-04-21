"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBox = () => {
    const router = useRouter()
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search/${search}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-between px-5 max-w-6xl mx-auto">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search keywords...'
                className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
            />
            <button type="submit" className='text-amber-600 disabled:text-gray-400' disabled={search === ""}>Search</button>
        </form>
    )
}

export default SearchBox
