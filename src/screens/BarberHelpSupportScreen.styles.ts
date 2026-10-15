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
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 30,
  },

  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginBottom: 23,
  },

  pageIcon: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: "#E8F0FF",
    borderWidth: 1,
    borderColor: "#D5E4FF",
    alignItems: "center",
    justifyContent: "center",
  },

  pageHeaderText: {
    flex: 1,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.1,
    color: "#2563EB",
    marginBottom: 5,
  },

  pageTitle: {
    fontSize: 23,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 5,
  },

  pageSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: "#64748B",
  },

  statsGrid: {
    gap: 12,
    marginBottom: 24,
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
  },

  statCard: {
    flex: 1,
    minWidth: 0,
    minHeight: 130,
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5EAF3",
  },

  statIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  statValue: {
    fontSize: 25,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 4,
  },

  statTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B",
  },

  tabsContainer: {
    flexDirection: "row",
    gap: 9,
    backgroundColor: "#E9EEF6",
    padding: 5,
    borderRadius: 14,
    marginBottom: 22,
  },

  tab: {
    flex: 1,
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: "#2563EB",
    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5,
    elevation: 2,
  },

  tabText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
  },

  activeTabText: {
    color: "#FFFFFF",
  },

  tabContent: {
    width: "100%",
  },

  footerCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    paddingHorizontal: 13,
    paddingVertical: 14,
    backgroundColor: "#EDF2F8",
    borderRadius: 12,
    marginTop: 22,
  },

  footerText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 18,
    color: "#64748B",
  },
});