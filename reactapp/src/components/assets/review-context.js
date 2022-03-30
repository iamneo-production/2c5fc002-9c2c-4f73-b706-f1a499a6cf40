import React, { useContext, useReducer, useEffect } from "react";
import useHttp from "../../hooks/use-http";

const reviewList = [];

const ReviewCxt = React.createContext({
  reviewList: [],
  addReview: () => {},
  editReview: () => {},
  deleteReview: () => {},
});

const reviewReducer = (state, action) => {
  let updatedReviewList;
  switch (action.type) {
    case "GET_REVIEWS":
      updatedReviewList = [...action.value];
      return updatedReviewList;
    case "ADD_REVIEW":
      updatedReviewList = [...state, { ...action.value }];
      return updatedReviewList;
    case "EDIT_REVIEW":
      const exsistedReview = state.find((item) => {
        return action.value.reviewId === item.reviewId;
      });
      const index = state.indexOf(exsistedReview);
      updatedReviewList = [...state];
      updatedReviewList[index] = { ...action.value };
      return updatedReviewList;
    case "DELETE_REVIEW":
      updatedReviewList = state.filter((item) => {
        return action.value !== item.reviewId;
      });
      return updatedReviewList;
    default:
      return state;
  }
};

export const ReviewContextProvider = (props) => {
  const [reviewsList, reviewDispatchFn] = useReducer(reviewReducer, reviewList);
  const { sendRequest } = useHttp();

  useEffect(() => {
    const getReviewDataHandler = (data) => {
      reviewDispatchFn({ type: "GET_REVIEWS", value: data });
    };
    const requestConfig = {
      url: "https://localhost:5001/api/ReviewModel/getReviews",
    };
    sendRequest(requestConfig, getReviewDataHandler);
  }, [sendRequest]);

  const addReviewDataHandler = (review, data) => {
    console.log(data);
    reviewDispatchFn({ type: "ADD_REVIEW", value: review });
  };

  const addReview = (review) => {
    const requestConfig = {
      url: "https://localhost:5001/api/ReviewModel/addReview",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: review,
    };
    sendRequest(requestConfig, addReviewDataHandler.bind(null, review));
  };

  const editReviewDataHandler = (newReview, data) => {
    reviewDispatchFn({ type: "EDIT_REVIEW", value: newReview });
  };

  const editReview = (newReview) => {
    const requestConfig = {
      url: `https://localhost:5001/api/ReviewModel/editReview/${newReview.reviewId}`,
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: newReview,
    };
    sendRequest(requestConfig, editReviewDataHandler.bind(null, newReview));
  };

  const deleteReviewDataHandler = (reviewId, data) => {
    reviewDispatchFn({ type: "DELETE_REVIEW", value: reviewId });
  };

  const deleteReview = (reviewId) => {
    const requestConfig = {
      url: `https://localhost:5001/api/ReviewModel/deleteReview/${reviewId}`,
      method: "DELETE",
    };
    sendRequest(requestConfig, deleteReviewDataHandler.bind(null, reviewId));
  };

  return (
    <ReviewCxt.Provider
      value={{
        reviewList: reviewsList,
        addReview: addReview,
        editReview: editReview,
        deleteReview: deleteReview,
      }}
    >
      {props.children}
    </ReviewCxt.Provider>
  );
};

export const useReviewCxt = () => {
  return useContext(ReviewCxt);
};

export default ReviewCxt;
