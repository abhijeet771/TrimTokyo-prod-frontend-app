import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  searchContainer: {
    flex: 1,
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingHorizontal: 13,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 13,
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 11,
    fontSize: 13,
    color: "#172B4D",
  },

  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  activeFilterButton: {
    backgroundColor: "#5145FF",
    borderColor: "#5145FF",
  },

  filterCountBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    minWidth: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: "#F97316",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  filterCountText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  quickFilterRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },

  quickFilter: {
    minHeight: 34,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  quickFilterText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#475569",
  },

  clearText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#5145FF",
    paddingHorizontal: 4,
    paddingVertical: 8,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(15, 23, 42, 0.38)",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },

  modalContent: {
    maxHeight: "88%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 22,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  modalTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#172B4D",
  },

  modalSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: "#71839F",
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172B4D",
    marginTop: 16,
    marginBottom: 10,
  },

  optionsContainer: {
    gap: 8,
  },

  optionButton: {
    minHeight: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: "#E5EAF2",
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
  },

  selectedOption: {
    backgroundColor: "#5145FF",
    borderColor: "#5145FF",
  },

  optionText: {
    flex: 1,
    fontSize: 13,
    color: "#475569",
  },

  selectedOptionText: {
    fontWeight: "600",
    color: "#FFFFFF",
  },

  dateHint: {
    fontSize: 11,
    lineHeight: 16,
    color: "#71839F",
    marginBottom: 10,
  },

  dateRow: {
    flexDirection: "row",
    gap: 12,
  },

  dateField: {
    flex: 1,
  },

  dateLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 7,
  },

  dateInput: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 11,
    paddingHorizontal: 10,
    fontSize: 12,
    color: "#172B4D",
    backgroundColor: "#FFFFFF",
  },

  modalFooter: {
    flexDirection: "row",
    gap: 12,
    paddingTop: 18,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEF2F8",
  },

  resetButton: {
    minHeight: 48,
    minWidth: 90,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  resetButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },

  applyButton: {
    flex: 1,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#5145FF",
  },

  applyButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});