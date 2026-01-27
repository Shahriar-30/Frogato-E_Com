import React, { useState } from "react";
import {
  Bold,
  Menu,
  Search,
  SearchIcon,
  ShoppingBag,
  ShoppingCart,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <nav className="flex w-full  backdrop-blur-md z-50 bg-white/30 fixed top-0 items-center justify-between p-2 border  border-black ">
        {/* logo */}
        <div className="text-xl text-black w-fit font-bold mr-5">
          <Link to={"/profile"}>Frogato</Link>
        </div>
        {/* search */}
        <div>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search color="#000000" />
            </InputLeftElement>
            <Input
              type="tel"
              border="1px"
              borderColor="black"
              placeholder="Search"
            />
          </InputGroup>
        </div>
        {/* menu mobile */}
        <div className="md:hidden">
          <Button onClick={onOpen}>
            <Menu color="#000000" />
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Menu</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <Link to={"/products"}>
                    <Button
                      width={"full"}
                      variant={"link"}
                      color={"black"}
                      fontWeight={"bold"}
                      padding={2}
                      _hover={{ backgroundColor: "#eee" }}
                    >
                      <ShoppingBag color="#000" width={20} />
                      Products
                    </Button>
                  </Link>
                  <Link to={"/cart"}>
                    <Button
                      width={"full"}
                      variant={"link"}
                      color={"black"}
                      fontWeight={"bold"}
                      padding={2}
                      _hover={{ backgroundColor: "#eee" }}
                    >
                      <ShoppingCart color="#000" width={20} />
                      Cart
                    </Button>
                  </Link>
                  <Link to={"/login"}>
                    <Button
                      width={"full"}
                      color={"white"}
                      backgroundColor={"black"}
                      variant={"solid"}
                      fontWeight={"bold"}
                      _hover={{}}
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
        {/* menu desktop */}
        <div className="hidden md:flex md:gap-5">
          <Link to={"/products"}>
            <Button
              width={"full"}
              variant={"link"}
              color={"black"}
              fontWeight={"bold"}
              padding={2}
              _hover={{ backgroundColor: "#eee" }}
            >
              <ShoppingBag color="#000" width={20} />
              Products
            </Button>
          </Link>
          <Link to={"/cart"}>
            <Button
              width={"full"}
              variant={"link"}
              color={"black"}
              fontWeight={"bold"}
              paddingY={2}
              paddingX={1000}
            >
              <ShoppingCart color="#000" width={20} />
              Cart
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button
              width={"full"}
              color={"white"}
              backgroundColor={"black"}
              variant={"solid"}
              fontWeight={"bold"}
              _hover={{}}
            >
              Login
            </Button>
          </Link>
        </div>
      </nav>
      <div className="w-full p-px bg-black"></div>
    </>
  );
};

export default Navbar;
