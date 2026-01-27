import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards";
import axios from "axios";
import { tshirtProducts } from "../../data/Json";

const Featured = () => {
  const [data, setData] = useState({});

  return (
    <>
      <div className=" w-full px-6 md:px-12 py-7">
        <div className="flex items-center justify-between mb-5">
          <p className="text-2xl font-bold">Featured Products</p>
          <Link to={"/products"}>
            <Button variant={"link"} color={"black"}>
              View all
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-y-6">
          {tshirtProducts.slice(0, 6).map((e) => (
            <div key={e.id} className="w-full sm:w-[48%] lg:w-[32%]">
              <Cards
                count={e.id}
                title={e.name}
                category={e.category}
                url={e.url}
                prize={e.prize}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
