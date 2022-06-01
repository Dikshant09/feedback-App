import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

      handleAdd(newFeedback);

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
