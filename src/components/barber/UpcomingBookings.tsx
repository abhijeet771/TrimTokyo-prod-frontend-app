import React from "react";
import { View, Text, Pressable,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { UPCOMING_BOOKINGS_CONTENT } from "../../constants/slots";
import { styles } from "./UpcomingBookings.styles";

export default function UpcomingBookings() {
  const router = useRouter();
  const { bookings } = UPCOMING_BOOKINGS_CONTENT;

  const handleViewAll = () => {
    router.push("/barber/orders");
  };

  const handleBookingPress = (bookingId: string) => {
    // Replace with a booking-details route when available.
    router.push("/barber/orders");
  };

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.title}>
            {UPCOMING_BOOKINGS_CONTENT.title}
          </Text>

          <Text style={styles.subtitle}>
            Your scheduled customer appointments
          </Text>
        </View>

        <Pressable
          onPress={handleViewAll}
          style={styles.viewAllButton}
          accessibilityRole="button"
        >
          <Text style={styles.viewAllText}>
            {UPCOMING_BOOKINGS_CONTENT.viewAll}
          </Text>

          <Ionicons
            name="chevron-forward"
            size={15}
            color="#1769FF"
          />
        </Pressable>
      </View>

      {/* Empty State */}
      {bookings.length === 0 ? (
        <View style={styles.emptyCard}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="calendar-outline"
              size={30}
              color="#1769FF"
            />
          </View>

          <Text style={styles.emptyTitle}>
            {UPCOMING_BOOKINGS_CONTENT.emptyTitle}
          </Text>

          <Text style={styles.emptyDescription}>
            {UPCOMING_BOOKINGS_CONTENT.emptyDescription}
          </Text>
        </View>
      ) : (
        <View style={styles.bookingList}>
          {bookings.map((booking) => {
            const isConfirmed =
              booking.status === "CONFIRMED";

            return (
              <Pressable
                key={booking.id}
                style={styles.bookingCard}
                onPress={() =>
                  handleBookingPress(booking.id)
                }
                accessibilityRole="button"
                accessibilityLabel={`Booking for ${booking.customerName}`}
              >
                {/* Customer */}
                <View style={styles.bookingTopRow}>
                  <View style={styles.customerAvatar}>
                    <Ionicons
                      name="person"
                      size={23}
                      color="#1769FF"
                    />
                  </View>

                  <View style={styles.customerInfo}>
                    <Text
                      style={styles.customerName}
                      numberOfLines={1}
                    >
                      {booking.customerName}
                    </Text>

                    <Text
                      style={styles.service}
                      numberOfLines={1}
                    >
                      {booking.service}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.statusBadge,
                      isConfirmed
                        ? styles.confirmedBadge
                        : styles.pendingBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        isConfirmed
                          ? styles.confirmedText
                          : styles.pendingText,
                      ]}
                    >
                      {isConfirmed
                        ? "Confirmed"
                        : "Pending"}
                    </Text>
                  </View>
                </View>

                <View style={styles.divider} />

                {/* Date and time */}
                <View style={styles.bookingDetails}>
                  <View style={styles.detailItem}>
                    <Ionicons
                      name="calendar-outline"
                      size={17}
                      color="#71839F"
                    />

                    <Text style={styles.detailText}>
                      {booking.date}
                    </Text>
                  </View>

                  <View style={styles.detailItem}>
                    <Ionicons
                      name="time-outline"
                      size={17}
                      color="#71839F"
                    />

                    <Text style={styles.detailText}>
                      {booking.time}
                    </Text>
                  </View>
                </View>

                {/* Duration and amount */}
                <View style={styles.bookingFooter}>
                  <View style={styles.durationContainer}>
                    <Ionicons
                      name="hourglass-outline"
                      size={15}
                      color="#71839F"
                    />

                    <Text style={styles.durationText}>
                      {booking.duration}
                    </Text>
                  </View>

                  <Text style={styles.amount}>
                    ₹{booking.amount}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}