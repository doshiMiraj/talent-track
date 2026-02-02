import { skills } from "@/lib/data";
import { Heading, Table, Box, Text } from "@chakra-ui/react";
import AddSkillModal from "@/components/forms/AddSkillModal";

export default async function SkillsPage() {
  return (
    <Box>
      <Heading mb={6}>Skills</Heading>

      <AddSkillModal />

      {skills.length === 0 ? (
        <Text color="gray.500">No skills added yet.</Text>
      ) : (
        <Table.Root mt={6}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Skill Name</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {skills.map((skill) => (
              <Table.Row key={skill.id}>
                <Table.Cell>{skill.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </Box>
  );
}
