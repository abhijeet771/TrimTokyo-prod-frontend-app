import React, { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";

import OrdersKpi from "../components/barber/OrdersKpi";
import OrdersFilters, { OrdersFilterValues,} from "../components/barber/OrdersFilters";
import RecentOrders from "../components/barber/RecentOrders";
import AllOrdersTable from "../components/barber/AllOrdersTable";

import { BARBER_ORDERS, BarberOrder,} from "../constants/barberorder";

import { styles } from "./BarberOrdersScreen.styles";

type OrdersTab = "RECENT" | "ALL";

const INITIAL_FILTERS: OrdersFilterValues = {
  search: "",
  status: "ALL",
  sort: "NEWEST",
  startDate: "",
  endDate: "",
};

function getOrderTimestamp(order: BarberOrder): number {
  const parsedDate = new Date(
    `${order.date} ${order.time}`
  ).getTime();

  return Number.isNaN(parsedDate) ? 0 : parsedDate;
}

function getISODate(dateString: string): string {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDateInputValue(dateString: string): string {
  const parsed = new Date(dateString);

  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return getISODate(dateString);
}

export default function BarberOrdersScreen() {

  const [activeTab, setActiveTab] = useState<OrdersTab>("RECENT");
  const [filters, setFilters] = useState<OrdersFilterValues>(INITIAL_FILTERS);
  const [selectedOrder, setSelectedOrder] = useState<BarberOrder | null>(null);
  const filteredOrders = useMemo(() => { const searchTerm = filters.search.trim().toLowerCase();

    const filtered = BARBER_ORDERS.filter((order) => {
      const matchesSearch =
        !searchTerm ||
        order.orderNumber.toLowerCase().includes(searchTerm) ||
        order.customerName.toLowerCase().includes(searchTerm) ||
        order.phone.includes(searchTerm) ||
        order.serviceName.toLowerCase().includes(searchTerm);

      const matchesStatus =
        filters.status === "ALL" ||
        order.status === filters.status;

      // Sample order dates use "14 Oct 2026".
      // Convert them to YYYY-MM-DD for date-range comparisons.
      const orderDate = getISODate(order.date);

      const matchesStartDate =
        !filters.startDate ||
        (orderDate !== "" &&
          orderDate >= filters.startDate);

      const matchesEndDate =
        !filters.endDate ||
        (orderDate !== "" &&
          orderDate <= filters.endDate);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesStartDate &&
        matchesEndDate
      );
    });

    return filtered.sort((a, b) => {
      switch (filters.sort) {
        case "OLDEST":
          return getOrderTimestamp(a) - getOrderTimestamp(b);

        case "AMOUNT_HIGH":
          return b.amount - a.amount;

        case "AMOUNT_LOW":
          return a.amount - b.amount;

        case "NEWEST":
        default:
          return getOrderTimestamp(b) - getOrderTimestamp(a);
      }
    });
  }, [filters]);

  const kpiData = useMemo(
    () => ({
      total: BARBER_ORDERS.length,
      pending: BARBER_ORDERS.filter((order) => order.status === "PENDING").length,
      confirmed: BARBER_ORDERS.filter((order) => order.status === "CONFIRMED").length,
      cancelled: BARBER_ORDERS.filter((order) => order.status === "CANCELLED").length,
    }),
    []
  );

  const handleOpenOrder = (order: BarberOrder) => {
    setSelectedOrder(order);
  };

  return (
    <View style={styles.container}>
      <BarberHeader />

      <View style={styles.body}>
        <View style={styles.tabContainer}>
          <Pressable
            style={[
              styles.tab,
              activeTab === "RECENT" && styles.activeTab,
            ]}
            onPress={() => {
              setActiveTab("RECENT");
              setSelectedOrder(null);
            }}
          >
            <Ionicons name="time-outline" size={18} color={activeTab === "RECENT" ? "#5145FF" : "#71839F"}/>

            <Text
              style={[
                styles.tabText,
                activeTab === "RECENT" && styles.activeTabText,
              ]}
            >
              Recent Orders
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.tab,
              activeTab === "ALL" && styles.activeTab,
            ]}
            onPress={() => {
              setActiveTab("ALL");
              setSelectedOrder(null);
            }}
          >
            <Ionicons name="list-outline" size={18} color={activeTab === "ALL" ? "#5145FF" : "#71839F"}/>

            <Text
              style={[
                styles.tabText,
                activeTab === "ALL" && styles.activeTabText,
              ]}
            >
              All Orders
            </Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {selectedOrder ? (
            <View style={styles.detailsCard}>
              <Pressable
                style={styles.backButton}
                onPress={() => setSelectedOrder(null)}
              >
                <Ionicons
                  name="arrow-back"
                  size={19}
                  color="#5145FF"
                />
                <Text style={styles.backButtonText}>
                  Back to orders
                </Text>
              </Pressable>

              <Text style={styles.detailsTitle}>
                Order Details
              </Text>

              <Text style={styles.detailsOrderNumber}>
                {selectedOrder.orderNumber}
              </Text>

              <View style={styles.detailDivider} />

              <Text style={styles.detailLabel}>Customer</Text>
              <Text style={styles.detailValue}>
                {selectedOrder.customerName}
              </Text>

              <Text style={styles.detailLabel}>Phone</Text>
              <Text style={styles.detailValue}>
                {selectedOrder.phone}
              </Text>

              <Text style={styles.detailLabel}>Service</Text>
              <Text style={styles.detailValue}>
                {selectedOrder.serviceName}
              </Text>

              <Text style={styles.detailLabel}>Quantity</Text>
              <Text style={styles.detailValue}>
                {selectedOrder.quantity}
              </Text>

              <Text style={styles.detailLabel}>Appointment</Text>
              <Text style={styles.detailValue}>
                {selectedOrder.date} · {selectedOrder.time}
              </Text>

              <Text style={styles.detailLabel}>Status</Text>
              <Text style={styles.detailValue}>
                {selectedOrder.status}
              </Text>

              <Text style={styles.detailLabel}>Total Amount</Text>
              <Text style={styles.detailAmount}>
                ₹{selectedOrder.amount.toLocaleString("en-IN")}
              </Text>
            </View>
          ) : (
            <>
              {activeTab === "RECENT" && (
                <OrdersKpi data={kpiData} />
              )}

              <OrdersFilters
                values={filters}
                onChange={setFilters}
              />

              {activeTab === "RECENT" ? (
                <RecentOrders
                  orders={filteredOrders}
                  onViewAll={() => setActiveTab("ALL")}
                  onOrderPress={handleOpenOrder}
                />
              ) : (
                <AllOrdersTable
                  orders={filteredOrders}
                  onOrderPress={handleOpenOrder}
                />
              )}
            </>
          )}
        </ScrollView>
      </View>
      <BarberBottomNav />
    </View>
  );
}