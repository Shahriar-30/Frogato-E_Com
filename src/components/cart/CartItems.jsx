import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([
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

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, piece: item.piece + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.piece > 1
          ? { ...item, piece: item.piece - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Stack spacing={5} px={{ base: 3, md: 8 }}>
      {cartItems.map((e) => (
        <Card
          key={e.id}
          direction={{ base: "column", md: "row" }}
          variant="outline"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="sm"
          w="100%"
          maxW="900px"
          mx="auto"
        >
          {/* Image */}
          <Image
            src={e.url}
            alt={e.name}
            objectFit="cover"
            w={{ base: "100%", md: "220px" }}
            h={{ base: "200px", md: "220px" }}
          />

          {/* Content */}
          <Stack flex="1">
            <CardHeader pb={2}>
              <Flex justify="space-between" align="start">
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    {e.name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Category: {e.category}
                  </Text>
                </Box>

                <Button
                  size="sm"
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => removeItem(e.id)}
                >
                  Remove
                </Button>
              </Flex>
            </CardHeader>

            <CardBody py={2}>
              <Flex justify="space-between" align="center">
                <Text fontSize="lg" fontWeight="bold">
                  ৳ {e.prize * e.piece}
                </Text>

                <Text fontSize="sm" color="gray.500">
                  ৳ {e.prize} each
                </Text>
              </Flex>
            </CardBody>

            <CardFooter pt={2}>
              <Flex align="center" gap={3}>
                <Button
                  size="sm"
                  onClick={() => decreaseQty(e.id)}
                  isDisabled={e.piece === 1}
                >
                  −
                </Button>

                <Box
                  px={4}
                  py={1}
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius="md"
                  minW="50px"
                  textAlign="center"
                >
                  {e.piece}
                </Box>

                <Button size="sm" onClick={() => increaseQty(e.id)}>
                  +
                </Button>
              </Flex>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default CartItems;
