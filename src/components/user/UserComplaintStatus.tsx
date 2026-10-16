import React, { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./UserComplaintStatus.styles";

export type ComplaintStatus =
  | "Pending"
  | "In Progress"
  | "Resolved"
  | "Rejected";

export type ComplaintRecord = {
  id: string;
  orderNumber: string;
  title: string;
  issue: string;
  description: string;
  submittedDate: string;
  status: ComplaintStatus;
};

type ComplaintFilter =
  | "All"
  | ComplaintStatus;

type UserComplaintStatusProps = {
  complaints?: ComplaintRecord[];
  onComplaintPress?: (complaint: ComplaintRecord) => void;
};

const FILTERS: ComplaintFilter[] = [
  "All",
  "Pending",
  "In Progress",
  "Resolved",
  "Rejected",
];

const MOCK_COMPLAINTS: ComplaintRecord[] = [
  {
    id: "CMP1001",
    orderNumber: "TT-ORD-1024",
    title: "Service Quality Issue",
    issue: "Unsatisfactory haircut",
    description:
      "The haircut was different from the requested style.",
    submittedDate: "15 Oct 2026",
    status: "In Progress",
  },
  {
    id: "CMP1002",
    orderNumber: "TT-ORD-1018",
    title: "Payment Issue",
    issue: "Payment deducted twice",
    description:
      "The payment appears to have been deducted twice for the same order.",
    submittedDate: "12 Oct 2026",
    status: "Pending",
  },
  {
    id: "CMP1003",
    orderNumber: "TT-ORD-0992",
    title: "Booking Issue",
    issue: "Appointment timing",
    description:
      "The appointment timing was corrected by the support team.",
    submittedDate: "05 Oct 2026",
    status: "Resolved",
  },
  {
    id: "CMP1004",
    orderNumber: "TT-ORD-0985",
    title: "Refund Request",
    issue: "Refund not received",
    description:
      "The requested refund was not processed successfully.",
    submittedDate: "01 Oct 2026",
    status: "Rejected",
  },
];

export default function UserComplaintStatus({
  complaints = MOCK_COMPLAINTS,
  onComplaintPress,
}: UserComplaintStatusProps) {
  const [activeFilter, setActiveFilter] =
    useState<ComplaintFilter>("All");

  const [expandedComplaintId, setExpandedComplaintId] =
    useState<string | null>(null);

  const filteredComplaints = useMemo(() => {
    if (activeFilter === "All") {
      return complaints;
    }

    return complaints.filter(
      (complaint) => complaint.status === activeFilter
    );
  }, [activeFilter, complaints]);

  const getStatusStyle = (status: ComplaintStatus) => {
    switch (status) {
      case "Pending":
        return {
          badge: styles.pendingBadge,
          text: styles.pendingText,
          icon: "time-outline" as const,
        };

      case "In Progress":
        return {
          badge: styles.progressBadge,
          text: styles.progressText,
          icon: "sync-outline" as const,
        };

      case "Resolved":
        return {
          badge: styles.resolvedBadge,
          text: styles.resolvedText,
          icon: "checkmark-circle-outline" as const,
        };

      case "Rejected":
        return {
          badge: styles.rejectedBadge,
          text: styles.rejectedText,
          icon: "close-circle-outline" as const,
        };
    }
  };

  const renderComplaint = (complaint: ComplaintRecord) => {
    const statusStyle = getStatusStyle(complaint.status);
    const expanded = expandedComplaintId === complaint.id;

    return (
      <View key={complaint.id} style={styles.complaintCard}>
        <View style={styles.cardHeader}>
          <View style={styles.complaintIcon}>
            <Ionicons
              name="document-text-outline"
              size={25}
              color="#1769F5"
            />
          </View>

          <View style={styles.headerDetails}>
            <Text style={styles.complaintTitle}>
              {complaint.title}
            </Text>

            <Text style={styles.complaintId}>
              Complaint ID: {complaint.id}
            </Text>
          </View>

          <View
            style={[
              styles.statusBadge,
              statusStyle.badge,
            ]}
          >
            <Ionicons
              name={statusStyle.icon}
              size={14}
              color={
                complaint.status === "Pending"
                  ? "#B7791F"
                  : complaint.status === "In Progress"
                    ? "#1769F5"
                    : complaint.status === "Resolved"
                      ? "#07865D"
                      : "#D92121"
              }
            />

            <Text
              style={[
                styles.statusText,
                statusStyle.text,
              ]}
            >
              {complaint.status}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Order Number</Text>
          <Text style={styles.infoValue}>
            {complaint.orderNumber}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Issue</Text>
          <Text style={styles.infoValue}>
            {complaint.issue}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Submitted On</Text>
          <Text style={styles.infoValue}>
            {complaint.submittedDate}
          </Text>
        </View>

        {expanded && (
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionLabel}>
              Description
            </Text>

            <Text style={styles.descriptionText}>
              {complaint.description}
            </Text>
          </View>
        )}

        <View style={styles.cardFooter}>
          <Pressable
            style={styles.detailsButton}
            onPress={() =>
              setExpandedComplaintId(
                expanded ? null : complaint.id
              )
            }
            accessibilityRole="button"
          >
            <Text style={styles.detailsButtonText}>
              {expanded ? "Hide Details" : "View Details"}
            </Text>

            <Ionicons
              name={expanded ? "chevron-up" : "chevron-down"}
              size={17}
              color="#1769F5"
            />
          </Pressable>

          {onComplaintPress && (
            <Pressable
              style={styles.supportButton}
              onPress={() => onComplaintPress(complaint)}
              accessibilityRole="button"
            >
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={16}
                color="#1769F5"
              />

              <Text style={styles.supportButtonText}>
                Get Help
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.heading}>
          Issue Status
        </Text>

        <Text style={styles.subtitle}>
          Track your complaints and check the latest status.
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={styles.filterContent}
      >
        {FILTERS.map((filter) => {
          const selected = activeFilter === filter;

          return (
            <Pressable
              key={filter}
              style={[
                styles.filterButton,
                selected && styles.filterButtonActive,
              ]}
              onPress={() => setActiveFilter(filter)}
              accessibilityRole="button"
              accessibilityState={{ selected }}
            >
              <Text
                style={[
                  styles.filterText,
                  selected && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <ScrollView
        style={styles.complaintList}
        contentContainerStyle={styles.complaintListContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredComplaints.length > 0 ? (
          filteredComplaints.map(renderComplaint)
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Ionicons
                name="document-text-outline"
                size={38}
                color="#1769F5"
              />
            </View>

            <Text style={styles.emptyTitle}>
              No complaints found
            </Text>

            <Text style={styles.emptySubtitle}>
              There are no complaints under this status.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
