
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FD",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 32,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 28,
  },

  backButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
  },

  content: {
    alignItems: "center",
    width: "100%",
    maxWidth: 560,
    alignSelf: "center",
  },

  iconContainer: {
    width: 104,
    height: 104,
    borderRadius: 28,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "#D5E4FF",
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFF4D6",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 30,
    marginBottom: 18,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#D97706",
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#92400E",
  },

  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#172554",
    textAlign: "center",
    marginBottom: 5,
  },

  highlightTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#2563EB",
    textAlign: "center",
    marginBottom: 16,
  },

  description: {
    fontSize: 14,
    lineHeight: 23,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 28,
    paddingHorizontal: 4,
  },

  featureCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#E5EAF3",
    marginBottom: 18,
  },

  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 13,
  },

  featureIcon: {
    width: 46,
    height: 46,
    borderRadius: 13,
    backgroundColor: "#EEF4FF",
    alignItems: "center",
    justifyContent: "center",
  },

  featureTextContainer: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 5,
  },

  featureDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: "#64748B",
  },

  divider: {
    height: 1,
    backgroundColor: "#EDF0F5",
  },

  infoCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#EEF4FF",
    borderColor: "#D7E5FF",
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginBottom: 22,
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 19,
    color: "#334155",
  },

  dashboardButton: {
    width: "100%",
    minHeight: 50,
    backgroundColor: "#2563EB",
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    paddingHorizontal: 18,
  },

  dashboardButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});