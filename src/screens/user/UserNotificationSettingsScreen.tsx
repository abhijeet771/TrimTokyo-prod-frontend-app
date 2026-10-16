import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./UserNotificationSettingsScreen.styles";

type NotificationPreference = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const NOTIFICATION_OPTIONS: NotificationPreference[] = [
  {
    id: "bookingUpdates",
    title: "Booking Updates",
    description: "Confirmation, cancellation and booking changes",
    icon: "calendar-outline",
  },
  {
    id: "reminders",
    title: "Appointment Reminders",
    description: "Get reminded before your appointment",
    icon: "alarm-outline",
  },
  {
    id: "offers",
    title: "Offers & Promotions",
    description: "Discounts, deals and special offers",
    icon: "pricetag-outline",
  },
  {
    id: "supportUpdates",
    title: "Support & Complaints",
    description: "Updates about your complaints and support requests",
    icon: "chatbubble-ellipses-outline",
  },
];

export default function UserNotificationSettingsScreen() {
  const router = useRouter();

  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    bookingUpdates: true,
    reminders: true,
    offers: false,
    supportUpdates: true,
  });

  const allEnabled = NOTIFICATION_OPTIONS.every(
    (option) => preferences[option.id]
  );

  const handleMasterToggle = (enabled: boolean) => {
    setPreferences((current) => {
      const updated = { ...current };

      NOTIFICATION_OPTIONS.forEach((option) => {
        updated[option.id] = enabled;
      });

      return updated;
    });
  };

  const handlePreferenceToggle = (id: string, enabled: boolean) => {
    setPreferences((current) => ({
      ...current,
      [id]: enabled,
    }));
  };

  const handleSave = () => {
    Alert.alert(
      "Demo only",
      "Your notification preferences are updated on this screen. Connect your settings API or persistent storage to save them."
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={23} color="#172033" />
        </Pressable>

        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Notifications</Text>
          <Text style={styles.headerSubtitle}>
            Choose what you want to be notified about
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <Ionicons
              name="notifications-outline"
              size={29}
              color="#2878E5"
            />
          </View>

          <Text style={styles.heroTitle}>Stay in the loop</Text>
          <Text style={styles.heroDescription}>
            Get important updates about your appointments, reminders and
            support requests.
          </Text>
        </View>

        <View style={styles.masterCard}>
          <View style={styles.optionIcon}>
            <Ionicons name="notifications" size={21} color="#2878E5" />
          </View>

          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>All Notifications</Text>
            <Text style={styles.optionDescription}>
              Turn all notification categories on or off
            </Text>
          </View>

          <Switch
            value={allEnabled}
            onValueChange={handleMasterToggle}
            trackColor={{ false: "#D5DBE5", true: "#9AC4FF" }}
            thumbColor={allEnabled ? "#2878E5" : "#FFFFFF"}
          />
        </View>

        <Text style={styles.sectionTitle}>NOTIFICATION PREFERENCES</Text>

        {NOTIFICATION_OPTIONS.map((option) => (
          <View style={styles.optionCard} key={option.id}>
            <View style={styles.optionIcon}>
              <Ionicons name={option.icon} size={21} color="#2878E5" />
            </View>

            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionDescription}>
                {option.description}
              </Text>
            </View>

            <Switch
              value={Boolean(preferences[option.id])}
              onValueChange={(enabled) =>
                handlePreferenceToggle(option.id, enabled)
              }
              trackColor={{ false: "#D5DBE5", true: "#9AC4FF" }}
              thumbColor={
                preferences[option.id] ? "#2878E5" : "#FFFFFF"
              }
            />
          </View>
        ))}

        <View style={styles.noteCard}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#2878E5"
          />
          <Text style={styles.noteText}>
            These switches control the preferences displayed in the app.
            Actual push notifications require notification permissions and a
            notification service integration.
          </Text>
        </View>

        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Preferences</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
