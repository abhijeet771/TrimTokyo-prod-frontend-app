
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 23,
  },

  headingContent: {
    flex: 1,
    paddingRight: 12,
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

  headerIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0EEFF",
    borderRadius: 17,
    padding: 16,
    marginBottom: 28,
  },

  infoIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#30295B",
  },

  infoDescription: {
    fontSize: 12,
    color: "#706A96",
    marginTop: 5,
    lineHeight: 18,
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

  settingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#ECEEF5",
    paddingHorizontal: 15,
    overflow: "hidden",
  },

  settingsItem: {
    minHeight: 87,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  settingsItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F6",
  },

  settingsItemPressed: {
    opacity: 0.65,
  },

  settingsIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  settingsText: {
    flex: 1,
    paddingRight: 8,
  },

  settingsTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#292D43",
  },

  settingsDescription: {
    fontSize: 11,
    color: "#858A9B",
    marginTop: 5,
    lineHeight: 16,
  },

  footerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEEF5",
    borderRadius: 16,
    padding: 15,
    marginTop: 23,
  },

  footerTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  footerTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#292D43",
  },

  footerSubtitle: {
    fontSize: 11,
    color: "#858A9B",
    marginTop: 4,
  },

  versionText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6558D3",
    backgroundColor: "#F0EEFF",
    overflow: "hidden",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
  },

  bottomText: {
    textAlign: "center",
    fontSize: 11,
    color: "#9A9EAD",
    marginTop: 20,
    marginBottom: 5,
  },
});
