import { createContext, useState, useContext, useEffect } from "react";
import { PaginationContext } from "./PaginationContext";

const AlcoholSliderContext = createContext();


function AlcoholSliderContextProvider(props) {
    const URL = 'https://api.punkapi.com/v2/beers?page=1&per_page=60'

    const [alcoholValue, setAlcoholValue] = useState(0);
    const [filter, setFilter] = useState("")
    const [display, setDisplay] = useState("passive")
    const [isActiveGt, setIsActiveGt] = useState(false)
    const [isActiveLt, setIsActiveLt] = useState(false)
    const [url, setUrl] = useState(URL)
    const [error, setError] = useState(null);

    const { setSelectedPage, setData, setLoading } = useContext(PaginationContext)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json()
            )
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [url, URL, alcoholValue, filter, setData, setLoading]);

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
        setUrl(`${URL}${filter}${val}`)
    }

    const noneHandler = () => {
        setDisplay("passive")
        setUrl(`${URL}`)
        setIsActiveGt(false)
        setIsActiveLt(false)
    }

    return (
        <AlcoholSliderContext.Provider value={{ url, setUrl, alcoholValue, setAlcoholValue, filter, setFilter, display, setDisplay, isActiveGt, setIsActiveGt, isActiveLt, setIsActiveLt, error, noneHandler, sliderHandler, lowerHandler, greaterHandler }}>
            {props.children}
        </AlcoholSliderContext.Provider>
    )
}

export { AlcoholSliderContext, AlcoholSliderContextProvider }
