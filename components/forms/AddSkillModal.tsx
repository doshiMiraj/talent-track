"use client";

import { Button, Dialog, Input, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { createSkill } from "@/lib/actions/skills";

export default function AddSkillModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button colorPalette="blue" variant="solid">
          Add Skill
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Add Skill</Dialog.Title>
        </Dialog.Header>

        <Dialog.Body>
          <form action={createSkill}>
            <VStack gap="4">
              <Input name="name" placeholder="Skill name" />
              <Button colorScheme="blue" type="submit">
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
