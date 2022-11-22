import React from "react";

const Reviews = (props) => {
  return (
    <div className="reviews">
      <div className="reviews__stars">
        <span class="fa fa-star checked"></span>

        <span class="fa fa-star checked"></span>

        <span class="fa fa-star checked"></span>

        <span class="fa fa-star"></span>

        <span class="fa fa-star"></span>
      </div>

      <div className="reviews__rating">{props.rating}</div>

      <span className="reviews__separator"> · </span>

      <a href="#reviews" className="reviews__number">
        {props.number} reviews
      </a>
    </div>
  );
};

export default Reviews;
