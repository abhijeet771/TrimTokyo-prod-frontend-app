import React from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  RECENT_PAYMENTS,
  RECENT_PAYMENTS_CONTENT,
  PAYMENT_STATUS_LABELS,
  PAYMENT_STATUS_COLORS,
  RecentPayment,
} from "../../constants/recentPayments";

import { styles } from "./RecentPayments.styles";

interface RecentPaymentsProps {
  payments?: RecentPayment[];
  onViewAll?: () => void;
  onPaymentPress?: (payment: RecentPayment) => void;
}

function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function RecentPayments({
  payments = RECENT_PAYMENTS,
  onViewAll,
  onPaymentPress,
}: RecentPaymentsProps) {
  const visiblePayments = payments.slice(
    0,
    RECENT_PAYMENTS_CONTENT.visibleLimit
  );

  const renderPayment = ({
    item,
  }: {
    item: RecentPayment;
  }) => {
    const statusColors = PAYMENT_STATUS_COLORS[item.status];

    const methodIcon =
      item.method === "CASH"
        ? "cash-outline"
        : "card-outline";

    return (
      <Pressable
        style={styles.paymentRow}
        onPress={() => onPaymentPress?.(item)}
      >
        {/* CUSTOMER AVATAR */}
        <View
          style={[
            styles.avatar,
            { backgroundColor: item.avatarColor },
          ]}
        >
          <Text style={styles.avatarText}>
            {item.initials}
          </Text>
        </View>

        {/* CUSTOMER AND ORDER */}
        <View style={styles.customerDetails}>
          <Text
            numberOfLines={1}
            style={styles.customerName}
          >
            {item.customerName}
          </Text>

          <Text style={styles.orderId}>
            {item.orderId}
          </Text>
        </View>

        {/* DATE AND TIME */}
        <View style={styles.dateDetails}>
          <Text style={styles.dateText}>
            {item.date}
          </Text>

          <Text style={styles.timeText}>
            {item.time}
          </Text>
        </View>

        {/* PAYMENT METHOD */}
        <View style={styles.methodDetails}>
          <Ionicons
            name={methodIcon}
            size={16}
            color={
              item.method === "CASH"
                ? "#16A765"
                : "#6554F0"
            }
          />

          <Text style={styles.methodText}>
            {item.method === "CASH" ? "Cash" : "Online"}
          </Text>
        </View>

        {/* AMOUNT AND STATUS */}
        <View style={styles.amountDetails}>
          <Text style={styles.amountText}>
            {formatCurrency(item.amount)}
          </Text>

          <View
            style={[
              styles.statusBadge,
              { backgroundColor: statusColors.background },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                { color: statusColors.text },
              ]}
            >
              {PAYMENT_STATUS_LABELS[item.status]}
            </Text>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={16}
          color="#77819D"
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* SECTION HEADER */}
      <View style={styles.header}>
        <View style={styles.headingLeft}>
          <View style={styles.headingIcon}>
            <Ionicons
              name="receipt-outline"
              size={19}
              color="#6554F0"
            />
          </View>

          <Text style={styles.title}>
            {RECENT_PAYMENTS_CONTENT.title}
          </Text>
        </View>

        <Pressable
          style={styles.viewAllButton}
          onPress={onViewAll}
        >
          <Text style={styles.viewAllText}>
            {RECENT_PAYMENTS_CONTENT.viewAll}
          </Text>

          <Ionicons
            name="chevron-forward"
            size={15}
            color="#6554F0"
          />
        </Pressable>
      </View>

      {/* PAYMENT LIST */}
      {visiblePayments.length > 0 ? (
        <FlatList
          data={visiblePayments}
          keyExtractor={(item) => item.id}
          renderItem={renderPayment}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
      ) : (
        <View style={styles.emptyState}>
          <Ionicons
            name="receipt-outline"
            size={32}
            color="#A4A9C0"
          />

          <Text style={styles.emptyTitle}>
            {RECENT_PAYMENTS_CONTENT.emptyTitle}
          </Text>

          <Text style={styles.emptyDescription}>
            {RECENT_PAYMENTS_CONTENT.emptyDescription}
          </Text>
        </View>
      )}
    </View>
  );
}
