import React from 'react'
import Results from '../../../components/Results'

const SearchPage = async ({ params }) => {
    const searchTerm = params.searchTerm
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
        { next: { revalidate: 60 } } // in every 60 seconds next js will refetch the data
    )
    const data = await res.json();
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const results = data.results;

    return (
        <div>
            {
                results && results.length === 0 && (
                    <h1 className='text-center pt-6'>No result found</h1>
                )
            }
            {
                results && <Results results={results} />
            }
        </div>
    )
}

export default SearchPage
