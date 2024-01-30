import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../context/posts/actions"

const ReduxPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        dispatch(getPosts(page))
    }, [dispatch, page])

    const handlePrevious = () => {
        setPage(state => state - 1)
    }

    const handleNext = () => {
        setPage(state => state + 1)
    }

    return (
        <div>
            {posts && posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
            <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default ReduxPage