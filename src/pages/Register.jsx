import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // if form is valid, react-hook-form calls onSubmit
    navigate("/");
  };

  // Watch password to validate confirm password
  const password = watch("password", "");

  return (
    <div className="w-full  p-5 flex items-center justify-center">
      <div className="min-w-75 p-3 flex flex-col rounded items-center gap-2 bg-white">
        <p className="text-2xl font-bold">Frogato</p>
        <p className="text-[13px] text-center">
          Create an account to start shopping
        </p>

        <Box
          maxW="md"
          mx="auto"
          mt="4"
          p="6"
          border="1px solid black"
          borderRadius="md"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <FormControl isInvalid={errors.name} mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                border="1px solid black"
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            {/* Email */}
            <FormControl isInvalid={errors.email} mb="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                border="1px solid black"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* Password */}
            <FormControl isInvalid={errors.password} mb="4">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                  border="1px solid black"
                />
                <InputRightElement width="3rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    variant="ghost"
                    _hover={{ bg: "transparent" }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            {/* Confirm Password */}
            <FormControl isInvalid={errors.confirmPassword} mb="4">
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  border="1px solid black"
                />
                <InputRightElement width="3rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowConfirm(!showConfirm)}
                    variant="ghost"
                    _hover={{ bg: "transparent" }}
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              w="full"
              bg="black"
              color="white"
              _hover={{ bg: "gray.800" }}
            >
              Register
            </Button>
          </form>

          <p className="text-[15px] font-semibold text-center py-5">
            Already have an account?{" "}
            <Link to="/login" className="hover:underline font-bold">
              Login
            </Link>
          </p>
        </Box>
      </div>
    </div>
  );
};

export default Register;
