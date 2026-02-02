import { getAuth } from "@/lib/auth";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import StatCard from "@/components/ui/StatCard";
import { skills, tasks } from "@/lib/data";

export default async function DashboardPage() {
  const user = await getAuth();

  if (!user) notFound();

  return (
    <Box>
      <Heading mb={6}>Dashboard</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <StatCard label="Total Skills" value={skills.length} />
        <StatCard label="Total Tasks" value={tasks.length} />
      </SimpleGrid>
    </Box>
  );
}
