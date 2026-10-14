
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexShrink: 1,
  },

  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionHeadingText: {
    flexShrink: 1,
    gap: 3,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },

  sectionSubtitle: {
    fontSize: 12,
    color: "#64748B",
  },

  periodButton: {
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  periodButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5145E5",
  },

  periodOptions: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    padding: 5,
    backgroundColor: "#FFFFFF",
  },

  periodOption: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  selectedPeriodOption: {
    backgroundColor: "#EEF2FF",
  },

  periodOptionText: {
    fontSize: 13,
    color: "#475569",
  },

  selectedPeriodOptionText: {
    color: "#5145E5",
    fontWeight: "700",
  },

  kpiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  kpiCard: {
    width: "48%",
    flexGrow: 1,
    flexBasis: "45%",
    minHeight: 150,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    gap: 8,
  },

  kpiTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  kpiIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  kpiLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },

  kpiAmount: {
    fontSize: 22,
    fontWeight: "800",
  },

  kpiDescription: {
    fontSize: 10,
    lineHeight: 15,
    color: "#64748B",
  },

  chartCard: {
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    gap: 18,
  },

  chartHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  chartTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A",
  },

  chartPeriod: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B",
  },

  chartScrollContent: {
    flexGrow: 1,
  },

  chartContainer: {
    alignItems: "center",
    gap: 22,
  },

  pieWrapper: {
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },

  chartCenter: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  chartCenterAmount: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
  },

  chartCenterLabel: {
    fontSize: 11,
    color: "#64748B",
  },

  legendContainer: {
    width: "100%",
    gap: 13,
  },

  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  legendTextContainer: {
    flex: 1,
  },

  legendLabel: {
    fontSize: 12,
    color: "#475569",
  },

  legendAmountContainer: {
    minWidth: 100,
    alignItems: "flex-end",
    gap: 2,
  },

  legendAmount: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0F172A",
  },

  legendPercentage: {
    fontSize: 10,
    color: "#64748B",
  },

  chartEmpty: {
    minHeight: 180,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 8,
  },

  chartEmptyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
  },

  chartEmptyDescription: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    color: "#64748B",
  },
});
