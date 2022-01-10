import React, { useContext } from 'react';
// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom"
// import { PaginationContext } from '../context/PaginationContext';
import { SearchContext} from '../context/SearchContext'

function SearchBeer(props) {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const urlParams = new URLSearchParams(location.search);
    
// const {data} = useContext(PaginationContext)
const {searchValue, formHandler} = useContext(SearchContext)

   
        // navigate(`/search-beer?q=${event.target.qInput.value}`)


    return <>
            <div className="mb-3">
                <label htmlFor="search" className="form-label"></label>
                <input name="qInput" type="text" className="form-control" id="search"
                    placeholder="search beers by name" defaultValue={searchValue} onChange={formHandler} />

            </div>
            <div className="reset">
                <button id="reset" type="button" className="btn btn-warning" data-toggle="button">Reset</button>
            </div>
    </>
}
export default SearchBeer