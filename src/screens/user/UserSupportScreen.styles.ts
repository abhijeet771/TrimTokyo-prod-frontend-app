
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FE",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 17,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E9EEF7",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#F0F5FD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  headerText: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#172033",
  },

  headerSubtitle: {
    fontSize: 12,
    color: "#778196",
    marginTop: 4,
  },

  headerIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  introCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAF3FF",
    borderRadius: 18,
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 16,
    padding: 16,
  },

  introIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  introText: {
    flex: 1,
  },

  introTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#172033",
  },

  introDescription: {
    fontSize: 12,
    color: "#62718A",
    lineHeight: 18,
    marginTop: 5,
  },

  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 18,
    padding: 5,
    borderRadius: 15,
    backgroundColor: "#E9EEF7",
    gap: 5,
    marginBottom: 5,
  },

  tab: {
    flex: 1,
    minHeight: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 11,
    paddingHorizontal: 5,
  },

  activeTab: {
    backgroundColor: "#2878E5",
  },

  tabText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#68758A",
  },

  activeTabText: {
    color: "#FFFFFF",
  },

  body: {
    flex: 1,
  },

  bodyContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 35,
  },

  sectionHeading: {
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#172033",
  },

  sectionSubtitle: {
    fontSize: 12,
    color: "#778196",
    lineHeight: 18,
    marginTop: 5,
  },

  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8EDF6",
    padding: 14,
    marginTop: 22,
  },

  contactIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  contactText: {
    flex: 1,
  },

  contactTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#202A3D",
  },

  contactDescription: {
    fontSize: 11,
    color: "#7C879B",
    lineHeight: 17,
    marginTop: 4,
  },
});

export default styles;
