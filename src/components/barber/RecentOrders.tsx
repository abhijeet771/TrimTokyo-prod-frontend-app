import React from "react";
import { View, Text, Pressable, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BARBER_ORDERS, BARBER_ORDERS_CONTENT, BARBER_ORDER_STATUS_LABELS,
  BARBER_ORDER_STATUS_COLORS,
  BarberOrder,
} from "../../constants/barberorder";

import { styles } from "./RecentOrders.styles";

interface RecentOrdersProps {
  orders?: BarberOrder[];
  onViewAll?: () => void;
  onOrderPress?: (order: BarberOrder) => void;
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

const AVATAR_COLORS = [
  "#EDE9FE",
  "#DBEAFE",
  "#FCE7F3",
  "#D1FAE5",
  "#FEF3C7",
];

export default function RecentOrders({
  orders = BARBER_ORDERS,
  onViewAll,
  onOrderPress,
}: RecentOrdersProps) {
  const recentOrders = [...orders]
    .sort((a, b) => {
      const dateA = new Date(
        `${a.date} ${a.time}`
      ).getTime();

      const dateB = new Date(
        `${b.date} ${b.time}`
      ).getTime();

      return dateB - dateA;
    })
    .slice(0, BARBER_ORDERS_CONTENT.recentLimit);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>
            {BARBER_ORDERS_CONTENT.title}
          </Text>

          <Text style={styles.subtitle}>
            {BARBER_ORDERS_CONTENT.subtitle}
          </Text>
        </View>

        <Pressable
          style={styles.viewAllButton}
          onPress={onViewAll}
          disabled={!onViewAll}
          accessibilityRole="button"
          accessibilityLabel="View all orders"
        >
          <Text style={styles.viewAllText}>
            {BARBER_ORDERS_CONTENT.viewAll}
          </Text>

          <Ionicons
            name="chevron-forward"
            size={16}
            color="#5145FF"
          />
        </Pressable>
      </View>

      {recentOrders.length === 0 ? (
        <View style={styles.emptyCard}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="receipt-outline"
              size={32}
              color="#5145FF"
            />
          </View>

          <Text style={styles.emptyTitle}>
            {BARBER_ORDERS_CONTENT.emptyTitle}
          </Text>

          <Text style={styles.emptyDescription}>
            {BARBER_ORDERS_CONTENT.emptyDescription}
          </Text>
        </View>
      ) : (
        <ScrollView
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {recentOrders.map((order, index) => {
            const statusColors =
              BARBER_ORDER_STATUS_COLORS[order.status];

            return (
              <Pressable
                key={order.id}
                style={styles.orderCard}
                onPress={() => onOrderPress?.(order)}
                accessibilityRole="button"
                accessibilityLabel={
                  `Order ${order.orderNumber}, ${order.customerName}`
                }
              >
                <View style={styles.cardTop}>
                  <View
                    style={[
                      styles.avatar,
                      {
                        backgroundColor:
                          AVATAR_COLORS[index % AVATAR_COLORS.length],
                      },
                    ]}
                  >
                    <Text style={styles.avatarText}>
                      {getInitials(order.customerName)}
                    </Text>
                  </View>

                  <View style={styles.customerInfo}>
                    <Text
                      style={styles.customerName}
                      numberOfLines={1}
                    >
                      {order.customerName}
                    </Text>

                    <Text style={styles.orderNumber}>
                      {order.orderNumber}
                    </Text>
                  </View>

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
                        styles.statusText,
                        { color: statusColors.text },
                      ]}
                    >
                      {BARBER_ORDER_STATUS_LABELS[order.status]}
                    </Text>
                  </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.serviceRow}>
                  <View style={styles.serviceIcon}>
                    <Ionicons
                      name="cut-outline"
                      size={20}
                      color="#5145FF"
                    />
                  </View>

                  <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>
                      {order.serviceName}
                    </Text>

                    <Text style={styles.quantityText}>
                      Qty: {order.quantity}
                    </Text>
                  </View>

                  <Text style={styles.amount}>
                    {BARBER_ORDERS_CONTENT.currency}
                    {order.amount.toLocaleString("en-IN")}
                  </Text>
                </View>

                <View style={styles.footer}>
                  <View style={styles.dateTime}>
                    <Ionicons
                      name="calendar-outline"
                      size={14}
                      color="#8290A5"
                    />

                    <Text style={styles.footerText}>
                      {order.date}
                    </Text>
                  </View>

                  <View style={styles.dateTime}>
                    <Ionicons
                      name="time-outline"
                      size={14}
                      color="#8290A5"
                    />

                    <Text style={styles.footerText}>
                      {order.time}
                    </Text>
                  </View>

                  <Ionicons
                    name="chevron-forward"
                    size={17}
                    color="#9AA6B7"
                  />
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}