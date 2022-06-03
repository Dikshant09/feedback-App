import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
  const { feedback, handleDelete, isLoading } = useContext(FeedbackContext);

  if(!isLoading && !feedback) {
    return <p>No Feedback Yet</p>
  }

  return isLoading ? <Spinner /> : (
    <div className="feedback-list">
      {
        feedback.map((item) => <FeedbackItem key={item.id} item={item} handleDelete = { handleDelete }/>)
      }
    </div>
  )
};

export default FeedbackList;