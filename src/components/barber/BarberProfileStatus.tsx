import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { BarberProfileFormData } from "../../constants/barberProfile";

import { styles } from "./BarberProfileStatus.styles";

export type BarberProfileApprovalStatus =
  | "NOT_SUBMITTED"
  | "PENDING"
  | "APPROVED"
  | "REJECTED";

interface BarberProfileStatusProps {
  status: BarberProfileApprovalStatus;
  submittedProfile: BarberProfileFormData | null;
  submittedAt?: string | null;
  rejectionReason?: string | null;
}

const STATUS_CONFIG = {
  NOT_SUBMITTED: {
    title: "Profile Not Submitted",
    subtitle: "Complete your profile and submit it for admin review.",
    color: "#64748B",
    backgroundColor: "#F1F5F9",
    icon: "document-outline" as const,
  },
  PENDING: {
    title: "Profile Under Review",
    subtitle: "Your submitted profile is waiting for admin approval.",
    color: "#D97706",
    backgroundColor: "#FFF4D6",
    icon: "time-outline" as const,
  },
  APPROVED: {
    title: "Profile Approved",
    subtitle: "Your profile has been approved by the admin.",
    color: "#13856A",
    backgroundColor: "#E2F8EC",
    icon: "checkmark-circle-outline" as const,
  },
  REJECTED: {
    title: "Profile Rejected",
    subtitle: "Please review the feedback and update your profile.",
    color: "#DC2626",
    backgroundColor: "#FEE8E8",
    icon: "close-circle-outline" as const,
  },
};

