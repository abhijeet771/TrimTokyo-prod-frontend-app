
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 24,
  },

  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  titleContainer: {
    flex: 1,
    marginRight: 12,
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#171A35",
  },

  pageSubtitle: {
    fontSize: 13,
    lineHeight: 19,
    color: "#737B95",
    marginTop: 5,
  },

  calendarButton: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E9F5",
    alignItems: "center",
    justifyContent: "center",
  },

  // MAIN TABS: PAYMENTS / EXPENSES
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E9F5",
    borderRadius: 15,
    padding: 4,
    marginBottom: 18,
  },

  tab: {
    flex: 1,
    minWidth: 0,
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingHorizontal: 6,
    borderRadius: 11,
  },

  activeTab: {
    backgroundColor: "#5B4BEE",
  },

  tabLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64708A",
    flexShrink: 1,
  },

  activeTabLabel: {
    color: "#FFFFFF",
  },

  // MAIN CONTENT AREA
  contentContainer: {
    flex: 1,
    minHeight: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#EAECF5",
    padding: 16,
  },

  // EMPTY CONTENT PLACEHOLDER
  emptyContent: {
    flex: 1,
    minHeight: 360,
  },
});
