import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-6 py-12 flex flex-col lg:flex-row  lg:justify-between ">
      <div>
        <p className="text-2xl font-bold">About Frogato</p>
        <p className="max-w-80">
          Your trusted online store for quality boys' t-shirts. Comfortable,
          stylish, and affordable.
        </p>
      </div>
      <div className="mt-5 flex flex-col">
        <p className="text-xl font-bold">Shop</p>
        <Link to={"/products"}>
          <Button variant={"link"}> All Products</Button>
        </Link>
        <Link to={"/products"}>
          <Button variant={"link"}> Basic Tees</Button>{" "}
        </Link>
        <Link to={"/products"}>
          <Button variant={"link"}> Sports Wear</Button>{" "}
        </Link>
        <Link to={"/products"}>
          <Button variant={"link"}> Graphic Teess</Button>{" "}
        </Link>
      </div>

      <div className="mt-5 flex flex-col">
        <p className="text-xl font-bold">Customer Service</p>
        <Link to={"/products"}>
          <Button variant={"link"}> Contact Us</Button>
        </Link>
        <Link to={"/products"}>
          <Button variant={"link"}> Shipping Info</Button>{" "}
        </Link>
        <Link to={"/products"}>
          <Button variant={"link"}> Returns</Button>{" "}
        </Link>
        <Link to={"/products"}>
          <Button variant={"link"}> FAQ</Button>{" "}
        </Link>
      </div>

      <div className="mt-5 flex flex-col">
        <p className="text-xl font-bold"> Account</p>
        <Link to={"/login"}>
          <Button variant={"link"}> Login</Button>
        </Link>
        <Link to={"/Register"}>
          <Button variant={"link"}> Register</Button>{" "}
        </Link>
        <Link to={"/cart"}>
          <Button variant={"link"}> View Cart</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
