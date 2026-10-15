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
    paddingTop: 22,
    paddingBottom: 30,
  },

  pageHeader: {
    marginBottom: 20,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#6558D3",
    marginBottom: 7,
  },

  screenTitle: {
    fontSize: 27,
    fontWeight: "800",
    color: "#171D3A",
    letterSpacing: -0.5,
  },

  screenSubtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: "#7180A5",
    marginTop: 6,
  },

  tabsContainer: {
    flexDirection: "row",
    padding: 4,
    borderRadius: 13,
    backgroundColor: "#E9ECF7",
    marginBottom: 22,
    gap: 4,
  },

  tab: {
    flex: 1,
    minHeight: 46,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  activeTab: {
    backgroundColor: "#6558D3",
    shadowColor: "#6558D3",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },

  tabText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#53648E",
  },

  activeTabText: {
    color: "#FFFFFF",
  },
});