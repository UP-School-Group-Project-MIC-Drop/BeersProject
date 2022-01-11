import React, { useContext} from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { TiBeer } from "react-icons/ti";
import {AlcoholSliderContext} from '../context/AlcoholSliderContext'
import { PaginationContext } from '../context/PaginationContext';
import 'rc-slider/assets/index.css';

const SliderComponent = createSliderWithTooltip(Slider);

function AlcoholSlider(props) {
    const {loading} = useContext(PaginationContext)

    const {alcoholValue,display, isActiveGt, isActiveLt, error, sliderHandler, lowerHandler, greaterHandler, noneHandler} = useContext(AlcoholSliderContext)

    
    if (loading) return "Loading...";
    if (error) return "Error!";


    return (
        <div className='container'>
            <div className="row mt-5 d-flex align-items-center ">
                <div className="col-lg-4 col-md-6 d-flex justify-content-center mt-2">
                    <div className='text-light fs-2'>Alcohol by volume <TiBeer /> </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center mt-3 mt-md-0">

                    <div className="btn-group btn-group-lg mx-1 " role="group" aria-label="Basic outlined example">
                        <button type="button" className={`btn ${ display === "passive" ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={noneHandler}
                        > None
                        </button>
                        <button type="button" className={`btn ${ isActiveGt ? "btn-warning" : "btn-outline-warning"}`}
                            onClick={greaterHandler}
                        >
                            Greater Than
                        </button>
                        <button type="button" className={`btn ${ isActiveLt ? "btn-warning" : "btn-outline-warning"}`}
                            onClick={lowerHandler}>
                            Lower Than
                        </button>
                    </div>
                </div>
                <div className={`col-lg-4 col-md`}>
                    <SliderComponent
                        railStyle={{ backgroundColor: 'orange'}}
                        trackStyle={{ backgroundColor: 'orange'}}
                        handleStyle={{ backgroundColor: 'orange', borderColor: "white"}}
                        value={display === "passive" ? 0 : alcoholValue}
                        onChange={sliderHandler} className='mt-4' disabled={display === "passive"}
                        tipFormatter={value => `${value}`}
                        step={0.1}
                        tipProps={{
                            placement: "top",
                            visible: true
                        }}
                        marks={{
                            0: `0`,
                            100: `100`
                          }}
                    />
                </div>
            </div>
        </div>
    )
}
export default AlcoholSlider