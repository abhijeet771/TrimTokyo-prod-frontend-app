import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginBottom: 18,
  },

  headingIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
  },

  headingTextContainer: {
    flex: 1,
  },

  heading: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 19,
    color: "#64748B",
  },

  formCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5EAF3",
    borderRadius: 18,
    padding: 18,
  },

  fieldContainer: {
    marginBottom: 21,
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 9,
  },

  required: {
    color: "#DC2626",
  },

  optional: {
    color: "#94A3B8",
    fontWeight: "500",
  },

  input: {
    width: "100%",
    minHeight: 49,
    borderWidth: 1,
    borderColor: "#DCE3ED",
    borderRadius: 11,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 14,
    color: "#1E293B",
    backgroundColor: "#FFFFFF",
  },

  descriptionInput: {
    minHeight: 130,
    textAlignVertical: "top",
    paddingTop: 13,
  },

  helperText: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 7,
  },

  characterCount: {
    fontSize: 11,
    color: "#94A3B8",
    textAlign: "right",
    marginTop: 6,
  },

  selectInput: {
    minHeight: 49,
    borderWidth: 1,
    borderColor: "#DCE3ED",
    borderRadius: 11,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },

  selectText: {
    flex: 1,
    fontSize: 14,
    color: "#1E293B",
  },

  placeholderText: {
    flex: 1,
    fontSize: 14,
    color: "#94A3B8",
  },

  optionsContainer: {
    marginTop: 7,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },

  optionItem: {
    minHeight: 46,
    paddingHorizontal: 13,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  selectedOption: {
    backgroundColor: "#EFF6FF",
  },

  optionText: {
    fontSize: 13,
    color: "#475569",
  },

  selectedOptionText: {
    color: "#1D4ED8",
    fontWeight: "700",
  },

  priorityValue: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  priorityDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },

  lowPriorityDot: {
    backgroundColor: "#16A34A",
  },

  normalPriorityDot: {
    backgroundColor: "#2563EB",
  },

  highPriorityDot: {
    backgroundColor: "#D97706",
  },

  urgentPriorityDot: {
    backgroundColor: "#DC2626",
  },

  uploadBox: {
    minHeight: 180,
    borderWidth: 1,
    borderColor: "#BFCDE0",
    borderStyle: "dashed",
    borderRadius: 13,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFF",
  },

  uploadIcon: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  uploadTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    textAlign: "center",
    marginBottom: 6,
  },

  uploadDescription: {
    fontSize: 11,
    lineHeight: 17,
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 14,
  },

  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#BFDBFE",
    backgroundColor: "#FFFFFF",
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },

  uploadButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
  },

  previewContainer: {
    width: "100%",
    position: "relative",
    alignItems: "center",
  },

  imagePreview: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#E2E8F0",
  },

  removeImageButton: {
    position: "absolute",
    top: 7,
    right: 7,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },

  notice: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#DBEAFE",
    borderRadius: 11,
    padding: 12,
    marginBottom: 20,
  },

  noticeText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 17,
    color: "#475569",
  },

  submitButton: {
    minHeight: 51,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#2563EB",
  },

  submitButtonDisabled: {
    opacity: 0.65,
  },

  submitButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});