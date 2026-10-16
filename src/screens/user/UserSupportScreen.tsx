import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import UserComplaintForm, {
  type ComplaintFormData,
} from "../../components/user/UserComplaintForm";

import UserComplaintStatus from "../../components/user/UserComplaintStatus";

import styles from "./UserSupportScreen.styles";

type SupportTab = "raise" | "status";

export default function UserSupportScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<SupportTab>("raise");

  const handleComplaintSubmit = (complaint: ComplaintFormData) => {
    // The form is currently frontend-only.
    // Connect the complaint creation API here when the backend is ready.
    console.log("Complaint submitted:", {
      ...complaint,
      submittedAt: new Date().toISOString(),
    });

    Alert.alert(
      "Complaint submitted",
      "Your complaint form has been submitted in demo mode. Connect the backend to create a real complaint record.",
      [
        {
          text: "OK",
          onPress: () => setActiveTab("status"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={23} color="#172033" />
        </Pressable>

        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Help & Support</Text>
          <Text style={styles.headerSubtitle}>
            We are here to help you
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Ionicons
            name="headset-outline"
            size={23}
            color="#2878E5"
          />
        </View>
      </View>

      <View style={styles.introCard}>
        <View style={styles.introIcon}>
          <Ionicons
            name="chatbubbles-outline"
            size={28}
            color="#2878E5"
          />
        </View>

        <View style={styles.introText}>
          <Text style={styles.introTitle}>How can we help?</Text>
          <Text style={styles.introDescription}>
            Raise a complaint or check the status of an existing issue.
          </Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Pressable
          style={[
            styles.tab,
            activeTab === "raise" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("raise")}
        >
          <Ionicons
            name="create-outline"
            size={18}
            color={activeTab === "raise" ? "#FFFFFF" : "#68758A"}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "raise" && styles.activeTabText,
            ]}
          >
            Raise Complaint
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.tab,
            activeTab === "status" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("status")}
        >
          <Ionicons
            name="time-outline"
            size={18}
            color={activeTab === "status" ? "#FFFFFF" : "#68758A"}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === "status" && styles.activeTabText,
            ]}
          >
            Issue Status
          </Text>
        </Pressable>
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {activeTab === "raise" ? (
          <View>
            <View style={styles.sectionHeading}>
              <Text style={styles.sectionTitle}>Submit a complaint</Text>
              <Text style={styles.sectionSubtitle}>
                Provide the details below so our team can assist you.
              </Text>
            </View>

            <UserComplaintForm
              onSubmitComplaint={handleComplaintSubmit}
            />
          </View>
        ) : (
          <View>
            <View style={styles.sectionHeading}>
              <Text style={styles.sectionTitle}>Your complaints</Text>
              <Text style={styles.sectionSubtitle}>
                Track the progress of your reported issues.
              </Text>
            </View>

            <UserComplaintStatus />
          </View>
        )}

        <View style={styles.contactCard}>
          <View style={styles.contactIcon}>
            <Ionicons
              name="help-circle-outline"
              size={22}
              color="#2878E5"
            />
          </View>

          <View style={styles.contactText}>
            <Text style={styles.contactTitle}>
              Need additional assistance?
            </Text>
            <Text style={styles.contactDescription}>
              Our support team can help with booking and service issues.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
