import React, { useState } from "react";
import { Alert, Keyboard, Platform, Pressable, Text, TextInput, View,} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { AUTH_CONTENT } from "../../constants/auth";
import { styles } from "./AuthLoginSection.styles";

type LoginRole = "USER" | "BARBER";

export default function AuthLoginSection() {
  const [phone, setPhone] = useState("");
  const [selectedRole, setSelectedRole] =
    useState<LoginRole>("USER");

  const handleContinue = () => {
    Keyboard.dismiss();

    if (!/^[6-9]\d{9}$/.test(phone)) {
      const message =
        "Please enter a valid 10-digit Indian mobile number.";

      if (Platform.OS === "web") {
        window.alert(`Invalid phone number\n${message}`);
      } else {
        Alert.alert("Invalid phone number", message);
      }

      return;
    }

    // TEMPORARY DEVELOPMENT LOGIN — no backend authentication.
    if (selectedRole === "BARBER") {
      router.replace("/barber");
    } else {
      router.replace("/shop");
    }
  };

  const handleTerms = () => {
    router.push("/terms");
  };

  const handlePrivacy = () => {
    router.push("/privacy-policy");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {AUTH_CONTENT.loginTitle}
      </Text>

      <Text style={styles.description}>
        {AUTH_CONTENT.loginDescription}
      </Text>

      {/* Phone number input */}
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
          onSubmitEditing={handleContinue}
        />
      </View>

      {/* Temporary role selector */}
      <Text style={styles.roleHeading}>
        Continue as
      </Text>

      <View style={styles.roleOptions}>
        <Pressable
          style={[
            styles.roleOption,
            selectedRole === "USER" &&
              styles.roleOptionActive,
          ]}
          onPress={() => setSelectedRole("USER")}
          accessibilityRole="button"
          accessibilityState={{
            selected: selectedRole === "USER",
          }}
        >
          <Ionicons
            name="person-outline"
            size={21}
            color={
              selectedRole === "USER"
                ? "#1769FF"
                : "#71839F"
            }
          />

          <Text
            style={[
              styles.roleText,
              selectedRole === "USER" &&
                styles.roleTextActive,
            ]}
          >
            Customer
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.roleOption,
            selectedRole === "BARBER" &&
              styles.roleOptionActive,
          ]}
          onPress={() => setSelectedRole("BARBER")}
          accessibilityRole="button"
          accessibilityState={{
            selected: selectedRole === "BARBER",
          }}
        >
          <Ionicons
            name="cut-outline"
            size={21}
            color={
              selectedRole === "BARBER"
                ? "#1769FF"
                : "#71839F"
            }
          />

          <Text
            style={[
              styles.roleText,
              selectedRole === "BARBER" &&
                styles.roleTextActive,
            ]}
          >
            Barber
          </Text>
        </Pressable>
      </View>

      {/* Continue */}
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

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />

        <Text style={styles.orText}>OR</Text>

        <View style={styles.divider} />
      </View>

      {/* Alternative login */}
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

      {/* Legal links */}
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

          <Text style={styles.legalText}>
            {" "}and{" "}
          </Text>

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