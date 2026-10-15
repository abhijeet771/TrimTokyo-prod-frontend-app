import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  BARBER_SERVICES_CONTENT,
  BARBER_SERVICE_GENDERS,
  INITIAL_BARBER_SERVICES,
  RECENT_BARBER_SERVICE_IDS,
  type BarberService,
  type BarberServiceGender,
} from "../../constants/barberServices";

import { styles } from "./BarberServices.styles";

interface BarberServicesProps {
  onViewAll?: () => void;
  onSubmitService?: (
    service: Omit<BarberService, "id" | "createdAt" | "status">
  ) => void;
}

export default function BarberServices({
  onViewAll,
  onSubmitService,
}: BarberServicesProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [gender, setGender] =
    useState<BarberServiceGender>("MALE");

  const recentServices = RECENT_BARBER_SERVICE_IDS
    .map((id) =>
      INITIAL_BARBER_SERVICES.find((service) => service.id === id)
    )
    .filter(
      (service): service is BarberService => Boolean(service)
    );

  const handleSubmit = () => {
    const parsedPrice = Number(price);
    const parsedDuration = Number(duration);

    if (!title.trim()) {
      Alert.alert("Required", "Please enter a service title.");
      return;
    }

    if (
      !price.trim() ||
      !Number.isFinite(parsedPrice) ||
      parsedPrice <= 0
    ) {
      Alert.alert(
        "Invalid Price",
        "Enter a valid price greater than zero."
      );
      return;
    }

    if (
      !duration.trim() ||
      !Number.isInteger(parsedDuration) ||
      parsedDuration <= 0
    ) {
      Alert.alert(
        "Invalid Duration",
        "Enter a valid duration in whole minutes."
      );
      return;
    }

    if (!description.trim()) {
      Alert.alert("Required", "Please enter a description.");
      return;
    }

    const newService: Omit<
      BarberService,
      "id" | "createdAt" | "status"
    > = {
      title: title.trim(),
      price: parsedPrice,
      duration: parsedDuration,
      gender,
      description: description.trim(),
      image: imageUri.trim() || null,
    };

    if (!onSubmitService) {
      Alert.alert(
        "Submission Unavailable",
        "Service submission has not been connected yet."
      );
      return;
    }

    onSubmitService(newService);

    Alert.alert(
      "Service Submitted",
      "Your service has been submitted for admin approval."
    );

    setTitle("");
    setPrice("");
    setDuration("");
    setDescription("");
    setImageUri("");
    setGender("MALE");
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.pageTitle}>
            {BARBER_SERVICES_CONTENT.pageTitle}
          </Text>
          <Text style={styles.pageSubtitle}>
            {BARBER_SERVICES_CONTENT.pageSubtitle}
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Ionicons
            name="cut-outline"
            size={27}
            color="#6558D3"
          />
        </View>
      </View>

      <View style={styles.formCard}>
        <Text style={styles.formTitle}>
          {BARBER_SERVICES_CONTENT.formTitle}
        </Text>

        <View style={styles.rowFields}>
          <View style={styles.titleField}>
            <Text style={styles.fieldLabel}>Service Title</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Hair Cut"
              placeholderTextColor="#9298AA"
              value={title}
              onChangeText={setTitle}
              maxLength={80}
            />
          </View>

          <View style={styles.priceField}>
            <Text style={styles.fieldLabel}>Price (₹)</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 100"
              placeholderTextColor="#9298AA"
              value={price}
              onChangeText={setPrice}
              keyboardType="decimal-pad"
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Duration (minutes)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 30"
            placeholderTextColor="#9298AA"
            value={duration}
            onChangeText={setDuration}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Enter service description"
            placeholderTextColor="#9298AA"
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
            maxLength={500}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Image URL (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="https://example.com/image.jpg"
            placeholderTextColor="#9298AA"
            value={imageUri}
            onChangeText={setImageUri}
            autoCapitalize="none"
            keyboardType="url"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Gender</Text>

          <View style={styles.genderOptions}>
            {BARBER_SERVICE_GENDERS.map((option) => {
              const selected = gender === option.value;

              return (
                <Pressable
                  key={option.value}
                  style={[
                    styles.genderOption,
                    selected && styles.genderOptionSelected,
                  ]}
                  onPress={() => setGender(option.value)}
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                >
                  <Text
                    style={[
                      styles.genderOptionText,
                      selected &&
                        styles.genderOptionTextSelected,
                    ]}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            pressed && styles.submitButtonPressed,
          ]}
          onPress={handleSubmit}
          accessibilityRole="button"
        >
          <Ionicons
            name="paper-plane-outline"
            size={18}
            color="#FFFFFF"
          />
          <Text style={styles.submitButtonText}>
            {BARBER_SERVICES_CONTENT.submitLabel}
          </Text>
        </Pressable>
      </View>

      <View style={styles.recentHeader}>
        <View>
          <Text style={styles.recentTitle}>
            {BARBER_SERVICES_CONTENT.recentServicesTitle}
          </Text>
          <Text style={styles.recentSubtitle}>
            Your latest service submissions
          </Text>
        </View>

        <Pressable
          style={styles.viewAllButton}
          onPress={onViewAll}
          accessibilityRole="button"
          accessibilityLabel="View all services"
        >
          <Text style={styles.viewAllText}>
            {BARBER_SERVICES_CONTENT.viewAllLabel}
          </Text>
          <Ionicons
            name="arrow-forward"
            size={16}
            color="#6558D3"
          />
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recentServicesList}
      >
        {recentServices.map((service) => (
          <View
            key={service.id}
            style={styles.serviceCard}
          >
            <Image
              source={service.image}
              style={styles.serviceImage}
              resizeMode="cover"
            />

            <View style={styles.serviceCardContent}>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor:
                      service.status === "APPROVED"
                        ? "#E2F8EC"
                        : service.status === "PENDING"
                          ? "#FFF1D6"
                          : "#FEE8E8",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    {
                      color:
                        service.status === "APPROVED"
                          ? "#13965B"
                          : service.status === "PENDING"
                            ? "#D97706"
                            : "#DC2626",
                    },
                  ]}
                >
                  {service.status}
                </Text>
              </View>

              <Text
                style={styles.serviceTitle}
                numberOfLines={1}
              >
                {service.title}
              </Text>

              <Text style={styles.servicePrice}>
                ₹{service.price}
              </Text>

              <View style={styles.serviceMeta}>
                <Ionicons
                  name="time-outline"
                  size={13}
                  color="#858A9B"
                />
                <Text style={styles.serviceMetaText}>
                  {service.duration} mins
                </Text>

                <Text style={styles.metaSeparator}>·</Text>

                <Text style={styles.serviceMetaText}>
                  {service.gender === "MALE"
                    ? "Male"
                    : service.gender === "FEMALE"
                      ? "Female"
                      : "Unisex"}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}