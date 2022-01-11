import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {BiRightArrow} from "react-icons/bi"
function Detail() {
    const params = useParams();


    const [beer, setBeer] = useState([])

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${params.beerId}`)
            .then(resp => resp.json())
            .then(json => setBeer(json))
    }, [params.beerId])


    return (
        <div className='container my-3'>
            {
                beer.map(beer => <div key={beer.id} className="card mb-3 text-light bg-dark border-dark" >
                    <div className="row g-0">
                        <div className="col-md-4 col-lg-3 d-flex align-items-center bg-light border border-3 border-warning">
                            <img src={beer.image_url} className="img-fluid card-img-size" alt={`${beer.name}`} />
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="card-body">
                                <h3 className="card-title text-warning">{beer.name} - {beer.tagline}</h3>
                                <h5 className="text-muted">First Brewed In: {beer.first_brewed}</h5>
                                <p className="card-text">{beer.description}</p>
                                <div className="row my-3 text-center">
                                    <div className="col"><strong>pH:</strong> {beer.ph}</div>
                                    <div className="col"><strong>SRM:</strong> {beer.srm}</div>
                                    <div className="col"><strong>Volume:</strong> {beer.volume.value} {beer.volume.unit}</div>
                                </div>
                                <table class="table table-bordered border-secondary text-light small">
                                    <thead>
                                        <tr>
                                            <th scope="col">Ingredients</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className='align-middle'>Malt</th>
                                            <td>{beer.ingredients.malt.map(item => <p>{item.name}</p>)}</td>
                                            <td>{beer.ingredients.malt.map(item => <p>{item.amount.value} {item.amount.unit}</p>)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='align-middle'>Hops</th>
                                            <td>{beer.ingredients.hops.map(item => <p>{item.name}</p>)}</td>
                                            <td>{beer.ingredients.hops.map(item => <p>{item.amount.value} {item.amount.unit}
                                                <span className='text-muted'>({item.add && `Add: ${item.add}`}/{item.add && `Attribute: ${item.attribute}`})</span>
                                            </p>)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Yeast</th>
                                            <td colSpan={2}>{beer.ingredients.yeast}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            
                                <div>
                                    <h5 className='text-warning'>Suggestions </h5>
                                    <h6>Food Pairing: </h6>
                                    <ul className='list-unstyled'>
                                        {
                                            beer.food_pairing.map((item, index) => <li key={index} className='ms-3'><span className='text-warning small'><BiRightArrow /></span> {item}</li>)
                                        }
                                    </ul>
                                    <p><strong className='fs-6'>Tips: </strong>{beer.brewers_tips}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Detail
