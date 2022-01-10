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
            <div className='row d-flex align-items-center mx-auto my-4'>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Checkbox name="pH" />
                    </div>
                    <div className="col-md-9">
                        <PhSlider />
                    </div>
                </div>
                <div className='row d-flex align-items-center mx-auto my-4'>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Checkbox name="SRM"/>
                    </div>
                    <div className="col-md-9">
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
