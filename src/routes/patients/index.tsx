import { createFileRoute } from '@tanstack/react-router'




import { useForm } from "@mantine/form";
import {
  Paper,
  Title,
  Text,
  TextInput,
  Select,
  Button,
  Grid,
  Stack,
  Group,
  Divider,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import {
  IconUser,
  IconPhone,
  IconDeviceFloppy,
  IconRefresh,
  IconStethoscope,
} from "@tabler/icons-react";

export default function PatientPage() {
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

    // ফর্ম ভ্যালিডেশন (সহজ নিয়ম)
    validate: {
      fullName: (value) =>
        value.length < 2 ? "নাম অন্তত ২ অক্ষরের হতে হবে" : null,
      phone: (value) =>
        /^\d{11}$/.test(value) ? null : "সঠিক ১১ ডিজিটের ফোন নম্বর দিন",
      age: (value) => (value ? null : "বয়স প্রদান করুন"),
      doctor: (value) => (value ? null : "ডাক্তার নির্বাচন করুন"),
    },
  });

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = (values:any) => {
    console.log("Form Data Submitted:", values);
    alert("রোগীর তথ্য সফলভাবে সেভ করা হয়েছে!");
  };

  return (
    <Paper radius="md" p="xl" withBorder shadow="sm" style={{ maxWidth: 800, margin: "20px auto" }}>
      {/* ফর্মের হেডার */}
      <Stack gap="xs" mb="lg">
        <Title order={3} c="blue">
          Patient Registration (রোগী নিবন্ধন)
        </Title>
        <Text size="sm" c="dimmed">
          Mantine UI ব্যবহার করে তৈরি একটি সহজ ও রেসপন্সিভ লেআউট।
        </Text>
      </Stack>

      <Divider mb="lg" />

      {/* মূল ফর্ম */}
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          {/* Grid Layout: বড় স্ক্রিনে ২ কলাম, মোবাইলে ১ কলাম */}
          <Grid  style={{maxWidth:800}}>
            {/* রোগীর নাম */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Full Name"
                placeholder="যেমন: রহিম উদ্দিন"
                leftSection={<IconUser size={18} />}
                withAsterisk
                {...form.getInputProps("fullName")}
              />
            </Grid.Col>

            {/* ফোন নম্বর */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Phone Number"
                placeholder="01700000000"
                leftSection={<IconPhone size={18} />}
                withAsterisk
                {...form.getInputProps("phone")}
              />
            </Grid.Col>

            {/* বয়স */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                label="Age (Years)"
                placeholder="যেমন: 25"
                type="number"
                withAsterisk
                {...form.getInputProps("age")}
              />
            </Grid.Col>

            {/* জেন্ডার নির্বাচন */}
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

            {/* অ্যাপয়েন্টমেন্ট তারিখ */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <DatePickerInput
                label="Appointment Date"
                placeholder="তারিখ বেছে নিন"
                clearable
                {...form.getInputProps("appointmentDate")}
              />
            </Grid.Col>

            {/* রেফার্ড ডাক্তার */}
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

            {/* ঠিকানা */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Address"
                placeholder="যেমন: ধানমন্ডি, ঢাকা"
                {...form.getInputProps("address")}
              />
            </Grid.Col>
          </Grid>

          <Divider my="sm" />

          {/* অ্যাকশন বাটনসমূহ (কোডের শেষ দিকে Action Group) */}
          <Group justify="flex-end" gap="sm">
            <Button
              variant="outline"
              color="gray"
              leftSection={<IconRefresh size={18} />}
              onClick={() => form.reset()}
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


export const Route = createFileRoute('/patients/')({
  component: PatientPage,
})