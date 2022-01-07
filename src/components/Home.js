import React, {useEffect, useState} from 'react'
import "../App.css"
import Pagination from './Pagination'

function Home() {
    //states for pagination
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const perPage = 6
    const [pageCount, setPageCount] = useState(0)
    const [selectedPage, setSelectedPage] = useState(0)

    //fetch api for pagination
    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=60")
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
                setPageCount(Math.ceil(data.length/perPage))
            });
    }, [])


    return (
        <Pagination data={data} loading={loading} pageCount={pageCount} selectedPage={selectedPage} setSelectedPage={setSelectedPage} perPage={perPage} />
    )
}

export default Home
