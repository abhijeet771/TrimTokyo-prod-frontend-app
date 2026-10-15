import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";
import BarberSupportTicketForm from "../components/barber/BarberSupportTicketForm";
import BarberSupportTickets from "../components/barber/BarberSupportTickets";

import {
  MOCK_BARBER_SUPPORT_TICKETS,
  type BarberSupportTicket,
  type BarberSupportTicketFormData,
} from "../constants/barberSupport";

import { styles } from "./BarberHelpSupportScreen.styles";

type SupportTab = "RAISE_TICKET" | "MY_TICKETS";

export default function BarberHelpSupportScreen() {
  const [activeTab, setActiveTab] =
    useState<SupportTab>("RAISE_TICKET");

  const [tickets, setTickets] = useState<BarberSupportTicket[]>(
    MOCK_BARBER_SUPPORT_TICKETS.map((ticket) => ({ ...ticket }))
  );

  const ticketStats = useMemo(
    () => ({
      raised: tickets.length,
      open: tickets.filter((ticket) => ticket.status === "OPEN").length,
      inProgress: tickets.filter(
        (ticket) => ticket.status === "IN_PROGRESS"
      ).length,
      resolved: tickets.filter(
        (ticket) => ticket.status === "RESOLVED"
      ).length,
    }),
    [tickets]
  );

  const handleSubmitTicket = (
    formData: BarberSupportTicketFormData
  ) => {
    const newTicket: BarberSupportTicket = {
      ...formData,
      id: `TKT-${Date.now()}`,
      status: "OPEN",
      createdAt: new Date().toISOString(),
    };

    setTickets((previous) => [newTicket, ...previous]);
    setActiveTab("MY_TICKETS");
  };

  const renderTab = (
    tab: SupportTab,
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
          color={selected ? "#FFFFFF" : "#64748B"}
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
          <View style={styles.pageIcon}>
            <Ionicons
              name="headset-outline"
              size={27}
              color="#2563EB"
            />
          </View>

          <View style={styles.pageHeaderText}>
            <Text style={styles.eyebrow}>BARBER SUPPORT</Text>
            <Text style={styles.pageTitle}>
              Help & Support
            </Text>
            <Text style={styles.pageSubtitle}>
              Raise an issue and track your support requests.
            </Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statsRow}>
            <StatCard
              title="Raised Tickets"
              value={ticketStats.raised}
              icon="ticket-outline"
              color="#2563EB"
              backgroundColor="#EAF2FF"
            />

            <StatCard
              title="Open Tickets"
              value={ticketStats.open}
              icon="time-outline"
              color="#B45309"
              backgroundColor="#FFF4DF"
            />
          </View>

          <View style={styles.statsRow}>
            <StatCard
              title="In Progress"
              value={ticketStats.inProgress}
              icon="sync-outline"
              color="#7C3AED"
              backgroundColor="#F1EAFE"
            />

            <StatCard
              title="Resolved"
              value={ticketStats.resolved}
              icon="checkmark-circle-outline"
              color="#15803D"
              backgroundColor="#E8F8EF"
            />
          </View>
        </View>

        <View style={styles.tabsContainer}>
          {renderTab(
            "RAISE_TICKET",
            "Raise a Ticket",
            "add-circle-outline"
          )}

          {renderTab(
            "MY_TICKETS",
            "My Tickets",
            "list-outline"
          )}
        </View>

        <View style={styles.tabContent}>
          {activeTab === "RAISE_TICKET" ? (
            <BarberSupportTicketForm
              onSubmitTicket={handleSubmitTicket}
            />
          ) : (
            <BarberSupportTickets
              tickets={tickets}
            />
          )}
        </View>

        <View style={styles.footerCard}>
          <Ionicons
            name="shield-checkmark-outline"
            size={20}
            color="#64748B"
          />

          <Text style={styles.footerText}>
            Your support requests are intended to help resolve
            issues with your TrimTokyo barber account.
          </Text>
        </View>
      </ScrollView>

      <BarberBottomNav />
    </View>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  backgroundColor: string;
}

function StatCard({
  title,
  value,
  icon,
  color,
  backgroundColor,
}: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <View
        style={[
          styles.statIcon,
          { backgroundColor },
        ]}
      >
        <Ionicons
          name={icon}
          size={21}
          color={color}
        />
      </View>

      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statTitle}>
        {title}
      </Text>
    </View>
  );
}