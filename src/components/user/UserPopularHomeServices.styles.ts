
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 16,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 13,
  },

  sectionTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: "800",
    color: "#152A46",
  },

  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
    paddingLeft: 8,
  },

  seeAllText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1769F5",
  },

  servicesContent: {
    paddingHorizontal: 16,
    paddingBottom: 5,
    gap: 10,
  },

  serviceCard: {
    width: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 6,
    borderWidth: 1,
    borderColor: "#EAF0F7",
    overflow: "hidden",

    shadowColor: "#173451",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  imagePressable: {
    width: "100%",
  },

  serviceImage: {
    width: "100%",
    height: 125,
    borderRadius: 11,
    backgroundColor: "#E5EDF7",
  },

  serviceInfo: {
    paddingHorizontal: 5,
    paddingTop: 8,
    paddingBottom: 5,
  },

  serviceName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#172A43",
    marginBottom: 6,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  servicePrice: {
    fontSize: 15,
    fontWeight: "800",
    color: "#14243D",
  },

  addButton: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "#1976F8",
    alignItems: "center",
    justifyContent: "center",
  },

  addedButton: {
    backgroundColor: "#159D68",
  },

  durationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 5,
  },

  durationText: {
    fontSize: 11,
    color: "#8090A8",
  },
});
