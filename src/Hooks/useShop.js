import { useEffect, useState } from "react"

const useShop = () => {
    const [item, setItem] = useState([])
    const [isProduct, setIsProduct] = useState(true)
    useEffect(() => {
        fetch('https://nameless-taiga-42351.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setItem(data)
            setIsProduct(false)
        })
    })
    return [item, isProduct]
}
export default useShop;