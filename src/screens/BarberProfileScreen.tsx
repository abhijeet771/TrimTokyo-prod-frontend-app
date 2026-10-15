import React, { useState } from "react";
import { View, Text, ScrollView, Pressable,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";
import BarberProfileForm from "../components/barber/BarberProfileForm";
import BarberProfileStatus, {
  type BarberProfileApprovalStatus,
} from "../components/barber/BarberProfileStatus";

import {
  INITIAL_BARBER_PROFILE,
  type BarberProfileFormData,
} from "../constants/barberProfile";

import { styles } from "./BarberProfileScreen.styles";

type ProfileTab = "UPDATE_PROFILE" | "PROFILE_STATUS";

export default function BarberProfileScreen() {
  const [activeTab, setActiveTab] =
    useState<ProfileTab>("UPDATE_PROFILE");

  const [formValues, setFormValues] =
    useState<BarberProfileFormData>({
      ...INITIAL_BARBER_PROFILE,
    });

  const [submittedProfile, setSubmittedProfile] =
    useState<BarberProfileFormData | null>(null);

  const [approvalStatus, setApprovalStatus] =
    useState<BarberProfileApprovalStatus>("NOT_SUBMITTED");

  const [submittedAt, setSubmittedAt] = useState<string | null>(null);

  const [rejectionReason] = useState<string | null>(null);

  const handleSubmitProfile = (profile: BarberProfileFormData) => {
    // Keep a separate snapshot of the submitted version.
    const snapshot: BarberProfileFormData = { ...profile };

    setFormValues(snapshot);
    setSubmittedProfile(snapshot);
    setApprovalStatus("PENDING");
    setSubmittedAt(new Date().toLocaleString());
    setActiveTab("PROFILE_STATUS");
  };

  const renderTab = (
    tab: ProfileTab,
    label: string,
    icon: keyof typeof Ionicons.glyphMap
  ) => {
    const selected = activeTab === tab;

    return (
      <Pressable
        key={tab}
        style={[
          styles.tab,
          selected && styles.activeTab,
        ]}
        onPress={() => setActiveTab(tab)}
        accessibilityRole="button"
        accessibilityState={{ selected }}
      >
        <Ionicons
          name={icon}
          size={18}
          color={selected ? "#FFFFFF" : "#53648E"}
        />

        <Text
          style={[
            styles.tabText,
            selected && styles.activeTabText,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <BarberHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.pageHeader}>
          <Text style={styles.eyebrow}>BARBER ACCOUNT</Text>

          <Text style={styles.screenTitle}>My Profile</Text>

          <Text style={styles.screenSubtitle}>
            Update your business information and track profile approval.
          </Text>
        </View>

        {/* Profile tabs */}
        <View style={styles.tabsContainer}>
          {renderTab(
            "UPDATE_PROFILE",
            "Update Profile",
            "create-outline"
          )}

          {renderTab(
            "PROFILE_STATUS",
            "Profile Status",
            "time-outline"
          )}
        </View>

        {/* Active tab content */}
        {activeTab === "UPDATE_PROFILE" ? (
          <BarberProfileForm
            key="update-profile-form"
            initialValues={formValues}
            onSubmitProfile={handleSubmitProfile}
          />
        ) : (
          <BarberProfileStatus
            status={approvalStatus}
            submittedProfile={submittedProfile}
            submittedAt={submittedAt}
            rejectionReason={rejectionReason}
          />
        )}
      </ScrollView>

      <BarberBottomNav />
    </View>
  );
}