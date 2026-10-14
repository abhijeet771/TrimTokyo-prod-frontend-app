import React from "react";
import { View, Text, Pressable, Alert, Platform,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { GeneratedSlot,} from "./CreateAvailabilityForm";

import { styles } from "./GeneratedSlots.styles";

interface GeneratedSlotsProps {
  slots: GeneratedSlot[];
  onDeleteSlot: (slotId: string) => void;
  onClearAll: () => void;
}

export default function GeneratedSlots({
  slots,
  onDeleteSlot,
  onClearAll,
}: GeneratedSlotsProps) {
  const showConfirmation = (
    title: string,
    message: string,
    onConfirm: () => void
  ) => {
    if (Platform.OS === "web") {
      const confirmed = window.confirm(
        `${title}\n\n${message}`
      );

      if (confirmed) {
        onConfirm();
      }

      return;
    }

    Alert.alert(title, message, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Confirm",
        style: "destructive",
        onPress: onConfirm,
      },
    ]);
  };

  const handleDeleteSlot = (slot: GeneratedSlot) => {
    showConfirmation(
      "Delete Slot",
      `Delete the slot ${slot.startTime} - ${slot.endTime} on ${slot.date}?`,
      () => onDeleteSlot(slot.id)
    );
  };

  const handleClearAll = () => {
    if (slots.length === 0) return;

    showConfirmation(
      "Clear All Slots",
      "Are you sure you want to delete all generated slots?",
      onClearAll
    );
  };

  const formatDate = (dateString: string) => {
    const parts = dateString.split("-");

    if (parts.length !== 3) {
      return dateString;
    }

    // Supports DD-MM-YYYY and YYYY-MM-DD.
    if (parts[0].length === 4) {
      const [year, month, day] = parts;
      return `${day}-${month}-${year}`;
    }

    return dateString;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>Generated Slots</Text>
          <Text style={styles.subtitle}>
            Manage your available booking time slots.
          </Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countText}>
            {slots.length}
          </Text>
        </View>
      </View>

      {slots.length > 0 && (
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Ionicons
              name="calendar-outline"
              size={23}
              color="#1769FF"
            />
          </View>

          <View style={styles.summaryTextContainer}>
            <Text style={styles.summaryTitle}>
              {slots.length}{" "}
              {slots.length === 1 ? "slot" : "slots"} generated
            </Text>
            <Text style={styles.summaryDescription}>
              These slots are stored locally for this session.
            </Text>
          </View>

          <Pressable
            style={styles.clearButton}
            onPress={handleClearAll}
            accessibilityRole="button"
            accessibilityLabel="Clear all generated slots"
          >
            <Ionicons
              name="trash-outline"
              size={17}
              color="#DC2626"
            />
            <Text style={styles.clearButtonText}>
              Clear All
            </Text>
          </Pressable>
        </View>
      )}

      {slots.length === 0 ? (
        <View style={styles.emptyCard}>
          <View style={styles.emptyIconContainer}>
            <Ionicons
              name="calendar-outline"
              size={38}
              color="#1769FF"
            />
          </View>

          <Text style={styles.emptyTitle}>
            No slots generated yet
          </Text>

          <Text style={styles.emptyDescription}>
            Go to Create Slots, select your date and working
            hours, and generate your availability. Your slots
            will appear here.
          </Text>
        </View>
      ) : (
        <View style={styles.slotList}>
          {slots.map((slot, index) => (
            <View
              key={slot.id}
              style={styles.slotCard}
            >
              <View style={styles.slotTopRow}>
                <View style={styles.slotNumberContainer}>
                  <Text style={styles.slotNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                </View>

                <View style={styles.dateContainer}>
                  <Ionicons
                    name="calendar-clear-outline"
                    size={15}
                    color="#71839F"
                  />
                  <Text style={styles.dateText}>
                    {formatDate(slot.date)}
                  </Text>
                </View>

                <View style={styles.availableBadge}>
                  <View style={styles.availableDot} />
                  <Text style={styles.availableText}>
                    {slot.status === "AVAILABLE"
                      ? "Available"
                      : slot.status}
                  </Text>
                </View>
              </View>

              <View style={styles.slotDetails}>
                <View style={styles.timeContainer}>
                  <View style={styles.timeIcon}>
                    <Ionicons
                      name="time-outline"
                      size={22}
                      color="#1769FF"
                    />
                  </View>

                  <View style={styles.timeTextContainer}>
                    <Text style={styles.timeLabel}>
                      Time
                    </Text>
                    <Text style={styles.timeText}>
                      {slot.startTime} - {slot.endTime}
                    </Text>
                  </View>
                </View>

                <View style={styles.durationContainer}>
                  <Ionicons
                    name="hourglass-outline"
                    size={17}
                    color="#71839F"
                  />
                  <Text style={styles.durationText}>
                    {slot.duration} min
                  </Text>
                </View>
              </View>

              <View style={styles.slotFooter}>
                <Text style={styles.slotFooterText}>
                  Slot #{index + 1}
                </Text>

                <Pressable
                  style={styles.deleteButton}
                  onPress={() => handleDeleteSlot(slot)}
                  accessibilityRole="button"
                  accessibilityLabel={
                    `Delete slot ${slot.startTime} to ${slot.endTime}`
                  }
                  hitSlop={8}
                >
                  <Ionicons
                    name="trash-outline"
                    size={16}
                    color="#DC2626"
                  />
                  <Text style={styles.deleteButtonText}>
                    Delete
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}