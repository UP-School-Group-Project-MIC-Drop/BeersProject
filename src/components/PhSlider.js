import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, {  useContext } from "react";
import { CheckboxSliderContext } from '../context/CheckboxSliderContext';
// import { PaginationContext } from '../context/PaginationContext';


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function Ph(props) {
    const {setPhValue, isPhChecked} = useContext(CheckboxSliderContext)
    // const {data} = useContext(PaginationContext)

    const handleChange = (value) => {
        setPhValue([value[0], value[1]])
    }

    return (
        <>
            <div className='container my-5'>
                <Range
                    onChange={handleChange}
                    railStyle={{ backgroundColor: 'orange' }}
                    trackStyle={{ backgroundColor: 'orange' }}
                    handleStyle={{ backgroundColor: 'orange', borderColor: "white" }}
                    disabled={isPhChecked} 
                    step={0.1}

                    marks={{
                        0: `0`,
                        7: `7`
                    }}
                    min={0}
                    max={7}

                    tipFormatter={value => ` ${value} pH`}
                    tipProps={{
                        placement: "top",
                        visible: true

                    }}
                />
            </div>
            {/* {
                data.filter(item => (item.ph >= state[0]) && (item.ph <= state[1])).map(
                    item => <div className='text-light'
                        key={item.id}>
                        {item.name}
                    </div>

                )
            } */}
           
        </>
    );
}
export default Ph