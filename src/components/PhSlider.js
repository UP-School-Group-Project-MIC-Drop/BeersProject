import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, {  useContext } from "react";
import { CheckboxSliderContext } from '../context/CheckboxSliderContext';
import { PaginationContext } from '../context/PaginationContext';


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function Ph(props) {
    const {phValue ,setPhValue, isPhChecked} = useContext(CheckboxSliderContext)
    const {setSelectedPage} = useContext(PaginationContext)

    const handleChange = (value) => {
        setPhValue([value[0], value[1]])
        setSelectedPage(0)
    }

    return (
        
                <Range
                    onChange={handleChange}
                    railStyle={{ backgroundColor: 'orange' }}
                    trackStyle={{ backgroundColor: 'orange' }}
                    handleStyle={{ backgroundColor: 'orange', borderColor: "white" }}
                    disabled={isPhChecked} 
                    step={0.1}
                    value={phValue}
                    marks={{
                        0: `0`,
                        7: `7`
                    }}
                    min={0}
                    max={7}

                    tipFormatter={value => ` ${value}`}
                    tipProps={{
                        placement: "top",
                        visible: true
                    }}
                />
            
            
           
        
    );
}
export default Ph