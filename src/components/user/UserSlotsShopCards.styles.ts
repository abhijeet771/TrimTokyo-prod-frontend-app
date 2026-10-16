import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F9FF",
  },

  header: {
    backgroundColor: "#DDF4FF",
    zIndex: 1,
  },

  pageHeading: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#687386",
    marginTop: 5,
  },

  filtersContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 9,
  },

  filterButton: {
    height: 44,
    paddingHorizontal: 17,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DCE5EE",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  filterButtonActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  filterText: {
    color: "#374151",
    fontSize: 13,
    fontWeight: "600",
  },

  filterTextActive: {
    color: "#FFFFFF",
  },

  shopList: {
    flex: 1,
    minHeight: 0,
  },

  shopListContent: {
    paddingHorizontal: 14,
    paddingTop: 2,
    paddingBottom: 20,
    gap: 12,
  },

  shopCard: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EDF1F5",
    gap: 12,
    alignItems: "flex-start",
  },

  shopImage: {
    width: 112,
    height: 150,
    borderRadius: 15,
    backgroundColor: "#E5E7EB",
  },

  shopDetails: {
    flex: 1,
    minWidth: 0,
  },

  shopName: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 8,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 7,
  },

  detailText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 17,
    color: "#697586",
  },

  addSlotButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    backgroundColor: "#1769F5",
    borderRadius: 13,
    paddingHorizontal: 14,
    paddingVertical: 11,
    marginTop: 5,
    minHeight: 42,
  },

  addSlotText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 35,
    paddingHorizontal: 20,
  },

  emptyTitle: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  emptySubtitle: {
    marginTop: 5,
    fontSize: 13,
    color: "#7B8798",
    textAlign: "center",
  },

  bottomNavigation: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E7EDF3",
  },
});