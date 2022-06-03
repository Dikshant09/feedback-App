import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetching feedback data
  const fetchFeedback = async () => {
    const reponse = await fetch(`/feedback?_sort=id&_order=desc`);

    const data = await reponse.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    const reponse = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await reponse.json();

    setFeedback([data, ...feedback]);
  };

  // Delete Feedback
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item ?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update Feedback item
  const updateFeedback = async (id, updItem) => {
    const reponse = await fetch(`/feedback/${id}`, { 
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem)
    })

    const data = await reponse.json();
    

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  // These are the global state : means this states are available in every component and can be use via useContext hook
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        handleDelete,
        handleAdd: addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
