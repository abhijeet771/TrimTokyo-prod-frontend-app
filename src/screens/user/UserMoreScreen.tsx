import React from "react";
import {
  Alert,
  ScrollView,
  Text,
  Pressable,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import UserHeader from "../../components/user/UserHeader";
import UserBottomNav, {
  type UserTab,
} from "../../components/user/UserBottomNav";

import { styles } from "./UserMoreScreen.styles";

export default function UserMoreScreen() {
  const router = useRouter();

  // Bottom tab navigation
  const handleTabPress = (tab: UserTab) => {
    switch (tab) {
      case "home":
        router.replace("/user");
        break;

      case "home-service":
        router.replace("/user/home-service");
        break;

      case "slots":
        router.replace("/user/slots");
        break;

      case "event":
        router.replace("/user/event");
        break;

      case "more":
        router.replace("/user/more");
        break;

      default:
        break;
    }
  };

  // Profile navigation
  const handleProfilePress = () => {
    router.push("/user/profile");
  };

  // Slot booking history shortcut
  const handleSlotBookingsPress = () => {
    router.push("/user/slot-bookings");
  };

  // Event booking history shortcut
  const handleEventBookingsPress = () => {
    router.push("/user/event-bookings");
  };

  // Settings navigation
  const handleSettingsPress = () => {
    router.push("/user/settings");
  };

  // Help and support navigation
  const handleSupportPress = () => {
    router.push("/user/support");
  };

  // Logout confirmation
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            // Add authentication/session cleanup when the backend is integrated.
            router.replace("/");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.screen}>
      {/* Shared header */}
      <View style={styles.header}>
        <UserHeader
          userName="Raman"
          location="Purnea, Bihar"
          notificationCount={1}
          onLocationPress={() =>
            Alert.alert(
              "Location",
              "Location selection coming soon."
            )
          }
          onNotificationsPress={() =>
            Alert.alert(
              "Notifications",
              "No new notifications."
            )
          }
          onSearchChange={() => {}}
          onFilterPress={() =>
            Alert.alert(
              "Filter",
              "Filters coming soon."
            )
          }
          onCartPress={() =>
            Alert.alert(
              "Cart",
              "Your cart will appear here."
            )
          }
        />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Raman Kumar profile card */}
        <Pressable
          style={styles.profileCard}
          onPress={handleProfilePress}
          accessibilityRole="button"
        >
          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={34}
              color="#1769F5"
            />
          </View>

          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>
              Raman Kumar
            </Text>

            <Text style={styles.profilePhone}>
              +91 98765 43210
            </Text>

            <View style={styles.locationRow}>
              <Ionicons
                name="location-outline"
                size={15}
                color="#647794"
              />

              <Text style={styles.profileLocation}>
                Purnea, Bihar
              </Text>
            </View>
          </View>

          <View style={styles.editProfileButton}>
            <Ionicons
              name="create-outline"
              size={17}
              color="#1769F5"
            />

            <Text style={styles.editProfileText}>
              Edit Profile
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#344054"
          />
        </Pressable>

        {/* Slot and event booking history shortcuts */}
        <View style={styles.bookingRow}>
          {/* Slot bookings: history, not slot discovery */}
          <Pressable
            style={[
              styles.bookingCard,
              styles.slotCard,
            ]}
            onPress={handleSlotBookingsPress}
            accessibilityRole="button"
          >
            <View style={styles.bookingCardTop}>
              <View
                style={[
                  styles.bookingIcon,
                  styles.slotIcon,
                ]}
              >
                <Ionicons
                  name="calendar-outline"
                  size={29}
                  color="#1769F5"
                />
              </View>

              <Ionicons
                name="arrow-forward-circle"
                size={34}
                color="#DDF0FF"
              />
            </View>

            <Text style={styles.bookingTitle}>
              Slot Bookings
            </Text>

            <Text style={styles.bookingSubtitle}>
              View and manage your salon slot bookings.
            </Text>
          </Pressable>

          {/* Event bookings: history, not event discovery */}
          <Pressable
            style={[
              styles.bookingCard,
              styles.eventCard,
            ]}
            onPress={handleEventBookingsPress}
            accessibilityRole="button"
          >
            <View style={styles.bookingCardTop}>
              <View
                style={[
                  styles.bookingIcon,
                  styles.eventIcon,
                ]}
              >
                <Ionicons
                  name="gift-outline"
                  size={29}
                  color="#E83E68"
                />
              </View>

              <Ionicons
                name="arrow-forward-circle"
                size={34}
                color="#FFE8EE"
              />
            </View>

            <Text style={styles.bookingTitle}>
              Event Bookings
            </Text>

            <Text style={styles.bookingSubtitle}>
              View and manage your event bookings.
            </Text>
          </Pressable>
        </View>

        {/* Settings and Help & Support */}
        <View style={styles.menuCard}>
          {/* Settings */}
          <Pressable
            style={styles.menuItem}
            onPress={handleSettingsPress}
            accessibilityRole="button"
          >
            <View
              style={[
                styles.menuIcon,
                styles.settingsIcon,
              ]}
            >
              <Ionicons
                name="settings-outline"
                size={27}
                color="#7047E8"
              />
            </View>

            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>
                Settings
              </Text>

              <Text style={styles.menuSubtitle}>
                App preferences, notifications and more
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={21}
              color="#526581"
            />
          </Pressable>

          <View style={styles.separator} />

          {/* Help and Support */}
          <Pressable
            style={styles.menuItem}
            onPress={handleSupportPress}
            accessibilityRole="button"
          >
            <View
              style={[
                styles.menuIcon,
                styles.supportIcon,
              ]}
            >
              <Ionicons
                name="help-circle"
                size={28}
                color="#079669"
              />
            </View>

            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>
                Help & Support
              </Text>

              <Text style={styles.menuSubtitle}>
                FAQs, contact support, and more
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={21}
              color="#526581"
            />
          </Pressable>
        </View>

        {/* Logout */}
        <Pressable
          style={styles.logoutCard}
          onPress={handleLogout}
          accessibilityRole="button"
        >
          <View style={styles.logoutIcon}>
            <Ionicons
              name="log-out-outline"
              size={29}
              color="#E52525"
            />
          </View>

          <View style={styles.menuTextContainer}>
            <Text style={styles.logoutTitle}>
              Logout
            </Text>

            <Text style={styles.logoutSubtitle}>
              Sign out from your account
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={21}
            color="#526581"
          />
        </Pressable>
      </ScrollView>

      {/* Shared bottom navigation */}
      <View style={styles.bottomNavigation}>
        <UserBottomNav
          activeTab="more"
          onTabPress={handleTabPress}
        />
      </View>
    </View>
  );
}