import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F9FF",
  },

  header: {
    backgroundColor: "#DDF4FF",
  },

  scrollView: {
    flex: 1,
    minHeight: 0,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    gap: 18,
  },

  /* Profile card */

  profileCard: {
    minHeight: 108,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 15,
    gap: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5EDF6",
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8EEFF",
  },

  profileDetails: {
    flex: 1,
    minWidth: 0,
  },

  profileName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#101828",
  },

  profilePhone: {
    marginTop: 4,
    fontSize: 12,
    color: "#647794",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 4,
  },

  profileLocation: {
    fontSize: 12,
    color: "#647794",
  },

  editProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: "#DDF0FF",
  },

  editProfileText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1769F5",
  },

  /* Booking cards */

  bookingRow: {
    flexDirection: "row",
    gap: 12,
  },

  bookingCard: {
    flex: 1,
    minWidth: 0,
    minHeight: 195,
    padding: 13,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#E5EDF6",
    justifyContent: "space-between",
  },

  slotCard: {
    backgroundColor: "#F8FCFF",
  },

  eventCard: {
    backgroundColor: "#FFFAF9",
  },

  bookingCardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
  },

  bookingIcon: {
    width: 54,
    height: 54,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },

  slotIcon: {
    backgroundColor: "#E2F2FF",
  },

  eventIcon: {
    backgroundColor: "#FFE8EE",
  },

  bookingTitle: {
    marginTop: 16,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "800",
    color: "#101828",
  },

  bookingSubtitle: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    color: "#647794",
  },

  /* Settings and support */

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingHorizontal: 17,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "#EDF2F8",
  },

  menuItem: {
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    paddingVertical: 13,
  },

  menuIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  settingsIcon: {
    backgroundColor: "#EEE8FF",
  },

  supportIcon: {
    backgroundColor: "#DDF8EB",
  },

  menuTextContainer: {
    flex: 1,
    minWidth: 0,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#101828",
  },

  menuSubtitle: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 18,
    color: "#647794",
  },

  separator: {
    height: 1,
    backgroundColor: "#E7EDF5",
  },

  /* Logout */

  logoutCard: {
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: "#FFF0F1",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFD9DE",
  },

  logoutIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFDDE1",
  },

  logoutTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#D92121",
  },

  logoutSubtitle: {
    marginTop: 5,
    fontSize: 12,
    color: "#76565A",
  },

  bottomNavigation: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E7EDF3",
  },
});