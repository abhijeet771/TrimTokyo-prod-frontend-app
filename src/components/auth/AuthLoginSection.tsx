
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { AUTH_CONTENT, AUTH_THEME } from "../../constants/auth";

if (Platform.OS === "web") {
  require("./AuthLoginSection.css");
}

export default function AuthLoginSection() {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    Keyboard.dismiss();

    if (!/^[6-9]\d{9}$/.test(phone)) {
      Alert.alert(
        "Invalid phone number",
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    Alert.alert(
      "Phone number accepted",
      "OTP authentication will be connected next."
    );
  };

  const handleTerms = () => {
    // TODO: Navigate to Terms of Service.
  };

  const handlePrivacy = () => {
    // TODO: Navigate to Privacy Policy.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{AUTH_CONTENT.loginTitle}</Text>

      <Text style={styles.description}>
        {AUTH_CONTENT.loginDescription}
      </Text>

      <View style={styles.phoneInputContainer}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.flag}>🇮🇳</Text>
          <Text style={styles.countryCode}>
            {AUTH_CONTENT.countryCode}
          </Text>
        </View>

        <TextInput
          style={styles.phoneInput}
          value={phone}
          onChangeText={(value) =>
            setPhone(value.replace(/\D/g, "").slice(0, 10))
          }
          placeholder={AUTH_CONTENT.phonePlaceholder}
          placeholderTextColor="#8293B2"
          keyboardType="phone-pad"
          autoComplete="tel-national"
          maxLength={10}
          returnKeyType="done"
          accessibilityLabel="Phone number"
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.continueButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleContinue}
        accessibilityRole="button"
      >
        <Text style={styles.continueButtonText}>
          {AUTH_CONTENT.continueButton}
        </Text>
        <Text style={styles.arrow}>→</Text>
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.alternativeButton,
          pressed && styles.alternativeButtonPressed,
        ]}
        onPress={handleContinue}
        accessibilityRole="button"
      >
        <Text style={styles.phoneIcon}>▯</Text>
        <Text style={styles.alternativeButtonText}>
          {AUTH_CONTENT.alternativeLogin}
        </Text>
      </Pressable>

      <View style={styles.legalContainer}>
        <Text style={styles.legalText}>
          {AUTH_CONTENT.termsPrefix}
        </Text>

        <View style={styles.legalLinks}>
          <Text
            style={styles.legalLink}
            onPress={handleTerms}
            accessibilityRole="link"
          >
            {AUTH_CONTENT.termsOfService}
          </Text>

          <Text style={styles.legalText}> and </Text>

          <Text
            style={styles.legalLink}
            onPress={handlePrivacy}
            accessibilityRole="link"
          >
            {AUTH_CONTENT.privacyPolicy}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: Platform.OS === "ios" ? 34 : 24,
    shadowColor: "#1C5DB5",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: AUTH_THEME.text,
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: AUTH_THEME.secondaryText,
  },
  phoneInputContainer: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: AUTH_THEME.border,
    borderRadius: 18,
    marginTop: 24,
    overflow: "hidden",
    backgroundColor: "#F8FAFF",
  },
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 12,
    alignSelf: "stretch",
    borderRightWidth: 1,
    borderRightColor: AUTH_THEME.border,
  },
  flag: {
    fontSize: 20,
  },
  countryCode: {
    fontSize: 15,
    fontWeight: "600",
    color: AUTH_THEME.text,
  },
  phoneInput: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 15,
    fontSize: 14,
    color: AUTH_THEME.text,
  },
  continueButton: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: AUTH_THEME.primary,
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  arrow: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 22,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: AUTH_THEME.border,
  },
  orText: {
    fontSize: 13,
    color: AUTH_THEME.secondaryText,
  },
  alternativeButton: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    borderWidth: 1.5,
    borderColor: AUTH_THEME.border,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },
  alternativeButtonPressed: {
    backgroundColor: "#F1F6FF",
  },
  phoneIcon: {
    fontSize: 24,
    fontWeight: "600",
    color: AUTH_THEME.text,
  },
  alternativeButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: AUTH_THEME.text,
  },
  legalContainer: {
    alignItems: "center",
    marginTop: 22,
  },
  legalText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color: AUTH_THEME.secondaryText,
  },
  legalLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 2,
  },
  legalLink: {
    fontSize: 12,
    lineHeight: 20,
    color: AUTH_THEME.primary,
    fontWeight: "600",
  },
});
