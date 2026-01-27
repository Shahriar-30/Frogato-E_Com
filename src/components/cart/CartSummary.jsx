import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const CartSummary = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Classic Henley T-Shirt",
      prize: 899,
      category: "Henley",
      url: "https://picsum.photos/id/1011/400/400",
      piece: 2,
    },
    {
      id: 2,
      name: "Slim Fit Polo T-Shirt",
      prize: 1199,
      category: "Polo",
      url: "https://picsum.photos/id/1012/400/400",
      piece: 3,
    },
  ]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.prize * item.piece,
    0
  );

  return (
    <div
      className="
        bg-white 
        w-full 
        max-w-md 
        md:max-w-sm 
        lg:max-w-md 
        h-fit 
        p-4 
        sm:p-6 
        md:p-8
        mt-6
        md:mt-0
      "
    >
      <p className="text-2xl font-bold">Order Summary</p>

      <div className="flex flex-col gap-5 py-5">
        <div className="w-full flex items-center justify-between">
          <p>Sub-Total</p>
          <p>${totalPrice}</p>
        </div>

        <div className="w-full flex items-center justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
      </div>

      <hr />

      <div className="w-full flex items-center justify-between py-4">
        <p className="text-lg font-bold">Total</p>
        <p className="text-lg font-bold">${totalPrice}</p>
      </div>

      <Button
        mt={3}
        variant="solid"
        w="full"
        bgColor="black"
        color="white"
        _hover={{}}
      >
        Proceed to Checkout
      </Button>

      <p className="text-center text-sm py-4">Taxes calculated at checkout</p>
    </div>
  );
};

export default CartSummary;
