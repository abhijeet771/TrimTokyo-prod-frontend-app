import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  USER_EVENT_BOOKINGS,
  USER_EVENT_BOOKING_STATUS_CONTENT,
  type EventBooking,
  type EventBookingStatus as BookingStatus,
} from "../../constants/user/userEventBookingStatus";

import { styles } from "./UserEventBookingStatus.styles";

const EVENT_IMAGES = {
  event1: require("../../assets/event/e1.png"),
  event2: require("../../assets/event/e2.png"),
  event3: require("../../assets/event/e3.png"),
  event4: require("../../assets/event/e4.png"),
};

type StatusFilter =
  | "All"
  | BookingStatus;

interface UserEventBookingStatusProps {
  bookings?: EventBooking[];
  onBookingPress?: (booking: EventBooking) => void;
}

const getStatusStyle = (status: BookingStatus) => {
  switch (status) {
    case "Confirmed":
      return {
        backgroundColor: "#E2F8EB",
        color: "#15803D",
        icon: "checkmark-circle-outline" as const,
      };

    case "Pending":
      return {
        backgroundColor: "#FFF3D6",
        color: "#B7791F",
        icon: "time-outline" as const,
      };

    case "Completed":
      return {
        backgroundColor: "#E4F1FF",
        color: "#1769F5",
        icon: "checkmark-done-circle-outline" as const,
      };

    case "Cancelled":
      return {
        backgroundColor: "#FDE8E8",
        color: "#DC2626",
        icon: "close-circle-outline" as const,
      };
  }
};

export default function UserEventBookingStatus({
  bookings = USER_EVENT_BOOKINGS,
  onBookingPress,
}: UserEventBookingStatusProps) {
  const [activeFilter, setActiveFilter] =
    useState<StatusFilter>("All");

  const filteredBookings =
    activeFilter === "All"
      ? bookings
      : bookings.filter(
          (booking) => booking.status === activeFilter
        );

  const handleBookingPress = (booking: EventBooking) => {
    if (onBookingPress) {
      onBookingPress(booking);
      return;
    }

    Alert.alert(
      booking.eventName,
      `Booking ID: ${booking.bookingId}\nStatus: ${booking.status}\nEvent Date: ${formatDate(booking.eventDate)}\nLocation: ${booking.location}\nGuests: ${booking.guestCount}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>
          {USER_EVENT_BOOKING_STATUS_CONTENT.title}
        </Text>

        <Text style={styles.subtitle}>
          {USER_EVENT_BOOKING_STATUS_CONTENT.subtitle}
        </Text>
      </View>

      <ScrollView
        horizontal
        style={styles.filtersScroll}
        contentContainerStyle={styles.filtersContainer}
        showsHorizontalScrollIndicator={false}
      >
        {USER_EVENT_BOOKING_STATUS_CONTENT.filters.map(
          (filter) => {
            const selected = activeFilter === filter;

            return (
              <Pressable
                key={filter}
                style={[
                  styles.filterButton,
                  selected && styles.filterButtonActive,
                ]}
                onPress={() =>
                  setActiveFilter(filter as StatusFilter)
                }
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
          }
        )}
      </ScrollView>

      <ScrollView
        style={styles.bookingList}
        contentContainerStyle={styles.bookingListContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredBookings.map((booking) => {
          const statusStyle = getStatusStyle(booking.status);

          return (
            <Pressable
              key={booking.id}
              style={styles.bookingCard}
              onPress={() => handleBookingPress(booking)}
              accessibilityRole="button"
              accessibilityLabel={`View ${booking.eventName}, ${booking.status}`}
            >
              <Image
                source={EVENT_IMAGES[booking.imageKey]}
                style={styles.eventImage}
                resizeMode="cover"
              />

              <View style={styles.bookingContent}>
                <View style={styles.bookingTopRow}>
                  <Text
                    style={styles.eventName}
                    numberOfLines={2}
                  >
                    {booking.eventName}
                  </Text>
                </View>

                <View
                  style={[
                    styles.statusBadge,
                    {
                      backgroundColor:
                        statusStyle.backgroundColor,
                    },
                  ]}
                >
                  <Ionicons
                    name={statusStyle.icon}
                    size={14}
                    color={statusStyle.color}
                  />

                  <Text
                    style={[
                      styles.statusText,
                      { color: statusStyle.color },
                    ]}
                  >
                    {booking.status}
                  </Text>
                </View>

                <Text style={styles.bookingId}>
                  {USER_EVENT_BOOKING_STATUS_CONTENT.bookingIdLabel}:{" "}
                  {booking.bookingId}
                </Text>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="calendar-outline"
                    size={15}
                    color="#7B8798"
                  />
                  <Text style={styles.detailText}>
                    {formatDate(booking.eventDate)}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="location-outline"
                    size={15}
                    color="#7B8798"
                  />
                  <Text
                    style={styles.detailText}
                    numberOfLines={1}
                  >
                    {booking.location}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="people-outline"
                    size={15}
                    color="#7B8798"
                  />
                  <Text style={styles.detailText}>
                    {booking.guestCount} guests
                  </Text>
                </View>

                <View style={styles.cardFooter}>
                  <Text style={styles.eventType}>
                    {booking.eventType}
                  </Text>

                  <View style={styles.viewDetails}>
                    <Text style={styles.viewDetailsText}>
                      {USER_EVENT_BOOKING_STATUS_CONTENT.viewDetails}
                    </Text>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#1769F5"
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          );
        })}

        {filteredBookings.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons
              name="calendar-outline"
              size={42}
              color="#9AA7B7"
            />

            <Text style={styles.emptyTitle}>
              {USER_EVENT_BOOKING_STATUS_CONTENT.emptyTitle}
            </Text>

            <Text style={styles.emptySubtitle}>
              {USER_EVENT_BOOKING_STATUS_CONTENT.emptySubtitle}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function formatDate(value: string): string {
  const date = new Date(`${value}T12:00:00`);

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}