import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css'
const Product=({pd}) => {
    const {_id, Name, summary, img, price,  subtitle}=pd;
    // Showing all items in card
    return (
        <div className="product pt-2 pb-4 col-lg-3 my-4 mx-lg-3 ">
            <img className='img-fluid' src={img} alt="" />
            <div className="product-txt">
            <h4 className='chair-name'>
                {Name}
            </h4>
            <p className='sub-title'>{subtitle}</p>
            <p className='summary'>{summary}</p>
            <h4 className='price-p text-center'>Price ${price}</h4>

            </div>
            <div className="btn-div d-flex align-items-center justify-content-center">
              <Link className='btn-link'  to={`/purchase/${_id}`}>
                <button className="button-53 mt-3 book-btn fs-3">Buy Now</button>
                </Link></div>

        </div>
    );
};

export default Product;