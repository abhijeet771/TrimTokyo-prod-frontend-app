import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  EXPENSE_CATEGORY_LABELS,
  EXPENSE_CATEGORY_OPTIONS,
  EXPENSE_CATEGORY_COLORS,
  EXPENSE_HISTORY_CONTENT,
  EXPENSE_HISTORY_ROWS_PER_PAGE,
  EXPENSE_STATUS_COLORS,
  EXPENSE_STATUS_LABELS,
  EXPENSE_PAYMENT_STATUS_OPTIONS,
  EXPENSE_PAYMENT_METHOD_OPTIONS,
  INITIAL_BARBER_EXPENSES,
  type BarberExpense,
  type BarberExpenseCategory,
  type BarberExpensePaymentStatus,
  type BarberExpensePaymentMethod,
} from "../../constants/barberExpenseHistory";

import { styles } from "./ExpenseHistory.styles";

interface ExpenseHistoryProps {
  onAdd?: () => void;
  onView?: (expense: BarberExpense) => void;
  onEdit?: (expense: BarberExpense) => void;
  onDelete?: (expense: BarberExpense) => void;
}

const formatCurrency = (amount: number) =>
  `₹${amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;

const formatDate = (date: string) => {
  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function ExpenseHistory({
  onAdd,
  onView,
  onEdit,
  onDelete,
}: ExpenseHistoryProps) {
  const [expenses, setExpenses] = useState<BarberExpense[]>(
    INITIAL_BARBER_EXPENSES
  );

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] =
    useState<BarberExpenseCategory | "ALL">("ALL");
  const [statusFilter, setStatusFilter] =
    useState<BarberExpensePaymentStatus | "ALL">("ALL");
  const [methodFilter, setMethodFilter] =
    useState<BarberExpensePaymentMethod | "ALL">("ALL");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredExpenses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return expenses.filter((expense) => {
      const matchesSearch =
        !query ||
        expense.name.toLowerCase().includes(query) ||
        expense.vendor.toLowerCase().includes(query) ||
        expense.expenseId.toLowerCase().includes(query);

      const matchesCategory =
        categoryFilter === "ALL" ||
        expense.category === categoryFilter;

      const matchesStatus =
        statusFilter === "ALL" ||
        expense.paymentStatus === statusFilter;

      const matchesMethod =
        methodFilter === "ALL" ||
        expense.paymentMethod === methodFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesMethod
      );
    });
  }, [
    expenses,
    search,
    categoryFilter,
    statusFilter,
    methodFilter,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredExpenses.length / rowsPerPage)
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedExpenses = useMemo(() => {
    const startIndex = (safePage - 1) * rowsPerPage;

    return filteredExpenses.slice(
      startIndex,
      startIndex + rowsPerPage
    );
  }, [filteredExpenses, safePage, rowsPerPage]);

  const resetPage = () => setCurrentPage(1);

  const resetFilters = () => {
    setSearch("");
    setCategoryFilter("ALL");
    setStatusFilter("ALL");
    setMethodFilter("ALL");
    setCurrentPage(1);
  };

  const handleDelete = (expense: BarberExpense) => {
    // The parent owns the delete confirmation dialog.
    if (onDelete) {
      onDelete(expense);
      return;
    }

    // Local fallback for frontend development.
    setExpenses((previous) =>
      previous.filter((item) => item.id !== expense.id)
    );
  };

  const handleEdit = (expense: BarberExpense) => {
    // Editing is delegated to the parent's form/dialog.
    onEdit?.(expense);
  };

  const hasActiveFilters =
    search.trim().length > 0 ||
    categoryFilter !== "ALL" ||
    statusFilter !== "ALL" ||
    methodFilter !== "ALL";

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>
            {EXPENSE_HISTORY_CONTENT.title}
          </Text>
          <Text style={styles.subtitle}>
            {EXPENSE_HISTORY_CONTENT.subtitle}
          </Text>
        </View>

        <Pressable
          style={styles.addButton}
          onPress={onAdd}
          accessibilityRole="button"
          accessibilityLabel="Add expense"
        >
          <Ionicons name="add" size={19} color="#FFFFFF" />
          <Text style={styles.addButtonText}>
            {EXPENSE_HISTORY_CONTENT.addButton}
          </Text>
        </Pressable>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={19}
          color="#94A3B8"
        />

        <TextInput
          value={search}
          onChangeText={(value) => {
            setSearch(value);
            resetPage();
          }}
          placeholder={EXPENSE_HISTORY_CONTENT.searchPlaceholder}
          placeholderTextColor="#94A3B8"
          style={styles.searchInput}
          autoCapitalize="none"
          returnKeyType="search"
        />

        {search.length > 0 && (
          <Pressable
            onPress={() => {
              setSearch("");
              resetPage();
            }}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
          >
            <Ionicons
              name="close-circle"
              size={19}
              color="#94A3B8"
            />
          </Pressable>
        )}
      </View>

      {/* FILTERS */}
      <View style={styles.filtersContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScroll}
        >
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Category</Text>
            <View style={styles.filterSelectWrapper}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.filterOptions}>
                  <Pressable
                    onPress={() => {
                      setCategoryFilter("ALL");
                      resetPage();
                    }}
                    style={[
                      styles.filterChip,
                      categoryFilter === "ALL" &&
                        styles.filterChipActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.filterChipText,
                        categoryFilter === "ALL" &&
                          styles.filterChipTextActive,
                      ]}
                    >
                      All
                    </Text>
                  </Pressable>

                  {EXPENSE_CATEGORY_OPTIONS.map((option) => {
                    const active =
                      categoryFilter === option.value;

                    return (
                      <Pressable
                        key={option.value}
                        onPress={() => {
                          setCategoryFilter(option.value);
                          resetPage();
                        }}
                        style={[
                          styles.filterChip,
                          active && styles.filterChipActive,
                        ]}
                      >
                        <Text
                          style={[
                            styles.filterChipText,
                            active && styles.filterChipTextActive,
                          ]}
                        >
                          {option.label}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Payment status</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.filterOptions}>
              <Pressable
                onPress={() => {
                  setStatusFilter("ALL");
                  resetPage();
                }}
                style={[
                  styles.filterChip,
                  statusFilter === "ALL" &&
                    styles.filterChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    statusFilter === "ALL" &&
                      styles.filterChipTextActive,
                  ]}
                >
                  All
                </Text>
              </Pressable>

              {EXPENSE_PAYMENT_STATUS_OPTIONS.map((option) => {
                const active = statusFilter === option.value;

                return (
                  <Pressable
                    key={option.value}
                    onPress={() => {
                      setStatusFilter(option.value);
                      resetPage();
                    }}
                    style={[
                      styles.filterChip,
                      active && styles.filterChipActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.filterChipText,
                        active && styles.filterChipTextActive,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Payment method</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.filterOptions}>
              <Pressable
                onPress={() => {
                  setMethodFilter("ALL");
                  resetPage();
                }}
                style={[
                  styles.filterChip,
                  methodFilter === "ALL" &&
                    styles.filterChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    methodFilter === "ALL" &&
                      styles.filterChipTextActive,
                  ]}
                >
                  All
                </Text>
              </Pressable>

              {EXPENSE_PAYMENT_METHOD_OPTIONS.map((option) => {
                const active = methodFilter === option.value;

                return (
                  <Pressable
                    key={option.value}
                    onPress={() => {
                      setMethodFilter(option.value);
                      resetPage();
                    }}
                    style={[
                      styles.filterChip,
                      active && styles.filterChipActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.filterChipText,
                        active && styles.filterChipTextActive,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>

        {hasActiveFilters && (
          <Pressable
            style={styles.resetButton}
            onPress={resetFilters}
          >
            <Ionicons
              name="refresh-outline"
              size={15}
              color="#5145E5"
            />
            <Text style={styles.resetButtonText}>
              {EXPENSE_HISTORY_CONTENT.resetFiltersLabel}
            </Text>
          </Pressable>
        )}
      </View>

      {/* TABLE */}
      <View style={styles.tableCard}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={styles.tableScrollContent}
        >
          <View style={styles.table}>
            {/* TABLE HEADER */}
            <View style={[styles.tableRow, styles.tableHeaderRow]}>
              <Text style={[styles.headerCell, styles.nameColumn]}>
                Expense
              </Text>
              <Text style={[styles.headerCell, styles.categoryColumn]}>
                Category
              </Text>
              <Text style={[styles.headerCell, styles.dateColumn]}>
                Date
              </Text>
              <Text style={[styles.headerCell, styles.amountColumn]}>
                Amount
              </Text>
              <Text style={[styles.headerCell, styles.paidColumn]}>
                Paid
              </Text>
              <Text style={[styles.headerCell, styles.statusColumn]}>
                Status
              </Text>
              <Text style={[styles.headerCell, styles.methodColumn]}>
                Method
              </Text>
              <Text style={[styles.headerCell, styles.vendorColumn]}>
                Vendor
              </Text>
              <Text style={[styles.headerCell, styles.actionsColumn]}>
                Actions
              </Text>
            </View>

            {/* TABLE ROWS */}
            {paginatedExpenses.map((expense) => {
              const categoryStyle =
                EXPENSE_CATEGORY_COLORS[expense.category];

              const statusStyle =
                EXPENSE_STATUS_COLORS[expense.paymentStatus];

              const methodLabel =
                EXPENSE_PAYMENT_METHOD_OPTIONS.find(
                  (option) =>
                    option.value === expense.paymentMethod
                )?.label ?? expense.paymentMethod;

              return (
                <View key={expense.id} style={styles.tableRow}>
                  <View style={[styles.bodyCell, styles.nameColumn]}>
                    <Text
                      style={styles.expenseName}
                      numberOfLines={2}
                    >
                      {expense.name}
                    </Text>
                    <Text style={styles.expenseId}>
                      {expense.expenseId}
                    </Text>
                  </View>

                  <View style={[styles.bodyCell, styles.categoryColumn]}>
                    <View
                      style={[
                        styles.categoryBadge,
                        { backgroundColor: categoryStyle.background },
                      ]}
                    >
                      <Text
                        style={[
                          styles.categoryBadgeText,
                          { color: categoryStyle.text },
                        ]}
                        numberOfLines={2}
                      >
                        {EXPENSE_CATEGORY_LABELS[expense.category]}
                      </Text>
                    </View>
                  </View>

                  <Text style={[styles.bodyCell, styles.dateColumn]}>
                    {formatDate(expense.date)}
                  </Text>

                  <Text style={[styles.bodyCell, styles.amountColumn]}>
                    {formatCurrency(expense.amount)}
                  </Text>

                  <Text style={[styles.bodyCell, styles.paidColumn]}>
                    {formatCurrency(expense.paidAmount)}
                  </Text>

                  <View style={[styles.bodyCell, styles.statusColumn]}>
                    <View
                      style={[
                        styles.statusBadge,
                        { backgroundColor: statusStyle.background },
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusBadgeText,
                          { color: statusStyle.text },
                        ]}
                      >
                        {EXPENSE_STATUS_LABELS[expense.paymentStatus]}
                      </Text>
                    </View>
                  </View>

                  <Text style={[styles.bodyCell, styles.methodColumn]}>
                    {methodLabel}
                  </Text>

                  <Text
                    style={[styles.bodyCell, styles.vendorColumn]}
                    numberOfLines={2}
                  >
                    {expense.vendor || "—"}
                  </Text>

                  {/* CRUD ACTIONS — NO DIALOGS HERE */}
                  <View style={[styles.bodyCell, styles.actionsColumn]}>
                    <View style={styles.actions}>
                      <Pressable
                        style={styles.actionButton}
                        onPress={() => onView?.(expense)}
                        accessibilityRole="button"
                        accessibilityLabel={`View ${expense.name}`}
                      >
                        <Ionicons
                          name="eye-outline"
                          size={17}
                          color="#0284C7"
                        />
                      </Pressable>

                      <Pressable
                        style={styles.actionButton}
                        onPress={() => handleEdit(expense)}
                        accessibilityRole="button"
                        accessibilityLabel={`Edit ${expense.name}`}
                      >
                        <Ionicons
                          name="create-outline"
                          size={17}
                          color="#5145E5"
                        />
                      </Pressable>

                      <Pressable
                        style={styles.actionButton}
                        onPress={() => handleDelete(expense)}
                        accessibilityRole="button"
                        accessibilityLabel={`Delete ${expense.name}`}
                      >
                        <Ionicons
                          name="trash-outline"
                          size={17}
                          color="#DC2626"
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>

        {/* EMPTY STATE */}
        {paginatedExpenses.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons
              name="receipt-outline"
              size={36}
              color="#94A3B8"
            />
            <Text style={styles.emptyTitle}>
              {EXPENSE_HISTORY_CONTENT.emptyTitle}
            </Text>
            <Text style={styles.emptyDescription}>
              {EXPENSE_HISTORY_CONTENT.emptyDescription}
            </Text>
          </View>
        )}

        {/* PAGINATION */}
        <View style={styles.pagination}>
          <View style={styles.paginationInfo}>
            <Text style={styles.paginationText}>
              {filteredExpenses.length === 0
                ? "0"
                : (safePage - 1) * rowsPerPage + 1}
              {" - "}
              {Math.min(safePage * rowsPerPage, filteredExpenses.length)}
              {" of "}
              {filteredExpenses.length}
            </Text>

            <View style={styles.rowsPerPageContainer}>
              <Text style={styles.paginationText}>Rows</Text>
              {EXPENSE_HISTORY_ROWS_PER_PAGE.map((count) => (
                <Pressable
                  key={count}
                  onPress={() => {
                    setRowsPerPage(count);
                    setCurrentPage(1);
                  }}
                  style={[
                    styles.pageSizeButton,
                    rowsPerPage === count &&
                      styles.pageSizeButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.pageSizeText,
                      rowsPerPage === count &&
                        styles.pageSizeTextActive,
                    ]}
                  >
                    {count}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.paginationActions}>
            <Pressable
              disabled={safePage <= 1}
              onPress={() => setCurrentPage((page) => Math.max(1, page - 1))}
              style={[
                styles.paginationButton,
                safePage <= 1 && styles.paginationButtonDisabled,
              ]}
            >
              <Ionicons
                name="chevron-back"
                size={17}
                color={safePage <= 1 ? "#CBD5E1" : "#334155"}
              />
            </Pressable>

            <Text style={styles.pageNumber}>
              {safePage} / {totalPages}
            </Text>

            <Pressable
              disabled={safePage >= totalPages}
              onPress={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
              style={[
                styles.paginationButton,
                safePage >= totalPages &&
                  styles.paginationButtonDisabled,
              ]}
            >
              <Ionicons
                name="chevron-forward"
                size={17}
                color={
                  safePage >= totalPages ? "#CBD5E1" : "#334155"
                }
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
