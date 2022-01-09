import { createContext, useState } from "react";

const AlcoholSliderContext = createContext();


function AlcoholSliderContextProvider(props) {

    const [value, setValue] = useState(0);
    const [filter, setFilter] = useState("")
    const [display, setDisplay] = useState("passive")

    
    return (
        <AlcoholSliderContext.Provider value={{value,setValue,filter,setFilter,display,setDisplay}}>
            {props.children}
        </AlcoholSliderContext.Provider>
    )
}

export {AlcoholSliderContext, AlcoholSliderContextProvider}
