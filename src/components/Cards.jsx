import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Heading, Image, SquarePlus, Text } from "lucide-react";
import { Link } from "react-router-dom";

const handelAddToCart = (info) => {
  console.log(info);
};

const Cards = ({ url, title, category, prize, count }) => {
  let value = { url, title, category, prize, count };

  return (
    <div>
      <Card
        key={count}
        overflow="hidden"
        variant="outline"
        maxWidth={300}
        rowGap={-50}
      >
        <CardHeader>
          <img className="w-full" loading="lazy" src={url} alt={title} />
          <p className="text-xl font-bold">{title}</p>
          <p className="font-semibold">{category}</p>
          <p className="font-bold text-xl">${prize}</p>
        </CardHeader>

        <CardFooter justify="space-between">
          <Link to={'/cart'}>
          <Button
            color={"white"}
            gap={2}
            width={"full"}
            backgroundColor={"black"}
            _hover={{}}
            onClick={() => handelAddToCart(value)}
          >
            <SquarePlus color="#fff" /> Add to Cart
          </Button></Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
