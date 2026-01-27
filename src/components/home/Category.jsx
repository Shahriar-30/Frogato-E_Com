import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  let cataInfo = [
    {
      id: 1,
      title: "Basic Tees",
      des: "Everyday essentials",
      url: "/products",
    },
    { id: 2, title: "Sports Wear", des: "Active lifestyle", url: "/products" },
    { id: 3, title: "  Casual Wear", des: " Relaxed style ", url: "/products" },
    { id: 4, title: " Graphic Tees", des: " Fun prints  ", url: "/products" },
  ];
  return (
    <div className=" w-full px-6 md:px-12 py-7 lg:py-17">
      <p className="text-2xl font-bold ">Shop by Category</p>
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between mt-6 ">
        {cataInfo.map((e) => (
          <Link to={e.url} key={e.id}>
            <div className="flex flex-col gap-2 outline-2 py-2 w-50 rounded text-center ">
              <p className="text-lg font-bold">{e.title}</p>
              <p className="font-semibold">{e.des}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
