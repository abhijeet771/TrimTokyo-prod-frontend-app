import React, { useState } from "react";
import { View,  Text,  ScrollView,  Pressable,  Switch,  Alert,  Platform,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { BARBER_HOME_CONTENT } from "../../constants/barber";
import { styles } from "./BarberHomeOverview.styles";

export default function BarberHomeOverview() {
  const router = useRouter();
  const [isAvailable, setIsAvailable] = useState(true);
  const showMessage = (message: string) => {
    if (Platform.OS === "web") {
      window.alert(message);
    } else {
      Alert.alert("TrimTokyo", message);
    }
  };

  const handleQuickAction = (actionId: string) => {
    switch (actionId) {
      case "website":
        showMessage("Brand Website will be available here.");
        break;

      case "services":
        showMessage("Add Services screen will be available here.");
        break;

      case "profile":
        showMessage("Update Profile screen will be available here.");
        break;

      default:
        break;
    }
  };

  const appointment = BARBER_HOME_CONTENT.nextAppointment;

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Greeting */}
      <View style={styles.greetingSection}>
        <View style={styles.greetingTextContainer}>
          <Text style={styles.greeting}>
            {BARBER_HOME_CONTENT.greeting}
          </Text>

          <Text style={styles.barberName}>
            {BARBER_HOME_CONTENT.barberName}
          </Text>

          <Text style={styles.subtitle}>
            {BARBER_HOME_CONTENT.subtitle}
          </Text>
        </View>

        <View style={styles.greetingIllustration}>
          <Ionicons name="cut-outline" size={62} color="#1769FF" />
        </View>
      </View>

      {/* Availability */}
      <View style={[ styles.availabilityCard, !isAvailable && styles.unavailableCard,]}>
        <View
          style={[
            styles.availabilityDot,
            !isAvailable && styles.unavailableDot,
          ]}
        />

        <View style={styles.availabilityTextContainer}>
          <Text style={styles.availabilityTitle}>
            {isAvailable
              ? BARBER_HOME_CONTENT.availability.title
              : "You're Unavailable"}
          </Text>

          <Text style={styles.availabilityDescription}>
            {isAvailable
              ? BARBER_HOME_CONTENT.availability.description
              : "You're not receiving new bookings."}
          </Text>
        </View>

        <Switch
          value={isAvailable}
          onValueChange={setIsAvailable}
          trackColor={{
            false: "#CBD5E1",
            true: "#1769FF",
          }}
          thumbColor="#FFFFFF"
          accessibilityLabel="Toggle barber availability"
        />
      </View>

      {/* KPI Cards */}
      <View style={styles.kpiGrid}>
        {BARBER_HOME_CONTENT.kpis.map((kpi) => (
          <View key={kpi.id} style={styles.kpiCard}>
            <View
              style={[
                styles.kpiIconContainer,
                { backgroundColor: kpi.backgroundColor },
              ]}
            >
              <Ionicons name={kpi.icon} size={23} color={kpi.color}/>
            </View>

            <Text style={styles.kpiValue}>
              {kpi.value}
            </Text>

            <Text style={styles.kpiTitle}>
              {kpi.title}
            </Text>
          </View>
        ))}
      </View>

      {/* Next Appointment */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {BARBER_HOME_CONTENT.nextAppointment.title}
        </Text>

        <Pressable
          onPress={() => router.push("/barber/orders" as never)}
          accessibilityRole="button"
        >
          <Text style={styles.viewAllText}>View all</Text>
        </Pressable>
      </View>

      <View style={styles.appointmentCard}>
        <View style={styles.appointmentTopRow}>
          <View style={styles.customerAvatar}>
            <Ionicons name="person" size={29} color="#1769FF"
            />
          </View>

          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>
              {appointment.customerName}
            </Text>

            <Text style={styles.appointmentService}>
              {appointment.time} · {appointment.service}
            </Text>

            <View style={styles.addressRow}>
              <Ionicons name="location-outline" size={16} color="#617693"/>

              <Text style={styles.addressText}>
                {appointment.address}
              </Text>
            </View>
          </View>

          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>
              {appointment.status}
            </Text>
          </View>
        </View>

        <View style={styles.appointmentActions}>
          <Pressable
            style={styles.primaryButton}
            onPress={() =>
              router.push("/barber/orders" as never)
            }
            accessibilityRole="button"
          >
            <Ionicons
              name="calendar-outline"
              size={18}
              color="#FFFFFF"
            />

            <Text style={styles.primaryButtonText}>
              View Booking
            </Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() =>
              showMessage("Directions will be available here.")
            }
            accessibilityRole="button"
          >
            <Ionicons
              name="navigate-outline"
              size={19}
              color="#1769FF"
            />

            <Text style={styles.secondaryButtonText}>
              Directions
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsSection}>
        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.quickActionsGrid}>
          {BARBER_HOME_CONTENT.quickActions.map((action) => (
            <Pressable
              key={action.id}
              style={styles.quickActionItem}
              onPress={() => handleQuickAction(action.id)}
              accessibilityRole="button"
              accessibilityLabel={action.title}
            >
              <View
                style={[ styles.quickActionIcon,
                  { backgroundColor: action.backgroundColor },
                ]}
              >
                <Ionicons name={action.icon} size={29} color={action.color} />
              </View>

              <Text style={styles.quickActionTitle}>
                {action.title}
              </Text>

              <Text style={styles.quickActionSubtitle}>
                {action.subtitle}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}