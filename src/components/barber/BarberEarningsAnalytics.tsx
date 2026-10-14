import React, { useState } from "react";
import { View, Text, Pressable, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ANALYTICS_CONTENT, ANALYTICS_METRICS, ANALYTICS_PERIODS, DAILY_EARNINGS, EARNING_DAY_SUMMARY,
  SERVICE_EARNINGS,
  AnalyticsPeriod,
} from "../../constants/analytics";

import { styles } from "./BarberEarningsAnalytics.styles";

export default function BarberEarningsAnalytics() {
  const [period, setPeriod] = useState<AnalyticsPeriod>("7 Days");
  const maxEarning = Math.max(
    ...DAILY_EARNINGS.map((item) => item.amount),
    1
  );

  return (
    <View style={styles.container}>
      {/* DATE RANGE */}
      <Pressable style={styles.dateSelector}>
        <Ionicons name="calendar-outline" size={16} color="#5145E5"/>

        <Text style={styles.dateText}>
          14 Oct 2026 - 20 Oct 2026
        </Text>

        <Ionicons name="chevron-down" size={16} color="#64708A"/>
      </Pressable>

      {/* ANALYTICS HEADER */}
      <View style={styles.sectionHeading}>
        <Text style={styles.pageTitle}>
          {ANALYTICS_CONTENT.title}
        </Text>

        <View style={styles.selectedPeriod}>
          <Text style={styles.selectedPeriodText}>
            Last {period}
          </Text>
        </View>
      </View>

      {/* 1. EARNINGS BY DAY */}
      <View style={styles.card}>
        <View style={styles.cardHeading}>
          <View style={styles.headingIcon}>
            <Ionicons name="bar-chart" size={17} color="#6554F0"/>
          </View>

          <Text style={styles.cardTitle}>
            {ANALYTICS_CONTENT.dailyChartTitle}
          </Text>
        </View>

        <View style={styles.chartContainer}>
          {/* Y-axis labels */}
          <View style={styles.yAxis}>
            {[3000, 2000, 1000, 0].map((value) => (
              <Text key={value} style={styles.axisLabel}>
                {value === 0 ? "₹0" : `₹${value / 1000}K`}
              </Text>
            ))}
          </View>

          {/* Bar chart */}
          <View style={styles.chartArea}>
            {[3000, 2000, 1000, 0].map((value) => (
              <View
                key={value}
                style={[ styles.gridLine,{ bottom: `${(value / 3000) * 100}%` },]}
              />
            ))}

            <View style={styles.barsRow}>
              {DAILY_EARNINGS.map((item) => {
                const barHeight = (item.amount / 3000) * 100;

                return (
                  <View key={item.date} style={styles.barColumn}>
                    <Text style={styles.barAmount}>
                      {item.amount >= 1000 ? `${(item.amount / 1000).toFixed(1)}K` : item.amount}
                    </Text>

                    <View style={styles.barTrack}>
                      <View
                        style={[
                          styles.bar, { height: `${barHeight}%` },
                        ]}
                      />
                    </View>

                    <Text style={styles.barDate}>
                      {item.date.split(" ")[0]}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* Highest and lowest earning days */}
        <View style={styles.daySummaryRow}>
          <View style={styles.daySummaryCard}>
            <View
              style={[
                styles.summaryIcon,
                styles.highestIcon,
              ]}
            >
              <Ionicons name="trophy" size={17} color="#F28A20"/>
            </View>

            <View style={styles.summaryDetails}>
              <Text style={styles.summaryLabel}>
                {ANALYTICS_CONTENT.highestDayTitle}
              </Text>

              <Text style={styles.summaryAmount}>
                ₹{EARNING_DAY_SUMMARY.highest.amount.toLocaleString("en-IN")}
              </Text>

              <Text style={styles.summaryDate}>
                {EARNING_DAY_SUMMARY.highest.label}
              </Text>
            </View>
          </View>

          <View style={styles.daySummaryCard}>
            <View
              style={[ styles.summaryIcon, styles.lowestIcon,]}>
              <Ionicons name="arrow-down" size={18} color="#EF4444"/>
            </View>

            <View style={styles.summaryDetails}>
              <Text style={styles.summaryLabel}>
                {ANALYTICS_CONTENT.lowestDayTitle}
              </Text>

              <Text style={styles.summaryAmount}>
                ₹{EARNING_DAY_SUMMARY.lowest.amount.toLocaleString("en-IN")}
              </Text>

              <Text style={styles.summaryDate}>
                {EARNING_DAY_SUMMARY.lowest.label}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* 2. SERVICE-WISE EARNINGS */}
      <View style={styles.card}>
        <View style={styles.cardHeading}>
          <View style={styles.headingIcon}>
            <Ionicons name="pie-chart" size={17} color="#6554F0"/>
          </View>

          <Text style={styles.cardTitle}>
            {ANALYTICS_CONTENT.serviceChartTitle}
          </Text>
        </View>

        <View style={styles.servicesContainer}>
          {/* Donut-style visual */}
          <View style={styles.donutContainer}>
            <View style={styles.donutOuter}>
              {SERVICE_EARNINGS.map((service, index) => (
                <View
                  key={service.id}
                  style={[
                    styles.donutSegment,
                    {
                      backgroundColor: service.color,
                      transform: [
                        { rotate: `${index * 72}deg` },
                      ],
                    },
                  ]}
                />
              ))}

              <View style={styles.donutInner}>
                <Text style={styles.donutAmount}>
                  ₹12,500
                </Text>

                <Text style={styles.donutLabel}>
                  Total Earnings
                </Text>
              </View>
            </View>
          </View>

          {/* Service legend */}
          <View style={styles.serviceList}>
            {SERVICE_EARNINGS.map((service) => (
              <View
                key={service.id}
                style={styles.serviceRow}
              >
                <View
                  style={[
                    styles.serviceDot,
                    { backgroundColor: service.color },
                  ]}
                />

                <Text
                  numberOfLines={1}
                  style={styles.serviceName}
                >
                  {service.name}
                </Text>

                <Text style={styles.servicePercentage}>
                  {service.percentage}%
                </Text>

                <Text style={styles.serviceAmount}>
                  ₹{service.amount.toLocaleString("en-IN")}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* 3. ORDERS & CUSTOMERS */}
      <View style={styles.card}>
        <View style={styles.cardHeading}>
          <View style={styles.headingIcon}>
            <Ionicons name="people-outline" size={17} color="#6554F0"/>
          </View>

          <Text style={styles.cardTitle}>
            {ANALYTICS_CONTENT.customerMetricsTitle}
          </Text>
        </View>

        <View style={styles.metricsGrid}>
          {ANALYTICS_METRICS.map((metric) => (
            <View
              key={metric.id}
              style={styles.metricCard}
            >
              <View
                style={[
                  styles.metricIcon,
                  { backgroundColor: metric.background },
                ]}
              >
                <Ionicons name={ metric.icon as keyof typeof Ionicons.glyphMap }
                  size={17}
                  color={metric.color}
                />
              </View>

              <View style={styles.metricContent}>
                <View style={styles.metricValueRow}>
                  <Text style={styles.metricValue}>
                    {metric.value}
                  </Text>

                  {metric.change !== "" && (
                    <Text style={styles.metricChange}>
                      ↑ {metric.change}
                    </Text>
                  )}
                </View>

                <Text style={styles.metricTitle}>
                  {metric.title}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}