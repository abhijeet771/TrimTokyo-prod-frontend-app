import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 4,
  },

  headingIcon: {
    width: 58,
    height: 58,
    borderRadius: 15,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  headingText: {
    flex: 1,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.1,
    color: "#6558D3",
    marginBottom: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#171D3A",
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 19,
    color: "#7180A5",
    marginTop: 4,
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E8ECF5",
    shadowColor: "#25345D",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 3,
  },

  formTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#202744",
    marginBottom: 20,
  },

  fieldsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },

  field: {
    width: "48%",
    flexGrow: 1,
    flexBasis: "46%",
    gap: 8,
  },

  fullWidthField: {
    width: "100%",
    flexBasis: "100%",
  },

  fieldLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#53648E",
  },

  input: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: "#DCE3F0",
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingVertical: 11,
    fontSize: 13,
    color: "#202744",
    backgroundColor: "#FAFBFD",
  },

  multilineInput: {
    minHeight: 90,
    textAlignVertical: "top",
    paddingTop: 12,
  },

  businessTypeOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },

  businessTypeOption: {
    paddingHorizontal: 10,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: "#DCE3F0",
    borderRadius: 9,
    backgroundColor: "#FAFBFD",
  },

  businessTypeOptionSelected: {
    backgroundColor: "#EFEDFF",
    borderColor: "#6558D3",
  },

  businessTypeText: {
    fontSize: 12,
    color: "#53648E",
    fontWeight: "600",
  },

  businessTypeTextSelected: {
    color: "#6558D3",
    fontWeight: "800",
  },

  deliveryOption: {
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 4,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: "#B7C0D5",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxSelected: {
    backgroundColor: "#6558D3",
    borderColor: "#6558D3",
  },

  deliveryText: {
    fontSize: 13,
    color: "#202744",
    fontWeight: "500",
  },

  locationButton: {
    minHeight: 48,
    marginTop: 22,
    backgroundColor: "#28A8F5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    paddingHorizontal: 12,
  },

  locationButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  locationHint: {
    fontSize: 11,
    color: "#8490AA",
    lineHeight: 16,
    textAlign: "center",
    marginTop: 8,
  },

  submitButton: {
    minHeight: 49,
    marginTop: 12,
    backgroundColor: "#16B957",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    paddingHorizontal: 12,
  },

  submitButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    flexShrink: 1,
  },

  buttonPressed: {
    opacity: 0.82,
  },

  buttonDisabled: {
    opacity: 0.65,
  },
});