import { createContext, useState } from "react";

const CheckboxSliderContext = createContext();


function CheckboxSliderContextProvider(props) {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <CheckboxSliderContext.Provider value={{isChecked, setIsChecked}}>
            {props.children}
        </CheckboxSliderContext.Provider>
    )
}

export {CheckboxSliderContext, CheckboxSliderContextProvider}
