import React, {useEffect, useContext} from 'react'
import "../App.css"
import Pagination from './Pagination'
import { PaginationContext } from '../context/PaginationContext'


function Home() {
    //context
    const {setData, setLoading, setPageCount, perPage} = useContext(PaginationContext)

    //fetch api for pagination
    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=60")
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
                setPageCount(Math.ceil(data.length/perPage))
            });
    }, [perPage, setData, setLoading, setPageCount])


    return (
        <Pagination />
    )
}

export default Home
