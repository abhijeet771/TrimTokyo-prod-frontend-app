import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
  },

  body: {
    flex: 1,
    minHeight: 0,
  },

  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
    gap: 10,
    backgroundColor: "#F5F8FF",
  },

  tab: {
    flex: 1,
    minHeight: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  activeTab: {
    backgroundColor: "#EFEEFF",
    borderColor: "#D9D5FF",
  },

  tabText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#71839F",
  },

  activeTabText: {
    color: "#5145FF",
    fontWeight: "700",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 24,
  },

  detailsCard: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 18,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 20,
    alignSelf: "flex-start",
  },

  backButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5145FF",
  },

  detailsTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#172B4D",
  },

  detailsOrderNumber: {
    marginTop: 5,
    fontSize: 13,
    color: "#71839F",
  },

  detailDivider: {
    height: 1,
    backgroundColor: "#EEF2F8",
    marginVertical: 18,
  },

  detailLabel: {
    marginTop: 14,
    fontSize: 11,
    fontWeight: "500",
    color: "#8290A5",
  },

  detailValue: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
    color: "#172B4D",
  },

  detailAmount: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "700",
    color: "#5145FF",
  },
});