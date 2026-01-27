import { Check, IndianRupee, Van } from "lucide-react";
import React from "react";

const Why = () => {
  return (
    <div className="w-full bg-white px-6 lg:px-12 py-18">
      <p className="text-3xl font-bold text-center"> Why Choose Frogato</p>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mt-7 lg:mt-17">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-black w-10 h-10 flex items-center justify-center ">
            <Check color={"#fff"} />
          </div>
          <p className="text-2xl font-bold">Quality Materials</p>
          <p className="text-center">
            Premium cotton and fabric blends for comfort and durability
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-black w-10 h-10 flex items-center justify-center ">
            <IndianRupee color="#fff" />
          </div>
          <p className="text-2xl font-bold">Affordable Prices</p>
          <p className="text-center">
            Great value for money without compromising on quality
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-black w-10 h-10 flex items-center justify-center ">
            <Van color="#fff" />
          </div>
          <p className="text-2xl font-bold">Fast Delivery</p>
          <p className="text-center">
            Quick shipping to your doorstep with reliable service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
