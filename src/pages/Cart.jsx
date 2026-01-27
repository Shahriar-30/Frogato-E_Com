import React from "react";
import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  return (
    <div className="mt-17 px-6 lg:px-12 py-7">
      <p className="text-2xl font-bold">Shopping Cart</p>
      <div className="w-full flex flex-col lg:flex-row justify-between mt-5">
        <CartItems />
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
