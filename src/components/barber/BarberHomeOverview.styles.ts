import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F8FF",
  },

  container: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 24,
  },

  greetingSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  greetingTextContainer: {
    flex: 1,
  },

  greeting: {
    fontSize: 20,
    color: "#617693",
    fontWeight: "500",
  },

  barberName: {
    fontSize: 32,
    color: "#101828",
    fontWeight: "800",
    marginTop: 2,
  },

  subtitle: {
    fontSize: 14,
    color: "#617693",
    marginTop: 7,
  },

  greetingIllustration: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#E7F0FF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  availabilityCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2F9EF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
    gap: 11,
  },

  unavailableCard: {
    backgroundColor: "#F1F5F9",
  },

  availabilityDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: "#16B978",
  },

  unavailableDot: {
    backgroundColor: "#94A3B8",
  },

  availabilityTextContainer: {
    flex: 1,
  },

  availabilityTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#101828",
  },

  availabilityDescription: {
    fontSize: 12,
    color: "#617693",
    marginTop: 4,
    lineHeight: 17,
  },

  kpiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 25,
  },

  kpiCard: {
    width: "48%",
    flexGrow: 1,
    flexBasis: "42%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    minHeight: 130,
    borderWidth: 1,
    borderColor: "#EDF2FA",
  },

  kpiIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  kpiValue: {
    fontSize: 27,
    fontWeight: "800",
    color: "#101828",
  },

  kpiTitle: {
    fontSize: 12,
    color: "#617693",
    marginTop: 4,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#101828",
  },

  viewAllText: {
    fontSize: 13,
    color: "#1769FF",
    fontWeight: "700",
  },

  appointmentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 14,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#EAF0FA",
  },

  appointmentTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 16,
  },

  customerAvatar: {
    width: 49,
    height: 49,
    borderRadius: 25,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  customerInfo: {
    flex: 1,
  },

  customerName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#101828",
  },

  appointmentService: {
    fontSize: 12,
    color: "#617693",
    marginTop: 5,
  },

  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 7,
  },

  addressText: {
    flex: 1,
    fontSize: 11,
    color: "#617693",
  },

  statusBadge: {
    backgroundColor: "#E2F9EF",
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  statusText: {
    fontSize: 10,
    color: "#13864F",
    fontWeight: "700",
  },

  appointmentActions: {
    flexDirection: "row",
    gap: 9,
  },

  primaryButton: {
    flex: 1.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    backgroundColor: "#1769FF",
    paddingVertical: 13,
    paddingHorizontal: 8,
    borderRadius: 12,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  secondaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#EAF3FF",
    paddingVertical: 13,
    paddingHorizontal: 8,
    borderRadius: 12,
  },

  secondaryButtonText: {
    color: "#1769FF",
    fontSize: 12,
    fontWeight: "700",
  },

  quickActionsSection: {
    marginBottom: 10,
  },

  quickActionsGrid: {
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },

  quickActionItem: {
    flex: 1,
    alignItems: "center",
    minWidth: 0,
  },

  quickActionIcon: {
    width: "100%",
    height: 68,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },

  quickActionTitle: {
    fontSize: 11,
    color: "#243650",
    fontWeight: "700",
    textAlign: "center",
  },

  quickActionSubtitle: {
    fontSize: 9,
    color: "#71839F",
    textAlign: "center",
    marginTop: 4,
  },
});