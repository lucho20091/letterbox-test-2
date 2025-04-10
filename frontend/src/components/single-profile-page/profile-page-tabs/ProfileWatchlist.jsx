import MovieCard from "../../MovieCard"
import { toast } from "react-toastify"
import { API } from "../../../constants/api"
export default function ProfileWatchlist({ watchlist, fetchWatchlist }) {

    const deleteFromWatchlist = async (imdbID, e) => {
        e.preventDefault();

        if (!window.confirm('Are you sure you want to delete this movie from your watchlist?')) {
            return;
        }

        try{
            const response = await fetch(API === 'test' ? `http://localhost:3000/api/watchlist/${imdbID}` : `/api/watchlist/${imdbID}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            if (response.ok){
                toast.success('Movie deleted from watchlist');
                fetchWatchlist();
            } else {
                toast.error('Failed to delete movie from watchlist');
            }
        } catch (error) {
            toast.error("Error deleting movie from watchlist");
            console.error("Error deleting movie from watchlist", error);
        }
    }
    console.log(watchlist)
    return (
        <div className="grid py-4 md:py-8 gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {watchlist.map(movie => <MovieCard movie={movie} key={movie._id} type="watchlist" deleteFromWatchlist={deleteFromWatchlist}/>)}
        </div>
    )
}
