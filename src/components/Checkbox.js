import React, { useContext } from 'react'
import { CheckboxSliderContext } from '../context/CheckboxSliderContext'
import "../App.css"

function Checkbox(props) {

    const { isPhChecked, setIsPhChecked, setSrmValue, setPhValue, isSrmChecked, setIsSrmChecked } = useContext(CheckboxSliderContext)
    const setIsChecked = props.name === "SRM" ? setIsSrmChecked : setIsPhChecked
    const isChecked = props.name === "SRM" ? isSrmChecked : isPhChecked

    return (
        <>
            <input className={`form-check-input border-3 border-warning fs-3 ${!isChecked ? "bg-warning": "bg-dark"}`} checked={!isChecked} type="checkbox" id="flexCheckDefault"
                onClick={() => {
                    setIsChecked(!isChecked)
                    props.name === "SRM" ? setSrmValue(0) : setPhValue([0,7])
                }} ></input>
            <label className='ms-3 text-light fs-3' htmlFor="">{props.name}</label>
        </>
    )
}

export default Checkbox
