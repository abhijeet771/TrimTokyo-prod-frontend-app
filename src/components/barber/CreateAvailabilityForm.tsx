import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Platform, Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./CreateAvailabilityForm.styles";

export interface GeneratedSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  status: "AVAILABLE";
}

interface CreateAvailabilityFormProps {
  onGenerate: (slots: GeneratedSlot[]) => void;
}

const SLOT_DURATIONS = [15, 30, 45, 60];

const pad = (value: number) => String(value).padStart(2, "0");

const formatDate = (date: Date) =>
  `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;

const parseTime = (value: string) => {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);

  if (!match) return null;

  return Number(match[1]) * 60 + Number(match[2]);
};

const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${pad(hours)}:${pad(mins)}`;
};

export default function CreateAvailabilityForm({
  onGenerate,
}: CreateAvailabilityFormProps) {
  const [date, setDate] = useState(formatDate(new Date()));
  const [startTime, setStartTime] = useState("11:00");
  const [endTime, setEndTime] = useState("19:00");
  const [duration, setDuration] = useState(30);

  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  const showMessage = (title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const handleGenerate = () => {
    setDateError("");
    setTimeError("");

    const dateMatch =
      /^(\d{2})-(\d{2})-(\d{4})$/.exec(date);

    if (!dateMatch) {
      setDateError("Enter date in DD-MM-YYYY format.");
      return;
    }

    const day = Number(dateMatch[1]);
    const month = Number(dateMatch[2]);
    const year = Number(dateMatch[3]);

    const parsedDate = new Date(year, month - 1, day);

    if (
      parsedDate.getFullYear() !== year ||
      parsedDate.getMonth() !== month - 1 ||
      parsedDate.getDate() !== day
    ) {
      setDateError("Enter a valid calendar date.");
      return;
    }

    const start = parseTime(startTime);
    const end = parseTime(endTime);

    if (start === null || end === null) {
      setTimeError("Use 24-hour time format, such as 09:30.");
      return;
    }

    if (end <= start) {
      setTimeError("End time must be later than start time.");
      return;
    }

    const slots: GeneratedSlot[] = [];

    for (
      let current = start;
      current + duration <= end;
      current += duration
    ) {
      slots.push({
        id: `${date}-${formatTime(current)}`,
        date,
        startTime: formatTime(current),
        endTime: formatTime(current + duration),
        duration,
        status: "AVAILABLE",
      });
    }

    if (slots.length === 0) {
      showMessage(
        "No slots generated",
        "The selected time range is shorter than the slot duration."
      );
      return;
    }

    onGenerate(slots);

    showMessage(
      "Slots generated",
      `${slots.length} availability slots generated for ${date}.`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Create Availability Slots
      </Text>

      <Text style={styles.description}>
        Select a date, time range and slot duration to generate
        your available slots.
      </Text>

      {/* Date */}
      <View style={styles.field}>
        <Text style={styles.label}>Date</Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="calendar-outline"
            size={21}
            color="#1769FF"
          />

          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="DD-MM-YYYY"
            placeholderTextColor="#8293B2"
            keyboardType="numbers-and-punctuation"
            maxLength={10}
            accessibilityLabel="Slot date"
          />
        </View>

        {!!dateError && (
          <Text style={styles.errorText}>{dateError}</Text>
        )}
      </View>

      {/* Start time */}
      <View style={styles.field}>
        <Text style={styles.label}>Start Time (24-hour)</Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="time-outline"
            size={21}
            color="#1769FF"
          />

          <TextInput
            style={styles.input}
            value={startTime}
            onChangeText={setStartTime}
            placeholder="11:00"
            placeholderTextColor="#8293B2"
            keyboardType="numbers-and-punctuation"
            maxLength={5}
            accessibilityLabel="Start time"
          />
        </View>
      </View>

      {/* End time */}
      <View style={styles.field}>
        <Text style={styles.label}>End Time (24-hour)</Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="time-outline"
            size={21}
            color="#1769FF"
          />

          <TextInput
            style={styles.input}
            value={endTime}
            onChangeText={setEndTime}
            placeholder="19:00"
            placeholderTextColor="#8293B2"
            keyboardType="numbers-and-punctuation"
            maxLength={5}
            accessibilityLabel="End time"
          />
        </View>
      </View>

      {!!timeError && (
        <Text style={styles.errorText}>{timeError}</Text>
      )}

      {/* Slot duration */}
      <View style={styles.field}>
        <Text style={styles.label}>Slot Duration</Text>

        <View style={styles.durationOptions}>
          {SLOT_DURATIONS.map((minutes) => {
            const active = duration === minutes;

            return (
              <Pressable
                key={minutes}
                style={[
                  styles.durationOption,
                  active && styles.durationOptionActive,
                ]}
                onPress={() => setDuration(minutes)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
              >
                <Text
                  style={[
                    styles.durationText,
                    active && styles.durationTextActive,
                  ]}
                >
                  {minutes} min
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Generate button */}
      <Pressable
        style={({ pressed }) => [
          styles.generateButton,
          pressed && styles.generateButtonPressed,
        ]}
        onPress={handleGenerate}
        accessibilityRole="button"
      >
        <Ionicons
          name="add-circle-outline"
          size={22}
          color="#FFFFFF"
        />

        <Text style={styles.generateButtonText}>
          Generate Slots
        </Text>
      </Pressable>

      <Text style={styles.helperText}>
        Generated slots will appear under the Generated Slots tab.
      </Text>
    </View>
  );
}