
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 5,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: "#EAF0F7",

    shadowColor: "#18334F",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 12,
  },

  navItem: {
    flex: 1,
    minWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 1,
  },

  iconContainer: {
    width: 44,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },

  activeIconContainer: {
    backgroundColor: "#E5F1FF",
  },

  label: {
    fontSize: 10,
    fontWeight: "500",
    color: "#7B8798",
    textAlign: "center",
  },

  activeLabel: {
    color: "#1769F5",
    fontWeight: "700",
  },
});
