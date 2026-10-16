import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./UserComplaintForm.styles";

export type ComplaintFormData = {
  orderNumber: string;
  description: string;
  imageUri: string | null;
  name: string;
  title: string;
  issue: string;
};

type UserComplaintFormProps = {
  onSubmitComplaint?: (complaint: ComplaintFormData) => void;
};

const INITIAL_FORM: ComplaintFormData = {
  orderNumber: "",
  description: "",
  imageUri: null,
  name: "",
  title: "",
  issue: "",
};

export default function UserComplaintForm({
  onSubmitComplaint,
}: UserComplaintFormProps) {
  const [form, setForm] = useState<ComplaintFormData>(INITIAL_FORM);

  const updateField = (
    field: keyof ComplaintFormData,
    value: string | null
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleImageUpload = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permission required",
        "Allow photo library access to attach an image to your complaint."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      updateField("imageUri", result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!form.orderNumber.trim()) {
      Alert.alert("Required field", "Please enter your order number.");
      return;
    }

    if (!form.name.trim()) {
      Alert.alert("Required field", "Please enter your name.");
      return;
    }

    if (!form.title.trim()) {
      Alert.alert("Required field", "Please enter a complaint title.");
      return;
    }

    if (!form.issue.trim()) {
      Alert.alert("Required field", "Please describe the issue.");
      return;
    }

    if (!form.description.trim()) {
      Alert.alert(
        "Required field",
        "Please provide a detailed description of your complaint."
      );
      return;
    }

    onSubmitComplaint?.({ ...form });

    if (!onSubmitComplaint) {
      Alert.alert(
        "Complaint form ready",
        "Connect the complaint submission handler to save your complaint."
      );
      return;
    }

    setForm(INITIAL_FORM);
  };

  const renderField = (
    label: string,
    field: keyof ComplaintFormData,
    placeholder: string,
    multiline = false
  ) => {
    if (field === "imageUri") return null;

    return (
      <View style={styles.fieldContainer} key={field}>
        <Text style={styles.label}>{label}</Text>

        <TextInput
          style={[
            styles.input,
            multiline && styles.multilineInput,
          ]}
          value={form[field] as string}
          onChangeText={(value) => updateField(field, value)}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          multiline={multiline}
          textAlignVertical={multiline ? "top" : "center"}
          autoCapitalize="sentences"
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.intro}>
        <Text style={styles.heading}>Raise a Complaint</Text>
        <Text style={styles.subtitle}>
          Tell us what went wrong. Our support team will help resolve your issue.
        </Text>
      </View>

      <View style={styles.formCard}>
        {renderField(
          "Order Number *",
          "orderNumber",
          "Enter your order number"
        )}

        {renderField(
          "Your Name *",
          "name",
          "Enter your full name"
        )}

        {renderField(
          "Complaint Title *",
          "title",
          "Briefly describe the problem"
        )}

        {renderField(
          "Issue *",
          "issue",
          "What is the issue?"
        )}

        {renderField(
          "Description *",
          "description",
          "Explain the problem in detail...",
          true
        )}

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Attach Image (Optional)</Text>

          <Pressable
            style={styles.uploadBox}
            onPress={handleImageUpload}
            accessibilityRole="button"
          >
            {form.imageUri ? (
              <View style={styles.imagePreviewContainer}>
                <Image
                  source={{ uri: form.imageUri }}
                  style={styles.imagePreview}
                  resizeMode="cover"
                />

                <Pressable
                  style={styles.removeImageButton}
                  onPress={() => updateField("imageUri", null)}
                  accessibilityRole="button"
                  accessibilityLabel="Remove attached image"
                >
                  <Ionicons
                    name="close-circle"
                    size={25}
                    color="#E52525"
                  />
                </Pressable>
              </View>
            ) : (
              <>
                <View style={styles.uploadIcon}>
                  <Ionicons
                    name="cloud-upload-outline"
                    size={30}
                    color="#1769F5"
                  />
                </View>

                <Text style={styles.uploadTitle}>
                  Upload an image
                </Text>

                <Text style={styles.uploadSubtitle}>
                  Attach a photo that helps explain the issue
                </Text>
              </>
            )}
          </Pressable>
        </View>

        <Pressable
          style={styles.submitButton}
          onPress={handleSubmit}
          accessibilityRole="button"
        >
          <Ionicons
            name="paper-plane-outline"
            size={19}
            color="#FFFFFF"
          />

          <Text style={styles.submitButtonText}>
            Submit Complaint
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
