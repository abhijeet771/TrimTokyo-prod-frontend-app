import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },

  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  headerTextContainer: {
    flex: 1,
    paddingRight: 12,
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#20243A",
    letterSpacing: -0.5,
  },

  pageSubtitle: {
    fontSize: 12,
    color: "#858A9B",
    marginTop: 6,
    lineHeight: 18,
  },

  headerIcon: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: "#ECEEF5",
    marginBottom: 27,
  },

  formTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#252940",
    marginBottom: 19,
  },

  rowFields: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 15,
  },

  titleField: {
    flex: 1.5,
  },

  priceField: {
    flex: 1,
  },

  field: {
    marginBottom: 15,
  },

  fieldLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#68718A",
    marginBottom: 8,
  },

  input: {
    minHeight: 47,
    borderWidth: 1,
    borderColor: "#E2E6F0",
    borderRadius: 11,
    backgroundColor: "#FAFBFD",
    paddingHorizontal: 13,
    paddingVertical: 11,
    fontSize: 13,
    color: "#252940",
  },

  descriptionInput: {
    minHeight: 95,
    paddingTop: 12,
    textAlignVertical: "top",
  },

  genderOptions: {
    flexDirection: "row",
    gap: 9,
  },

  genderOption: {
    flex: 1,
    minHeight: 43,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E2E6F0",
    backgroundColor: "#FAFBFD",
    borderRadius: 11,
    paddingHorizontal: 8,
  },

  genderOptionSelected: {
    backgroundColor: "#EFEDFF",
    borderColor: "#6558D3",
  },

  genderOptionText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#68718A",
  },

  genderOptionTextSelected: {
    color: "#6558D3",
    fontWeight: "700",
  },

  submitButton: {
    minHeight: 49,
    backgroundColor: "#6558D3",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 4,
  },

  submitButtonPressed: {
    opacity: 0.8,
  },

  submitButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  recentTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#252940",
  },

  recentSubtitle: {
    fontSize: 11,
    color: "#858A9B",
    marginTop: 5,
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 8,
    paddingLeft: 8,
  },

  viewAllText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6558D3",
  },

  recentServicesList: {
    gap: 12,
    paddingBottom: 8,
    paddingRight: 4,
  },

  serviceCard: {
    width: 190,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ECEEF5",
    overflow: "hidden",
  },

  serviceImage: {
    width: "100%",
    height: 125,
    backgroundColor: "#E9E9ED",
  },

  serviceCardContent: {
    padding: 12,
  },

  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
    marginBottom: 10,
  },

  statusText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  serviceTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#252940",
    marginBottom: 7,
  },

  servicePrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6558D3",
    marginBottom: 9,
  },

  serviceMeta: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 5,
  },

  serviceMetaText: {
    fontSize: 10,
    color: "#858A9B",
  },

  metaSeparator: {
    fontSize: 12,
    color: "#B5B9C6",
  },
});
