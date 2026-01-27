import React, { useState, useRef } from "react";
import { Box, Image, Text, Button, Stack, IconButton } from "@chakra-ui/react";
import { User, Camera } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    image: null, // initially no image
  });

  const inputRef = useRef(null);

  const handleLogout = () => {
    console.log("User logged out");
    // add logout logic here
  };

  const handleUploadClick = () => {
    inputRef.current.click(); // trigger hidden file input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center p-4 bg-gray-100">
      <Box
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 relative"
        w={{ base: "90%", sm: "80%", md: "400px" }}
      >
        {/* Profile Image */}
        <Box className="relative">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name}
              borderRadius="full"
              boxSize={{ base: "100px", md: "120px" }}
              objectFit="cover"
            />
          ) : (
            <Box
              className="flex items-center justify-center bg-gray-200 rounded-full"
              w={{ base: "100px", md: "120px" }}
              h={{ base: "100px", md: "120px" }}
            >
              <User size={48} color="#4A5568" />
            </Box>
          )}

          {/* Camera Icon */}
          <IconButton
            icon={<Camera size={16} />}
            size="sm"
            position="absolute"
            bottom={0}
            right={0}
            colorScheme="blue"
            borderRadius="full"
            onClick={handleUploadClick}
            aria-label="Upload profile picture"
          />
        </Box>

        {/* Hidden file input */}
        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {/* User Info */}
        <Stack spacing={1} textAlign="center">
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            {user.name}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
            {user.email}
          </Text>
        </Stack>

        {/* Logout Button */}
        <Button
          colorScheme="red"
          width="full"
          mt={4}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default Profile;
