import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  MOCK_BARBER_SUPPORT_TICKETS,
  BARBER_SUPPORT_TICKET_FILTERS,
  type BarberSupportTicket,
  type BarberSupportTicketStatus,
} from "../../constants/barberSupport";

import { styles } from "./BarberSupportTickets.styles";

interface BarberSupportTicketsProps {
  tickets?: BarberSupportTicket[];
  onViewTicket?: (ticket: BarberSupportTicket) => void;
}

const STATUS_CONFIG: Record<
  BarberSupportTicketStatus,
  { label: string; color: string; backgroundColor: string }
> = {
  OPEN: {
    label: "Open",
    color: "#B45309",
    backgroundColor: "#FEF3C7",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "#1D4ED8",
    backgroundColor: "#DBEAFE",
  },
  RESOLVED: {
    label: "Resolved",
    color: "#15803D",
    backgroundColor: "#DCFCE7",
  },
  CLOSED: {
    label: "Closed",
    color: "#64748B",
    backgroundColor: "#F1F5F9",
  },
};

const PRIORITY_CONFIG = {
  LOW: { label: "Low", color: "#15803D" },
  NORMAL: { label: "Normal", color: "#2563EB" },
  HIGH: { label: "High", color: "#D97706" },
  URGENT: { label: "Urgent", color: "#DC2626" },
};

export default function BarberSupportTickets({
  tickets = MOCK_BARBER_SUPPORT_TICKETS,
  onViewTicket,
}: BarberSupportTicketsProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredTickets = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tickets.filter((ticket) => {
      const matchesSearch =
        !query ||
        ticket.id.toLowerCase().includes(query) ||
        ticket.title.toLowerCase().includes(query) ||
        ticket.category.toLowerCase().includes(query);

      const matchesStatus =
        activeFilter === "ALL" ||
        ticket.status === activeFilter;

      return matchesSearch && matchesStatus;
    });
  }, [tickets, search, activeFilter]);

  const formatDate = (dateValue: string) => {
    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return dateValue;
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleViewTicket = (ticket: BarberSupportTicket) => {
    if (onViewTicket) {
      onViewTicket(ticket);
      return;
    }

    // Ticket detail navigation can be connected later.
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.headingTextContainer}>
          <Text style={styles.heading}>My Tickets</Text>
          <Text style={styles.subtitle}>
            Track your support requests and their status.
          </Text>
        </View>

        <View style={styles.totalBadge}>
          <Text style={styles.totalBadgeText}>
            {tickets.length}
          </Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#94A3B8"
        />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search ticket ID, title or category"
          placeholderTextColor="#94A3B8"
          style={styles.searchInput}
          accessibilityLabel="Search support tickets"
          returnKeyType="search"
        />

        {search.length > 0 && (
          <Pressable
            onPress={() => setSearch("")}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
          >
            <Ionicons
              name="close-circle"
              size={20}
              color="#94A3B8"
            />
          </Pressable>
        )}
      </View>

      <View style={styles.filtersContainer}>
        {BARBER_SUPPORT_TICKET_FILTERS.map((filter) => {
          const selected = activeFilter === filter.value;

          return (
            <Pressable
              key={filter.value}
              style={[
                styles.filterButton,
                selected && styles.activeFilterButton,
              ]}
              onPress={() => setActiveFilter(filter.value)}
              accessibilityRole="button"
              accessibilityState={{ selected }}
            >
              <Text
                style={[
                  styles.filterText,
                  selected && styles.activeFilterText,
                ]}
              >
                {filter.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>
          Support Requests
        </Text>

        <Text style={styles.resultsCount}>
          {filteredTickets.length}{" "}
          {filteredTickets.length === 1 ? "ticket" : "tickets"}
        </Text>
      </View>

      {filteredTickets.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="ticket-outline"
              size={32}
              color="#64748B"
            />
          </View>

          <Text style={styles.emptyTitle}>
            No tickets found
          </Text>

          <Text style={styles.emptyDescription}>
            {search || activeFilter !== "ALL"
              ? "Try changing your search or status filter."
              : "You haven't raised any support tickets yet."}
          </Text>

          {(search || activeFilter !== "ALL") && (
            <Pressable
              style={styles.clearFiltersButton}
              onPress={() => {
                setSearch("");
                setActiveFilter("ALL");
              }}
            >
              <Text style={styles.clearFiltersText}>
                Clear Filters
              </Text>
            </Pressable>
          )}
        </View>
      ) : (
        <View style={styles.ticketList}>
          {filteredTickets.map((ticket) => {
            const status = STATUS_CONFIG[ticket.status];
            const priority = PRIORITY_CONFIG[ticket.priority];

            return (
              <View key={ticket.id} style={styles.ticketCard}>
                <View style={styles.ticketTopRow}>
                  <View style={styles.ticketIdContainer}>
                    <Ionicons
                      name="ticket-outline"
                      size={16}
                      color="#64748B"
                    />

                    <Text style={styles.ticketId}>
                      {ticket.id}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: status.backgroundColor },
                    ]}
                  >
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: status.color },
                      ]}
                    />

                    <Text
                      style={[
                        styles.statusText,
                        { color: status.color },
                      ]}
                    >
                      {status.label}
                    </Text>
                  </View>
                </View>

                <Text style={styles.ticketTitle}>
                  {ticket.title}
                </Text>

                <View style={styles.metadataRow}>
                  <View style={styles.metadataItem}>
                    <Ionicons
                      name="grid-outline"
                      size={14}
                      color="#94A3B8"
                    />

                    <Text style={styles.metadataText}>
                      {ticket.category}
                    </Text>
                  </View>

                  <View style={styles.metadataItem}>
                    <Ionicons
                      name="calendar-outline"
                      size={14}
                      color="#94A3B8"
                    />

                    <Text style={styles.metadataText}>
                      {formatDate(ticket.createdAt)}
                    </Text>
                  </View>
                </View>

                <View style={styles.ticketDivider} />

                <View style={styles.ticketBottomRow}>
                  <View style={styles.priorityContainer}>
                    <View
                      style={[
                        styles.priorityDot,
                        { backgroundColor: priority.color },
                      ]}
                    />

                    <Text style={styles.priorityLabel}>
                      Priority:
                    </Text>

                    <Text
                      style={[
                        styles.priorityValue,
                        { color: priority.color },
                      ]}
                    >
                      {priority.label}
                    </Text>
                  </View>

                  <Pressable
                    style={styles.viewButton}
                    onPress={() => handleViewTicket(ticket)}
                    accessibilityRole="button"
                    accessibilityLabel={`View ticket ${ticket.id}`}
                  >
                    <Text style={styles.viewButtonText}>
                      View Details
                    </Text>

                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#2563EB"
                    />
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}
