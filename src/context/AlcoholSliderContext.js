import { createContext, useState } from "react";

const AlcoholSliderContext = createContext();


function AlcoholSliderContextProvider(props) {

    const [value, setValue] = useState(0);
    const [filter, setFilter] = useState("")
    const [display, setDisplay] = useState("passive")
    const [isActiveGt, setIsActiveGt] = useState(false)
    const [isActiveLt, setIsActiveLt] = useState(false)

    
    return (
        <AlcoholSliderContext.Provider value={{value,setValue,filter,setFilter,display,setDisplay, isActiveGt, setIsActiveGt, isActiveLt, setIsActiveLt}}>
            {props.children}
        </AlcoholSliderContext.Provider>
    )
}

export {AlcoholSliderContext, AlcoholSliderContextProvider}
