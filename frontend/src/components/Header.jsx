import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navigate = useNavigate()
    
    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="relative bg-gradient-to-r from-indigo-950 to-violet-950 text-white shadow-lg py-4">
            <div className="container mx-auto px-4 flex justify-between items-center h-8">
                <Link 
                    to="/"
                    className="text-xl font-bold"
                    >
                    <span className="text-purple-400">Letterboxd</span>
                    <span className="text-white">Movies</span>
                </Link>
                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-4">
                    <Link 
                        to="/" 
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                        Home
                    </Link>
                    <Link 
                        to="/profiles" 
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                        Profiles
                    </Link>
                    <Link 
                        to="/watchlist" 
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                        Watchlist
                    </Link>
                    {isLoggedIn ? (
                        <div className="flex items-center">      
                        <Link
                            to="/profile/lucho20091"
                            className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                            <img 
                                src="https://static-cdn.jtvnw.net/jtv_user_pictures/114392b2-2ef3-4a7a-b582-69190c333012-profile_image-70x70.png" 
                                alt="profile picture"
                                className="w-8 h-8 rounded-full border-4 border-purple-400"
                            />
                            <span className="ml-1">lucho20091</span>
                        </Link>                  
                        <button 
                            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                            Logout
                        </button>
                        </div>
                    ) : (
                        <Link 
                        to="/login"
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                        Login
                    </Link>
                    )}
                </nav>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-md text-white hover:bg-indigo-800/40 transition-colors"
                        aria-label="Toggle Menu"
                        >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-200 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu Panel */}
            <div 
                className={`md:hidden absolute top-16 left-0 right-0 bg-indigo-950 border-t border-indigo-800/40 z-10 transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
            >
                <nav className="px-4 py-3">
                    <Link 
                        to="/" 
                        className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                        Home
                    </Link>
                    <Link 
                        to="/profiles" 
                        className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                        Profiles
                    </Link>
                    <Link    
                        to="/watchlist" 
                        className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">
                        Watchlist
                    </Link>
                    {isLoggedIn ? (
                        <>
                        <div className="">
                            <Link 
                                to="/profile/lucho20091"
                                className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors flex items-center">
                                <img    
                                src="https://static-cdn.jtvnw.net/jtv_user_pictures/114392b2-2ef3-4a7a-b582-69190c333012-profile_image-70x70.png" 
                                alt="profile picture"
                                className="w-6 h-6 rounded-full border-4 border-purple-400 "
                            />
                            <span className="ml-1">lucho20091</span>
                            </Link>
                        </div>
                        <button 
                            className="px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors w-full text-left">
                            Logout
                        </button>
                        </>
                    ) : (
                        <Link to="/login" className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800/40 transition-colors">Login</Link>
                    )}      
                </nav>
            </div>
        </header>
    )
}
