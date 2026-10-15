
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 4,
  },

  categoriesContent: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    gap: 8,
  },

  categoryItem: {
    width: 47,
    alignItems: "center",
  },

  categoryIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EDF4FB",
  },

  selectedCategoryIcon: {
    backgroundColor: "#D8EDFF",
    borderColor: "#8CCBFF",
  },

  categoryImage: {
    width: 29,
    height: 29,
  },

  categoryLabel: {
    marginTop: 6,
    fontSize: 9,
    fontWeight: "500",
    color: "#26384D",
    textAlign: "center",
  },

  selectedCategoryLabel: {
    color: "#1769F5",
    fontWeight: "700",
  },

  banner: {
    minHeight: 130,
    marginHorizontal: 16,
    marginTop: 1,
    marginBottom: 10,
    borderRadius: 14,
    backgroundColor: "#111820",
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
  },

  bannerContent: {
    paddingVertical: 15,
    paddingHorizontal: 13,
    paddingRight: 95,
    zIndex: 1,
  },

  bannerEyebrow: {
    fontSize: 9,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#B7C2CF",
    marginBottom: 5,
  },

  bannerTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  bannerDiscount: {
    color: "#54C9FF",
  },

  bannerSubtitle: {
    fontSize: 10,
    color: "#D5DCE5",
    marginTop: 3,
    marginBottom: 10,
  },

  bookButton: {
    alignSelf: "flex-start",
    minHeight: 29,
    paddingHorizontal: 13,
    borderRadius: 18,
    backgroundColor: "#58CCFF",
    alignItems: "center",
    justifyContent: "center",
  },

  bookButtonText: {
    color: "#123D6D",
    fontSize: 10,
    fontWeight: "700",
  },

  bannerDecoration: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    width: 95,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202B36",
    opacity: 0.85,
  },

  bannerDecorationText: {
    fontSize: 66,
    color: "#71869B",
  },

  bannerDots: {
    position: "absolute",
    right: 12,
    bottom: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  activeDot: {
    width: 14,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#55CCFF",
  },

  inactiveDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#8995A2",
  },
});
