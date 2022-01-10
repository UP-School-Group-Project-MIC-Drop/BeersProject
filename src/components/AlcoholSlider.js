import React, { useContext, useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import { TiBeer } from "react-icons/ti";
import {AlcoholSliderContext} from '../context/AlcoholSliderContext'
import { PaginationContext } from '../context/PaginationContext';

const SliderComponent = createSliderWithTooltip(Slider);

function AlcoholSlider(props) {
    const URL = props.URL
    const [url, setUrl] = useState(URL)
    const [error, setError] = useState(null);

    const {setData, setSelectedPage, loading, setLoading} = useContext(PaginationContext)


    const {alcoholValue,setAlcoholValue,filter,setFilter,display,setDisplay, isActiveGt, setIsActiveGt, isActiveLt, setIsActiveLt} = useContext(AlcoholSliderContext)
    console.log("alcoholValue",alcoholValue);

    
    const greaterHandler = () => {
        setIsActiveGt(true)
        setIsActiveLt(false)
        setDisplay("active")
        setFilter("&abv_gt=")
    }
    const lowerHandler = () => {
        setIsActiveLt(true)
        setIsActiveGt(false)
        setDisplay("active")
        setFilter("&abv_lt=")
    }

    const sliderHandler = (val) => {
        setAlcoholValue(val);
        setSelectedPage(0)

        console.log("url",url);
        console.log("value",alcoholValue);
    }

    const noneHandler = () => {
        setDisplay("passive")
        setUrl(`${URL}`)
        setIsActiveGt(false)
        setIsActiveLt(false)
    }


    useEffect(() => {
        setUrl(`${URL}${filter}${alcoholValue}`)
        fetch(url)
            .then(resp => resp.json()
            )
            .then((data) => {
                setData(data);
                console.log(data);
                console.log("url in fetch",url)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [URL ,url , alcoholValue, filter, setData, setLoading]);

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
                        value={alcoholValue}
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
            {/* <div className={`row mt-5`}>
                {
                    data.map((item, index) =>
                        <div key={index} className="col-lg-4 col-sm-6 card-group">
                            <div className="card my-3 bg-warning border border-warning py-2">
                                <img src={item.image_url} className="card-img-top card-img-size" alt="..." />
                                <div className="card-body ">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">First Brewed In: {item.first_brewed}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div> */}
        </div>
    )
}
export default AlcoholSlider