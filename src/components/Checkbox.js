import React, { useContext } from 'react'
import { CheckboxSliderContext } from '../context/CheckboxSliderContext'
import "../App.css"

function Checkbox(props) {

    const { isPhChecked, setIsPhChecked, setSrmValue, isSrmChecked, setIsSrmChecked } = useContext(CheckboxSliderContext)
    const setIsChecked = props.name === "SRM" ? setIsSrmChecked : setIsPhChecked
    const isChecked = props.name === "SRM" ? isSrmChecked : isPhChecked

    return (
        <>
            <input className={`form-check-input border-3 border-warning fs-3 ${!isChecked && "bg-warning"}`} type="checkbox" id="flexCheckDefault"
                onClick={() => {
                    setIsChecked(!isChecked)
                    setSrmValue(0)
                }} ></input>
            <label className='ms-3 text-light fs-3' htmlFor="">{props.name}</label>
        </>
    )
}

export default Checkbox
