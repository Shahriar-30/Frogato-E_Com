import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // ✅ Navigate ONLY when form is valid
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="min-w-75 p-4 flex flex-col rounded items-center gap-3 bg-white">
        <p className="text-2xl font-bold">Frogato</p>
        <p className="text-[13px]">Login to enjoy shopping</p>

        <Box
          maxW="md"
          mx="auto"
          mt="4"
          p="6"
          border="1px solid black"
          borderRadius="md"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <FormControl isInvalid={errors.email} mb="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                border="1px solid black"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
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
                  border="1px solid black"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                />
                <InputRightElement width="3rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
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

            {/* Submit Button */}
            <Button
              type="submit"
              w="full"
              bg="black"
              color="white"
              _hover={{ bg: "gray.800" }}
            >
              Login
            </Button>
          </form>
        </Box>

        <p className="text-[15px] font-semibold text-center">
          I am new here so,
          <div className="hover:underline font-bold">
            <Link to="/register">Create account</Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Login;
