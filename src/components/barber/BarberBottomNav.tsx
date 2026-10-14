import React from "react";
import {
  View,
  Text,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

import { styles } from "./BarberBottomNav.styles";

const NAV_ITEMS = [
  {
    label: "Home",
    route: "/barber",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    label: "Slots",
    route: "/barber/slots",
    icon: "calendar-outline",
    activeIcon: "calendar",
  },
  {
    label: "Orders",
    route: "/barber/orders",
    icon: "receipt-outline",
    activeIcon: "receipt",
  },
  {
    label: "Earnings",
    route: "/barber/earnings",
    icon: "bar-chart-outline",
    activeIcon: "bar-chart",
  },
  {
    label: "More",
    route: "/barber/more",
    icon: "menu-outline",
    activeIcon: "menu",
  },
] as const;

export default function BarberBottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.route === "/barber"
            ? pathname === "/barber" ||
              pathname === "/barber/"
            : pathname === item.route ||
              pathname.startsWith(`${item.route}/`);

        return (
          <Pressable
            key={item.label}
            style={styles.navItem}
            onPress={() => {
              if (!isActive) {
                router.replace(item.route as never);
              }
            }}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityState={{ selected: isActive }}
          >
            <Ionicons
              name={isActive ? item.activeIcon : item.icon}
              size={24}
              color={isActive ? "#1769FF" : "#71839F"}
            />

            <Text
              style={[
                styles.label,
                isActive && styles.activeLabel,
              ]}
            >
              {item.label}
            </Text>

            {isActive && <View style={styles.activeIndicator} />}
          </Pressable>
        );
      })}
    </View>
  );
}