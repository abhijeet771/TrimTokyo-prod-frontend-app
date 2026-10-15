
import type { ComponentProps } from "react";
import type { Ionicons } from "@expo/vector-icons";

type SettingsIcon = ComponentProps<typeof Ionicons>["name"];

export interface BarberSettingsItem {
  id: string;
  title: string;
  description: string;
  icon: SettingsIcon;
  color: string;
  backgroundColor: string;
  route: string;
}

export const SETTINGS_ITEMS: BarberSettingsItem[] = [
  {
    id: "account-security",
    title: "Account & Security",
    description: "Password and account access",
    icon: "lock-closed-outline",
    color: "#6558D3",
    backgroundColor: "#EFEDFF",
    route: "/barber/settings/account-security",
  },
  {
    id: "booking-preferences",
    title: "Booking Preferences",
    description: "Default booking rules and preferences",
    icon: "calendar-outline",
    color: "#2878C8",
    backgroundColor: "#EAF4FF",
    route: "/barber/settings/booking-preferences",
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Manage booking, order and payment alerts",
    icon: "notifications-outline",
    color: "#13856A",
    backgroundColor: "#E5F7F1",
    route: "/barber/settings/notifications",
  },
  {
    id: "app-preferences",
    title: "App Preferences",
    description: "Language, theme and app defaults",
    icon: "options-outline",
    color: "#C0782C",
    backgroundColor: "#FFF2E2",
    route: "/barber/settings/app-preferences",
  },
  {
    id: "privacy-legal",
    title: "Privacy & Legal",
    description: "Privacy policy and terms of service",
    icon: "shield-checkmark-outline",
    color: "#BE477F",
    backgroundColor: "#FCE7F3",
    route: "/barber/settings/privacy-legal",
  },
];
