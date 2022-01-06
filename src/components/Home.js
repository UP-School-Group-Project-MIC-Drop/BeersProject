import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import "../App.css"

function Home() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const perPage = 6
    const [pageCount, setPageCount] = useState(0)
    const [selectedPage, setSelectedPage] = useState(0)



    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=60")
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
                setPageCount(Math.ceil(data.length/perPage))
            });
    }, [])

    function handlePageClick(e) {
        setSelectedPage(e.selected*perPage)
    }
    if(loading) return <h1>Loading...</h1>

    return (
        <div className='container'>

            <div className="row text-center">
            {
                data.slice(selectedPage,selectedPage + perPage).map(item => <div  key={item.id} className="col-lg-4 col-sm-6 card-group">
                    <div className="card my-3 border border-warning py-2 h-">
                    <img src={item.image_url} className="card-img-top card-img-size" alt="..."/>
                    <div className="card-body ">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">First Brewed In: {item.first_brewed}</p>
                    </div>
                </div>
                </div> )
            }
            </div>
            
           
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<< "
                containerClassName={"list-unstyled d-flex align-items-center justify-content-center"}
                previousLinkClassName={"text-warning fw-bold text-decoration-none mx-2 fs-5"}
                nextLinkClassName={"text-warning fw-bold text-decoration-none mx-2 fs-5"}
                disabledLinkClassName={"text-muted"}
                pageLinkClassName={"text-decoration-none mx-1 btn btn-outline-secondary"}
                activeLinkClassName={"fw-bold btn-outline-warning"}
            />
        </div>
    )
}

export default Home
