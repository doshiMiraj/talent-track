"use client";

import { Button, Dialog, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { createTask } from "@/lib/actions/tasks";

export default function AddTaskModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button colorPalette="blue">Add Task</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Add Task</Dialog.Title>
        </Dialog.Header>

        <Dialog.Body>
          <form action={createTask}>
            <VStack gap="4">
              <Input name="title" placeholder="Task title" />

              <Button colorPalette="blue" type="submit">
                Save
              </Button>
            </VStack>
          </form>
        </Dialog.Body>

        <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.ActionTrigger>
        </Dialog.Footer>

        <Dialog.CloseTrigger />
      </Dialog.Content>
    </Dialog.Root>
  );
}
