import { Box, Button, Flex, Input, Spinner, useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BASE_URL } from "../App";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutate: createTodo, isPending: isCreating } = useMutation({
    mutationKey: ["createTodo"],
    mutationFn: async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const res = await fetch(`${BASE_URL}/todos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: newTodo }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        setNewTodo("");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast({
        position: "top-right",
        render: () => (
          <Box color='white' p={3} bg='green.500'>
            Todo item is added
          </Box>
        ),
        duration: 1000,
      });
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  return (
    <>
      <form onSubmit={createTodo}>
        <Flex gap={2}>
          <Input
            type='text'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            ref={(input) => input && input.focus()}
          />
          <Button mx={2} type='submit' _active={{ transform: "scale(.97)" }}>
            {isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default TodoForm;
