import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id,image, courses, instructor, title, star, rating, time, duration, price, contact } = course;
    return (
        <div>
            <div className="col shadow rounded">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="p-4">
                        <h6 className="text-secondary">{courses}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="fw-bold text-secondary"> {star}.0 <span className="text-warning"><i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i></span> ({rating})
                            </small>
                            <button className="btn btn-outline-success rounded-circle" title="Add to wishlist"><i className="far fa-heart"></i></button>
                        </div>

                        <h5 className="text-dark">{title}</h5>
                        <div className="d-flex justify-content-between">
                            <p className="text-secondary"><i className="fas fa-user-alt"></i> {instructor}</p>
                            <p className="text-secondary"><i className="fas fa-phone-alt"></i> {contact}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4 className="text-danger fw-bold">${price}</h4>
                            <button className="btn btn-outline-danger" title="Add to cart"><i className="fas fa-cart-plus"></i></button>

                        </div>

                    </div>
                    <div className="border-top">
                        <div className="d-flex justify-content-between">
                            <p className="text-secondary p-2 bg-light m-2 w-50 text-center rounded-3"><i className="far fa-calendar-alt"></i> : {duration} months</p>
                            <p className="text-white p-2 bg-danger m-2 w-50 text-center rounded-3"><i className="far fa-clock"></i> : {time} hours</p>
                        </div>
                    </div>
                    <div className="border-top">
                    <div className="border-top p-2">
                        <Link to={`/course/${id}`}><button className="btn btn-dark w-100">See Details</button></Link>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;