import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import UserHeader from "../../components/user/UserHeader";
import UserBottomNav, {
  type UserTab,
} from "../../components/user/UserBottomNav";

import UserEventHeaderBanner from "../../components/user/UserEventHeaderBanner";
import UserPopularEvents from "../../components/user/UserPopularEvents";
import UserEventBookingStatus from "../../components/user/UserEventBookingStatus";

import type { PopularEvent } from "../../constants/user/userPopularEvents";
import type { EventSectionTab } from "../../constants/user/userEventHeaderBanner";

import { styles } from "./UserEventScreen.styles";

export default function UserEventScreen() {
  const router = useRouter();

  const [activeSection, setActiveSection] =
    useState<EventSectionTab>("events");

  const [searchQuery, setSearchQuery] = useState("");

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
        setActiveSection("events");
        break;

      case "more":
        router.push("/user/more");
        break;

      default:
        break;
    }
  };

  const handleEventPress = (event: PopularEvent) => {
    Alert.alert(
      event.title,
      `${event.description}\n\nEvent booking details will be available soon.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: () => {
            console.log("Selected event:", event.id);
          },
        },
      ]
    );
  };

  const handleBookEventPress = () => {
    Alert.alert(
      "Book Your Event",
      "Your event booking form will be available soon."
    );
  };

  const handleLocationPress = () => {
    Alert.alert(
      "Choose Location",
      "Location selection will be available soon."
    );
  };

  const handleNotificationsPress = () => {
    Alert.alert(
      "Notifications",
      "Your notifications will appear here."
    );
  };

  const handleFilterPress = () => {
    Alert.alert(
      "Event Filters",
      "Event filters will be available soon."
    );
  };

  const handleCartPress = () => {
    Alert.alert(
      "Cart",
      "Your cart will appear here."
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        {activeSection === "events" ? (
          <ScrollView
            style={styles.eventsScroll}
            contentContainerStyle={styles.eventsContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <UserEventHeaderBanner
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              onBookEventPress={handleBookEventPress}
              onSearchChange={setSearchQuery}
            />

            <UserPopularEvents
              onEventPress={handleEventPress}
              onSeeAllPress={() => {
                Alert.alert(
                  "Popular Events",
                  "All event categories will be available soon."
                );
              }}
            />
          </ScrollView>
        ) : (
          <>
            {/* Header for the Booking Status section */}
            <View style={styles.statusHeader}>
              <UserHeader
                userName="Raman"
                location="Purnea, Bihar"
                notificationCount={1}
                searchValue={searchQuery}
                onLocationPress={handleLocationPress}
                onNotificationsPress={handleNotificationsPress}
                onSearchChange={setSearchQuery}
                onFilterPress={handleFilterPress}
                onCartPress={handleCartPress}
              />
            </View>

            {/* Events / Booking Status toggle */}
            <View style={styles.sectionTabs}>
              <Pressable
                style={styles.sectionTab}
                onPress={() => setActiveSection("events")}
                accessibilityRole="button"
              >
                <Ionicons
                  name="gift-outline"
                  size={19}
                  color="#344054"
                />
                <Text style={styles.sectionTabText}>
                  Events
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.sectionTab,
                  styles.sectionTabActive,
                ]}
                onPress={() =>
                  setActiveSection("booking-status")
                }
                accessibilityRole="button"
                accessibilityState={{ selected: true }}
              >
                <Ionicons
                  name="calendar-outline"
                  size={19}
                  color="#1769F5"
                />
                <Text
                  style={[
                    styles.sectionTabText,
                    styles.sectionTabTextActive,
                  ]}
                >
                  Booking Status
                </Text>
              </Pressable>
            </View>

            <View style={styles.statusContent}>
              <UserEventBookingStatus
                onBookingPress={(booking) => {
                  Alert.alert(
                    booking.eventName,
                    `Booking ID: ${booking.bookingId}\nStatus: ${booking.status}\nDate: ${booking.eventDate}\nLocation: ${booking.location}\nGuests: ${booking.guestCount}`
                  );
                }}
              />
            </View>
          </>
        )}
      </View>

      {/* Fixed bottom navigation */}
      <View style={styles.bottomNavigation}>
        <UserBottomNav
          activeTab="event"
          onTabPress={handleTabPress}
        />
      </View>
    </View>
  );
}