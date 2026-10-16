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
  EVENT_BOOKING_FILTERS,
  EVENT_BOOKING_HISTORY,
  EVENT_BOOKING_HISTORY_CONTENT,
  type EventBookingFilter,
  type EventBookingHistoryItem,
} from "../../constants/user/userEventBookingHistory";

import { styles } from "./UserEventBookingHistoryScreen.styles";

const EVENT_IMAGES = {
  se1: require("../../assets/event/e1.png"),
  se2: require("../../assets/event/e2.png"),
  se3: require("../../assets/event/e3.png"),
  se4: require("../../assets/event/e4.png"),
};

export default function UserEventBookingHistoryScreen() {
  const router = useRouter();

  const [activeFilter, setActiveFilter] =
    useState<EventBookingFilter>("All");

  const filteredBookings = useMemo(() => {
    if (activeFilter === "All") {
      return EVENT_BOOKING_HISTORY;
    }

    return EVENT_BOOKING_HISTORY.filter(
      (booking) => booking.status === activeFilter
    );
  }, [activeFilter]);

  const getStatusStyle = (
    status: EventBookingHistoryItem["status"]
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
    booking: EventBookingHistoryItem
  ) => {
    Alert.alert(
      "Event Booking Details",
      `Booking ID: ${booking.id}\n\nEvent: ${booking.eventName}\nArtist: ${booking.artistName}\nLocation: ${booking.location}\nDate: ${booking.date}\nTime: ${booking.time}\nPrice: ₹${booking.price.toLocaleString("en-IN")}\nStatus: ${booking.status}`
    );
  };

  const handleBookingAction = (
    booking: EventBookingHistoryItem
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
        ? `Would you like to reschedule ${booking.eventName}?`
        : `Would you like to book ${booking.eventName} again?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () =>
            Alert.alert(
              "Coming Soon",
              "This action will be connected to the event booking flow later."
            ),
        },
      ]
    );
  };

  const renderBooking = (
    booking: EventBookingHistoryItem
  ) => {
    const statusStyle = getStatusStyle(booking.status);

    const actionLabel =
      booking.status === "Upcoming"
        ? EVENT_BOOKING_HISTORY_CONTENT.reschedule
        : booking.status === "Cancelled"
          ? EVENT_BOOKING_HISTORY_CONTENT.bookAgain
          : EVENT_BOOKING_HISTORY_CONTENT.rebook;

    return (
      <View key={booking.id} style={styles.bookingCard}>
        <View style={styles.bookingMain}>
          <Image
            source={EVENT_IMAGES[booking.imageKey]}
            style={styles.eventImage}
            resizeMode="cover"
          />

          <View style={styles.bookingInfo}>
            <Text style={styles.eventName}>
              {booking.eventName}
            </Text>

            <Text style={styles.artistName}>
              with {booking.artistName}
              <Text style={styles.artistRole}>
                {" "}({booking.artistRole})
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
              {EVENT_BOOKING_HISTORY_CONTENT.viewDetails}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
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
          {EVENT_BOOKING_HISTORY_CONTENT.title}
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
          {EVENT_BOOKING_FILTERS.map((filter) => {
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

      {/* Event booking history */}
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
                name="gift-outline"
                size={38}
                color="#1769F5"
              />
            </View>

            <Text style={styles.emptyTitle}>
              {EVENT_BOOKING_HISTORY_CONTENT.emptyTitle}
            </Text>

            <Text style={styles.emptyDescription}>
              {EVENT_BOOKING_HISTORY_CONTENT.emptyDescription}
            </Text>

            <Pressable
              style={styles.emptyButton}
              onPress={() => router.back()}
              accessibilityRole="button"
            >
              <Text style={styles.emptyButtonText}>
                Explore Events
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
