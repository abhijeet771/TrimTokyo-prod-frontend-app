import React, { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";

import { EXPENSE_OVERVIEW_CONTENT,
  EXPENSE_OVERVIEW_PERIODS,
  INITIAL_EXPENSE_OVERVIEW_KPIS,
  INITIAL_EXPENSE_CATEGORY_BREAKDOWN,
  type ExpenseOverviewPeriod,
} from "../../constants/barberExpenseOverview";

import { styles } from "./ExpenseOverview.styles";

const formatCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;

function ExpensePieChart({
  data,
  total,
}: {
  data: typeof INITIAL_EXPENSE_CATEGORY_BREAKDOWN;
  total: number;
}) {
  const radius = 68;
  const strokeWidth = 23;
  const circumference = 2 * Math.PI * radius;

  const segments = useMemo(() => {
    let accumulated = 0;

    return data.map((item) => {
      const percentage = total > 0 ? item.amount / total : 0;
      const dashLength = circumference * percentage;

      const segment = {
        ...item,
        percentage,
        dashLength,
        offset: accumulated,
      };

      accumulated += dashLength;
      return segment;
    });
  }, [data, total, circumference]);

  if (total <= 0 || data.length === 0) {
    return (
      <View style={styles.chartEmpty}>
        <Ionicons
          name="pie-chart-outline"
          size={36}
          color="#94A3B8"
        />
        <Text style={styles.chartEmptyTitle}>
          {EXPENSE_OVERVIEW_CONTENT.chartEmptyTitle}
        </Text>
        <Text style={styles.chartEmptyDescription}>
          {EXPENSE_OVERVIEW_CONTENT.chartEmptyDescription}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.chartContainer}>
      <View style={styles.pieWrapper}>
        <Svg width={180} height={180} viewBox="0 0 180 180">
          <Circle cx="90" cy="90"
            r={radius} fill="none" stroke="#F1F5F9"
            strokeWidth={strokeWidth}
          />

          {segments.map((segment) => (
            <Circle
              key={segment.id} cx="90" cy="90"
              r={radius} fill="none" stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segment.dashLength} ${
                circumference - segment.dashLength
              }`}
              strokeDashoffset={-segment.offset}
              strokeLinecap="butt"
              rotation="-90"
              origin="90, 90"
            />
          ))}
        </Svg>

        <View style={styles.chartCenter}>
          <Text style={styles.chartCenterAmount}>
            {formatCurrency(total)}
          </Text>
          <Text style={styles.chartCenterLabel}>
            Total Expenses
          </Text>
        </View>
      </View>

      <View style={styles.legendContainer}>
        {segments.map((item) => {
          const percentage = (item.percentage * 100).toFixed(1);

          return (
            <View key={item.id} style={styles.legendRow}>
              <View
                style={[
                  styles.legendDot,
                  { backgroundColor: item.color },
                ]}
              />

              <View style={styles.legendTextContainer}>
                <Text style={styles.legendLabel} numberOfLines={2}>
                  {item.label}
                </Text>
              </View>

              <View style={styles.legendAmountContainer}>
                <Text style={styles.legendAmount}>
                  {formatCurrency(item.amount)}
                </Text>
                <Text style={styles.legendPercentage}>
                  {percentage}%
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function ExpenseOverview() {
  const [selectedPeriod, setSelectedPeriod] =
    useState<ExpenseOverviewPeriod>("THIS_MONTH");

  const [showPeriodOptions, setShowPeriodOptions] =
    useState(false);

  // Static frontend data for now.
  // Period selection updates the UI label only until API filtering is added.
  const categoryData = INITIAL_EXPENSE_CATEGORY_BREAKDOWN;

  const totalExpenses = categoryData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const periodLabel =
    EXPENSE_OVERVIEW_PERIODS.find(
      (period) => period.value === selectedPeriod
    )?.label ?? "This Month";

  const kpis = INITIAL_EXPENSE_OVERVIEW_KPIS.map((kpi) => {
    if (kpi.id === "total-expenses") {
      return { ...kpi, amount: totalExpenses };
    }

    if (kpi.id === "average-expense") {
      const entryCount =
        INITIAL_EXPENSE_OVERVIEW_KPIS.find(
          (item) => item.id === "expense-entries"
        )?.amount ?? 0;

      return {
        ...kpi,
        amount:
          entryCount > 0
            ? Math.round(totalExpenses / entryCount)
            : 0,
      };
    }

    return kpi;
  });

  return (
    <View style={styles.container}>
      {/* OVERVIEW HEADER */}
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionIcon}>
            <Ionicons
              name="wallet-outline"
              size={20}
              color="#5145E5"
            />
          </View>

          <View style={styles.sectionHeadingText}>
            <Text style={styles.sectionTitle}>
              {EXPENSE_OVERVIEW_CONTENT.title}
            </Text>
            <Text style={styles.sectionSubtitle}>
              {EXPENSE_OVERVIEW_CONTENT.subtitle}
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.periodButton}
          onPress={() => setShowPeriodOptions((previous) => !previous)}
          accessibilityRole="button"
          accessibilityLabel={`Selected period: ${periodLabel}`}
        >
          <Text style={styles.periodButtonText}>
            {periodLabel}
          </Text>
          <Ionicons
            name={showPeriodOptions ? "chevron-up" : "chevron-down"}
            size={16}
            color="#5145E5"
          />
        </Pressable>
      </View>

      {/* PERIOD OPTIONS */}
      {showPeriodOptions && (
        <View style={styles.periodOptions}>
          {EXPENSE_OVERVIEW_PERIODS.map((period) => {
            const isSelected = selectedPeriod === period.value;

            return (
              <Pressable
                key={period.value}
                onPress={() => {
                  setSelectedPeriod(period.value);
                  setShowPeriodOptions(false);
                }}
                style={[
                  styles.periodOption,
                  isSelected && styles.selectedPeriodOption,
                ]}
              >
                <Text
                  style={[
                    styles.periodOptionText,
                    isSelected && styles.selectedPeriodOptionText,
                  ]}
                >
                  {period.label}
                </Text>

                {isSelected && (
                  <Ionicons name="checkmark" size={17} color="#5145E5"/>
                )}
              </Pressable>
            );
          })}
        </View>
      )}

      {/* KPI CARDS */}
      <View style={styles.kpiGrid}>
        {kpis.map((kpi) => (
          <View
            key={kpi.id}
            style={[
              styles.kpiCard,
              { backgroundColor: kpi.backgroundColor },
            ]}
          >
            <View style={styles.kpiTopRow}>
              <View
                style={[
                  styles.kpiIconContainer,
                  { backgroundColor: "#FFFFFF" },
                ]}
              >
                <Ionicons name={kpi.icon as keyof typeof Ionicons.glyphMap} size={20} color={kpi.color} />
              </View>
            </View>

            <Text style={styles.kpiLabel}>{kpi.label}</Text>

            <Text style={[styles.kpiAmount, { color: kpi.color }]}>
              {kpi.prefix}
              {kpi.amount.toLocaleString("en-IN")}
            </Text>

            <Text style={styles.kpiDescription}>
              {kpi.description}
            </Text>
          </View>
        ))}
      </View>

      {/* PIE CHART */}
      <View style={styles.chartCard}>
        <View style={styles.chartHeader}>
          <View style={styles.sectionTitleContainer}>
            <Ionicons name="pie-chart-outline" size={21} color="#5145E5"/>
            <Text style={styles.chartTitle}>
              {EXPENSE_OVERVIEW_CONTENT.chartTitle}
            </Text>
          </View>

          <Text style={styles.chartPeriod}>{periodLabel}</Text>
        </View>

        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.chartScrollContent}
        >
          <ExpensePieChart
            data={categoryData}
            total={totalExpenses}
          />
        </ScrollView>
      </View>
    </View>
  );
}
