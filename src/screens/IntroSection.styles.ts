import { StyleSheet } from "react-native";

const COLORS = {
  background: "#F4F8FF",
  navy: "#101B45",
  blue: "#1677FF",
  brightBlue: "#45A5FF",
  paleBlue: "#E1EEFF",
  muted: "#8291AC",
  white: "#FFFFFF",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 400,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    overflow: "hidden",
  },

  // Decorative background shapes
  topGlow: {
    position: "absolute",
    top: -170,
    right: -100,
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: "#DCEAFF",
    opacity: 0.85,
  },

  bottomGlow: {
    position: "absolute",
    bottom: -210,
    left: -130,
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: "#E4F0FF",
    opacity: 0.9,
  },

  blueOrb: {
    position: "absolute",
    top: "19%",
    left: -75,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: COLORS.paleBlue,
    opacity: 0.65,
  },

  // Main content
  content: {
    width: "100%",
    maxWidth: 420,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  logoContainer: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
    borderRadius: 38,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: "#E1EAFA",
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },

  logo: {
    width: "82%",
    height: "82%",
  },

  brand: {
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: -1.2,
    color: COLORS.navy,
    textAlign: "center",
  },

  // Blue accent separator
  accentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginTop: 22,
    marginBottom: 20,
  },

  accentLine: {
    width: 34,
    height: 3,
    borderRadius: 2,
    backgroundColor: COLORS.blue,
  },

  accentDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.brightBlue,
  },

  tagline: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 3,
    lineHeight: 20,
    color: COLORS.blue,
    textAlign: "center",
  },

  // Animated status label
  statusIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: "#E1EAFA",
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: COLORS.blue,
    marginRight: 9,
  },

  statusText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.7,
    color: COLORS.navy,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 38,
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 3,
    color: COLORS.muted,
    textAlign: "center",
  },
});