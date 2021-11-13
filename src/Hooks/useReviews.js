import { useEffect, useState } from "react"

const useReviews = () => {
    const[review, setReview] = useState([])
    useEffect(() => {
        fetch('https://nameless-taiga-42351.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return [ review ]
}
export default useReviews