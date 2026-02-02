import { tasks } from "@/lib/data";
import { Box, Heading, Table, Badge, Button } from "@chakra-ui/react";
import { updateTaskStatus } from "@/lib/actions/tasks";
import AddTaskModal from "@/components/forms/AddTaskModal";

function getColor(status: string) {
  if (status === "done") return "green";
  if (status === "in-progress") return "yellow";
  return "gray";
}

export default async function TasksPage() {
  return (
    <Box>
      <Heading mb={6}>Tasks</Heading>

      <AddTaskModal />

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Task</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
            <Table.ColumnHeader>Action</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map((task) => (
            <Table.Row key={task.id}>
              <Table.Cell>{task.title}</Table.Cell>
              <Table.Cell>
                <Badge colorPalette={getColor(task.status)}>
                  {task.status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <form action={updateTaskStatus}>
                  <input type="hidden" name="id" value={task.id} />
                  <Button size="sm" type="submit">
                    Next Status
                  </Button>
                </form>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
