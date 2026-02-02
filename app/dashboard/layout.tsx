import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "@/components/ui/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box flex="1" p={6} bg="gray.50">
        {children}
      </Box>
    </Flex>
  );
}
