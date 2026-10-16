
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./UserBottomNav.styles";

export type UserTab =
  | "home"
  | "home-service"
  | "slots"
  | "event"
  | "more";

interface UserBottomNavProps {
  activeTab?: UserTab;
  onTabPress?: (tab: UserTab) => void;
}

const NAV_ITEMS: {
  key: UserTab;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    key: "home",
    label: "Home",
    icon: "storefront-outline",
    activeIcon: "storefront",
  },
  {
    key: "home-service",
    label: "Home Service",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    key: "slots",
    label: "Slots",
    icon: "calendar-outline",
    activeIcon: "calendar",
  },
  {
    key: "event",
    label: "Event",
    icon: "gift-outline",
    activeIcon: "gift",
  },
  {
    key: "more",
    label: "More",
    icon: "grid-outline",
    activeIcon: "grid",
  },
];

export default function UserBottomNav({
  activeTab = "home",
  onTabPress,
}: UserBottomNavProps) {
  return (
    <View style={styles.container}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeTab === item.key;

        return (
          <Pressable
            key={item.key}
            style={styles.navItem}
            onPress={() => onTabPress?.(item.key)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityState={{ selected: isActive }}
          >
            <View
              style={[
                styles.iconContainer,
                isActive && styles.activeIconContainer,
              ]}
            >
              <Ionicons
                name={isActive ? item.activeIcon : item.icon}
                size={22}
                color={isActive ? "#1769F5" : "#7B8798"}
              />
            </View>

            <Text
              numberOfLines={1}
              style={[
                styles.label,
                isActive && styles.activeLabel,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
