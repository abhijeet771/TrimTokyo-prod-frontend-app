import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F5F8FF",
  },

  tab: {
    flex: 1,
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: "#E8EFFA",
    borderWidth: 1,
    borderColor: "#E1EAF8",
  },

  activeTab: {
    backgroundColor: "#1769FF",
    borderColor: "#1769FF",
  },

  tabLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#617693",
  },

  activeTabLabel: {
    color: "#FFFFFF",
  },
});