export default function BarberProfileStatus({
  status,
  submittedProfile,
  submittedAt,
  rejectionReason,
}: BarberProfileStatusProps) {
  const config = STATUS_CONFIG[status];

  const renderDetail = (label: string, value?: string | null) => (
    <View style={styles.detailRow} key={label}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>
        {value?.trim() || "Not provided"}
      </Text>
    </View>
  );

  const formatBusinessType = (value: string) =>
    value
      .split("_")
      .map(
        (part) =>
          part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
      )
      .join(" ");

  return (
    <View style={styles.container}>
      {/* Current status */}
      <View
        style={[
          styles.statusBanner,
          { backgroundColor: config.backgroundColor },
        ]}
      >
        <View style={styles.statusIconContainer}>
          <Ionicons
            name={config.icon}
            size={29}
            color={config.color}
          />
        </View>

        <View style={styles.statusTextContainer}>
          <Text style={[styles.statusTitle, { color: config.color }]}>
            {config.title}
          </Text>
          <Text style={styles.statusSubtitle}>
            {config.subtitle}
          </Text>

          {submittedAt ? (
            <Text style={styles.submittedAt}>
              Submitted: {submittedAt}
            </Text>
          ) : null}
        </View>
      </View>

      {status === "NOT_SUBMITTED" || !submittedProfile ? (
        <View style={styles.emptyCard}>
          <View style={styles.emptyIconContainer}>
            <Ionicons
              name="document-text-outline"
              size={35}
              color="#6558D3"
            />
          </View>

          <Text style={styles.emptyTitle}>
            No Submitted Profile
          </Text>

          <Text style={styles.emptyDescription}>
            Your submitted profile and approval progress will appear here
            after you submit the Update Profile form.
          </Text>
        </View>
      ) : (
        <>
          {/* Approval timeline */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Approval Progress</Text>

            <View style={styles.timeline}>
              <View style={styles.timelineItem}>
                <View
                  style={[
                    styles.timelineDot,
                    styles.timelineCompleted,
                  ]}
                >
                  <Ionicons
                    name="checkmark"
                    size={17}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.timelineText}>
                  <Text style={styles.timelineTitle}>
                    Profile Submitted
                  </Text>
                  <Text style={styles.timelineSubtitle}>
                    {submittedAt || "Submission recorded"}
                  </Text>
                </View>
              </View>

              <View style={styles.timelineConnector} />

              <View style={styles.timelineItem}>
                <View
                  style={[
                    styles.timelineDot,
                    status === "PENDING"
                      ? styles.timelineCurrent
                      : status === "APPROVED"
                        ? styles.timelineCompleted
                        : status === "REJECTED"
                          ? styles.timelineRejected
                          : styles.timelineUpcoming,
                  ]}
                >
                  <Ionicons
                    name={
                      status === "APPROVED"
                        ? "checkmark"
                        : status === "REJECTED"
                          ? "close"
                          : "time-outline"
                    }
                    size={17}
                    color={
                      status === "NOT_SUBMITTED"
                        ? "#8B95AC"
                        : "#FFFFFF"
                    }
                  />
                </View>

                <View style={styles.timelineText}>
                  <Text style={styles.timelineTitle}>
                    {status === "APPROVED"
                      ? "Admin Approved"
                      : status === "REJECTED"
                        ? "Changes Required"
                        : "Under Review"}
                  </Text>

                  <Text style={styles.timelineSubtitle}>
                    {status === "PENDING"
                      ? "Waiting for admin review"
                      : status === "APPROVED"
                        ? "The admin approved this submission"
                        : status === "REJECTED"
                          ? "The admin requested changes"
                          : "Awaiting submission"}
                  </Text>
                </View>
              </View>

              <View style={styles.timelineConnector} />

              <View style={styles.timelineItem}>
                <View
                  style={[
                    styles.timelineDot,
                    status === "APPROVED"
                      ? styles.timelineCompleted
                      : styles.timelineUpcoming,
                  ]}
                >
                  <Ionicons
                    name="globe-outline"
                    size={17}
                    color={
                      status === "APPROVED"
                        ? "#FFFFFF"
                        : "#8B95AC"
                    }
                  />
                </View>

                <View style={styles.timelineText}>
                  <Text style={styles.timelineTitle}>
                    Approved & Public
                  </Text>
                  <Text style={styles.timelineSubtitle}>
                    {status === "APPROVED"
                      ? "Approved; public visibility depends on the connected publishing workflow"
                      : "Public visibility becomes available after approval"}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* What happens next */}
          <View style={styles.infoBanner}>
            <Ionicons
              name="information-circle"
              size={25}
              color="#2878C8"
            />

            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>
                What happens next?
              </Text>

              <Text style={styles.infoDescription}>
                {status === "PENDING"
                  ? "The admin will review your submitted information. Your profile should only become public after approval."
                  : status === "APPROVED"
                    ? "Your submission is approved. The publishing workflow can now make your profile visible to customers."
                    : "Review the admin feedback, update your profile, and submit it again for review."}
              </Text>
            </View>
          </View>

          {status === "REJECTED" && rejectionReason ? (
            <View style={styles.rejectionCard}>
              <Text style={styles.rejectionTitle}>
                Admin Feedback
              </Text>
              <Text style={styles.rejectionText}>
                {rejectionReason}
              </Text>
            </View>
          ) : null}

          {/* Read-only submitted profile snapshot */}
          <View style={styles.card}>
            <View style={styles.detailsHeader}>
              <View style={styles.detailsIcon}>
                <Ionicons
                  name="document-text-outline"
                  size={23}
                  color="#6558D3"
                />
              </View>

              <View style={styles.detailsHeadingText}>
                <Text style={styles.cardTitle}>
                  Submitted Profile Details
                </Text>
                <Text style={styles.detailsSubtitle}>
                  Read-only information from your submitted version.
                </Text>
              </View>
            </View>

            <View style={styles.detailsList}>
              {renderDetail(
                "Business Type",
                formatBusinessType(submittedProfile.businessType)
              )}
              {renderDetail("Salon Name", submittedProfile.salonName)}
              {renderDetail(
                "Business Description",
                submittedProfile.description
              )}
              {renderDetail(
                "Phone Number",
                submittedProfile.phoneNumber
              )}
              {renderDetail("Address", submittedProfile.address)}
              {renderDetail("City", submittedProfile.city)}
              {renderDetail("State", submittedProfile.state)}
              {renderDetail(
                "Cover Image URL",
                submittedProfile.coverImageUrl
              )}
              {renderDetail(
                "Established Date",
                submittedProfile.establishedDate
              )}
              {renderDetail("Instagram", submittedProfile.instagram)}
              {renderDetail(
                "Google Maps Link",
                submittedProfile.googleMapsLink
              )}
              {renderDetail("Profile Slug", submittedProfile.profileSlug)}
              {renderDetail(
                "Delivery Available",
                submittedProfile.deliveryAvailable ? "Yes" : "No"
              )}
              {renderDetail(
                "Experience",
                `${submittedProfile.experienceYears} years`
              )}
              {renderDetail(
                "Latitude",
                submittedProfile.latitude?.toString()
              )}
              {renderDetail(
                "Longitude",
                submittedProfile.longitude?.toString()
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
}