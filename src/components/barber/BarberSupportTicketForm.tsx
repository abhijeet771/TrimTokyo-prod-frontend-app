import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  BARBER_SUPPORT_CATEGORIES,
  BARBER_SUPPORT_PRIORITIES,
  INITIAL_SUPPORT_TICKET,
  type BarberSupportTicketFormData,
} from "../../constants/barberSupport";

import { styles } from "./BarberSupportTicketForm.styles";

interface BarberSupportTicketFormProps {
  onSubmitTicket?: (
    ticket: BarberSupportTicketFormData
  ) => void | Promise<void>;
}

export default function BarberSupportTicketForm({
  onSubmitTicket,
}: BarberSupportTicketFormProps) {
  const [formData, setFormData] =
    useState<BarberSupportTicketFormData>({
      ...INITIAL_SUPPORT_TICKET,
    });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showPriorities, setShowPriorities] = useState(false);

  const updateField = <K extends keyof BarberSupportTicketFormData>(
    field: K,
    value: BarberSupportTicketFormData[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleImageSelection = () => {
    Alert.alert(
      "Attach Image",
      "Image selection will be available when the image picker is integrated."
    );
  };

  const handleSubmit = async () => {
    const title = formData.title.trim();
    const description = formData.description.trim();

    if (!title || !description || !formData.category || !formData.priority) {
      Alert.alert(
        "Required Fields",
        "Please complete the title, category, description, and priority."
      );
      return;
    }

    if (isSubmitting) {
      return;
    }

    const ticket: BarberSupportTicketFormData = {
      ...formData,
      title,
      description,
    };

    try {
      setIsSubmitting(true);

      if (onSubmitTicket) {
        await onSubmitTicket(ticket);
      }

      Alert.alert(
        "Ticket Submitted",
        "Your support ticket has been submitted successfully."
      );

      setFormData({ ...INITIAL_SUPPORT_TICKET });
    } catch {
      Alert.alert(
        "Submission Failed",
        "Unable to submit your ticket. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.headingIcon}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            color="#2563EB"
          />
        </View>

        <View style={styles.headingTextContainer}>
          <Text style={styles.heading}>Raise a Ticket</Text>
          <Text style={styles.subtitle}>
            Tell us what you need help with.
          </Text>
        </View>
      </View>

      <View style={styles.formCard}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Ticket Title <Text style={styles.required}>*</Text>
          </Text>

          <TextInput
            value={formData.title}
            onChangeText={(value) => updateField("title", value)}
            placeholder="e.g. Unable to update my profile"
            placeholderTextColor="#94A3B8"
            style={styles.input}
            maxLength={120}
            accessibilityLabel="Ticket title"
          />

          <Text style={styles.helperText}>
            Briefly describe your issue.
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Issue Category <Text style={styles.required}>*</Text>
          </Text>

          <Pressable
            style={styles.selectInput}
            onPress={() => {
              setShowCategories((previous) => !previous);
              setShowPriorities(false);
            }}
            accessibilityRole="button"
            accessibilityLabel="Select issue category"
          >
            <Text
              style={
                formData.category
                  ? styles.selectText
                  : styles.placeholderText
              }
            >
              {formData.category || "Select a category"}
            </Text>

            <Ionicons
              name={showCategories ? "chevron-up" : "chevron-down"}
              size={20}
              color="#64748B"
            />
          </Pressable>

          {showCategories && (
            <View style={styles.optionsContainer}>
              {BARBER_SUPPORT_CATEGORIES.map((category) => (
                <Pressable
                  key={category}
                  style={[
                    styles.optionItem,
                    formData.category === category &&
                      styles.selectedOption,
                  ]}
                  onPress={() => {
                    updateField("category", category);
                    setShowCategories(false);
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      formData.category === category &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {category}
                  </Text>

                  {formData.category === category && (
                    <Ionicons
                      name="checkmark"
                      size={18}
                      color="#2563EB"
                    />
                  )}
                </Pressable>
              ))}
            </View>
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Issue Description <Text style={styles.required}>*</Text>
          </Text>

          <TextInput
            value={formData.description}
            onChangeText={(value) =>
              updateField("description", value)
            }
            placeholder="Explain what happened and what you expected..."
            placeholderTextColor="#94A3B8"
            style={[styles.input, styles.descriptionInput]}
            multiline
            textAlignVertical="top"
            maxLength={2000}
            accessibilityLabel="Issue description"
          />

          <Text style={styles.characterCount}>
            {formData.description.length}/2000
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Priority <Text style={styles.required}>*</Text>
          </Text>

          <Pressable
            style={styles.selectInput}
            onPress={() => {
              setShowPriorities((previous) => !previous);
              setShowCategories(false);
            }}
            accessibilityRole="button"
            accessibilityLabel="Select ticket priority"
          >
            <View style={styles.priorityValue}>
              <View
                style={[
                  styles.priorityDot,
                  formData.priority === "LOW" && styles.lowPriorityDot,
                  formData.priority === "NORMAL" &&
                    styles.normalPriorityDot,
                  formData.priority === "HIGH" &&
                    styles.highPriorityDot,
                  formData.priority === "URGENT" &&
                    styles.urgentPriorityDot,
                ]}
              />

              <Text style={styles.selectText}>
                {BARBER_SUPPORT_PRIORITIES.find(
                  (priority) => priority.value === formData.priority
                )?.label || "Select priority"}
              </Text>
            </View>

            <Ionicons
              name={showPriorities ? "chevron-up" : "chevron-down"}
              size={20}
              color="#64748B"
            />
          </Pressable>

          {showPriorities && (
            <View style={styles.optionsContainer}>
              {BARBER_SUPPORT_PRIORITIES.map((priority) => (
                <Pressable
                  key={priority.value}
                  style={[
                    styles.optionItem,
                    formData.priority === priority.value &&
                      styles.selectedOption,
                  ]}
                  onPress={() => {
                    updateField("priority", priority.value);
                    setShowPriorities(false);
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      formData.priority === priority.value &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {priority.label}
                  </Text>

                  {formData.priority === priority.value && (
                    <Ionicons
                      name="checkmark"
                      size={18}
                      color="#2563EB"
                    />
                  )}
                </Pressable>
              ))}
            </View>
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Attachment <Text style={styles.optional}>(Optional)</Text>
          </Text>

          <Pressable
            style={styles.uploadBox}
            onPress={handleImageSelection}
            accessibilityRole="button"
            accessibilityLabel="Attach an image"
          >
            {formData.imageUri ? (
              <View style={styles.previewContainer}>
                <Image
                  source={{ uri: formData.imageUri }}
                  style={styles.imagePreview}
                  resizeMode="cover"
                />

                <Pressable
                  style={styles.removeImageButton}
                  onPress={() => updateField("imageUri", null)}
                  accessibilityLabel="Remove attached image"
                >
                  <Ionicons
                    name="close-circle"
                    size={26}
                    color="#DC2626"
                  />
                </Pressable>
              </View>
            ) : (
              <>
                <View style={styles.uploadIcon}>
                  <Ionicons
                    name="image-outline"
                    size={28}
                    color="#2563EB"
                  />
                </View>

                <Text style={styles.uploadTitle}>
                  Add a screenshot or image
                </Text>

                <Text style={styles.uploadDescription}>
                  Optional evidence to help us understand the issue
                </Text>

                <View style={styles.uploadButton}>
                  <Ionicons
                    name="add"
                    size={17}
                    color="#2563EB"
                  />
                  <Text style={styles.uploadButtonText}>
                    Choose Image
                  </Text>
                </View>
              </>
            )}
          </Pressable>
        </View>

        <View style={styles.notice}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#2563EB"
          />

          <Text style={styles.noticeText}>
            Please avoid including passwords or other sensitive
            information in your ticket or attachments.
          </Text>
        </View>

        <Pressable
          style={[
            styles.submitButton,
            isSubmitting && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={isSubmitting}
          accessibilityRole="button"
        >
          {isSubmitting ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Ionicons
                name="send-outline"
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.submitButtonText}>
                Submit Ticket
              </Text>
            </>
          )}
        </Pressable>
      </View>
    </View>
  );
}