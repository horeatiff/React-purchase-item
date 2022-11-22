import React from "react";

const Delivery = () => {
  return (
    <div className="delivery">
      <input
        type="radio"
        id="radioDeliver"
        name="radioPickup"
        value="Deliver"
        checked
      />

      <label for="radioDeliver">Deliver the item</label>

      <input type="radio" id="radioStore" name="radioPickup" value="Store" />

      <label for="radioStore">Pick up in store</label>
    </div>
  );
};

export default Delivery;
