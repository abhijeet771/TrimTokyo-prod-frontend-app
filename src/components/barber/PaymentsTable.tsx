import React, { useMemo, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  INITIAL_TABLE_PAYMENTS,
  PAYMENTS_TABLE_CONTENT,
  PAYMENT_TABLE_METHODS,
  PAYMENT_TABLE_STATUSES,
  PAYMENT_TABLE_STATUS_COLORS,
  PAYMENT_TABLE_STATUS_LABELS,
  TablePayment,
  TablePaymentMethod,
  TablePaymentStatus,
} from "../../constants/paymentsTable";

import { styles } from "./PaymentsTable.styles";

type StatusFilter = "ALL" | TablePaymentStatus;
type MethodFilter = "ALL" | TablePaymentMethod;

function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function PaymentsTable() {
  const [payments, setPayments] = useState<TablePayment[]>(
    INITIAL_TABLE_PAYMENTS
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<StatusFilter>("ALL");
  const [methodFilter, setMethodFilter] =
    useState<MethodFilter>("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    PAYMENTS_TABLE_CONTENT.rowsPerPage
  );

  const filteredPayments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return payments.filter((payment) => {
      const matchesSearch =
        !query ||
        payment.paymentId.toLowerCase().includes(query) ||
        payment.orderId.toLowerCase().includes(query) ||
        payment.customerName.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "ALL" ||
        payment.status === statusFilter;

      const matchesMethod =
        methodFilter === "ALL" ||
        payment.method === methodFilter;

      return matchesSearch && matchesStatus && matchesMethod;
    });
  }, [payments, search, statusFilter, methodFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPayments.length / rowsPerPage)
  );

  const safePage = Math.min(currentPage, totalPages);

  const pagePayments = filteredPayments.slice(
    (safePage - 1) * rowsPerPage,
    safePage * rowsPerPage
  );

  const resetPage = () => setCurrentPage(1);

  const updateSearch = (value: string) => {
    setSearch(value);
    resetPage();
  };

  const updateStatusFilter = (value: StatusFilter) => {
    setStatusFilter(value);
    resetPage();
  };

  const updateMethodFilter = (value: MethodFilter) => {
    setMethodFilter(value);
    resetPage();
  };

  const confirmCashPayment = (payment: TablePayment) => {
    if (
      payment.method !== "CASH" ||
      payment.status !== "PENDING"
    ) {
      return;
    }

    Alert.alert(
      "Confirm cash received",
      `Have you received ${formatCurrency(payment.amount)} from ${payment.customerName} for order ${payment.orderId}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm received",
          onPress: () => {
            setPayments((previous) =>
              previous.map((item) =>
                item.id === payment.id
                  ? {
                      ...item,
                      status: "RECEIVED",
                      confirmedBy: "Barber",
                    }
                  : item
              )
            );
          },
        },
      ]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("ALL");
    setMethodFilter("ALL");
    setCurrentPage(1);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons
            name="receipt-outline"
            size={21}
            color="#6554F0"
          />
        </View>

        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>
            {PAYMENTS_TABLE_CONTENT.title}
          </Text>

          <Text style={styles.subtitle}>
            {PAYMENTS_TABLE_CONTENT.subtitle}
          </Text>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={19}
          color="#8A91A8"
        />

        <TextInput
          value={search}
          onChangeText={updateSearch}
          placeholder={PAYMENTS_TABLE_CONTENT.searchPlaceholder}
          placeholderTextColor="#9299AD"
          style={styles.searchInput}
          autoCapitalize="none"
          returnKeyType="search"
        />

        {search.length > 0 && (
          <Pressable onPress={() => updateSearch("")}>
            <Ionicons
              name="close-circle"
              size={19}
              color="#8A91A8"
            />
          </Pressable>
        )}
      </View>

      {/* STATUS FILTERS */}
      <Text style={styles.filterLabel}>Payment status</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterList}
      >
        {PAYMENT_TABLE_STATUSES.map((item) => {
          const active = statusFilter === item.value;

          return (
            <Pressable
              key={item.value}
              onPress={() =>
                updateStatusFilter(item.value)
              }
              style={[
                styles.filterChip,
                active && styles.activeFilterChip,
              ]}
            >
              <Text
                style={[
                  styles.filterChipText,
                  active && styles.activeFilterChipText,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* METHOD FILTERS */}
      <Text style={styles.filterLabel}>Payment method</Text>

      <View style={styles.methodFilters}>
        {PAYMENT_TABLE_METHODS.map((item) => {
          const active = methodFilter === item.value;

          return (
            <Pressable
              key={item.value}
              onPress={() =>
                updateMethodFilter(item.value)
              }
              style={[
                styles.methodChip,
                active && styles.activeMethodChip,
              ]}
            >
              <Ionicons
                name={
                  item.value === "CASH"
                    ? "cash-outline"
                    : item.value === "ONLINE"
                      ? "card-outline"
                      : "options-outline"
                }
                size={15}
                color={active ? "#6554F0" : "#64708A"}
              />

              <Text
                style={[
                  styles.methodChipText,
                  active && styles.activeMethodChipText,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}

        <Pressable
          onPress={clearFilters}
          style={styles.clearButton}
        >
          <Text style={styles.clearButtonText}>Reset</Text>
        </Pressable>
      </View>

      {/* RESULTS SUMMARY */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsText}>
          {filteredPayments.length} payment
          {filteredPayments.length === 1 ? "" : "s"} found
        </Text>

        <Text style={styles.pageIndicator}>
          Page {safePage} of {totalPages}
        </Text>
      </View>

      {/* PAYMENT RECORDS */}
      {pagePayments.length > 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={styles.tableScrollContent}
        >
          <View style={styles.table}>
            {/* TABLE HEADER */}
            <View style={styles.tableHeader}>
              <Text style={[styles.headerCell, styles.idColumn]}>
                Payment / Order
              </Text>

              <Text style={[styles.headerCell, styles.customerColumn]}>
                Customer
              </Text>

              <Text style={[styles.headerCell, styles.dateColumn]}>
                Date & Time
              </Text>

              <Text style={[styles.headerCell, styles.methodColumn]}>
                Method
              </Text>

              <Text style={[styles.headerCell, styles.amountColumn]}>
                Amount
              </Text>

              <Text style={[styles.headerCell, styles.statusColumn]}>
                Status
              </Text>

              <Text style={[styles.headerCell, styles.confirmedColumn]}>
                Confirmed by
              </Text>

              <Text style={[styles.headerCell, styles.actionColumn]}>
                Action
              </Text>
            </View>

            {pagePayments.map((payment) => {
              const statusColors =
                PAYMENT_TABLE_STATUS_COLORS[payment.status];

              const canConfirm =
                payment.method === "CASH" &&
                payment.status === "PENDING";

              return (
                <View key={payment.id} style={styles.tableRow}>
                  <View style={[styles.cell, styles.idColumn]}>
                    <Text style={styles.primaryCellText}>
                      {payment.paymentId}
                    </Text>

                    <Text style={styles.secondaryCellText}>
                      {payment.orderId}
                    </Text>
                  </View>

                  <View style={[styles.cell, styles.customerColumn]}>
                    <Text
                      numberOfLines={2}
                      style={styles.primaryCellText}
                    >
                      {payment.customerName}
                    </Text>
                  </View>

                  <View style={[styles.cell, styles.dateColumn]}>
                    <Text style={styles.primaryCellText}>
                      {payment.date}
                    </Text>

                    <Text style={styles.secondaryCellText}>
                      {payment.time}
                    </Text>
                  </View>

                  <View style={[styles.cell, styles.methodColumn]}>
                    <View style={styles.methodValue}>
                      <Ionicons
                        name={
                          payment.method === "CASH"
                            ? "cash-outline"
                            : "card-outline"
                        }
                        size={15}
                        color={
                          payment.method === "CASH"
                            ? "#16A765"
                            : "#6554F0"
                        }
                      />

                      <Text style={styles.primaryCellText}>
                        {payment.method === "CASH"
                          ? "Cash"
                          : "Online"}
                      </Text>
                    </View>
                  </View>

                  <View style={[styles.cell, styles.amountColumn]}>
                    <Text style={styles.amountCellText}>
                      {formatCurrency(payment.amount)}
                    </Text>
                  </View>

                  <View style={[styles.cell, styles.statusColumn]}>
                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor:
                            statusColors.background,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusBadgeText,
                          { color: statusColors.text },
                        ]}
                      >
                        {PAYMENT_TABLE_STATUS_LABELS[
                          payment.status
                        ]}
                      </Text>
                    </View>
                  </View>

                  <View style={[styles.cell, styles.confirmedColumn]}>
                    <Text style={styles.secondaryCellText}>
                      {payment.confirmedBy}
                    </Text>
                  </View>

                  <View style={[styles.cell, styles.actionColumn]}>
                    {canConfirm ? (
                      <Pressable
                        onPress={() => confirmCashPayment(payment)}
                        style={styles.confirmButton}
                      >
                        <Text style={styles.confirmButtonText}>
                          Confirm cash
                        </Text>
                      </Pressable>
                    ) : (
                      <Text style={styles.noActionText}>—</Text>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons
            name="receipt-outline"
            size={35}
            color="#A4A9C0"
          />

          <Text style={styles.emptyTitle}>
            {PAYMENTS_TABLE_CONTENT.emptyTitle}
          </Text>

          <Text style={styles.emptyDescription}>
            {PAYMENTS_TABLE_CONTENT.emptyDescription}
          </Text>

          <Pressable
            onPress={clearFilters}
            style={styles.resetEmptyButton}
          >
            <Text style={styles.resetEmptyButtonText}>
              Clear filters
            </Text>
          </Pressable>
        </View>
      )}

      {/* PAGINATION */}
      <View style={styles.pagination}>
        <View style={styles.rowsSelector}>
          <Text style={styles.rowsLabel}>Rows:</Text>

          {PAYMENTS_TABLE_CONTENT.rowsPerPageOptions
            .slice(0, 3)
            .map((count) => (
              <Pressable
                key={count}
                onPress={() => {
                  setRowsPerPage(count);
                  setCurrentPage(1);
                }}
                style={[
                  styles.rowsOption,
                  rowsPerPage === count &&
                    styles.activeRowsOption,
                ]}
              >
                <Text
                  style={[
                    styles.rowsOptionText,
                    rowsPerPage === count &&
                      styles.activeRowsOptionText,
                  ]}
                >
                  {count}
                </Text>
              </Pressable>
            ))}
        </View>

        <View style={styles.paginationButtons}>
          <Pressable
            disabled={safePage <= 1}
            onPress={() => setCurrentPage(safePage - 1)}
            style={[
              styles.pageButton,
              safePage <= 1 && styles.disabledPageButton,
            ]}
          >
            <Ionicons
              name="chevron-back"
              size={16}
              color={safePage <= 1 ? "#B8BDCD" : "#5145E5"}
            />
          </Pressable>

          <Text style={styles.currentPageText}>
            {safePage}/{totalPages}
          </Text>

          <Pressable
            disabled={safePage >= totalPages}
            onPress={() => setCurrentPage(safePage + 1)}
            style={[
              styles.pageButton,
              safePage >= totalPages &&
                styles.disabledPageButton,
            ]}
          >
            <Ionicons
              name="chevron-forward"
              size={16}
              color={
                safePage >= totalPages
                  ? "#B8BDCD"
                  : "#5145E5"
              }
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}