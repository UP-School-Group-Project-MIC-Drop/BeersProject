import { createContext, useState } from "react";

const CheckboxSliderContext = createContext();


function CheckboxSliderContextProvider(props) {

    const [isSrmChecked, setIsSrmChecked] = useState(true)
    const [isPhChecked, setIsPhChecked] = useState(true)
    const [srmValue, setSrmValue] = useState(0)
    const [phValue, setPhValue] = useState([0, 7])

    return (
        <CheckboxSliderContext.Provider value={{isPhChecked, setIsPhChecked, isSrmChecked, setIsSrmChecked,  srmValue, setSrmValue, phValue, setPhValue}}>
            {props.children}
        </CheckboxSliderContext.Provider>
    )
}

export {CheckboxSliderContext, CheckboxSliderContextProvider}
