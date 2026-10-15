
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";

import { styles } from "./BarberSettingsScreen.styles";
import { SETTINGS_ITEMS } from "../constants/barberSettings";

export default function BarberSettingsScreen() {
  const router = useRouter();

  const handleSettingsPress = (route: string) => {
    // Individual settings screens can be added later.
    router.push(route as never);
  };

  return (
    <View style={styles.container}>
      <BarberHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageHeader}>
          <View style={styles.headingContent}>
            <Text style={styles.pageTitle}>Settings</Text>
            <Text style={styles.pageSubtitle}>
              Manage your account and app preferences.
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons
              name="settings-outline"
              size={27}
              color="#6558D3"
            />
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons
              name="options-outline"
              size={22}
              color="#6558D3"
            />
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Personalize your experience
            </Text>
            <Text style={styles.infoDescription}>
              Configure your account and manage how you use
              TrimTokyo Barber.
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            General Settings
          </Text>
          <Text style={styles.sectionSubtitle}>
            Choose a section to manage
          </Text>
        </View>

        <View style={styles.settingsCard}>
          {SETTINGS_ITEMS.map((item, index) => (
            <Pressable
              key={item.id}
              onPress={() => handleSettingsPress(item.route)}
              accessibilityRole="button"
              accessibilityLabel={item.title}
              style={({ pressed }) => [
                styles.settingsItem,
                index !== SETTINGS_ITEMS.length - 1 &&
                  styles.settingsItemBorder,
                pressed && styles.settingsItemPressed,
              ]}
            >
              <View
                style={[
                  styles.settingsIcon,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={23}
                  color={item.color}
                />
              </View>

              <View style={styles.settingsText}>
                <Text style={styles.settingsTitle}>
                  {item.title}
                </Text>
                <Text style={styles.settingsDescription}>
                  {item.description}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9298AA"
              />
            </Pressable>
          ))}
        </View>

        <View style={styles.footerCard}>
          <Ionicons
            name="cut-outline"
            size={23}
            color="#6558D3"
          />

          <View style={styles.footerTextContainer}>
            <Text style={styles.footerTitle}>
              TrimTokyo Barber
            </Text>
            <Text style={styles.footerSubtitle}>
              Settings & preferences
            </Text>
          </View>

          <Text style={styles.versionText}>v1.0.0</Text>
        </View>

        <Text style={styles.bottomText}>
          Built for better barber experiences.
        </Text>
      </ScrollView>

      <BarberBottomNav />
    </View>
  );
}
