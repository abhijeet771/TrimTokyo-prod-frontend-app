import { StyleSheet } from "react-native";
import { PRIVACY_THEME } from "../constants/privacy";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: PRIVACY_THEME.background,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },

  container: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    paddingHorizontal: 22,
  },

  // Header
  header: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: PRIVACY_THEME.surface,
    borderWidth: 1,
    borderColor: PRIVACY_THEME.border,
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    fontSize: 32,
    lineHeight: 36,
    color: PRIVACY_THEME.heading,
    marginTop: -3,
  },

  headerLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    color: PRIVACY_THEME.muted,
  },

  headerSpacer: {
    width: 42,
  },

  // Hero
  hero: {
    alignItems: "center",
    paddingTop: 22,
    paddingBottom: 24,
  },

  heroIcon: {
    width: 66,
    height: 66,
    borderRadius: 22,
    backgroundColor: PRIVACY_THEME.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  heroIconText: {
    color: PRIVACY_THEME.primary,
    fontSize: 34,
    fontWeight: "800",
  },

  title: {
    color: PRIVACY_THEME.heading,
    fontSize: 29,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.8,
  },

  subtitle: {
    color: PRIVACY_THEME.text,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 10,
    maxWidth: 420,
  },

  updatedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIVACY_THEME.surface,
    borderWidth: 1,
    borderColor: PRIVACY_THEME.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 17,
  },

  updatedDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: PRIVACY_THEME.primary,
    marginRight: 8,
  },

  updatedText: {
    color: PRIVACY_THEME.muted,
    fontSize: 11,
    fontWeight: "600",
  },

  // Introduction
  introCard: {
    backgroundColor: PRIVACY_THEME.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: PRIVACY_THEME.border,
    marginBottom: 16,
  },

  introHeading: {
    color: PRIVACY_THEME.heading,
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 9,
  },

  bodyText: {
    color: PRIVACY_THEME.text,
    fontSize: 13,
    lineHeight: 21,
    flexShrink: 1,
  },

  // Policy sections
  sectionList: {
    gap: 12,
  },

  sectionCard: {
    backgroundColor: PRIVACY_THEME.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: PRIVACY_THEME.border,
    overflow: "hidden",
  },

  sectionHeader: {
    minHeight: 72,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  sectionIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: PRIVACY_THEME.iconBackground,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  sectionIconText: {
    color: PRIVACY_THEME.primary,
    fontSize: 12,
    fontWeight: "800",
  },

  sectionTitle: {
    flex: 1,
    color: PRIVACY_THEME.heading,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    paddingRight: 8,
  },

  expandButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: PRIVACY_THEME.background,
    alignItems: "center",
    justifyContent: "center",
  },

  expandButtonActive: {
    backgroundColor: PRIVACY_THEME.primary,
  },

  expandIcon: {
    color: PRIVACY_THEME.primary,
    fontSize: 22,
    lineHeight: 25,
    fontWeight: "500",
  },

  expandIconActive: {
    color: "#FFFFFF",
  },

  sectionBody: {
    paddingHorizontal: 18,
    paddingTop: 2,
    paddingBottom: 18,
    gap: 13,
    borderTopWidth: 1,
    borderTopColor: PRIVACY_THEME.border,
  },

  paragraphRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 12,
  },

  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: PRIVACY_THEME.primary,
    marginTop: 8,
    marginRight: 10,
  },

  pressed: {
    opacity: 0.75,
  },

  // Support footer
  footerCard: {
    marginTop: 22,
    padding: 17,
    borderRadius: 18,
    backgroundColor: PRIVACY_THEME.primaryLight,
    flexDirection: "row",
    alignItems: "center",
  },

  footerIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: PRIVACY_THEME.surface,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  footerIconText: {
    fontSize: 22,
    fontWeight: "800",
    color: PRIVACY_THEME.primary,
  },

  footerContent: {
    flex: 1,
  },

  footerTitle: {
    color: PRIVACY_THEME.heading,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },

  footerDescription: {
    color: PRIVACY_THEME.text,
    fontSize: 12,
    lineHeight: 18,
  },

  // Branding
  footerBrand: {
    color: PRIVACY_THEME.heading,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 3,
    marginTop: 28,
  },

  footerCaption: {
    color: PRIVACY_THEME.muted,
    textAlign: "center",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 6,
  },
});