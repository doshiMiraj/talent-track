"use client";

import { Box, VStack, Text, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { logout } from "@/lib/actions/auth";

export default function Sidebar() {
  return (
    <Box
      w="250px"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      p={5}
    >
      <Text fontSize="xl" fontWeight="bold" mb={6}>
        TalentTrack
      </Text>

      <VStack align="stretch" gap={4}>
        <Link as={NextLink} href="/dashboard">
          Dashboard
        </Link>
        <Link as={NextLink} href="/dashboard/skills">
          Skills
        </Link>
        <Link as={NextLink} href="/dashboard/tasks">
          Tasks
        </Link>

        <form action={logout}>
          <Button variant="outline" type="submit">
            Logout
          </Button>
        </form>
      </VStack>
    </Box>
  );
}
