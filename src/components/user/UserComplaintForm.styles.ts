import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9FF",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 28,
  },

  intro: {
    marginBottom: 18,
  },

  heading: {
    fontSize: 23,
    fontWeight: "800",
    color: "#101828",
  },

  subtitle: {
    marginTop: 7,
    fontSize: 13,
    lineHeight: 20,
    color: "#647794",
  },

  formCard: {
    padding: 17,
    backgroundColor: "#FFFFFF",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#E5EDF6",
  },

  fieldContainer: {
    marginBottom: 18,
  },

  label: {
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "700",
    color: "#344054",
  },

  input: {
    minHeight: 51,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#DCE6F0",
    borderRadius: 13,
    backgroundColor: "#FBFDFF",
    fontSize: 14,
    color: "#101828",
  },

  multilineInput: {
    minHeight: 115,
    paddingTop: 14,
    textAlignVertical: "top",
  },

  uploadBox: {
    minHeight: 155,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#A9CFF9",
    borderRadius: 16,
    backgroundColor: "#F5FAFF",
  },

  uploadIcon: {
    width: 55,
    height: 55,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    backgroundColor: "#DDF0FF",
  },

  uploadTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1769F5",
  },

  uploadSubtitle: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    color: "#647794",
  },

  imagePreviewContainer: {
    width: "100%",
    height: 180,
    position: "relative",
    borderRadius: 13,
    overflow: "hidden",
  },

  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 13,
  },

  removeImageButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },

  submitButton: {
    minHeight: 53,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    borderRadius: 15,
    backgroundColor: "#1769F5",
  },

  submitButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#FFFFFF",
  },
});
