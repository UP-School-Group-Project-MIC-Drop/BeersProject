import { createContext, useState } from "react";

const SearchContext = createContext();

function SearchContextProvider(props) {
    
    const [searchValue, setSearchValue] = useState('')
        function formHandler(event) {
            // event.preventDefault();
            setSearchValue(event.target.value)
        }
    return (
        <SearchContext.Provider value={{searchValue, formHandler}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchContextProvider}