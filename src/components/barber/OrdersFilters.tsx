import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Modal, ScrollView, Platform,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./OrdersFilters.styles";

export type OrderStatus =  | "ALL"  | "PENDING"  | "CONFIRMED"  | "COMPLETED"  | "CANCELLED";
export type OrderSort =  | "NEWEST"  | "OLDEST"  | "AMOUNT_HIGH"  | "AMOUNT_LOW";

export interface OrdersFilterValues {
  search: string;
  status: OrderStatus;
  sort: OrderSort;
  startDate: string;
  endDate: string;
}

interface OrdersFiltersProps {
  values: OrdersFilterValues;
  onChange: (values: OrdersFilterValues) => void;
}

const STATUS_OPTIONS: { label: string; value: OrderStatus;}[] 
= [
  { label: "All statuses", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Confirmed", value: "CONFIRMED" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Cancelled", value: "CANCELLED" },
];

const SORT_OPTIONS: {
  label: string;
  value: OrderSort;
}[] = [
  { label: "Newest first", value: "NEWEST" },
  { label: "Oldest first", value: "OLDEST" },
  { label: "Amount: high to low", value: "AMOUNT_HIGH" },
  { label: "Amount: low to high", value: "AMOUNT_LOW" },
];

export default function OrdersFilters({ values, onChange,}: OrdersFiltersProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const update = (partial: Partial<OrdersFilterValues>) => {
    onChange({ ...values, ...partial });
  };

  const activeFilterCount = [
    values.status !== "ALL",
    values.sort !== "NEWEST",
    values.startDate.trim().length > 0,
    values.endDate.trim().length > 0,
  ].filter(Boolean).length;

  const clearFilters = () => {
    onChange({
      ...values,
      status: "ALL",
      sort: "NEWEST",
      startDate: "",
      endDate: "",
    });
  };

  const renderOptions = <T extends string>(
    options: { label: string; value: T }[],
    selected: T,
    onSelect: (value: T) => void
  ) => (
    <View style={styles.optionsContainer}>
      {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <Pressable
            key={option.value}
            style={[
              styles.optionButton,
              isSelected && styles.selectedOption,
            ]}
            onPress={() => onSelect(option.value)}
          >
            <Text style={[ styles.optionText,
                isSelected && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>

            {isSelected && (
              <Ionicons name="checkmark" size={17} color="#FFFFFF"/>
            )}
          </Pressable>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#8A97AB" />

          <TextInput
            style={styles.searchInput}
            placeholder="Search customer or order ID"
            placeholderTextColor="#9AA6B7"
            value={values.search}
            onChangeText={(search) => update({ search })}
            autoCapitalize="none"
            returnKeyType="search"
            clearButtonMode={
              Platform.OS === "ios" ? "while-editing" : "never"
            }
          />

          {values.search.length > 0 && Platform.OS !== "ios" && (
            <Pressable onPress={() => update({ search: "" })} hitSlop={8}>
              <Ionicons name="close-circle" size={19} color="#8A97AB"/>
            </Pressable>
          )}
        </View>

        <Pressable
          style={[ styles.filterButton, activeFilterCount > 0 && styles.activeFilterButton,]}
          onPress={() => setModalVisible(true)}
          accessibilityRole="button"
          accessibilityLabel="Open order filters"
        >
          <Ionicons name="options-outline" size={21} color={activeFilterCount > 0 ? "#FFFFFF" : "#334155"}/>

          {activeFilterCount > 0 && (
            <View style={styles.filterCountBadge}>
              <Text style={styles.filterCountText}>
                {activeFilterCount}
              </Text>
            </View>
          )}
        </Pressable>
      </View>

      <View style={styles.quickFilterRow}>
        <Pressable style={styles.quickFilter} onPress={() => setModalVisible(true)}>
          <Ionicons name="calendar-outline" size={15} color="#475569"/>
          <Text style={styles.quickFilterText}>
            {values.startDate || values.endDate
              ? "Date selected"
              : "Date range"}
          </Text>
          <Ionicons name="chevron-down" size={14} color="#64748B"/>
        </Pressable>

        <Pressable style={styles.quickFilter} onPress={() => setModalVisible(true)}>
          <Text style={styles.quickFilterText}>
            {STATUS_OPTIONS.find(
              (item) => item.value === values.status
            )?.label || "All statuses"}
          </Text>
          <Ionicons name="chevron-down" size={14} color="#64748B"/>
        </Pressable>

        {activeFilterCount > 0 && (
          <Pressable onPress={clearFilters}>
            <Text style={styles.clearText}>Reset</Text>
          </Pressable>
        )}
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Pressable style={styles.backdrop} onPress={() => setModalVisible(false)}/>

          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>
                  Filter Orders
                </Text>
                <Text style={styles.modalSubtitle}>
                  Refine your order list
                </Text>
              </View>

              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={22} color="#334155"/>
              </Pressable>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <Text style={styles.sectionTitle}>
                Order status
              </Text>

              {renderOptions(
                STATUS_OPTIONS,
                values.status,
                (status) => update({ status })
              )}

              <Text style={styles.sectionTitle}>
                Sort by
              </Text>

              {renderOptions(
                SORT_OPTIONS,
                values.sort,
                (sort) => update({ sort })
              )}

              <Text style={styles.sectionTitle}>
                Date range
              </Text>

              <Text style={styles.dateHint}>
                Enter dates in YYYY-MM-DD format.
              </Text>

              <View style={styles.dateRow}>
                <View style={styles.dateField}>
                  <Text style={styles.dateLabel}>
                    From
                  </Text>

                  <TextInput
                    style={styles.dateInput}
                    value={values.startDate}
                    onChangeText={(startDate) =>
                      update({ startDate })
                    }
                    placeholder="YYYY-MM-DD"
                    placeholderTextColor="#9AA6B7"
                    autoCapitalize="none"
                    maxLength={10}
                  />
                </View>

                <View style={styles.dateField}>
                  <Text style={styles.dateLabel}>
                    To
                  </Text>

                  <TextInput
                    style={styles.dateInput}
                    value={values.endDate}
                    onChangeText={(endDate) =>
                      update({ endDate })
                    }
                    placeholder="YYYY-MM-DD"
                    placeholderTextColor="#9AA6B7"
                    autoCapitalize="none"
                    maxLength={10}
                  />
                </View>
              </View>
            </ScrollView>

            <View style={styles.modalFooter}>
              <Pressable style={styles.resetButton} onPress={clearFilters}>
                <Text style={styles.resetButtonText}>
                  Reset
                </Text>
              </Pressable>

              <Pressable style={styles.applyButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.applyButtonText}>
                  Apply Filters
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}