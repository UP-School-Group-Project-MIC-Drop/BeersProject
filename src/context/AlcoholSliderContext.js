import { createContext, useState } from "react";

const AlcoholSliderContext = createContext();


function AlcoholSliderContextProvider(props) {

    const [alcoholValue, setAlcoholValue] = useState(0);
    const [filter, setFilter] = useState("")
    const [display, setDisplay] = useState("passive")
    const [isActiveGt, setIsActiveGt] = useState(false)
    const [isActiveLt, setIsActiveLt] = useState(false)

    
    return (
        <AlcoholSliderContext.Provider value={{alcoholValue,setAlcoholValue,filter,setFilter,display,setDisplay, isActiveGt, setIsActiveGt, isActiveLt, setIsActiveLt}}>
            {props.children}
        </AlcoholSliderContext.Provider>
    )
}

export {AlcoholSliderContext, AlcoholSliderContextProvider}
