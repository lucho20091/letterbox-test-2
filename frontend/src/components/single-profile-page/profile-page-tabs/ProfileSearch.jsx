export default function ProfileSearch() {
    return (
        <div className="py-4 md:py-8">
            <form className="max-w-md mx-auto bg-gradient-to-br from-indigo-600 to-violet-950/80 text-white shadow-lg p-4 rounded-lg flex items-center justify-between gap-2">
                <input type="text" placeholder="Search for a movie" className="w-full p-2 rounded-lg bg-indigo-950/50 rounded-lg text-white placeholder-indigo-500 transition-all duration-300 focus:outline-none" />
                <button 
                className="py-2 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:from-indigo-500 hover:to-violet-500">
                        <span className="group-hover:font-semibold transition-all duration-300">Search</span>
                    </button>
            </form>
        </div>
    )
}
