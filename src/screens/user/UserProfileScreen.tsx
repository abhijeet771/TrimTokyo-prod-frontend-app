import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

import UserBottomNav, {
  type UserTab,
} from "../../components/user/UserBottomNav";

import { styles } from "./UserProfileScreen.styles";

type ProfileForm = {
  name: string;
  email: string;
  phone: string;
  age: string;
  address: string;
  landmark: string;
  gender: string;
};

const INITIAL_PROFILE: ProfileForm = {
  name: "Raman Kumar",
  email: "",
  phone: "9876543210",
  age: "",
  address: "",
  landmark: "",
  gender: "",
};

const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"];

export default function UserProfileScreen() {
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileForm>(INITIAL_PROFILE);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);

  const updateField = (field: keyof ProfileForm, value: string) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleTabPress = (tab: UserTab) => {
    switch (tab) {
      case "home":
        router.replace("/user");
        break;
      case "home-service":
        router.push("/user/home-service");
        break;
      case "slots":
        router.push("/user/slots");
        break;
      case "event":
        router.push("/user/event");
        break;
      case "more":
        router.push("/user/more");
        break;
    }
  };

  const handleImageUpload = async () => {
    if (!isEditing) return;

    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permission required",
        "Allow photo library access to select a profile picture."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!profile.name.trim()) {
      Alert.alert("Required field", "Please enter your name.");
      return;
    }

    if (profile.phone.trim() && !/^[6-9]\d{9}$/.test(profile.phone.trim())) {
      Alert.alert(
        "Invalid phone number",
        "Enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (profile.age.trim()) {
      const age = Number(profile.age);

      if (!Number.isInteger(age) || age < 1 || age > 120) {
        Alert.alert("Invalid age", "Enter an age between 1 and 120.");
        return;
      }
    }

    // Connect this action to your profile update API later.
    setIsEditing(false);
    setGenderDropdownOpen(false);

    Alert.alert(
      "Profile saved",
      "Your profile changes are saved in this screen."
    );
  };

  const renderInput = (
    label: string,
    field: keyof ProfileForm,
    placeholder: string,
    options?: {
      keyboardType?: "default" | "email-address" | "phone-pad" | "number-pad";
      multiline?: boolean;
      autoCapitalize?: "none" | "sentences" | "words" | "characters";
    }
  ) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          options?.multiline && styles.multilineInput,
          !isEditing && styles.readOnlyInput,
        ]}
        value={profile[field]}
        onChangeText={(value) => updateField(field, value)}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        editable={isEditing}
        keyboardType={options?.keyboardType ?? "default"}
        multiline={options?.multiline ?? false}
        textAlignVertical={options?.multiline ? "top" : "center"}
        autoCapitalize={options?.autoCapitalize ?? "sentences"}
        accessibilityLabel={label}
      />
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
          accessibilityRole="button"
        >
          <Ionicons name="arrow-back" size={23} color="#101828" />
        </Pressable>

        <Text style={styles.screenTitle}>My Profile</Text>

        <View style={styles.topBarSpacer} />
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.intro}>
            <Text style={styles.heading}>Personal Details</Text>
            <Text style={styles.description}>
              Manage your personal information for a better booking experience.
            </Text>
          </View>

          {/* Profile image */}
          <View style={styles.avatarSection}>
            <Pressable
              onPress={handleImageUpload}
              disabled={!isEditing}
              style={styles.avatarPressable}
              accessibilityRole="button"
              accessibilityLabel="Upload profile picture"
            >
              {profileImage ? (
                <Image
                  source={{ uri: profileImage }}
                  style={styles.avatarImage}
                />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Ionicons name="person" size={48} color="#1769F5" />
                </View>
              )}

              {isEditing && (
                <View style={styles.cameraButton}>
                  <Ionicons name="camera" size={18} color="#FFFFFF" />
                </View>
              )}
            </Pressable>

            <Text style={styles.avatarName}>
              {profile.name || "Your Name"}
            </Text>

            <Text style={styles.avatarHint}>
              {isEditing
                ? "Tap the camera icon to change your photo"
                : "Your TrimTokyo profile"}
            </Text>
          </View>

          <View style={styles.formCard}>
            {renderInput("Full Name *", "name", "Enter your full name", {
              autoCapitalize: "words",
            })}

            {renderInput("Email Address", "email", "Enter your email", {
              keyboardType: "email-address",
              autoCapitalize: "none",
            })}

            {renderInput("Phone Number", "phone", "10-digit mobile number", {
              keyboardType: "phone-pad",
            })}

            {renderInput("Age", "age", "Enter your age", {
              keyboardType: "number-pad",
            })}

            {/* Gender dropdown */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Gender</Text>

              <Pressable
                style={[
                  styles.dropdown,
                  !isEditing && styles.readOnlyInput,
                ]}
                onPress={() => {
                  if (isEditing) {
                    setGenderDropdownOpen((open) => !open);
                  }
                }}
                accessibilityRole="button"
                accessibilityState={{
                  expanded: genderDropdownOpen,
                  disabled: !isEditing,
                }}
              >
                <Text
                  style={[
                    styles.dropdownText,
                    !profile.gender && styles.placeholderText,
                  ]}
                >
                  {profile.gender || "Select gender"}
                </Text>

                <Ionicons
                  name={genderDropdownOpen ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#64748B"
                />
              </Pressable>

              {isEditing && genderDropdownOpen && (
                <View style={styles.dropdownOptions}>
                  {GENDER_OPTIONS.map((option) => (
                    <Pressable
                      key={option}
                      style={styles.dropdownOption}
                      onPress={() => {
                        updateField("gender", option);
                        setGenderDropdownOpen(false);
                      }}
                    >
                      <Text style={styles.dropdownOptionText}>
                        {option}
                      </Text>

                      {profile.gender === option && (
                        <Ionicons
                          name="checkmark"
                          size={20}
                          color="#1769F5"
                        />
                      )}
                    </Pressable>
                  ))}
                </View>
              )}
            </View>

            {renderInput("Address", "address", "House number, street, area", {
              multiline: true,
            })}

            {renderInput(
              "Landmark",
              "landmark",
              "Nearby landmark (optional)",
              { autoCapitalize: "sentences" }
            )}
          </View>

          <Pressable
            style={[
              styles.primaryButton,
              isEditing && styles.saveButton,
            ]}
            onPress={isEditing ? handleSave : () => setIsEditing(true)}
            accessibilityRole="button"
          >
            <Ionicons
              name={isEditing ? "checkmark-circle-outline" : "create-outline"}
              size={21}
              color="#FFFFFF"
            />

            <Text style={styles.primaryButtonText}>
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Text>
          </Pressable>

          {isEditing && (
            <Pressable
              style={styles.cancelButton}
              onPress={() => {
                setProfile((current) => ({ ...current }));
                setIsEditing(false);
                setGenderDropdownOpen(false);
              }}
            >
              <Text style={styles.cancelButtonText}>Cancel Editing</Text>
            </Pressable>
          )}
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottomNavigation}>
        <UserBottomNav
          activeTab="more"
          onTabPress={handleTabPress}
        />
      </View>
    </View>
  );
}
