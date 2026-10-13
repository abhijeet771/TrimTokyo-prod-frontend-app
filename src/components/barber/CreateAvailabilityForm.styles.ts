import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 18,
    padding: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#EAF0FA",
    shadowColor: "#1C5DB5",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#101D46",
  },

  description: {
    fontSize: 13,
    lineHeight: 20,
    color: "#71839F",
    marginTop: 7,
    marginBottom: 22,
  },

  field: {
    marginBottom: 17,
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#526684",
    marginBottom: 9,
  },

  inputContainer: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "#DCE6F5",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },

  input: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 12,
    fontSize: 15,
    color: "#101D46",
  },

  errorText: {
    fontSize: 12,
    color: "#DC2626",
    marginTop: 6,
  },

  durationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  durationOption: {
    flex: 1,
    minWidth: 55,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 43,
    borderWidth: 1,
    borderColor: "#DCE6F5",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 5,
  },

  durationOptionActive: {
    backgroundColor: "#EAF3FF",
    borderColor: "#1769FF",
  },

  durationText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#71839F",
  },

  durationTextActive: {
    color: "#1769FF",
    fontWeight: "800",
  },

  generateButton: {
    minHeight: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 5,
    borderRadius: 14,
    backgroundColor: "#1769FF",
  },

  generateButtonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },

  generateButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  helperText: {
    marginTop: 12,
    fontSize: 11,
    lineHeight: 17,
    color: "#8293B2",
    textAlign: "center",
  },
});