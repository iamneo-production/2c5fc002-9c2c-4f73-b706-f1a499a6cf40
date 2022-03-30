import React, { Fragment } from "react";
import { useReviewCxt } from "../../assests/review-context";
import Review from "./Review";
import { useAuthCxt } from "../../assests/auth-context";

const ReviewsList = (props) => {
  const reviewCxt = useReviewCxt();
  const authCxt = useAuthCxt();
  const { reviewList } = reviewCxt;
  const { productId } = props;
  let content;
  const filteredReviewList = reviewList.filter((item) => {
    return item.productId === productId;
  });

  const deleteReviewHandler = (reviewId) => {
    reviewCxt.deleteReview(reviewId);
  };

  if (filteredReviewList.length > 0) {
    content = filteredReviewList.map((item, index) => {
      const isNeed = item.userId === authCxt.userInfo.userId;
      return (
        <Fragment key={index}>
          <Review
            reviewItem={item}
            userName={item.userName}
            comment={item.reviewText}
            reviewId={item.reviewId}
            isNeed={isNeed}
            onDelete={deleteReviewHandler}
            onEdit={props.editReviewHandler}
          />
          <hr />
        </Fragment>
      );
    });
  } else {
    content = <p style={{ textAlign: "center" }}>No Reviews yet</p>;
  }

  return <Fragment>{content}</Fragment>;
};

export default ReviewsList;
