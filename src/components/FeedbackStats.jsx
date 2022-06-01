import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext);
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

export default FeedbackStats;