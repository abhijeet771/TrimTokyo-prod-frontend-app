import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F9FF",
  },

  header: {
    backgroundColor: "#DDF4FF",
  },

  sectionTabs: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 12,
    padding: 3,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0EAF3",
  },

  sectionTab: {
    flex: 1,
    minHeight: 46,
    paddingHorizontal: 8,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  sectionTabActive: {
    backgroundColor: "#DCEEFF",
  },

  sectionTabText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#344054",
  },

  sectionTabTextActive: {
    color: "#1769F5",
    fontWeight: "800",
  },

  heading: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#687386",
    marginTop: 5,
  },

  categoryScroll: {
    flexGrow: 0,
    flexShrink: 0,
  },

  categoryList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 9,
  },

  categoryButton: {
    minHeight: 42,
    paddingHorizontal: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#D9E2ED",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryButtonActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  categoryText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#344054",
  },

  categoryTextActive: {
    color: "#FFFFFF",
  },

  banner: {
    height: 205,
    marginHorizontal: 16,
    marginBottom: 12,
    overflow: "hidden",
    borderRadius: 23,
    backgroundColor: "#FBE6D1",
  },

  bannerImage: {
    borderRadius: 23,
  },

  bannerOverlay: {
    flex: 1,
    backgroundColor: "rgba(255, 244, 230, 0.28)",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
  },

  bannerContent: {
    maxWidth: "76%",
  },

  bannerTitle: {
    fontSize: 19,
    lineHeight: 25,
    fontWeight: "800",
    color: "#111827",
  },

  bannerDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: "#344054",
    marginTop: 7,
  },

  bannerButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#1769F5",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginTop: 13,
  },

  bannerButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});