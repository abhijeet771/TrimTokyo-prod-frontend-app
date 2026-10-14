import React, { useState } from "react";
import { View, Text, Pressable, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { PAYMENT_OVERVIEW_CONTENT, PAYMENT_SUMMARY, PAYMENT_METHODS, PAYMENT_STATUSES,} from "../../constants/paymentOverview";

import { styles } from "./PaymentOverview.styles";

type PaymentPeriod = "7 Days" | "30 Days" | "3 Months";

const PAYMENT_PERIODS: PaymentPeriod[] = [ "7 Days", "30 Days", "3 Months",];

function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function PaymentOverview() {
  const [period, setPeriod] =
    useState<PaymentPeriod>("7 Days");

  return (
    <View style={styles.container}>
      {/* DATE RANGE */}
      <Pressable style={styles.dateSelector}>
        <Ionicons name="calendar-outline" size={17} color="#5145E5"/>

        <Text style={styles.dateText}>
          14 Oct 2026 - 20 Oct 2026
        </Text>

        <Ionicons name="chevron-down" size={16} color="#64708A" />
      </Pressable>

      {/* PAYMENT SUMMARY */}
      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <View style={styles.headingLeft}>
            <View style={styles.headingIcon}>
              <Ionicons
                name="document-text-outline"
                size={18}
                color="#6554F0"
              />
            </View>

            <Text style={styles.sectionTitle}>
              {PAYMENT_OVERVIEW_CONTENT.summaryTitle}
            </Text>
          </View>

          <Pressable style={styles.periodSelector}>
            <Text style={styles.periodSelectorText}>
              Last {period}
            </Text>

            <Ionicons
              name="chevron-down"
              size={14}
              color="#6554F0"
            />
          </Pressable>
        </View>

        <View style={styles.summaryGrid}>
          {PAYMENT_SUMMARY.map((item) => (
            <View
              key={item.id}
              style={styles.summaryCard}
            >
              <View
                style={[
                  styles.summaryIcon,
                  { backgroundColor: item.background },
                ]}
              >
                <Ionicons
                  name={
                    item.icon as keyof typeof Ionicons.glyphMap
                  }
                  size={21}
                  color={item.color}
                />
              </View>

              <View style={styles.summaryContent}>
                <Text
                  numberOfLines={2}
                  style={styles.summaryLabel}
                >
                  {item.title}
                </Text>

                <Text style={styles.summaryAmount}>
                  {formatCurrency(item.amount)}
                </Text>

                <Text style={styles.summaryDescription}>
                  {item.change}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* PAYMENT METHOD BREAKDOWN */}
      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <View style={styles.headingLeft}>
            <View style={styles.headingIcon}>
              <Ionicons
                name="stats-chart-outline"
                size={18}
                color="#6554F0"
              />
            </View>

            <Text style={styles.sectionTitle}>
              {PAYMENT_OVERVIEW_CONTENT.methodTitle}
            </Text>
          </View>
        </View>

        <View style={styles.methodList}>
          {PAYMENT_METHODS.map((method) => (
            <View
              key={method.id}
              style={styles.methodRow}
            >
              <View
                style={[
                  styles.methodIcon,
                  { backgroundColor: method.background },
                ]}
              >
                <Ionicons
                  name={
                    method.id === "CASH"
                      ? "cash-outline"
                      : "card-outline"
                  }
                  size={20}
                  color={method.color}
                />
              </View>

              <View style={styles.methodDetails}>
                <Text style={styles.methodTitle}>
                  {method.title}
                </Text>

                <Text style={styles.methodSubtitle}>
                  {method.orderCount} payments
                </Text>
              </View>

              <View style={styles.methodProgressContainer}>
                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${method.percentage}%`,
                        backgroundColor: method.color,
                      },
                    ]}
                  />
                </View>
              </View>

              <Text style={styles.methodPercentage}>
                {method.percentage}%
              </Text>

              <Text style={styles.methodAmount}>
                {formatCurrency(method.amount)}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* PAYMENT STATUS */}
      <View style={styles.section}>
        <View style={styles.sectionHeading}>
          <View style={styles.headingLeft}>
            <View style={styles.headingIcon}>
              <Ionicons
                name="time-outline"
                size={18}
                color="#6554F0"
              />
            </View>

            <Text style={styles.sectionTitle}>
              {PAYMENT_OVERVIEW_CONTENT.statusTitle}
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statusList}
        >
          {PAYMENT_STATUSES.map((status) => (
            <View
              key={status.id}
              style={[
                styles.statusCard,
                { backgroundColor: status.background },
              ]}
            >
              <View style={styles.statusHeading}>
                <Ionicons
                  name={
                    status.icon as keyof typeof Ionicons.glyphMap
                  }
                  size={20}
                  color={status.color}
                />

                <Text
                  numberOfLines={1}
                  style={[
                    styles.statusTitle,
                    { color: status.color },
                  ]}
                >
                  {status.title}
                </Text>
              </View>

              <Text style={styles.statusCount}>
                {status.count}
              </Text>

              <Text style={styles.statusAmount}>
                {formatCurrency(status.amount)}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}