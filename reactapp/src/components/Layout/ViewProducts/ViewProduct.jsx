import { useState } from "react";
import classes from "./ViewProduct.module.css";
import ReviewsList from "../reviews/ReviewsList";
import { MdAddBox, MdUpload } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsCxt } from "../../assests/products-context";

import useGenerateId from "../../../hooks/generate-id";
import useHttp from "../../../hooks/use-http";

import { useReviewCxt } from "../../assests/review-context";
import { useCartCxt } from "../../assests/cart-context";
import { useAuthCxt } from "../../assests/auth-context";
import { useUserCxt } from "../../assests/user-context";

const ViewProduct = () => {
  const [reviewItem, setReviewItem] = useState({});
  const [reviewText, setReviewText] = useState("");
  const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const productsCxt = useProductsCxt();
  const cartCxt = useCartCxt();
  const authCxt = useAuthCxt();
  const userCxt = useUserCxt();
  const reviewCxt = useReviewCxt();
  const generateId = useGenerateId();
  const { sendRequest } = useHttp();

  const { productId } = params;
  const { productsList } = productsCxt;
  const { cartItems } = cartCxt;

  const product = productsList.find((item) => {
    return productId === item.productId;
  });

  const changeHandler = (event) => {
    setReviewText(event.target.value);
  };

  const editReviewHandler = (reviewItem) => {
    setIsEditBtnClicked(true);
    setReviewText(reviewItem.reviewText);
    setReviewItem(reviewItem);
  };

  const updateReviewHandler = () => {
    const newReview = { ...reviewItem };
    newReview.reviewText = reviewText;
    reviewCxt.editReview(newReview);
    setReviewItem({});
    setReviewText("");
    setIsEditBtnClicked(false);
  };

  const addReviewHandler = () => {
    const user = userCxt.usersList.find((user) => {
      return user.userId === authCxt.userInfo.userId;
    });
    const review = {
      reviewId: generateId("r"),
      userId: authCxt.userInfo.userId,
      productId: productId,
      userName: user.username,
      reviewText: reviewText,
    };
    reviewCxt.addReview(review);
    setReviewText("");
  };

  const closeViewProduct = () => {
    navigate("/home");
  };

  const cartDataHandle = (cartItem, data) => {
    cartCxt.cartDispatchFn({ type: "ADD_TO_CART", value: cartItem });
  };

  const addToCartHandler = () => {
    if (cartItems.length < 5) {
      const exsistedProduct = cartItems.find((item) => {
        return product.productId === item.productId;
      });
      const index = cartItems.indexOf(exsistedProduct);
      if (index >= 0) {
        alert("Product already in cart");
      } else {
        const cartItem = {
          cartItemId: generateId("C"),
          userId: authCxt.userInfo.userId,
          productId: product.productId,
          productName: product.productName,
          price: product.price,
          quantity: 1,
        };
        const requestConfig = {
          url: "https://localhost:5001/api/CartModel/addCartItem",
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: cartItem,
        };
        sendRequest(requestConfig, cartDataHandle.bind(null, cartItem));
      }
    } else {
      alert("Cant't add to cart. Your Cart is full :(");
    }
    closeViewProduct();
  };

  return (
    <div className={classes.container}>
      <header>
        <h1>Product Info:</h1>
      </header>
      <div className={classes.content}>
        <div className={classes["images-div"]}>
          <img
            className={classes.img}
            src={product.imageUrl}
            alt="Apple Watch"
          />
        </div>
        <div className={classes.details}>
          <div>
            <h3 className={classes.label}>Productname :</h3>
            <h3>{product.productName}</h3>
          </div>
          <div>
            <h3 className={classes.label}>Price :</h3>
            <h3>${product.price}</h3>
          </div>
          <div>
            <h3 className={classes.label}>Available Quantity :</h3>
            <h3>{product.quantity}</h3>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.reviews}>
          <h1>Reviews:</h1>
          <hr />
          <ReviewsList
            productId={productId}
            editReviewHandler={editReviewHandler}
          />
          <textarea
            className={classes.textarea}
            type="text"
            placeholder="Add Your Review here"
            value={reviewText}
            onChange={changeHandler}
          />
          {!isEditBtnClicked && (
            <MdAddBox onClick={addReviewHandler} className={classes.addIcon} />
          )}
          {isEditBtnClicked && (
            <MdUpload
              className={classes.addIcon}
              onClick={updateReviewHandler}
            />
          )}
        </div>
      </div>
      <div className={classes.footer}>
        <button className={classes.back} onClick={closeViewProduct}>
          Back
        </button>
        <button className={classes.toCart} onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
