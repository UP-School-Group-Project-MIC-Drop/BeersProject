import React, {useContext} from 'react'
import Slider, {createSliderWithTooltip} from 'rc-slider';
import 'rc-slider/assets/index.css';
import {CheckboxSliderContext} from '../context/CheckboxSliderContext'
import { PaginationContext } from '../context/PaginationContext';

const SliderComponent = createSliderWithTooltip(Slider);

function SrmSlider(props) {

    
    const {isSrmChecked, srmValue, setSrmValue} = useContext(CheckboxSliderContext)
    const {setSelectedPage} = useContext(PaginationContext)


    return (
            <SliderComponent 
                railStyle={{ backgroundColor: 'orange'}}
                trackStyle={{ backgroundColor: 'orange'}}
                handleStyle={{ backgroundColor: 'orange', borderColor: "white"}}
                disabled={isSrmChecked} 
                value={srmValue} 
                step={0.1}
                onChange={(value) => {
                    setSrmValue(value)
                    setSelectedPage(0)
                    }} 
                tipFormatter={value => `${value}`}
                tipProps={{
                        placement: "top",
                        visible: true
                    }}
                marks={{
                        0: `0`,
                        100: `100`
                      }} 
                />
    )
}

export default SrmSlider
