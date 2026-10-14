
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";

import BarberEarningsKpi from "../components/barber/BarberEarningsKpi";
import RecentEarnings from "../components/barber/RecentEarnings";
import BarberEarningsAnalytics from "../components/barber/BarberEarningsAnalytics";

import PaymentOverview from "../components/barber/PaymentOverview";
import RecentPayments from "../components/barber/RecentPayments";
import PaymentsTable from "../components/barber/PaymentsTable";

import ExpenseOverview from "../components/barber/ExpenseOverview";
import ExpenseHistory from "../components/barber/ExpenseHistory";

import { styles } from "./BarberEarningScreen.styles";

type MainTab =
  | "OVERVIEW"
  | "ANALYTICS"
  | "PAYMENTS"
  | "EXPENSES";

type PaymentSubTab = "OVERVIEW" | "TABLE";
type ExpenseSubTab = "OVERVIEW" | "HISTORY";

const MAIN_TABS: {
  id: MainTab;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    id: "OVERVIEW",
    label: "Overview",
    icon: "grid-outline",
  },
  {
    id: "ANALYTICS",
    label: "Analytics",
    icon: "stats-chart-outline",
  },
  {
    id: "PAYMENTS",
    label: "Payments",
    icon: "card-outline",
  },
  {
    id: "EXPENSES",
    label: "Expenses",
    icon: "wallet-outline",
  },
];

const PAYMENT_SUB_TABS: {
  id: PaymentSubTab;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    id: "OVERVIEW",
    label: "Payment Overview",
    icon: "grid-outline",
  },
  {
    id: "TABLE",
    label: "Payments Table",
    icon: "list-outline",
  },
];

const EXPENSE_SUB_TABS: {
  id: ExpenseSubTab;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    id: "OVERVIEW",
    label: "Overview",
    icon: "pie-chart-outline",
  },
  {
    id: "HISTORY",
    label: "Expense History",
    icon: "receipt-outline",
  },
];

const subTabContainerStyle = {
  flexDirection: "row" as const,
  gap: 8,
  padding: 5,
  borderRadius: 12,
  backgroundColor: "#F1F5F9",
};

const subTabStyle = {
  flex: 1,
  minWidth: 0,
  minHeight: 42,
  flexDirection: "row" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  gap: 6,
  paddingHorizontal: 8,
  paddingVertical: 10,
  borderRadius: 9,
  backgroundColor: "transparent" as const,
  borderWidth: 0,
  borderColor: "#E2E8F0",
};

const activeSubTabStyle = {
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
};

const subTabLabelStyle = {
  fontSize: 12,
  fontWeight: "500" as const,
  color: "#64748B",
  flexShrink: 1,
};

const activeSubTabLabelStyle = {
  fontWeight: "700" as const,
  color: "#5145E5",
};

export default function BarberEarningScreen() {
  const [activeTab, setActiveTab] =
    useState<MainTab>("OVERVIEW");

  const [paymentSubTab, setPaymentSubTab] =
    useState<PaymentSubTab>("OVERVIEW");

  const [expenseSubTab, setExpenseSubTab] =
    useState<ExpenseSubTab>("OVERVIEW");

  return (
    <View style={styles.container}>
      <BarberHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* PAGE HEADER */}
        <View style={styles.pageHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>
              Earnings
            </Text>

            <Text style={styles.pageSubtitle}>
              Track your income, payments and expenses
            </Text>
          </View>

          <Pressable
            style={styles.calendarButton}
            onPress={() => {}}
            accessibilityRole="button"
            accessibilityLabel="Select date range"
          >
            <Ionicons
              name="calendar-outline"
              size={21}
              color="#5145E5"
            />
          </Pressable>
        </View>

        {/* MAIN TABS */}
        <View style={styles.tabsContainer}>
          {MAIN_TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <Pressable
                key={tab.id}
                onPress={() => setActiveTab(tab.id)}
                style={[
                  styles.tab,
                  isActive && styles.activeTab,
                ]}
                accessibilityRole="button"
                accessibilityState={{ selected: isActive }}
              >
                <Ionicons
                  name={tab.icon}
                  size={17}
                  color={isActive ? "#FFFFFF" : "#64748B"}
                />

                <Text
                  numberOfLines={1}
                  style={[
                    styles.tabLabel,
                    isActive && styles.activeTabLabel,
                  ]}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* ACTIVE TAB CONTENT */}
        <View style={styles.contentContainer}>
          {/* 1. EARNINGS OVERVIEW */}
          {activeTab === "OVERVIEW" && (
            <View style={{ gap: 14 }}>
              <BarberEarningsKpi />
              <RecentEarnings />
            </View>
          )}

          {/* 2. EARNINGS ANALYTICS */}
          {activeTab === "ANALYTICS" && (
            <BarberEarningsAnalytics />
          )}

          {/* 3. PAYMENTS */}
          {activeTab === "PAYMENTS" && (
            <View style={{ gap: 14 }}>
              {/* PAYMENT SUB-TABS */}
              <View style={subTabContainerStyle}>
                {PAYMENT_SUB_TABS.map((tab) => {
                  const isActive = paymentSubTab === tab.id;

                  return (
                    <Pressable
                      key={tab.id}
                      onPress={() => setPaymentSubTab(tab.id)}
                      style={[
                        subTabStyle,
                        isActive && activeSubTabStyle,
                      ]}
                      accessibilityRole="button"
                      accessibilityState={{ selected: isActive }}
                    >
                      <Ionicons
                        name={tab.icon}
                        size={16}
                        color={isActive ? "#5145E5" : "#64748B"}
                      />

                      <Text
                        numberOfLines={1}
                        style={[
                          subTabLabelStyle,
                          isActive && activeSubTabLabelStyle,
                        ]}
                      >
                        {tab.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {paymentSubTab === "OVERVIEW" && (
                <View style={{ gap: 14 }}>
                  <PaymentOverview />

                  <RecentPayments
                    onViewAll={() => setPaymentSubTab("TABLE")}
                  />
                </View>
              )}

              {paymentSubTab === "TABLE" && (
                <PaymentsTable />
              )}
            </View>
          )}

          {/* 4. EXPENSES */}
          {activeTab === "EXPENSES" && (
            <View style={{ gap: 14 }}>
              {/* EXPENSE SUB-TABS */}
              <View style={subTabContainerStyle}>
                {EXPENSE_SUB_TABS.map((tab) => {
                  const isActive = expenseSubTab === tab.id;

                  return (
                    <Pressable
                      key={tab.id}
                      onPress={() => setExpenseSubTab(tab.id)}
                      style={[
                        subTabStyle,
                        isActive && activeSubTabStyle,
                      ]}
                      accessibilityRole="button"
                      accessibilityState={{ selected: isActive }}
                    >
                      <Ionicons
                        name={tab.icon}
                        size={16}
                        color={isActive ? "#5145E5" : "#64748B"}
                      />

                      <Text
                        numberOfLines={1}
                        style={[
                          subTabLabelStyle,
                          isActive && activeSubTabLabelStyle,
                        ]}
                      >
                        {tab.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {/* EXPENSE OVERVIEW: KPIs + PIE CHART */}
              {expenseSubTab === "OVERVIEW" && (
                <ExpenseOverview />
              )}

              {/* EXPENSE HISTORY: CRUD TABLE */}
              {expenseSubTab === "HISTORY" && (
                <ExpenseHistory />
              )}
            </View>
          )}
        </View>
      </ScrollView>

      <BarberBottomNav />
    </View>
  );
}
