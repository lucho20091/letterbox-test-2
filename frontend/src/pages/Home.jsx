import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../constants/api'
export default function Home() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(API === 'test' ? 'http://localhost:3000/api/movies' : '/api/movies')
                const data = await response.json()
                console.log(data)
                setMovies(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div className='grow'>
            <div className="container mx-auto p-4">
                <div className="pt-8">
                    <h1 className="text-4xl font-bold mb-2">Movies</h1>
                    <p className="text-gray-700">Discover and rate your favorite films</p>
                </div>
                <div className="grid py-8 gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {movies && movies.map((movie) => (
                        <div 
                            key={movie._id} 
                            className="group cursor-pointer"
                        >  
                            <div 
                                className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl 
                                aspect-[2/3] sm-aspect-[2/3]"
                                >
                                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                                        <h2 className="text-sm sm:text-xl font-semibold text-white mb-1 sm:mb-2 line-clamp-2 text-center">{movie.title}</h2>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center space-x-1 bg-black/50
                                backdrop-blur-xs px-1 sm:px-2 py-1 sm:py-2 rounded-lg group-hover:backdrop-blur-3xl">
                                    {Array.from({ length: Math.floor(movie.rating/2)}).map((_, index) => (
                                        <span key={index} className="text-yellow-500 text-base sm:text-xl group-hover:text-yellow-300">★</span>
                                    ))}
                                    <span className="text-sm sm:text-lg font-semibold text-white group-hover:font-bold">{movie.rating/2}/5</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

