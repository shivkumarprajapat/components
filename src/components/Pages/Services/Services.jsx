import React from 'react'
import { Link } from "react-router-dom";
import data from './data';

export default function Services() {
    return (
        <div className="container">
            <div className="heading text-center mb-5">
                <h2>Services Pages</h2>
            </div>
            <div className="row justify-content-center d-flex">
                {
                    data.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="card shadow">
                                    <Link to={item.id}>
                                        <img className="card-img-top" src={item.image} alt="blog Images" className='img-fluid' />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
