import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 8,
  },

  headingContainer: {
    flex: 1,
  },

  title: {
    fontSize: 19,
    fontWeight: "700",
    color: "#172B4D",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: "#8290A5",
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingVertical: 8,
    paddingLeft: 6,
  },

  viewAllText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5145FF",
  },

  list: {
    gap: 12,
  },

  orderCard: {
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7ECF5",
    borderRadius: 17,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 43,
    height: 43,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#3F4663",
  },

  customerInfo: {
    flex: 1,
    minWidth: 0,
  },

  customerName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172B4D",
  },

  orderNumber: {
    marginTop: 4,
    fontSize: 11,
    color: "#8290A5",
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  statusText: {
    fontSize: 9,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEF2F8",
    marginVertical: 13,
  },

  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  serviceIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#F0EEFF",
    alignItems: "center",
    justifyContent: "center",
  },

  serviceInfo: {
    flex: 1,
    minWidth: 0,
  },

  serviceName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
  },

  quantityText: {
    marginTop: 4,
    fontSize: 11,
    color: "#8290A5",
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#172B4D",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEF2F8",
  },

  dateTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  footerText: {
    fontSize: 10,
    color: "#71839F",
  },

  emptyCard: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7ECF5",
    borderRadius: 17,
  },

  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: "#F0EEFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#172B4D",
    textAlign: "center",
  },

  emptyDescription: {
    marginTop: 7,
    fontSize: 12,
    lineHeight: 19,
    color: "#8290A5",
    textAlign: "center",
  },
});