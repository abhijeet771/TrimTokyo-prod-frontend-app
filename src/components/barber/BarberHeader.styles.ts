import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Header
  container: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EDF2FA",
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoMark: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF3FF",
  },

  brandName: {
    fontSize: 21,
    fontWeight: "800",
    color: "#101828",
    letterSpacing: -0.6,
  },

  brandBlue: {
    color: "#1769FF",
  },

  brandSubtitle: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 4,
    color: "#71839F",
    marginTop: 2,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F8FF",
  },

  notificationDot: {
    position: "absolute",
    top: 8,
    right: 9,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#FF4D4F",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },

  avatarButton: {
    position: "relative",
    padding: 2,
  },

  avatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#EAF3FF",
    borderWidth: 2,
    borderColor: "#D5E5FF",
    alignItems: "center",
    justifyContent: "center",
  },

  onlineDot: {
    position: "absolute",
    width: 12,
    height: 12,
    right: 0,
    bottom: 1,
    borderRadius: 6,
    backgroundColor: "#16B978",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  // Modal overlay
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 30, 55, 0.42)",
  },

  // Profile dialog
  profileDialog: {
    width: "100%",
    maxWidth: 390,
    maxHeight: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    overflow: "hidden",
    elevation: 15,
    shadowColor: "#102A56",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 22,
  },

  closeButton: {
    position: "absolute",
    zIndex: 2,
    top: 14,
    right: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F7FB",
  },

  dialogContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  largeAvatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF3FF",
    borderWidth: 3,
    borderColor: "#D5E5FF",
  },

  profileName: {
    marginTop: 13,
    fontSize: 21,
    fontWeight: "800",
    color: "#101828",
    textAlign: "center",
  },

  profileRole: {
    marginTop: 4,
    fontSize: 14,
    color: "#71839F",
    textAlign: "center",
  },

  profileDivider: {
    height: 1,
    backgroundColor: "#E9EEF6",
    marginVertical: 17,
  },

  menuItem: {
    minHeight: 57,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 15,
    backgroundColor: "#F6F8FC",
    gap: 11,
  },

  menuIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF0FA",
  },

  menuLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#15233F",
  },

  logoutButton: {
    minHeight: 55,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    borderRadius: 15,
    backgroundColor: "#FFF1F1",
    gap: 11,
  },

  logoutText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#E53935",
  },

  // Notifications dialog
  notificationDialog: {
    width: "100%",
    maxWidth: 390,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    elevation: 15,
    shadowColor: "#102A56",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 22,
  },

  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  notificationTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#101828",
  },

  emptyNotification: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 10,
  },

  emptyNotificationIcon: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#15233F",
    textAlign: "center",
  },

  emptyDescription: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 20,
    color: "#71839F",
    textAlign: "center",
  },
});