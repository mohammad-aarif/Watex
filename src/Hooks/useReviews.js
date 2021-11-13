import { useEffect, useState } from "react"

const useReviews = () => {
    const[review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:3002/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return [ review ]
}
export default useReviews