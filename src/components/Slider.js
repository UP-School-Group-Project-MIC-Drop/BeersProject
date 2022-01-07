import React, {useContext} from 'react'
import SliderComponent from 'rc-slider';
import 'rc-slider/assets/index.css';
import {CheckboxSliderContext} from '../context/CheckboxSliderContext'
import { PaginationContext } from '../context/PaginationContext';

function Slider(props) {

    
    const {isChecked, srmValue, setSrmValue} = useContext(CheckboxSliderContext)
    const {setSelectedPage} = useContext(PaginationContext)


    return (
        <div className='col-8 text-light ms-3'>
            <SliderComponent 
                railStyle={{ backgroundColor: 'orange'}}
                trackStyle={{ backgroundColor: 'orange'}}
                disabled={isChecked} 
                value={srmValue} 
                onChange={(value) => {
                    setSrmValue(value)
                    setSelectedPage(0)}} />
        </div>
    )
}

export default Slider
