import React, {useEffect, useContext} from 'react'
import Pagination from './Pagination'
import Checkbox from './Checkbox'
import SrmSlider from './SrmSlider'
import AlcoholSlider from './AlcoholSlider'
import PhSlider from './PhSlider'

import { PaginationContext } from '../context/PaginationContext'
import { CheckboxSliderContextProvider } from '../context/CheckboxSliderContext'
import { AlcoholSliderContextProvider } from '../context/AlcoholSliderContext'
import { SearchContextProvider } from '../context/SearchContext'
import SearchBeer from './SearchBeer'

function Home() {
    //context
    const {setData, setLoading, setPageCount, perPage} = useContext(PaginationContext)
    const URL = 'https://api.punkapi.com/v2/beers?page=1&per_page=60'

    //fetch api for pagination
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
                setPageCount(Math.ceil(data.length/perPage))
            });
    }, [perPage, setData, setLoading, setPageCount])


    return (
        <div className='container'>
            <SearchContextProvider>
                <SearchBeer />
            <AlcoholSliderContextProvider>
                <AlcoholSlider URL={URL}/>
            </AlcoholSliderContextProvider>
            
            <CheckboxSliderContextProvider>
                <div className='row d-flex align-items-center mx-auto my-5'>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex ps-4 ">
                        <Checkbox name="pH" />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-6">
                        <PhSlider />
                    </div>
                </div>
                <div className='row d-flex align-items-center mx-auto my-5'>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex ps-4 ">
                        <Checkbox name="SRM"/>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-6">
                        <SrmSlider />
                    </div>
                </div>
            <Pagination />
            </CheckboxSliderContextProvider>
            </SearchContextProvider>
        </div>
    )
}

export default Home
