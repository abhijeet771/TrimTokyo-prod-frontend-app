import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F9FF",
  },

  topBar: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    backgroundColor: "#DDF4FF",
  },

  backButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },

  screenTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#101828",
  },

  topBarSpacer: {
    width: 42,
  },

  keyboardArea: {
    flex: 1,
    minHeight: 0,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 20,
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

  description: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 20,
    color: "#647794",
  },

  avatarSection: {
    alignItems: "center",
    marginBottom: 22,
  },

  avatarPressable: {
    width: 112,
    height: 112,
    position: "relative",
  },

  avatarPlaceholder: {
    width: 112,
    height: 112,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8EEFF",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  avatarImage: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 1,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "#1769F5",
    borderWidth: 3,
    borderColor: "#F2F9FF",
  },

  avatarName: {
    marginTop: 12,
    fontSize: 19,
    fontWeight: "800",
    color: "#101828",
  },

  avatarHint: {
    marginTop: 5,
    fontSize: 12,
    color: "#647794",
    textAlign: "center",
  },

  formCard: {
    padding: 17,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E5EDF6",
  },

  fieldContainer: {
    marginBottom: 17,
  },

  fieldLabel: {
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "700",
    color: "#344054",
  },

  input: {
    minHeight: 50,
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
    minHeight: 86,
    paddingTop: 13,
  },

  readOnlyInput: {
    backgroundColor: "#F1F5F9",
    color: "#64748B",
  },

  dropdown: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#DCE6F0",
    borderRadius: 13,
    backgroundColor: "#FBFDFF",
  },

  dropdownText: {
    fontSize: 14,
    color: "#101828",
  },

  placeholderText: {
    color: "#94A3B8",
  },

  dropdownOptions: {
    marginTop: 7,
    paddingVertical: 4,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#DCE6F0",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },

  dropdownOption: {
    minHeight: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },

  dropdownOptionText: {
    fontSize: 14,
    color: "#344054",
  },

  primaryButton: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: "#1769F5",
  },

  saveButton: {
    backgroundColor: "#07865D",
  },

  primaryButtonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  cancelButton: {
    minHeight: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  cancelButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#647794",
  },

  bottomNavigation: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E7EDF3",
  },
});