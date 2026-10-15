import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  BARBER_PROFILE_CONTENT,
  INITIAL_BARBER_PROFILE,
  type BarberProfileFormData,
  type BarberBusinessType,
} from "../../constants/barberProfile";

import { styles } from "./BarberProfileForm.styles";

interface BarberProfileFormProps {
  initialValues?: BarberProfileFormData;
  onSubmitProfile?: (profile: BarberProfileFormData) => void;
  onCaptureLocation?: () => Promise<{
    latitude: number;
    longitude: number;
  } | null>;
}

export default function BarberProfileForm({
  initialValues,
  onSubmitProfile,
  onCaptureLocation,
}: BarberProfileFormProps) {
  const [formData, setFormData] = useState<BarberProfileFormData>({
    ...INITIAL_BARBER_PROFILE,
    ...initialValues,
  });

  const [isCapturingLocation, setIsCapturingLocation] =
    useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof BarberProfileFormData>(
    field: K,
    value: BarberProfileFormData[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleCaptureLocation = async () => {
    if (!onCaptureLocation) {
      Alert.alert(
        "Location Capture",
        "Device location capture has not been connected yet."
      );
      return;
    }

    try {
      setIsCapturingLocation(true);

      const location = await onCaptureLocation();

      if (!location) {
        Alert.alert(
          "Location Unavailable",
          "Unable to capture your current location. Please try again."
        );
        return;
      }

      setFormData((previous) => ({
        ...previous,
        latitude: location.latitude,
        longitude: location.longitude,
      }));

      Alert.alert(
        "Location Captured",
        "Your business coordinates have been captured."
      );
    } catch {
      Alert.alert(
        "Location Error",
        "Unable to capture your location. Please try again."
      );
    } finally {
      setIsCapturingLocation(false);
    }
  };

  const handleSubmit = () => {
    if (isSubmitting) {
      return;
    }

    const requiredFields = [
      formData.salonName,
      formData.description,
      formData.phoneNumber,
      formData.address,
      formData.city,
      formData.state,
      formData.establishedDate,
      formData.profileSlug,
      formData.experienceYears,
    ];

    if (requiredFields.some((value) => !value.trim())) {
      Alert.alert(
        "Required Fields",
        BARBER_PROFILE_CONTENT.requiredMessage
      );
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phoneNumber.trim())) {
      Alert.alert(
        "Invalid Phone Number",
        BARBER_PROFILE_CONTENT.invalidPhoneMessage
      );
      return;
    }

    const experience = Number(formData.experienceYears);

    if (
      !Number.isInteger(experience) ||
      experience < 0 ||
      experience > 80
    ) {
      Alert.alert(
        "Invalid Experience",
        "Enter experience as a whole number between 0 and 80."
      );
      return;
    }

    if (
      formData.latitude !== null &&
      !Number.isFinite(formData.latitude)
    ) {
      Alert.alert("Invalid Location", "Please capture your location again.");
      return;
    }

    if (
      formData.longitude !== null &&
      !Number.isFinite(formData.longitude)
    ) {
      Alert.alert("Invalid Location", "Please capture your location again.");
      return;
    }

    if (!onSubmitProfile) {
      Alert.alert(
        "Submission Unavailable",
        "Profile submission has not been connected yet."
      );
      return;
    }

    const submittedProfile: BarberProfileFormData = {
      ...formData,
      salonName: formData.salonName.trim(),
      description: formData.description.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      state: formData.state.trim(),
      coverImageUrl: formData.coverImageUrl.trim(),
      establishedDate: formData.establishedDate.trim(),
      instagram: formData.instagram.trim(),
      googleMapsLink: formData.googleMapsLink.trim(),
      profileSlug: formData.profileSlug.trim(),
      experienceYears: formData.experienceYears.trim(),
    };

    setIsSubmitting(true);

    try {
      onSubmitProfile(submittedProfile);

      Alert.alert(
        BARBER_PROFILE_CONTENT.successTitle,
        BARBER_PROFILE_CONTENT.successMessage
      );
    } catch {
      Alert.alert(
        "Submission Failed",
        "Unable to submit your profile. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInput = (
    label: string,
    field: keyof BarberProfileFormData,
    placeholder: string,
    options?: {
      multiline?: boolean;
      keyboardType?: "default" | "phone-pad" | "numeric" | "url";
      fullWidth?: boolean;
      autoCapitalize?: "none" | "sentences" | "words";
    }
  ) => (
    <View
      key={field}
      style={[
        styles.field,
        options?.fullWidth && styles.fullWidthField,
      ]}
    >
      <Text style={styles.fieldLabel}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          options?.multiline && styles.multilineInput,
        ]}
        placeholder={placeholder}
        placeholderTextColor="#9298AA"
        value={String(formData[field] ?? "")}
        onChangeText={(value) => {
          if (
            field === "latitude" ||
            field === "longitude" ||
            field === "deliveryAvailable" ||
            field === "businessType"
          ) {
            return;
          }

          updateField(
            field,
            value as BarberProfileFormData[typeof field]
          );
        }}
        multiline={options?.multiline}
        textAlignVertical={options?.multiline ? "top" : "center"}
        keyboardType={options?.keyboardType ?? "default"}
        autoCapitalize={options?.autoCapitalize ?? "sentences"}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.headingIcon}>
          <Ionicons name="cut-outline" size={27} color="#6558D3" />
        </View>

        <View style={styles.headingText}>
          <Text style={styles.eyebrow}>
            {BARBER_PROFILE_CONTENT.eyebrow}
          </Text>
          <Text style={styles.title}>
            {BARBER_PROFILE_CONTENT.title}
          </Text>
          <Text style={styles.subtitle}>
            {BARBER_PROFILE_CONTENT.subtitle}
          </Text>
        </View>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formTitle}>
          {BARBER_PROFILE_CONTENT.formTitle}
        </Text>

        <View style={styles.fieldsGrid}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Business Type</Text>

            <View style={styles.businessTypeOptions}>
              {BARBER_PROFILE_CONTENT.businessTypes.map((option) => {
                const selected = formData.businessType === option.value;

                return (
                  <Pressable
                    key={option.value}
                    style={[
                      styles.businessTypeOption,
                      selected && styles.businessTypeOptionSelected,
                    ]}
                    onPress={() =>
                      updateField(
                        "businessType",
                        option.value as BarberBusinessType
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.businessTypeText,
                        selected && styles.businessTypeTextSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {renderInput(
            "Salon Name *",
            "salonName",
            "Enter your salon name"
          )}

          {renderInput(
            "Business Description *",
            "description",
            "Describe your services and business",
            { multiline: true, fullWidth: true }
          )}

          {renderInput(
            "Phone Number *",
            "phoneNumber",
            "10-digit mobile number",
            { keyboardType: "phone-pad" }
          )}

          {renderInput(
            "Address *",
            "address",
            "Full business address",
            { fullWidth: true }
          )}

          {renderInput("City *", "city", "Enter city")}

          {renderInput("State *", "state", "Enter state")}

          {renderInput(
            "Cover Image URL",
            "coverImageUrl",
            "https://example.com/image.jpg",
            { fullWidth: true, autoCapitalize: "none", keyboardType: "url" }
          )}

          {renderInput(
            "Established Date *",
            "establishedDate",
            "DD-MM-YYYY"
          )}

          {renderInput(
            "Instagram Username or Link",
            "instagram",
            "@yourbusiness",
            { autoCapitalize: "none" }
          )}

          {renderInput(
            "Google Maps Link",
            "googleMapsLink",
            "Paste Google Maps URL",
            { fullWidth: true, autoCapitalize: "none", keyboardType: "url" }
          )}

          {renderInput(
            "Profile Slug *",
            "profileSlug",
            "your-salon-name",
            { autoCapitalize: "none" }
          )}

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Delivery Available</Text>

            <Pressable
              style={styles.deliveryOption}
              onPress={() =>
                updateField(
                  "deliveryAvailable",
                  !formData.deliveryAvailable
                )
              }
              accessibilityRole="checkbox"
              accessibilityState={{
                checked: formData.deliveryAvailable,
              }}
            >
              <View
                style={[
                  styles.checkbox,
                  formData.deliveryAvailable && styles.checkboxSelected,
                ]}
              >
                {formData.deliveryAvailable && (
                  <Ionicons
                    name="checkmark"
                    size={16}
                    color="#FFFFFF"
                  />
                )}
              </View>

              <Text style={styles.deliveryText}>
                Delivery Available
              </Text>
            </Pressable>
          </View>

          {renderInput(
            "Experience (years) *",
            "experienceYears",
            "e.g. 5",
            { keyboardType: "numeric" }
          )}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.locationButton,
            pressed && styles.buttonPressed,
            isCapturingLocation && styles.buttonDisabled,
          ]}
          onPress={handleCaptureLocation}
          disabled={isCapturingLocation}
        >
          <Ionicons
            name={
              formData.latitude !== null &&
              formData.longitude !== null
                ? "checkmark-circle-outline"
                : "location-outline"
            }
            size={19}
            color="#FFFFFF"
          />

          <Text style={styles.locationButtonText}>
            {isCapturingLocation
              ? "Capturing Location..."
              : formData.latitude !== null &&
                  formData.longitude !== null
                ? BARBER_PROFILE_CONTENT.locationCapturedLabel
                : BARBER_PROFILE_CONTENT.locationLabel}
          </Text>
        </Pressable>

        <Text style={styles.locationHint}>
          Location capture is optional until device location is connected.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            pressed && styles.buttonPressed,
            isSubmitting && styles.buttonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          <Ionicons
            name="cloud-upload-outline"
            size={19}
            color="#FFFFFF"
          />
          <Text style={styles.submitButtonText}>
            {isSubmitting
              ? "Submitting..."
              : BARBER_PROFILE_CONTENT.submitLabel}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}