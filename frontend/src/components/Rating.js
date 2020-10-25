import React from 'react'
import StarRatings from 'react-star-ratings';

const Rating = ({ rating, text }) => {
    return (
        <div className='rating'>
            <StarRatings
                starRatedColor="#f8e825"
                rating={rating}
                defaultValue={0}
                precision={0.1}
                readOnly
                starDimension='17'
                starSpacing='1'
            />
            <span style={{verticalAlign: 'sub'}}>
                <strong>{text} reviews</strong>
            </span>
        </div>
    )
}

export default Rating
