import { Box, Button, CloseIcon, Group, Paper, Stack, Text } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Box bg="gray.4" p={30}>
      <Paper p={10} radius={0} shadow="md">
        <Text>Hello World!</Text>
      </Paper>
      <br />
      <Stack h={100} align="flex-start" justify="flex-start" gap={5}>
        <Button variant="outline">click me</Button>
        <Button variant="outline">click me</Button>
        <Button variant="outline">click me</Button>
      </Stack>

      {/* <Button variant="outline">click me</Button> */}

      <Group mt={30} mx={30}>
        <Button color="red"  size="compact-xs" radius={1} variant="filled">
          click me
        </Button>
        <Button color="green" size="xs" variant="filled">
          click me
        </Button>
        <Button leftSection={<CloseIcon size="20" />} color="blue" radius={1} variant="filled">
          click me
        </Button>
        <Button color="purple" radius={1} variant="filled">
          click me
        </Button>
        <Button rightSection={<CloseIcon size="20" />} color="orange" radius={1} variant="filled">
          click me
        </Button>
        <Button variant="filled">click me</Button>
        <Button variant="filled">click me</Button>
      </Group>
    </Box>
  );
}
