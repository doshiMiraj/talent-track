import { Box, Stat } from "@chakra-ui/react";

type Props = {
  label: string;
  value: number;
};

export default function StatCard({ label, value }: Props) {
  return (
    <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
      <Stat.Root>
        <Stat.Label>{label}</Stat.Label>
        <Stat.ValueText>{value}</Stat.ValueText>
      </Stat.Root>
    </Box>
  );
}
