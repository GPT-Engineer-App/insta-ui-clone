import { Box, Container, Flex, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaHeart, FaComment, FaCompass, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={0}>
      {/* Navigation Bar */}
      <Flex bg="white" p={2} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Text fontSize="xl" fontWeight="bold">
          Instagram
        </Text>
        <Flex gap="2">
          <IconButton aria-label="Explore" icon={<FaCompass />} variant="ghost" />
          <IconButton aria-label="Likes" icon={<FaHeart />} variant="ghost" />
          <IconButton aria-label="Profile" icon={<FaUserCircle />} variant="ghost" />
        </Flex>
      </Flex>

      {/* Main Content Area */}
      <VStack spacing={4} mt={4}>
        <Box w="full" bg="white" borderRadius="md" overflow="hidden" border="1px" borderColor="gray.200">
          <Image src="https://images.unsplash.com/photo-1589807867840-aca1258de008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB2aWV3fGVufDB8fHx8MTcxNDc4MzM2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Scenic View" />
          <Box p={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap="2">
                <IconButton aria-label="Like" icon={<FaHeart />} variant="ghost" />
                <IconButton aria-label="Comment" icon={<FaComment />} variant="ghost" />
              </Flex>
              <Text fontSize="sm">100 likes</Text>
            </Flex>
            <Text fontSize="sm" mt={2}>
              Beautiful scenery on a sunny day 🌞
            </Text>
          </Box>
        </Box>
      </VStack>

      {/* Footer */}
      <Flex justifyContent="center" p={4} borderTop="1px" borderColor="gray.200">
        <Text fontSize="sm">© 2023 Instagram Clone</Text>
      </Flex>
    </Container>
  );
};

export default Index;
