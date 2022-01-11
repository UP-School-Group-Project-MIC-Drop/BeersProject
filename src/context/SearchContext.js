import { createContext, useContext, useState } from "react";
import { AlcoholSliderContext } from "./AlcoholSliderContext";
import { CheckboxSliderContext } from "./CheckboxSliderContext";

const SearchContext = createContext();

function SearchContextProvider(props) {
    
    const [searchValue, setSearchValue] = useState('')

    const {noneHandler, setAlcoholValue} = useContext(AlcoholSliderContext)
    const {setIsPhChecked, setIsSrmChecked, setSrmValue, setPhValue} = useContext(CheckboxSliderContext)

    function resetHandler() {
        document.getElementById("search").value=""
        setSearchValue("")
        noneHandler()
        setAlcoholValue(0)
        setIsPhChecked(true)
        setIsSrmChecked(true)
        setSrmValue(0)
        setPhValue([0,7])
    }

  

    return (
        <SearchContext.Provider value={{searchValue, resetHandler,setSearchValue}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchContextProvider}