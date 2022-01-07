import { createContext, useState } from "react";

const CheckboxSliderContext = createContext();


function CheckboxSliderContextProvider(props) {

    const [isChecked, setIsChecked] = useState(true)
    const [srmValue, setSrmValue] = useState(0)

    return (
        <CheckboxSliderContext.Provider value={{isChecked, setIsChecked, srmValue, setSrmValue}}>
            {props.children}
        </CheckboxSliderContext.Provider>
    )
}

export {CheckboxSliderContext, CheckboxSliderContextProvider}
