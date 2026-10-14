import React, { useState } from "react";
import { View, Text, Pressable, Modal, ScrollView, Alert, Platform,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { BARBER_PROFILE_MENU } from "../../constants/barber";
import { styles } from "./BarberHeader.styles";

export default function BarberHeader() {
  const router = useRouter();
  const [profileVisible, setProfileVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleOptionPress = (route: string) => {
    setProfileVisible(false);
    router.push(route as never);
  };

  const handleLogout = () => {
    setProfileVisible(false);

    const logout = BARBER_PROFILE_MENU.logout;

    if (Platform.OS === "web") {
      const confirmed = window.confirm(
        logout.confirmationMessage
      );

      if (confirmed) {
        router.replace("/");
      }

      return;
    }

    Alert.alert(
      logout.confirmationTitle,
      logout.confirmationMessage,
      [
        {
          text: logout.cancelLabel,
          style: "cancel",
        },
        {
          text: logout.confirmLabel,
          style: "destructive",
          onPress: () => router.replace("/"),
        },
      ]
    );
  };

  return (
    <>
      {/* Header */}
      <View style={styles.container}>
        <View style={styles.brandContainer}>
          <View style={styles.logoMark}>
            <Ionicons name="cut-outline" size={22} color="#1769FF" />
          </View>

          <View>
            <Text style={styles.brandName}>
              <Text style={styles.brandBlue}>Trim</Text>
              Tokyo
            </Text>

            <Text style={styles.brandSubtitle}>
              BARBER
            </Text>
          </View>
        </View>

        <View style={styles.headerActions}>
          {/* Notification Bell */}
          <Pressable
            style={styles.iconButton}
            onPress={() => setNotificationVisible(true)}
            accessibilityRole="button"
            accessibilityLabel="Open notifications"
          >
            <Ionicons name="notifications-outline" size={24} color="#15233F"/>

            <View style={styles.notificationDot} />
          </Pressable>

          {/* Profile Avatar */}
          <Pressable
            style={styles.avatarButton}
            onPress={() => setProfileVisible(true)}
            accessibilityRole="button"
            accessibilityLabel="Open profile menu"
          >
            <View style={styles.avatar}>
              <Ionicons name="person" size={25} color="#1769FF" />
            </View>

            <View style={styles.onlineDot} />
          </Pressable>
        </View>
      </View>

      {/* Profile Dialog */}
      <Modal
        visible={profileVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setProfileVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable
            style={styles.backdrop}
            onPress={() => setProfileVisible(false)}
            accessibilityLabel="Close profile menu"
          />

          <View style={styles.profileDialog}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setProfileVisible(false)}
              accessibilityRole="button"
              accessibilityLabel="Close"
            >
              <Ionicons
                name="close"
                size={25}
                color="#15233F"
              />
            </Pressable>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.dialogContent}
            >
              <View style={styles.largeAvatar}>
                <Ionicons name="person"
                  size={48}
                  color="#1769FF"
                />
              </View>

              <Text style={styles.profileName}>
                {BARBER_PROFILE_MENU.name}
              </Text>

              <Text style={styles.profileRole}>
                {BARBER_PROFILE_MENU.role}
              </Text>

              <View style={styles.profileDivider} />

              {BARBER_PROFILE_MENU.options.map((option) => (
                <Pressable
                  key={option.id}
                  style={styles.menuItem}
                  onPress={() => handleOptionPress(option.route)}
                  accessibilityRole="button"
                >
                  <View style={styles.menuIconContainer}>
                    <Ionicons name={option.icon} size={21} color="#263A5B" />
                  </View>

                  <Text style={styles.menuLabel}>
                    {option.label}
                  </Text>

                  <Ionicons
                    name="chevron-forward"
                    size={19}
                    color="#71839F"
                  />
                </Pressable>
              ))}

              <View style={styles.profileDivider} />

              <Pressable
                style={styles.logoutButton}
                onPress={handleLogout}
                accessibilityRole="button"
              >
                <Ionicons
                  name={BARBER_PROFILE_MENU.logout.icon}
                  size={22}
                  color="#E53935"
                />

                <Text style={styles.logoutText}>
                  {BARBER_PROFILE_MENU.logout.label}
                </Text>

                <Ionicons name="chevron-forward" size={19} color="#E53935" />
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Notification Dialog */}
      <Modal
        visible={notificationVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setNotificationVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable
            style={styles.backdrop}
            onPress={() => setNotificationVisible(false)}
            accessibilityLabel="Close notifications"
          />

          <View style={styles.notificationDialog}>
            <View style={styles.notificationHeader}>
              <Text style={styles.notificationTitle}>
                Notifications
              </Text>

              <Pressable
                onPress={() => setNotificationVisible(false)}
                accessibilityRole="button"
                accessibilityLabel="Close notifications"
              >
                <Ionicons name="close" size={24} color="#15233F" />
              </Pressable>
            </View>

            <View style={styles.emptyNotification}>
              <View style={styles.emptyNotificationIcon}>
                <Ionicons name="notifications-outline" size={32} color="#1769FF" />
              </View>

              <Text style={styles.emptyTitle}>
                You're all caught up!
              </Text>

              <Text style={styles.emptyDescription}>
                New booking alerts and updates will appear here.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}