import React, { useState } from "react";
import { View, Text, Pressable, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./BarberEarningsKpi.styles";

type Period = "7 Days" | "30 Days" | "3 Months";

interface EarningMetric {
  id: string;
  title: string;
  amount: string;
  change: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  background: string;
}

const EARNING_METRICS: EarningMetric[] = [
  {
    id: "total",
    title: "Total Earnings",
    amount: "₹12,500",
    change: "12%",
    icon: "wallet",
    color: "#16A765",
    background: "#E3F9EC",
  },
  {
    id: "today",
    title: "Today's Earnings",
    amount: "₹1,200",
    change: "8%",
    icon: "calendar",
    color: "#6554F0",
    background: "#EEEAFE",
  },
  {
    id: "week",
    title: "This Week's Earnings",
    amount: "₹5,800",
    change: "15%",
    icon: "bar-chart",
    color: "#F28A20",
    background: "#FFF0DE",
  },
  {
    id: "month",
    title: "This Month's Earnings",
    amount: "₹18,400",
    change: "20%",
    icon: "calendar-outline",
    color: "#2580F5",
    background: "#E4F0FF",
  },
];

const CHART_DATA = [
  { day: "14 Oct", amount: 800 },
  { day: "15 Oct", amount: 1500 },
  { day: "16 Oct", amount: 1200 },
  { day: "17 Oct", amount: 2200 },
  { day: "18 Oct", amount: 1700 },
  { day: "19 Oct", amount: 2700 },
  { day: "20 Oct", amount: 2300 },
];

const PERIODS: Period[] = ["7 Days", "30 Days", "3 Months"];

export default function BarberEarningsKpi() {
  const [period, setPeriod] = useState<Period>("7 Days");

  return (
    <View style={styles.container}>
      {/* DATE RANGE */}
      <Pressable style={styles.dateSelector}>
        <Ionicons
          name="calendar-outline"
          size={16}
          color="#5145E5"
        />

        <Text style={styles.dateText}>
          14 Oct 2026 - 20 Oct 2026
        </Text>

        <Ionicons
          name="chevron-down"
          size={16}
          color="#64708A"
        />
      </Pressable>

      {/* OVERVIEW HEADING */}
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>
          Earnings Overview
        </Text>

        <View style={styles.periodBadge}>
          <Text style={styles.periodBadgeText}>
            Last {period}
          </Text>

          <Ionicons
            name="chevron-down"
            size={13}
            color="#6554F0"
          />
        </View>
      </View>

      {/* EARNINGS KPI CARDS */}
      <View style={styles.metricsGrid}>
        {EARNING_METRICS.map((metric) => (
          <View key={metric.id} style={styles.metricCard}>
            <View
              style={[
                styles.metricIcon,
                { backgroundColor: metric.background },
              ]}
            >
              <Ionicons
                name={metric.icon}
                size={19}
                color={metric.color}
              />
            </View>

            <View style={styles.metricContent}>
              <Text
                numberOfLines={1}
                style={styles.metricTitle}
              >
                {metric.title}
              </Text>

              <Text style={styles.metricAmount}>
                {metric.amount}
              </Text>

              <View style={styles.changeRow}>
                <Ionicons
                  name="arrow-up"
                  size={12}
                  color="#16A765"
                />

                <Text style={styles.changeText}>
                  {metric.change} from previous period
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* EARNINGS TREND */}
      <View style={styles.chartCard}>
        <View style={styles.chartHeading}>
          <View style={styles.chartTitleRow}>
            <View style={styles.chartIcon}>
              <Ionicons
                name="stats-chart"
                size={17}
                color="#6554F0"
              />
            </View>

            <Text style={styles.chartTitle}>
              Earnings Trend
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.periodOptions}
          >
            {PERIODS.map((item) => {
              const active = period === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => setPeriod(item)}
                  style={[
                    styles.periodButton,
                    active && styles.activePeriodButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.periodButtonText,
                      active && styles.activePeriodButtonText,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Temporary chart placeholder */}
        <View style={styles.chartPlaceholder}>
          {CHART_DATA.map((item, index) => (
            <View key={item.day} style={styles.chartColumn}>
              <View style={styles.barArea}>
                <View
                  style={[
                    styles.chartBar,
                    {
                      height: `${(item.amount / 3000) * 100}%`,
                    },
                    index === 5 && styles.highlightedBar,
                  ]}
                />
              </View>

              <Text style={styles.chartDay}>
                {item.day.split(" ")[0]}
              </Text>
            </View>
          ))}
        </View>

        {/* PERFORMANCE METRICS */}
        <View style={styles.performanceRow}>
          <View style={styles.performanceItem}>
            <View style={styles.performanceIcon}>
              <Ionicons
                name="cut-outline"
                size={17}
                color="#6554F0"
              />
            </View>

            <Text style={styles.performanceValue}>42</Text>

            <Text style={styles.performanceLabel}>
              Completed Services
            </Text>

            <Text style={styles.performanceChange}>
              ↑ 12%
            </Text>
          </View>

          <View style={styles.performanceDivider} />

          <View style={styles.performanceItem}>
            <View style={styles.performanceIcon}>
              <Ionicons
                name="people-outline"
                size={17}
                color="#6554F0"
              />
            </View>

            <Text style={styles.performanceValue}>28</Text>

            <Text style={styles.performanceLabel}>
              Unique Customers
            </Text>

            <Text style={styles.performanceChange}>
              ↑ 7%
            </Text>
          </View>

          <View style={styles.performanceDivider} />

          <View style={styles.performanceItem}>
            <View style={styles.performanceIcon}>
              <Ionicons
                name="receipt-outline"
                size={17}
                color="#6554F0"
              />
            </View>

            <Text style={styles.performanceValue}>₹312</Text>

            <Text style={styles.performanceLabel}>
              Avg. Earnings per Order
            </Text>

            <Text style={styles.performanceChange}>
              ↑ 8%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}