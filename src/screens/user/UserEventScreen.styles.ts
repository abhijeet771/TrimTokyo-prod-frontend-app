
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F9FF",
  },

  content: {
    flex: 1,
    minHeight: 0,
  },

  eventsScroll: {
    flex: 1,
  },

  eventsContent: {
    paddingBottom: 12,
  },

  statusHeader: {
    backgroundColor: "#DDF4FF",
  },

  sectionTabs: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
    padding: 3,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0EAF3",
  },

  sectionTab: {
    flex: 1,
    minHeight: 46,
    paddingHorizontal: 8,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  sectionTabActive: {
    backgroundColor: "#DCEEFF",
  },

  sectionTabText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#344054",
  },

  sectionTabTextActive: {
    color: "#1769F5",
    fontWeight: "800",
  },

  statusContent: {
    flex: 1,
    minHeight: 0,
  },

  bottomNavigation: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E7EDF3",
  },
});