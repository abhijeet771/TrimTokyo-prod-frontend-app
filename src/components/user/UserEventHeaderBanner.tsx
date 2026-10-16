import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import UserHeader from "./UserHeader";

import {
  USER_EVENT_HEADER_CONTENT,
  USER_EVENT_CATEGORIES,
  type EventSectionTab,
} from "../../constants/user/userEventHeaderBanner";

import { styles } from "./UserEventHeaderBanner.styles";

interface UserEventHeaderBannerProps {
  activeSection?: EventSectionTab;
  onSectionChange?: (section: EventSectionTab) => void;
  onBookEventPress?: () => void;
  onSearchChange?: (value: string) => void;
}

export default function UserEventHeaderBanner({
  activeSection = "events",
  onSectionChange,
  onBookEventPress,
  onSearchChange,
}: UserEventHeaderBannerProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  const handleBookEvent = () => {
    if (onBookEventPress) {
      onBookEventPress();
      return;
    }

    Alert.alert(
      "Book Your Event",
      "Event booking details will be available soon."
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserHeader
          userName="Raman"
          location="Purnea, Bihar"
          notificationCount={1}
          searchValue={searchQuery}
          onLocationPress={() =>
            Alert.alert(
              "Choose Location",
              "Location selection will be available soon."
            )
          }
          onNotificationsPress={() =>
            Alert.alert(
              "Notifications",
              "Your notifications will appear here."
            )
          }
          onSearchChange={handleSearchChange}
          onFilterPress={() =>
            Alert.alert(
              "Event Filters",
              "Event filters will be available soon."
            )
          }
          onCartPress={() =>
            Alert.alert("Cart", "Your cart will appear here.")
          }
        />
      </View>

      {/* Events / Booking Status toggle */}
      <View style={styles.sectionTabs}>
        <Pressable
          style={[
            styles.sectionTab,
            activeSection === "events" &&
              styles.sectionTabActive,
          ]}
          onPress={() => onSectionChange?.("events")}
          accessibilityRole="button"
          accessibilityState={{
            selected: activeSection === "events",
          }}
        >
          <Ionicons
            name="gift-outline"
            size={19}
            color={
              activeSection === "events" ? "#1769F5" : "#344054"
            }
          />
          <Text
            style={[
              styles.sectionTabText,
              activeSection === "events" &&
                styles.sectionTabTextActive,
            ]}
          >
            {USER_EVENT_HEADER_CONTENT.tabs.events}
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.sectionTab,
            activeSection === "booking-status" &&
              styles.sectionTabActive,
          ]}
          onPress={() => onSectionChange?.("booking-status")}
          accessibilityRole="button"
          accessibilityState={{
            selected: activeSection === "booking-status",
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={19}
            color={
              activeSection === "booking-status"
                ? "#1769F5"
                : "#344054"
            }
          />
          <Text
            style={[
              styles.sectionTabText,
              activeSection === "booking-status" &&
                styles.sectionTabTextActive,
            ]}
          >
            {USER_EVENT_HEADER_CONTENT.tabs.bookingStatus}
          </Text>
        </Pressable>
      </View>

      {/* Event heading */}
      <View style={styles.heading}>
        <Text style={styles.title}>
          {USER_EVENT_HEADER_CONTENT.title}
        </Text>
        <Text style={styles.subtitle}>
          {USER_EVENT_HEADER_CONTENT.subtitle}
        </Text>
      </View>

      {/* Event categories */}
      <ScrollView
        horizontal
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryList}
        showsHorizontalScrollIndicator={false}
      >
        {USER_EVENT_CATEGORIES.map((category) => {
          const selected = activeCategory === category;

          return (
            <Pressable
              key={category}
              style={[
                styles.categoryButton,
                selected && styles.categoryButtonActive,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selected && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Wedding promotional banner */}
      <ImageBackground
        source={require("../../assets/event/e1.png")}
        style={styles.banner}
        imageStyle={styles.bannerImage}
        resizeMode="cover"
      >
        <View style={styles.bannerOverlay}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>
              {USER_EVENT_HEADER_CONTENT.banner.title}
            </Text>

            <Text style={styles.bannerDescription}>
              {USER_EVENT_HEADER_CONTENT.banner.description}
            </Text>

            <Pressable
              style={styles.bannerButton}
              onPress={handleBookEvent}
              accessibilityRole="button"
            >
              <Text style={styles.bannerButtonText}>
                {USER_EVENT_HEADER_CONTENT.banner.button}
              </Text>
              <Ionicons
                name="arrow-forward"
                size={18}
                color="#FFFFFF"
              />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}