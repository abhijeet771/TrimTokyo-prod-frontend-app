import React from "react";
import { View, Text, Pressable, FlatList,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { RECENT_EARNINGS, RECENT_EARNINGS_CONTENT, RecentEarning,} from "../../constants/recentearnings";

import { styles } from "./RecentEarnings.styles";

interface RecentEarningsProps {
  earnings?: RecentEarning[];
  onViewAll?: () => void;
  onEarningPress?: (earning: RecentEarning) => void;
}

export default function RecentEarnings({
  earnings = RECENT_EARNINGS,
  onViewAll,
  onEarningPress,
}: RecentEarningsProps) {
  const visibleEarnings = earnings.slice(
    0,
    RECENT_EARNINGS_CONTENT.visibleLimit
  );

  const renderEarning = ({ item }: { item: RecentEarning }) => {
    const isReceived = item.status === "RECEIVED";

    return (
      <Pressable
        style={styles.earningRow}
        onPress={() => onEarningPress?.(item)}
      >
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

        <View style={styles.customerDetails}>
          <Text
            numberOfLines={1}
            style={styles.customerName}
          >
            {item.customerName}
          </Text>

          <Text
            numberOfLines={1}
            style={styles.serviceName}
          >
            {item.serviceName}
          </Text>
        </View>

        <View style={styles.dateDetails}>
          <Text style={styles.dateText}>
            {item.date}
          </Text>

          <Text style={styles.timeText}>
            {item.time}
          </Text>
        </View>

        <View style={styles.amountDetails}>
          <Text style={styles.amountText}>
            ₹{item.amount.toLocaleString("en-IN")}
          </Text>

          <View
            style={[
              styles.statusBadge,
              isReceived
                ? styles.receivedBadge
                : styles.pendingBadge,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                isReceived
                  ? styles.receivedText
                  : styles.pendingText,
              ]}
            >
              {isReceived ? "Received" : "Pending"}
            </Text>
          </View>
        </View>

        <Ionicons name="chevron-forward" size={16} color="#77819D"/>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingLeft}>
          <View style={styles.headingIcon}>
            <Ionicons
              name="time-outline"
              size={19}
              color="#6554F0"
            />
          </View>

          <Text style={styles.title}>
            {RECENT_EARNINGS_CONTENT.title}
          </Text>
        </View>

        <Pressable
          style={styles.viewAllButton}
          onPress={onViewAll}
        >
          <Text style={styles.viewAllText}>
            {RECENT_EARNINGS_CONTENT.viewAll}
          </Text>

          <Ionicons
            name="chevron-forward"
            size={15}
            color="#6554F0"
          />
        </Pressable>
      </View>

      {visibleEarnings.length > 0 ? (
        <FlatList
          data={visibleEarnings}
          keyExtractor={(item) => item.id}
          renderItem={renderEarning}
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
            {RECENT_EARNINGS_CONTENT.emptyTitle}
          </Text>

          <Text style={styles.emptyDescription}>
            {RECENT_EARNINGS_CONTENT.emptyDescription}
          </Text>
        </View>
      )}
    </View>
  );
}
