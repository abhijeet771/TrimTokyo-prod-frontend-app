import { Platform, StyleSheet } from "react-native";
import { AUTH_THEME } from "../../constants/auth";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: Platform.OS === "ios" ? 34 : 24,
    shadowColor: "#1C5DB5",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 8,
  },

  // Heading
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: AUTH_THEME.text,
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: AUTH_THEME.secondaryText,
  },

  // Phone input
  phoneInputContainer: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: AUTH_THEME.border,
    borderRadius: 18,
    marginTop: 24,
    overflow: "hidden",
    backgroundColor: "#F8FAFF",
  },

  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 12,
    alignSelf: "stretch",
    borderRightWidth: 1,
    borderRightColor: AUTH_THEME.border,
  },

  flag: {
    fontSize: 20,
  },

  countryCode: {
    fontSize: 15,
    fontWeight: "600",
    color: AUTH_THEME.text,
  },

  phoneInput: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 15,
    fontSize: 14,
    color: AUTH_THEME.text,
  },

  // Role selector
  roleHeading: {
    marginTop: 22,
    marginBottom: 11,
    fontSize: 14,
    fontWeight: "700",
    color: AUTH_THEME.text,
  },

  roleOptions: {
    flexDirection: "row",
    gap: 12,
  },

  roleOption: {
    flex: 1,
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    paddingHorizontal: 8,
    borderWidth: 1.5,
    borderColor: AUTH_THEME.border,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },

  roleOptionActive: {
    borderColor: AUTH_THEME.primary,
    backgroundColor: "#EAF3FF",
  },

  roleText: {
    fontSize: 14,
    fontWeight: "600",
    color: AUTH_THEME.secondaryText,
  },

  roleTextActive: {
    color: AUTH_THEME.primary,
    fontWeight: "700",
  },

  // Continue button
  continueButton: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: AUTH_THEME.primary,
  },

  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },

  continueButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  arrow: {
    fontSize: 24,
    color: "#FFFFFF",
  },

  // Divider
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 22,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: AUTH_THEME.border,
  },

  orText: {
    fontSize: 13,
    color: AUTH_THEME.secondaryText,
  },

  // Alternative button
  alternativeButton: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    borderWidth: 1.5,
    borderColor: AUTH_THEME.border,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  },

  alternativeButtonPressed: {
    backgroundColor: "#F1F6FF",
  },

  phoneIcon: {
    fontSize: 24,
    fontWeight: "600",
    color: AUTH_THEME.text,
  },

  alternativeButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: AUTH_THEME.text,
  },

  // Legal links
  legalContainer: {
    alignItems: "center",
    marginTop: 22,
  },

  legalText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color: AUTH_THEME.secondaryText,
  },

  legalLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 2,
  },

  legalLink: {
    fontSize: 12,
    lineHeight: 20,
    color: AUTH_THEME.primary,
    fontWeight: "600",
  },
});