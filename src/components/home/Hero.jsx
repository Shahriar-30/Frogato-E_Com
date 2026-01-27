import { Button } from "@chakra-ui/react";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white py-15 mt-15 px-3 flex flex-col gap-3 md:px-12 md:py-20  ">
      <p className="text-3xl font-bold md:text-5xl ">
        {" "}
        Quality T-Shirts for Boys
      </p>
      <p className="text-[14px] md:text-[18px] md:max-w-90">
        Discover our collection of comfortable and stylish t-shirts. From basic
        tees to graphic prints, find the perfect fit for your boy.
      </p>
      <Link to={"/products"}>
        <Button backgroundColor={"black"} color={"white"} gap={2}>
          <ShoppingBag color="#fff" width={18} /> Shop Now
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
