import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";

export default function LoginPage() {
  async function login(formData: FormData) {
    "use server";

    const email = formData.get("email");

    if (email) {
      const store = await cookies();

      store.set(
        "auth",
        JSON.stringify({
          userId: "1",
          role: "user",
        }),
        {
          httpOnly: true,
          path: "/",
        },
      );

      redirect("/dashboard");
    }
  }

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="md"
        w="100%"
        maxW="400px"
      >
        <VStack gap={6} align="stretch">
          <Box textAlign="center">
            <Heading size="lg">Welcome to TalentTrack</Heading>
            <Text color="gray.500" mt={2}>
              Sign in to continue to your dashboard
            </Text>
          </Box>

          <form action={login}>
            <VStack gap={4}>
              <Input
                name="email"
                placeholder="Enter your email"
                type="email"
                required
              />

              <Button type="submit" colorPalette="blue" size="lg" w="100%">
                Login
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Box>
  );
}
