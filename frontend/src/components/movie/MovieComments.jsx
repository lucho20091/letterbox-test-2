import { IoTrashOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
export default function MovieComments({ comments }) {
    const navigate = useNavigate()
    return (
        <div className="mt-4 md:mt-8 max-w-screen-lg mx-auto">
            {comments && comments.map((comment) => (
                <div className="group bg-gradient-to-br from-indigo-950 to-violet-950 flex p-4 gap-2 rounded-xl" key={comment._id}>
                    <img 
                    src={comment.image} 
                    alt={comment.username} 
                    className="w-10 h-10 rounded-full border-4 border-purple-400 cursor-pointer"
                    onClick={() => navigate(`/profile/${comment.username}`)} />
                    <div className="flex-1 text-white">
                        <p className="cursor-pointer font-bold tracking-wide" onClick={() => navigate(`/profile/${comment.username}`)}>{comment.username}</p>
                        <p>{comment.comment}</p>
                        <div className="flex items-center">
                            <div className="flex items-center tracking-[-6px]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index} className="text-yellow-500 text-2xl group-hover:text-yellow-400 transition-all duration-300">★</span>
                                ))}
                            </div>
                            <p className="ml-2">{comment.rating/2}/5</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                        <p className="text-sm text-gray-200">{new Date(comment.createdAt).toLocaleDateString()}</p>
                        <button className="bg-red-600 px-1 md:px-2 py-1 text-white rounded-sm flex items-center gap-1 hover:bg-red-700 transition-all duration-300">
                            <IoTrashOutline />
                            <span className="text-sm">Delete</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
