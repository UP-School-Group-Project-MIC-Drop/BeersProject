import React, {useState, useContext} from 'react'
import {CheckboxSliderContext} from '../context/CheckboxSliderContext'

function Checkbox() {
    
    const {isChecked, setIsChecked} = useContext(CheckboxSliderContext)

    return (
        <span>
            <input class="form-check-input border border-warning" type="checkbox" value="" id="flexCheckDefault" onClick={() => setIsChecked(!isChecked)} ></input>
        </span>
    )
}

export default Checkbox
