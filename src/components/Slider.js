import React, {useContext} from 'react'
import {CheckboxSliderContext} from '../context/CheckboxSliderContext'

function Slider(props) {

    const {isChecked} = useContext(CheckboxSliderContext)

    return (
        <span className='text-light ms-3'>
            <button disabled={isChecked} >{props.name}</button>
        </span>
    )
}

export default Slider
