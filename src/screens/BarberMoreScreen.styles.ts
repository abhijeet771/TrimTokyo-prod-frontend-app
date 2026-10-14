
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
  },

  pageHeader: {
    marginBottom: 22,
  },

  pageTitle: {
    fontSize: 27,
    fontWeight: "700",
    color: "#20243A",
    letterSpacing: -0.5,
  },

  pageSubtitle: {
    fontSize: 13,
    color: "#858A9B",
    marginTop: 6,
    lineHeight: 19,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#ECEEF5",
    marginBottom: 28,
  },

  profileAvatar: {
    width: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  profileInfo: {
    flex: 1,
    paddingRight: 8,
  },

  profileName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#252940",
  },

  profileDescription: {
    fontSize: 12,
    color: "#858A9B",
    marginTop: 5,
    lineHeight: 17,
  },

  sectionHeader: {
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#252940",
  },

  sectionSubtitle: {
    fontSize: 12,
    color: "#858A9B",
    marginTop: 5,
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#ECEEF5",
    paddingHorizontal: 15,
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 82,
    paddingVertical: 13,
  },

  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F6",
  },

  menuIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  menuTextContainer: {
    flex: 1,
    paddingRight: 8,
  },

  menuTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#292D43",
  },

  menuDescription: {
    fontSize: 11,
    color: "#858A9B",
    marginTop: 5,
    lineHeight: 16,
  },

  pressed: {
    opacity: 0.7,
  },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF1F1",
    borderWidth: 1,
    borderColor: "#FFE1E1",
    borderRadius: 15,
    minHeight: 52,
    marginTop: 20,
    gap: 9,
  },

  logoutText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#D64545",
  },

  versionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEEF5",
    borderRadius: 16,
    padding: 15,
    marginTop: 22,
  },

  versionIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  versionInfo: {
    flex: 1,
  },

  versionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#292D43",
  },

  versionDescription: {
    fontSize: 11,
    color: "#858A9B",
    marginTop: 4,
  },

  versionBadge: {
    backgroundColor: "#F0EEFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9,
  },

  versionBadgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6558D3",
  },

  footerText: {
    textAlign: "center",
    fontSize: 11,
    color: "#9A9EAD",
    marginTop: 20,
    marginBottom: 5,
  },
});
