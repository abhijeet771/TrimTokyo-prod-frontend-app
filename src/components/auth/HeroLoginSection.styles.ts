import { Platform, StyleSheet } from "react-native";
import { AUTH_THEME } from "../../constants/auth";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: AUTH_THEME.background,
    paddingTop: Platform.OS === "ios" ? 20 : 12,
    paddingHorizontal: 24,
    overflow: "hidden",
  },

  // Brand
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  brand: {
    fontSize: 32,
    fontWeight: "800",
    color: AUTH_THEME.text,
    letterSpacing: -1,
  },

  brandAccent: {
    color: AUTH_THEME.primary,
  },

  scissors: {
    fontSize: 27,
    color: AUTH_THEME.primary,
  },

  brandTagline: {
    fontSize: 9,
    letterSpacing: 3,
    color: AUTH_THEME.secondaryText,
    marginTop: 5,
  },

  // Hero layout
  heroContent: {
    minHeight: 310,
    marginTop: 28,
    justifyContent: "center",
    position: "relative",
  },

  copy: {
    width: "75%",
    zIndex: 2,
  },

  accentLine: {
    width: 48,
    height: 3,
    backgroundColor: AUTH_THEME.primary,
    borderRadius: 2,
    marginBottom: 22,
  },

  title: {
    fontSize: 31,
    lineHeight: 39,
    fontWeight: "500",
    color: AUTH_THEME.text,
  },

  highlight: {
    color: AUTH_THEME.primary,
    fontWeight: "800",
  },

  description: {
    marginTop: 16,
    maxWidth: 250,
    fontSize: 15,
    lineHeight: 23,
    color: AUTH_THEME.secondaryText,
  },

  // Hero image
  heroImage: {
    position: "absolute",
    right: -24,
    bottom: 0,
    width: "57%",
    height: "100%",
    opacity: 0.96,
  },
});