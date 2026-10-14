import React from "react";
import { View, Text,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./OrdersKpi.styles";

export interface OrdersKpiData {
  total: number;
  pending: number;
  confirmed: number;
  cancelled: number;
}

interface OrdersKpiProps {
  data: OrdersKpiData;
}

const KPI_ITEMS = [
  {
    key: "total",
    label: "Total Orders",
    icon: "receipt-outline",
    color: "#5145FF",
    backgroundColor: "#EEF0FF",
  },
  {
    key: "pending",
    label: "Pending",
    icon: "time-outline",
    color: "#F97316",
    backgroundColor: "#FFF2E8",
  },
  {
    key: "confirmed",
    label: "Confirmed",
    icon: "checkmark-circle-outline",
    color: "#16A34A",
    backgroundColor: "#E8F9EE",
  },
  {
    key: "cancelled",
    label: "Cancelled",
    icon: "close-circle-outline",
    color: "#EF4444",
    backgroundColor: "#FEEDEF",
  },
] as const;

export default function OrdersKpi({
  data,
}: OrdersKpiProps) {
  return (
    <View style={styles.container}>
      {KPI_ITEMS.map((item) => (
        <View
          key={item.key}
          style={styles.card}
        >
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <Ionicons name={item.icon} size={25} color={item.color}/>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.label} numberOfLines={1}>
              {item.label}
            </Text>

            <Text style={styles.value}>
              {data[item.key]}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}