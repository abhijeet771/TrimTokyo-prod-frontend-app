import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#111827",
  },

  seeAllText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1769F5",
  },

  eventsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },

  eventCard: {
    width: "48.5%",
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#EAF0F6",
    overflow: "hidden",
  },

  eventImagePressable: {
    width: "100%",
  },

  eventImage: {
    width: "100%",
    height: 118,
    backgroundColor: "#E5E7EB",
  },

  cardContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 12,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
  },

  eventTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
    color: "#111827",
  },

  arrowButton: {
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: "#EAF4FF",
    alignItems: "center",
    justifyContent: "center",
  },

  eventDescription: {
    minHeight: 48,
    fontSize: 11,
    lineHeight: 16,
    color: "#687386",
    marginTop: 4,
    marginBottom: 10,
  },

  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
  },

  serviceItem: {
    flex: 1,
    minWidth: 0,
    alignItems: "center",
  },

  serviceIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  serviceLabel: {
    width: "100%",
    textAlign: "center",
    fontSize: 9,
    lineHeight: 12,
    fontWeight: "600",
    color: "#344054",
  },
});