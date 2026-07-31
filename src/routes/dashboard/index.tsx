import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
  IconDeviceFloppy,
  IconPhone,
  IconRefresh,
  IconStethoscope,
  IconUser,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

function DashboardPage() {
  const form = useForm({
    initialValues: {
      fullName: "",
      phone: "",
      gender: "male",
      age: "",
      doctor: "",
      appointmentDate: null,
      address: "",
    },

    validate: {
      fullName: (value) =>
        value.length < 2 ? "নাম অন্তত ২ অক্ষরের হতে হবে" : null,
      phone: (value) =>
        /^\d{11}$/.test(value) ? null : "সঠিক ১১ ডিজিটের ফোন নম্বর দিন",
      age: (value) => (value ? null : "বয়স প্রদান করুন"),
      doctor: (value) => (value ? null : "ডাক্তার নির্বাচন করুন"),
    },
  });

  const handleSubmit = (values: any) => {
    console.log("Form Data Submitted:", values);
    alert("রোগীর তথ্য সফলভাবে সেভ করা হয়েছে!");
  };

  return (
    <Paper radius="md" p="xl" style={{ maxWidth: 1000, margin: "20px auto" }}>
      {/* header */}
      <Stack gap="xs" mb="lg">
        <Title order={3} c="blue">
          Dashboard Register Form
        </Title>
        <Text size="sm" c="dimmed">
          Mantine UI ব্যবহার করে তৈরি একটি সহজ ও রেসপন্সিভ লেআউট।
        </Text>
      </Stack>
      <Divider mb="lg" />

      {/* Form */}

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Grid style={{ maxWidth: 800 }}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Full Name"
                placeholder="যেমন: রহিম উদ্দিন"
                leftSection={<IconUser size={18} />}
                withAsterisk
                {...form.getInputProps("fullName")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Phone Number"
                placeholder="01700000000"
                leftSection={<IconPhone size={18} />}
                withAsterisk
                {...form.getInputProps("phone")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                label="Age (Years)"
                placeholder="যেমন: 25"
                type="number"
                withAsterisk
                {...form.getInputProps("age")}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Select
                label="Gender"
                data={[
                  { value: "male", label: "Male (পুরুষ)" },
                  { value: "female", label: "Female (মহিলা)" },
                  { value: "other", label: "Other" },
                ]}
                {...form.getInputProps("gender")}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <DatePickerInput
                label="Appointment Date"
                placeholder="তারিখ বেছে নিন"
                clearable
                {...form.getInputProps("appointmentDate")}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="Referred Doctor"
                placeholder="ডাক্তার নির্বাচন করুন"
                leftSection={<IconStethoscope size={18} />}
                data={[
                  { value: "doc-1", label: "Dr. Abul Kalam (Cardiology)" },
                  { value: "doc-2", label: "Dr. Nusrat Jahan (Neurology)" },
                  { value: "doc-3", label: "Dr. Selim Reza (Medicine)" },
                ]}
                withAsterisk
                {...form.getInputProps("doctor")}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput label="Address" placeholder="যেমন: ধানমন্ডি, ঢাকা" />
            </Grid.Col>
          </Grid>

          <Group justify="flex-end" gap="sm">
            <Button
              onClick={() => form.reset()}
              variant="outline"
              color="gray"
              leftSection={<IconRefresh size={18} />}
            >
              Reset
            </Button>

            <Button
              type="submit"
              color="blue"
              leftSection={<IconDeviceFloppy size={18} />}
            >
              Save Patient
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}

export const Route = createFileRoute("/dashboard/")({
  component: DashboardPage,
});
