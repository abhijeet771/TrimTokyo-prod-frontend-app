
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },

  searchBox: {
    flex: 1,
    minWidth: 0,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E8F0FA",
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    fontSize: 13,
    color: "#18334F",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  filterButton: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8F0FA",
    alignItems: "center",
    justifyContent: "center",
  },

  banner: {
    minHeight: 190,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#F9DCE8",
    flexDirection: "row",
    marginBottom: 24,
  },

  bannerContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: "center",
    zIndex: 1,
  },

  bannerEyebrow: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#24436C",
    marginBottom: 9,
  },

  bannerTitle: {
    fontSize: 23,
    lineHeight: 29,
    fontWeight: "800",
    color: "#14243D",
    maxWidth: 240,
  },

  bannerSubtitle: {
    fontSize: 13,
    lineHeight: 19,
    color: "#354F73",
    marginTop: 9,
    maxWidth: 220,
  },

  bookButton: {
    alignSelf: "flex-start",
    minHeight: 42,
    paddingHorizontal: 15,
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: "#1976F8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  bookButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  bannerImagePlaceholder: {
    width: "27%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.22)",
  },

  categoriesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#152A46",
  },

  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
  },

  seeAllText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1769F5",
  },

  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    rowGap: 20,
  },

  categoryItem: {
    width: "20%",
    alignItems: "center",
    paddingHorizontal: 2,
  },

  categoryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  categoryLabel: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: "600",
    color: "#172A43",
    textAlign: "center",
  },
});
