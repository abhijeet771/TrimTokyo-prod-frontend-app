import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./SlotTabs.styles";

export type SlotTabType = "CREATE" | "GENERATED";

interface SlotTabsProps {
  activeTab: SlotTabType;
  onTabChange: (tab: SlotTabType) => void;
}

const TABS = [
  {
    id: "CREATE",
    label: "Create Slots",
    icon: "calendar-outline",
  },
  {
    id: "GENERATED",
    label: "Generated Slots",
    icon: "list-outline",
  },
] as const;

export default function SlotTabs({
  activeTab,
  onTabChange,
}: SlotTabsProps) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            style={[
              styles.tab,
              isActive && styles.activeTab,
            ]}
            onPress={() => onTabChange(tab.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
          >
            <Ionicons
              name={tab.icon}
              size={20}
              color={isActive ? "#FFFFFF" : "#71839F"}
            />

            <Text
              style={[
                styles.tabLabel,
                isActive && styles.activeTabLabel,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}