import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";

import { styles } from "./BarberBrandWebsiteScreen.styles";

export default function BarberBrandWebsiteScreen() {
  return (
    <View style={styles.container}>
      <BarberHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color="#334155"
          />
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="globe-outline"
              size={52}
              color="#2563EB"
            />
          </View>

          <View style={styles.badge}>
            <View style={styles.statusDot} />
            <Text style={styles.badgeText}>
              UNDER DEVELOPMENT
            </Text>
          </View>

          <Text style={styles.title}>
            Your Brand Website
          </Text>

          <Text style={styles.highlightTitle}>
            Coming Soon
          </Text>

          <Text style={styles.description}>
            We’re working on a dedicated website for your
            barber business. Soon, customers will be able
            to discover your brand, explore your services,
            and learn more about your shop online.
          </Text>

          <View style={styles.featureCard}>
            <Feature
              icon="storefront-outline"
              title="Your Online Presence"
              description="Showcase your shop and brand."
            />

            <View style={styles.divider} />

            <Feature
              icon="cut-outline"
              title="Service Showcase"
              description="Let customers explore your services."
            />

            <View style={styles.divider} />

            <Feature
              icon="people-outline"
              title="Reach More Customers"
              description="Build your digital presence."
            />
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#2563EB"
            />

            <Text style={styles.infoText}>
              This feature is currently in development.
              We’ll make it available in a future update.
            </Text>
          </View>

          <Pressable
            style={styles.dashboardButton}
            onPress={() => router.replace("/barber")}
          >
            <Ionicons
              name="grid-outline"
              size={18}
              color="#FFFFFF"
            />
            <Text style={styles.dashboardButtonText}>
              Back to Dashboard
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <BarberBottomNav />
    </View>
  );
}

interface FeatureProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}

function Feature({
  icon,
  title,
  description,
}: FeatureProps) {
  return (
    <View style={styles.featureRow}>
      <View style={styles.featureIcon}>
        <Ionicons
          name={icon}
          size={23}
          color="#2563EB"
        />
      </View>

      <View style={styles.featureTextContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}