import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { CheckboxSliderContext } from '../context/CheckboxSliderContext'
import { PaginationContext } from "../context/PaginationContext"
import { SearchContext } from '../context/SearchContext'

function Pagination(props) {
    const { data, loading, pageCount, setPageCount, selectedPage, perPage, handlePageClick } = useContext(PaginationContext)
    const { srmValue, phValue } = useContext(CheckboxSliderContext)
    const { searchValue } = useContext(SearchContext)

    const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchValue?.toLowerCase())
    ).filter(item => item.srm >= srmValue).filter(item => (item.ph >= phValue[0]) && (item.ph <= phValue[1])).map(item => <div key={item.id} className="col-lg-4 col-sm-6 card-group">
            <div className="card my-3 border rounded border-4 border-warning py-2 bg-light">
                <img src={item.image_url} className="card-img-top card-img-size" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">First Brewed In: {item.first_brewed}</p>
                    <Link to={`${item.id}`} className="btn-warning btn">Beer Detail</Link>
                </div>
            </div>
        </div>)

    useEffect(() => {
        setPageCount(Math.ceil(filteredData.length / perPage))
    }, [filteredData, perPage, setPageCount])

    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <div className='container'>
                <div className="row text-center">
                    {
                        filteredData.slice(selectedPage, selectedPage + perPage)
                    }
                    {

                        filteredData.length === 0 && <div className='alert alert-secondary fw-bold fs-3 col-6 mx-auto text-center py-5 mt-5' role="alert">No results found!</div>
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
                    forcePage={selectedPage / perPage}
                />
            </div>
        </>
    )
}

export default Pagination
