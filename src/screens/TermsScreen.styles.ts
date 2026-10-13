import { StyleSheet } from "react-native";
import { TERMS_THEME } from "../constants/terms";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: TERMS_THEME.background,
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
    backgroundColor: TERMS_THEME.surface,
    borderWidth: 1,
    borderColor: TERMS_THEME.border,
    alignItems: "center",
    justifyContent: "center",
  },

  backIcon: {
    fontSize: 32,
    lineHeight: 36,
    color: TERMS_THEME.heading,
    marginTop: -3,
  },

  headerLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    color: TERMS_THEME.muted,
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
    backgroundColor: TERMS_THEME.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  heroIconText: {
    color: TERMS_THEME.primary,
    fontSize: 38,
    fontWeight: "700",
  },

  title: {
    color: TERMS_THEME.heading,
    fontSize: 29,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.8,
  },

  subtitle: {
    color: TERMS_THEME.text,
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 10,
    maxWidth: 420,
  },

  updatedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: TERMS_THEME.surface,
    borderWidth: 1,
    borderColor: TERMS_THEME.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 17,
  },

  updatedDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: TERMS_THEME.primary,
    marginRight: 8,
  },

  updatedText: {
    color: TERMS_THEME.muted,
    fontSize: 11,
    fontWeight: "600",
  },

  // Introduction card
  introCard: {
    backgroundColor: TERMS_THEME.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: TERMS_THEME.border,
    marginBottom: 16,
  },

  introHeading: {
    color: TERMS_THEME.heading,
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 9,
  },

  bodyText: {
    color: TERMS_THEME.text,
    fontSize: 13,
    lineHeight: 21,
    flexShrink: 1,
  },

  // Legal sections
  sectionList: {
    gap: 12,
  },

  sectionCard: {
    backgroundColor: TERMS_THEME.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: TERMS_THEME.border,
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
    backgroundColor: TERMS_THEME.iconBackground,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  sectionIconText: {
    color: TERMS_THEME.primary,
    fontSize: 12,
    fontWeight: "800",
  },

  sectionTitle: {
    flex: 1,
    color: TERMS_THEME.heading,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    paddingRight: 8,
  },

  expandButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: TERMS_THEME.background,
    alignItems: "center",
    justifyContent: "center",
  },

  expandButtonActive: {
    backgroundColor: TERMS_THEME.primary,
  },

  expandIcon: {
    color: TERMS_THEME.primary,
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
    borderTopColor: TERMS_THEME.border,
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
    backgroundColor: TERMS_THEME.primary,
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
    backgroundColor: TERMS_THEME.primaryLight,
    flexDirection: "row",
    alignItems: "center",
  },

  footerIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: TERMS_THEME.surface,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  footerIconText: {
    fontSize: 22,
    fontWeight: "800",
    color: TERMS_THEME.primary,
  },

  footerContent: {
    flex: 1,
  },

  footerTitle: {
    color: TERMS_THEME.heading,
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 4,
  },

  footerDescription: {
    color: TERMS_THEME.text,
    fontSize: 12,
    lineHeight: 18,
  },

  // Branding
  footerBrand: {
    color: TERMS_THEME.heading,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 3,
    marginTop: 28,
  },

  footerCaption: {
    color: TERMS_THEME.muted,
    textAlign: "center",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 6,
  },
});