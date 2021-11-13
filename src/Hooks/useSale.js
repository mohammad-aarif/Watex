import { useEffect, useState } from "react"

const useSale = () => {
    const[sale, setSale] = useState([])
    useEffect(() => {
        fetch('https://nameless-taiga-42351.herokuapp.com/sales')
        .then(res => res.json())
        .then(data => setSale(data))
    }, [])
    return [ sale, setSale ]
}
export default useSale;