import React from "react";
import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
  let filteredList = feedback;

  return (
    <div className="feedback-list">
      {filteredList
        ? filteredList.map((item) => <FeedbackItem key={item.id} item={item} handleDelete = { handleDelete }/>)
        : "No Feedback Yet"}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: propTypes.arrayOf(
    propTypes.shape({
      rating: propTypes.number.isRequired,
      text: propTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;