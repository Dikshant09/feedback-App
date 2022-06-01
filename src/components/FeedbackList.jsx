import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback, handleDelete } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      {feedback
        ? feedback.map((item) => <FeedbackItem key={item.id} item={item} handleDelete = { handleDelete }/>)
        : "No Feedback Yet"}
    </div>
  );
};


export default FeedbackList;