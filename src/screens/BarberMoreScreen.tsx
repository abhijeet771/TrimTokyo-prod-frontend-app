
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";

import { styles } from "./BarberMoreScreen.styles";

type MenuItem = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  backgroundColor: string;
  action: () => void;
};

export default function BarberMoreScreen() {
  const router = useRouter();

  const openWebsite = async () => {
    const websiteUrl = "https://your-brand-website.com";

    try {
      await Linking.openURL(websiteUrl);
    } catch {
      Alert.alert("Error", "Unable to open the website.");
    }
  };

  const openServices = () => {
    Alert.alert(
      "Services",
      "Your barber services will be available here."
    );
  };

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
            // Connect your authentication logout flow here.
            router.replace("/");
          },
        },
      ]
    );
  };

  const menuItems: MenuItem[] = [
    {
      title: "My Profile",
      description: "Manage your personal information",
      icon: "person-outline",
      color: "#6558D3",
      backgroundColor: "#EFEDFF",
      action: () =>
        Alert.alert(
          "My Profile",
          "Your profile screen will be connected here."
        ),
    },
    {
      title: "Settings",
      description: "Manage your account preferences",
      icon: "settings-outline",
      color: "#2878C8",
      backgroundColor: "#EAF4FF",
      action: () =>
        Alert.alert(
          "Settings",
          "Your settings screen will be connected here."
        ),
    },
    {
      title: "Help & Support",
      description: "Get help with your account",
      icon: "help-circle-outline",
      color: "#13856A",
      backgroundColor: "#E5F7F1",
      action: () =>
        Alert.alert(
          "Help & Support",
          "Your support options will be connected here."
        ),
    },
    {
      title: "Brand Website",
      description: "Visit the official TrimTokyo website",
      icon: "globe-outline",
      color: "#A05AC7",
      backgroundColor: "#F5EAFE",
      action: openWebsite,
    },
    {
      title: "Services",
      description: "View your barber services",
      icon: "cut-outline",
      color: "#C0782C",
      backgroundColor: "#FFF2E2",
      action: openServices,
    },
  ];

  return (
    <View style={styles.container}>
      <BarberHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>More</Text>
          <Text style={styles.pageSubtitle}>
            Manage your account and explore more options.
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.profileCard,
            pressed && styles.pressed,
          ]}
          onPress={() =>
            Alert.alert(
              "My Profile",
              "Your profile screen will be connected here."
            )
          }
        >
          <View style={styles.profileAvatar}>
            <Ionicons
              name="person"
              size={30}
              color="#6558D3"
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              Barber Account
            </Text>
            <Text style={styles.profileDescription}>
              Manage your TrimTokyo barber account
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Account & More
          </Text>
          <Text style={styles.sectionSubtitle}>
            Quick access to your account options
          </Text>
        </View>

        <View style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <Pressable
              key={item.title}
              style={({ pressed }) => [
                styles.menuItem,
                index !== menuItems.length - 1 &&
                  styles.menuItemBorder,
                pressed && styles.pressed,
              ]}
              onPress={item.action}
              accessibilityRole="button"
              accessibilityLabel={item.title}
            >
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={item.color}
                />
              </View>

              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>
                  {item.title}
                </Text>
                <Text style={styles.menuDescription}>
                  {item.description}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={19}
                color="#9CA3AF"
              />
            </Pressable>
          ))}
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.pressed,
          ]}
          onPress={handleLogout}
          accessibilityRole="button"
        >
          <Ionicons
            name="log-out-outline"
            size={21}
            color="#D64545"
          />
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>

        <View style={styles.versionCard}>
          <View style={styles.versionIcon}>
            <Ionicons
              name="cut-outline"
              size={25}
              color="#6558D3"
            />
          </View>

          <View style={styles.versionInfo}>
            <Text style={styles.versionTitle}>
              TrimTokyo Barber
            </Text>
            <Text style={styles.versionDescription}>
              Your barber workspace
            </Text>
          </View>

          <View style={styles.versionBadge}>
            <Text style={styles.versionBadgeText}>
              v1.0.0
            </Text>
          </View>
        </View>

        <Text style={styles.footerText}>
          Made for better barber experiences.
        </Text>
      </ScrollView>

      <BarberBottomNav />
    </View>
  );
}
