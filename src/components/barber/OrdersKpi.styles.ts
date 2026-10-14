import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
  },

  card: {
    width: "48%",
    flexGrow: 1,
    flexBasis: "45%",
    minHeight: 100,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7ECF5",
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    flex: 1,
    minWidth: 0,
    justifyContent: "center",
  },

  label: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
  },

  value: {
    marginTop: 5,
    fontSize: 27,
    lineHeight: 33,
    fontWeight: "700",
    color: "#111827",
  },
});