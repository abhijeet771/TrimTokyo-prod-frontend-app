import { StyleSheet } from "react-native";

const COLORS = {
  background: "#F4F8FF",
};

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
  },
});