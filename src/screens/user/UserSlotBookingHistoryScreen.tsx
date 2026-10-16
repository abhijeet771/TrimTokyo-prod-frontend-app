import React, { useMemo, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import {
  SLOT_BOOKING_FILTERS,
  SLOT_BOOKING_HISTORY,
  SLOT_BOOKING_HISTORY_CONTENT,
  type SlotBookingFilter,
  type SlotBookingHistoryItem,
} from "../../constants/user/userSlotBookingHistory";

import { styles } from "./UserSlotBookingHistoryScreen.styles";

const SERVICE_IMAGES = {
  se1: require("../../assets/services/se1.png"),
  se2: require("../../assets/services/se2.png"),
  se4: require("../../assets/services/se4.png"),
};

export default function UserSlotBookingHistoryScreen() {
  const router = useRouter();

  const [activeFilter, setActiveFilter] =
    useState<SlotBookingFilter>("All");

  const filteredBookings = useMemo(() => {
    if (activeFilter === "All") {
      return SLOT_BOOKING_HISTORY;
    }

    return SLOT_BOOKING_HISTORY.filter(
      (booking) => booking.status === activeFilter
    );
  }, [activeFilter]);

  const getStatusStyle = (
    status: SlotBookingHistoryItem["status"]
  ) => {
    switch (status) {
      case "Upcoming":
        return {
          badge: styles.upcomingBadge,
          text: styles.upcomingText,
          dot: "#079669",
        };

      case "Completed":
        return {
          badge: styles.completedBadge,
          text: styles.completedText,
          dot: "#1769F5",
        };

      case "Cancelled":
        return {
          badge: styles.cancelledBadge,
          text: styles.cancelledText,
          dot: "#E52525",
        };
    }
  };

  const handleViewDetails = (
    booking: SlotBookingHistoryItem
  ) => {
    Alert.alert(
      "Booking Details",
      `Booking ID: ${booking.id}\n\nService: ${booking.serviceName}\nBarber: ${booking.barberName}\nLocation: ${booking.location}\nDate: ${booking.date}\nTime: ${booking.time}\nPrice: ₹${booking.price.toLocaleString("en-IN")}\nStatus: ${booking.status}`
    );
  };

  const handleBookingAction = (
    booking: SlotBookingHistoryItem
  ) => {
    const action =
      booking.status === "Upcoming"
        ? "Reschedule"
        : booking.status === "Cancelled"
          ? "Book Again"
          : "Rebook";

    Alert.alert(
      action,
      booking.status === "Upcoming"
        ? `Would you like to reschedule ${booking.serviceName}?`
        : `Would you like to book ${booking.serviceName} again?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: () =>
            Alert.alert(
              "Coming Soon",
              "This action will be connected to the booking flow later."
            ),
        },
      ]
    );
  };

  const renderBooking = (
    booking: SlotBookingHistoryItem
  ) => {
    const statusStyle = getStatusStyle(booking.status);

    const actionLabel =
      booking.status === "Upcoming"
        ? SLOT_BOOKING_HISTORY_CONTENT.reschedule
        : booking.status === "Cancelled"
          ? SLOT_BOOKING_HISTORY_CONTENT.bookAgain
          : SLOT_BOOKING_HISTORY_CONTENT.rebook;

    return (
      <View key={booking.id} style={styles.bookingCard}>
        <View style={styles.bookingMain}>
          <Image
            source={SERVICE_IMAGES[booking.imageKey]}
            style={styles.serviceImage}
            resizeMode="cover"
          />

          <View style={styles.bookingInfo}>
            <Text style={styles.serviceName}>
              {booking.serviceName}
            </Text>

            <Text style={styles.barberName}>
              with {booking.barberName}
              <Text style={styles.barberRole}>
                {" "}({booking.barberRole})
              </Text>
            </Text>

            <View style={styles.detailRow}>
              <Ionicons
                name="location-outline"
                size={16}
                color="#647794"
              />
              <Text style={styles.detailText} numberOfLines={1}>
                {booking.location}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons
                name="calendar-outline"
                size={16}
                color="#647794"
              />
              <Text style={styles.detailText}>
                {booking.date}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons
                name="time-outline"
                size={16}
                color="#647794"
              />
              <Text style={styles.detailText}>
                {booking.time}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bookingFooter}>
          <View
            style={[
              styles.statusBadge,
              statusStyle.badge,
            ]}
          >
            <View
              style={[
                styles.statusDot,
                { backgroundColor: statusStyle.dot },
              ]}
            />
            <Text
              style={[
                styles.statusText,
                statusStyle.text,
              ]}
            >
              {booking.status}
            </Text>
          </View>

          <Text style={styles.price}>
            ₹{booking.price.toLocaleString("en-IN")}
          </Text>
        </View>

        <View style={styles.actionRow}>
          <Pressable
            style={styles.secondaryButton}
            onPress={() => handleBookingAction(booking)}
            accessibilityRole="button"
          >
            <Text style={styles.secondaryButtonText}>
              {actionLabel}
            </Text>
          </Pressable>

          <Pressable
            style={styles.primaryButton}
            onPress={() => handleViewDetails(booking)}
            accessibilityRole="button"
          >
            <Text style={styles.primaryButtonText}>
              {SLOT_BOOKING_HISTORY_CONTENT.viewDetails}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {/* Header: back button and title only */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
          accessibilityRole="button"
        >
          <Ionicons
            name="arrow-back"
            size={23}
            color="#101828"
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          {SLOT_BOOKING_HISTORY_CONTENT.title}
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      {/* Status filters */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContent}
        >
          {SLOT_BOOKING_FILTERS.map((filter) => {
            const selected = activeFilter === filter;

            return (
              <Pressable
                key={filter}
                style={[
                  styles.filterButton,
                  selected && styles.filterButtonActive,
                ]}
                onPress={() => setActiveFilter(filter)}
                accessibilityRole="button"
                accessibilityState={{ selected }}
              >
                <Text
                  style={[
                    styles.filterText,
                    selected && styles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* Booking history list */}
      <ScrollView
        style={styles.bookingList}
        contentContainerStyle={styles.bookingListContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredBookings.length > 0 ? (
          filteredBookings.map(renderBooking)
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Ionicons
                name="calendar-outline"
                size={38}
                color="#1769F5"
              />
            </View>

            <Text style={styles.emptyTitle}>
              {SLOT_BOOKING_HISTORY_CONTENT.emptyTitle}
            </Text>

            <Text style={styles.emptyDescription}>
              {SLOT_BOOKING_HISTORY_CONTENT.emptyDescription}
            </Text>

            <Pressable
              style={styles.emptyButton}
              onPress={() => router.push("/user/slots")}
              accessibilityRole="button"
            >
              <Text style={styles.emptyButtonText}>
                Browse Barbers
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
