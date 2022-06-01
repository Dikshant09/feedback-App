import Card from "./shared/Card";
import Button from "./shared/Button";
import { useContext, useState, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {

  const { handleAdd, feedbackEdit, updateFeedback } = useContext(FeedbackContext);
 
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit])

  const handleChange = (e) => {
    setText(e.target.value);

    if (e.target.value.length === 0) {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length <= 10 && text !== "") {
      setBtnDisabled(true);
      setMessage("Message Length must be greater than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback);
      }else{
        handleAdd(newFeedback);
      }

      setText("");
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        {/* <RatingSelect select={(rating) => setRating(rating)} /> */}
        <RatingSelect rating={rating}  setRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
            name="text"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
