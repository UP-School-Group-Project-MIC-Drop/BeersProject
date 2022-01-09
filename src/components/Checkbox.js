import React, {useContext} from 'react'
import {CheckboxSliderContext} from '../context/CheckboxSliderContext'
import "../App.css"

function Checkbox(props) {
    
    const {isChecked, setIsChecked, setSrmValue} = useContext(CheckboxSliderContext)

    return (
        <div className='col-2'>
            <input className={`form-check-input border border-warning ${ !isChecked && "bg-warning"}`} type="checkbox" id="flexCheckDefault" 
            onClick={() => {
                setIsChecked(!isChecked)
                setSrmValue(0)}} ></input>
            <label className='ms-3 text-light' htmlFor="">{props.name}</label>
        </div>
    )
}

export default Checkbox
