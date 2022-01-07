import React, {useEffect, useContext} from 'react'
import Pagination from './Pagination'
import Checkbox from './Checkbox'
import Slider from './Slider'
import { PaginationContext } from '../context/PaginationContext'
import { CheckboxSliderContextProvider } from '../context/CheckboxSliderContext'
import "../App.css"

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
        <div className='container'>
            <CheckboxSliderContextProvider>
                <div className='row d-flex align-items-center mx-auto'>
                    <Checkbox name="SRM" />
                    <Slider />
                </div>
            <Pagination />
            </CheckboxSliderContextProvider>
        </div>
    )
}

export default Home
