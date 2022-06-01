import React from 'react'
import propTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
    let averageRating = feedback.reduce((acc, curr) => {
        return acc + curr.rating / feedback.length;
    }, 0); 

    // Setting 1 decimal precision and for perfect no. 0 decimal precision.
    averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '');

    return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {averageRating} </h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: propTypes.array.isRequired,
}

export default FeedbackStats;