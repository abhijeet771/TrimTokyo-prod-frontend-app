import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E8EFF9",
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 4,
    minHeight: 72,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    minHeight: 52,
    position: "relative",
  },

  label: {
    fontSize: 11,
    fontWeight: "500",
    color: "#71839F",
  },

  activeLabel: {
    color: "#1769FF",
    fontWeight: "700",
  },

  activeIndicator: {
    position: "absolute",
    bottom: -5,
    width: 28,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#1769FF",
  },
});