import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./UserSettingsScreen.styles";

type ThemeMode = "Light" | "Dark" | "System";

export default function UserSettingsScreen() {
  const router = useRouter();

  const [theme, setTheme] = useState<ThemeMode>("Light");
  const [language, setLanguage] = useState("English");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Missing fields", "Please fill in all password fields.");
      return;
    }

    if (newPassword.length < 8) {
      Alert.alert(
        "Weak password",
        "Your new password must contain at least 8 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Password mismatch", "The new passwords do not match.");
      return;
    }

    Alert.alert(
      "Demo only",
      "Password validation passed. Connect your password-change API to save the change."
    );
  };

  const handleLanguageChange = () => {
    Alert.alert("Select language", "Choose your preferred language.", [
      {
        text: "English",
        onPress: () => setLanguage("English"),
      },
      {
        text: "हिन्दी",
        onPress: () => setLanguage("Hindi"),
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const renderSettingRow = (
    icon: keyof typeof Ionicons.glyphMap,
    title: string,
    subtitle: string,
    onPress: () => void
  ) => (
    <Pressable style={styles.settingRow} onPress={onPress}>
      <View style={styles.settingIcon}>
        <Ionicons name={icon} size={21} color="#2878E5" />
      </View>

      <View style={styles.settingText}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingSubtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#8A94A6" />
    </Pressable>
  );

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

        <View>
          <Text style={styles.headerTitle}>Settings</Text>
          <Text style={styles.headerSubtitle}>
            Customize your TrimTokyo experience
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>ACCOUNT & SECURITY</Text>

        {renderSettingRow(
          "lock-closed-outline",
          "Change Password",
          "Update your account password",
          () => setShowPasswordForm((value) => !value)
        )}

        {showPasswordForm && (
          <View style={styles.passwordCard}>
            <Text style={styles.inputLabel}>Current password</Text>
            <TextInput
              style={styles.input}
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Enter current password"
              placeholderTextColor="#929BAB"
              secureTextEntry
              autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>New password</Text>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="At least 8 characters"
              placeholderTextColor="#929BAB"
              secureTextEntry
              autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>Confirm new password</Text>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Re-enter new password"
              placeholderTextColor="#929BAB"
              secureTextEntry
              autoCapitalize="none"
            />

            <Pressable
              style={styles.primaryButton}
              onPress={handlePasswordChange}
            >
              <Text style={styles.primaryButtonText}>Update Password</Text>
            </Pressable>
          </View>
        )}

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>PREFERENCES</Text>

        <View style={styles.preferenceCard}>
          <View style={styles.preferenceHeading}>
            <View style={styles.settingIcon}>
              <Ionicons name="color-palette-outline" size={21} color="#2878E5" />
            </View>

            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>App Theme</Text>
              <Text style={styles.settingSubtitle}>
                Current: {theme}
              </Text>
            </View>
          </View>

          <View style={styles.themeOptions}>
            {(["Light", "Dark", "System"] as ThemeMode[]).map((option) => {
              const selected = theme === option;

              return (
                <Pressable
                  key={option}
                  style={[
                    styles.themeOption,
                    selected && styles.themeOptionSelected,
                  ]}
                  onPress={() => setTheme(option)}
                >
                  <Ionicons
                    name={
                      option === "Light"
                        ? "sunny-outline"
                        : option === "Dark"
                          ? "moon-outline"
                          : "phone-portrait-outline"
                    }
                    size={18}
                    color={selected ? "#FFFFFF" : "#596579"}
                  />
                  <Text
                    style={[
                      styles.themeOptionText,
                      selected && styles.themeOptionTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {renderSettingRow(
          "notifications-outline",
          "Notifications",
          "Manage booking alerts and reminders",
          () => router.push("/user/notifications")
        )}

        {renderSettingRow(
          "language-outline",
          "Language",
          `Preferred language: ${language}`,
          handleLanguageChange
        )}

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>PRIVACY</Text>

        <View style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons
              name="finger-print-outline"
              size={21}
              color="#2878E5"
            />
          </View>

          <View style={styles.settingText}>
            <Text style={styles.settingTitle}>Biometric Login</Text>
            <Text style={styles.settingSubtitle}>
              Use device biometrics when supported
            </Text>
          </View>

          <Switch
            value={biometricEnabled}
            onValueChange={setBiometricEnabled}
            trackColor={{ false: "#D5DBE5", true: "#9AC4FF" }}
            thumbColor={biometricEnabled ? "#2878E5" : "#FFFFFF"}
          />
        </View>

        <View style={styles.infoCard}>
          <Ionicons
            name="information-circle-outline"
            size={21}
            color="#2878E5"
          />
          <Text style={styles.infoText}>
            These preferences currently remain local to this screen. Theme
            application, password updates, and account preference persistence
            require app-wide state or backend integration.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
