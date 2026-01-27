import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { PanelRight } from "lucide-react";
import React from "react";

const DrawerProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [category, setCategory] = React.useState("1");
  const [color, setColor] = React.useState("1");
  const [size, setSize] = React.useState("1");

  const btnRef = React.useRef();

  let handelFilter = () => {
    let value = { category, color, size };
    console.log(value);
  };
  return (
    <div className="mt-6">
      <Button
        width={{ base: "full", md: "auto" }}
        ref={btnRef}
        color="black"
        variant="outline"
        outlineColor="black"
        gap={1}
        _hover={{ bgColor: "white" }}
        onClick={onOpen}
      >
        <PanelRight color="#000000" />
        <p>Filters</p>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col gap-7">
              <div>
                <p className="text-2xl">Category</p>
                <RadioGroup onChange={setCategory} value={category}>
                  <Stack direction="column" mt={2}>
                    <Radio value="1">All</Radio>
                    <Radio value="2">Basic</Radio>
                    <Radio value="3">Sports</Radio>
                    <Radio value="4">Casual</Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div>
                <p className="text-2xl ">Color</p>
                <RadioGroup onChange={setColor} value={color}>
                  <Stack direction="column" mt={2}>
                    <Radio value="1">All</Radio>
                    <Radio value="2">White</Radio>
                    <Radio value="3">Black</Radio>
                    <Radio value="4">Gray</Radio>
                    <Radio value="5">Blue</Radio>
                  </Stack>
                </RadioGroup>
              </div>
              <div>
                <p className="text-2xl ">Size</p>
                <RadioGroup onChange={setSize} value={size}>
                  <Stack direction="column" mt={2}>
                    <Radio value="1">All</Radio>
                    <Radio value="2">S</Radio>
                    <Radio value="3">M</Radio>
                    <Radio value="4">L</Radio>
                    <Radio value="5">XL</Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                handelFilter();
              }}
            >
              Close
            </Button>
            <Button variant="solid" colorScheme="blue" mr={3} onClick={onClose}>
              Reset
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerProducts;
