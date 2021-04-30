import React, { useState } from 'react'
import './Style.css'
import Menu from './MenuItems'

export default function ImageGallery() {

    const [items, setItems] = useState(Menu);
    const filterItem = (filterdata) => {
        const update = Menu.filter((ele) => {
            return ele.category === filterdata;
        })
        setItems(update)
    }
    return (
        <>
            <div className="container">
                <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
                <hr />
                <div className="menu-tabs container text-center">
                    <div className="menu-tab d-flex justify-content-center">
                        <button className="btn btn-danger" onClick={() => filterItem('breakfast')}>Breakfast</button>
                        <button className="btn btn-danger" onClick={() => filterItem('evening')}>Lunch</button>
                        <button className="btn btn-danger" onClick={() => filterItem('lunch')}>Evening</button>
                        <button className="btn btn-danger" onClick={() => filterItem('dinner')}>Dinner</button>
                        <button className="btn btn-danger" onClick={() => setItems(Menu)}>All</button>
                    </div>
                </div>

                {/* my main items section  */}
                <div className="menu-items container-fluid">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row my-5">
                                {
                                    items.map(item => {
                                        const { id, name, image, description, price } = item;
                                        return (
                                            <div className="col-12 col-md-4 col-lg-4 my-3" key={item.id}>
                                                <div className="card shadow-lg">
                                                    <img src={image} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{name}</h5>
                                                        <p className="card-text">{description}</p>
                                                        <div className="d-flex justify-content-between social">
                                                            <a href="#" className="text text-danger">{price}</a>
                                                            <button className="btn btn-danger">View</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
