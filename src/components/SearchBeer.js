import React, { useContext } from 'react';
// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom"
// import { PaginationContext } from '../context/PaginationContext';
import { SearchContext} from '../context/SearchContext'
import { useDebounce } from "rooks";


function SearchBeer(props) {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const urlParams = new URLSearchParams(location.search);
    
// const {data} = useContext(PaginationContext)
    const {searchValue, resetHandler,setSearchValue} = useContext(SearchContext)
    const setValueDebounced = useDebounce(setSearchValue, 300);
   
        // navigate(`/search-beer?q=${event.target.qInput.value}`)
        function formHandler(event) {
        setValueDebounced(event.target.value)
        }

    return (
        <div className="container mt-3">
            <div className='row text-light'>
                <div className="col-lg-10 col-8">
                    <label htmlFor="search" className="form-label fs-3">Search Beers:</label>
                    <input name="qInput" type="text" className="form-control" id="search"
                        placeholder="search beers by name"  defaultValue={searchValue} onChange={formHandler} />
                </div>
                <div className="col-lg-2 col-4 align-items-end d-flex">
                    <button id="reset" type="button" className="btn btn-warning w-100" data-toggle="button" onClick={resetHandler}>Reset</button>
                </div>
            </div>
        </div>
       )
}
export default SearchBeer