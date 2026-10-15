
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 16,
  },

  section: {
    marginBottom: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  sectionTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "800",
    color: "#152A46",
  },

  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingVertical: 4,
    paddingLeft: 8,
  },

  seeAllText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#1769F5",
  },

  barbersContent: {
    paddingHorizontal: 16,
    paddingBottom: 3,
    gap: 9,
  },

  barberCard: {
    width: 105,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EDF2F8",

    shadowColor: "#173451",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  barberImage: {
    width: "100%",
    height: 88,
    backgroundColor: "#E4EEF8",
  },

  barberInfo: {
    paddingHorizontal: 7,
    paddingTop: 6,
    paddingBottom: 8,
  },

  barberName: {
    fontSize: 10,
    fontWeight: "700",
    color: "#182C45",
    marginBottom: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  ratingText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#26384D",
  },

  bookingText: {
    fontSize: 9,
    color: "#8090A4",
    marginTop: 4,
  },

  shopsContent: {
    paddingHorizontal: 16,
    paddingBottom: 3,
    gap: 12,
  },

  shopCard: {
    width: 320,
    minHeight: 150,
    flexDirection: "row",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EAF0F7",

    shadowColor: "#173451",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  shopImageContainer: {
    width: 116,
    position: "relative",
    backgroundColor: "#E4EEF8",
  },

  shopImage: {
    width: "100%",
    height: "100%",
    minHeight: 150,
  },

  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 7,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(20, 35, 50, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },

  shopInfo: {
    flex: 1,
    minWidth: 0,
    padding: 9,
    justifyContent: "center",
    gap: 7,
  },

  shopNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  shopName: {
    flexShrink: 1,
    fontSize: 12,
    fontWeight: "800",
    color: "#152A46",
  },

  shopMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 3,
  },

  shopRating: {
    fontSize: 10,
    fontWeight: "700",
    color: "#25384D",
  },

  shopMuted: {
    flexShrink: 1,
    fontSize: 9,
    color: "#7A8BA0",
  },

  shopSeparator: {
    fontSize: 10,
    color: "#A5B0BE",
    marginHorizontal: 1,
  },

  priceLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#566A80",
  },

  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
  },

  openDot: {
    backgroundColor: "#18A968",
  },

  closedDot: {
    backgroundColor: "#E05252",
  },

  openStatus: {
    fontSize: 9,
    fontWeight: "600",
  },

  openText: {
    color: "#18A968",
  },

  closedText: {
    color: "#E05252",
  },

  serviceTags: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flexWrap: "wrap",
  },

  serviceTag: {
    maxWidth: 75,
    backgroundColor: "#E6F4FF",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  serviceTagText: {
    fontSize: 8,
    color: "#365B7E",
    fontWeight: "500",
  },

  viewShopButton: {
    minHeight: 27,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 9,
    backgroundColor: "#DDF1FF",
    paddingHorizontal: 8,
  },

  viewShopText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1769F5",
  },
});
