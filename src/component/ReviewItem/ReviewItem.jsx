/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product}) => {
  const {id,name,img,price,quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <p className='review-title'>{name}</p>
                <p>Price : <span className='orange-text'>${price}</span></p>
                <p>Quantity : <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete'> <FontAwesomeIcon className='btn-deleteIcon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;