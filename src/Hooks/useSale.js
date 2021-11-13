import { useEffect, useState } from "react"

const useSale = () => {
    const[sale, setSale] = useState([])
    useEffect(() => {
        fetch('http://localhost:3002/sales')
        .then(res => res.json())
        .then(data => setSale(data))
    }, [])
    return [ sale, setSale ]
}
export default useSale;