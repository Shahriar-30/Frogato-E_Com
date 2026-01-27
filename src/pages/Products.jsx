import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { tshirtProducts } from "../data/Json";
import { Button } from "@chakra-ui/react";

const Products = () => {
  const itemsPerPage = 6; // show 6 at a time
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const loadMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  return (
    <div className="w-full px-6 lg:p-12 py-7 mt-15">
      <p className="text-2xl font-bold">All Products</p>

      <div className="flex flex-wrap gap-6 justify-center md:justify-between mt-7">
        {tshirtProducts.slice(0, visibleCount).map((e) => (
          <Cards
            key={e.id}
            count={e.id}
            title={e.name}
            category={e.category}
            prize={e.prize}
            url={e.url}
          />
        ))}
      </div>

      {visibleCount < tshirtProducts.length && (
        <div className="text-center mt-6">
          <Button
            variant={"solid"}
            color={"white"}
            bgColor={"black"}
            onClick={loadMore}
            _hover={{}}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
