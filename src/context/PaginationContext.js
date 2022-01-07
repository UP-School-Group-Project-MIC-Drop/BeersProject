import { createContext, useEffect, useState } from "react";

const PaginationContext = createContext();

function PaginationContextProvider(props) {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const perPage = 6
    const [pageCount, setPageCount] = useState(0)
    const [selectedPage, setSelectedPage] = useState(0)

    function handlePageClick(e) {
        setSelectedPage(e.selected*perPage)
    }


    return (
        <PaginationContext.Provider value={{data, setData, loading, setLoading, pageCount, setPageCount, selectedPage, setSelectedPage, perPage, handlePageClick}}>
            {props.children}
        </PaginationContext.Provider>
    )
}

export {PaginationContext, PaginationContextProvider}
