import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(10, 16, 25, 0.58)",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },

  dialog: {
    maxHeight: "88%",
    minHeight: "65%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  handle: {
    width: 42,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#D9DEE5",
    alignSelf: "center",
    marginBottom: 15,
  },

  dialogHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  dialogTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F5F8",
  },

  scrollContent: {
    paddingBottom: 20,
  },

  shopInfo: {
    flexDirection: "row",
    gap: 13,
    marginBottom: 25,
  },

  shopImage: {
    width: 112,
    height: 120,
    borderRadius: 15,
    backgroundColor: "#E5E7EB",
  },

  shopDetails: {
    flex: 1,
    justifyContent: "center",
    gap: 7,
  },

  shopName: {
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 21,
    color: "#111827",
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  detailText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
    color: "#697586",
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 12,
  },

  dateList: {
    gap: 9,
    paddingBottom: 22,
  },

  dateCard: {
    width: 68,
    minHeight: 94,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#E4E9F0",
    backgroundColor: "#F7F9FC",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 4,
  },

  dateCardActive: {
    backgroundColor: "#1769F5",
    borderColor: "#1769F5",
  },

  dateDay: {
    fontSize: 12,
    fontWeight: "600",
    color: "#687386",
  },

  dateNumber: {
    fontSize: 21,
    fontWeight: "800",
    color: "#111827",
  },

  dateMonth: {
    fontSize: 12,
    color: "#687386",
  },

  dateTextActive: {
    color: "#FFFFFF",
  },

  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 9,
    marginBottom: 10,
  },

  timeButton: {
    width: "23.5%",
    minHeight: 43,
    paddingHorizontal: 2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E5EC",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  timeButtonActive: {
    backgroundColor: "#1769F5",
    borderColor: "#1769F5",
  },

  timeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#374151",
  },

  timeTextActive: {
    color: "#FFFFFF",
  },

  bookButton: {
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: "#1769F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 12,
  },

  bookButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
  },
});