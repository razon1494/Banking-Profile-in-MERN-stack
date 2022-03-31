import React from 'react';
import './Review.css'
const Reviews=({review}) => {
    const rating=parseInt(review.rating);
    const arr=[ 1, 2, 3, 4, 5];

    return (
        <div className="mb-5 pt-2 pb-4 col-lg-3 my-4 mx-lg-3 review">
            <div className='text-part mt-5 d-flex flex-column align-items-center justify-content-cente '>
              <h2 className='text-center review-name'>{review.displayName}</h2>
                <h6 className='user-review text-center container'>{review.details} </h6> <br />
                <div className="rate">
                <small className=' mx-2 fs-56 rating-p'>Rating Given({rating}): </small>
            {
                arr.map(index => <> {index <=rating? <i className="fas fa-star fill "></i>:<i className="far fa-star dim"></i>}</>
                )
            }</div>
            </div>
        </div>
    );
};

export default Reviews;