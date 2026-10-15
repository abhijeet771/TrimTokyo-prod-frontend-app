import React, { useState } from "react";
import { View, Text, TextInput, Image, Pressable, StatusBar,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./UserHeader.styles";

interface UserHeaderProps {
  userName?: string;
  location?: string;
  avatarUri?: string | null;
  notificationCount?: number;
  searchValue?: string;
  onLocationPress?: () => void;
  onNotificationsPress?: () => void;
  onSearchChange?: (value: string) => void;
  onFilterPress?: () => void;
  onCartPress?: () => void;
}

export default function UserHeader({
  userName = "Adam",
  location = "Choose your location",
  avatarUri,
  notificationCount = 0,
  searchValue,
  onLocationPress,
  onNotificationsPress,
  onSearchChange,
  onFilterPress,
  onCartPress,
}: UserHeaderProps) {
  const [search, setSearch] = useState(searchValue ?? "");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange?.(value);
  };

  React.useEffect(() => {
    if (searchValue !== undefined) {
      setSearch(searchValue);
    }
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#DDF4FF" />

      <View style={styles.topRow}>
        <View style={styles.userInfo}>
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              style={styles.avatar}
            />
          ) : (
            <View style={styles.avatarFallback}>
              <Ionicons name="person" size={25} color="#2475C7"/>
            </View>
          )}

          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hi {userName},</Text>

            <Pressable
              style={styles.locationButton}
              onPress={onLocationPress}
              accessibilityRole="button"
              accessibilityLabel="Choose location"
            >
              <Ionicons name="location" size={15} color="#536A83" />

              <Text
                style={styles.locationText}
                numberOfLines={1}
              >
                {location}
              </Text>

              <Ionicons
                name="chevron-down"
                size={16}
                color="#536A83"
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.headerActions}>
          <Pressable
            style={styles.iconButton}
            onPress={onCartPress}
            accessibilityRole="button"
            accessibilityLabel="Open cart"
          >
            <Ionicons
              name="cart-outline"
              size={23}
              color="#18334F"
            />
          </Pressable>

          <Pressable
            style={styles.iconButton}
            onPress={onNotificationsPress}
            accessibilityRole="button"
            accessibilityLabel="Open notifications"
          >
            <Ionicons name="notifications-outline" size={23} color="#18334F"/>

            {notificationCount > 0 && (
              <View style={styles.notificationDot} />
            )}
          </Pressable>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#74869B"
        />

        <TextInput
          value={search}
          onChangeText={handleSearchChange}
          placeholder="Search shops, barbers or services..."
          placeholderTextColor="#8292A5"
          style={styles.searchInput}
          returnKeyType="search"
          accessibilityLabel="Search shops, barbers or services"
        />

        {search.length > 0 && (
          <Pressable
            onPress={() => handleSearchChange("")}
            accessibilityLabel="Clear search"
          >
            <Ionicons
              name="close-circle"
              size={19}
              color="#8292A5"
            />
          </Pressable>
        )}

        <View style={styles.searchDivider} />

        <Pressable
          style={styles.filterButton}
          onPress={onFilterPress}
          accessibilityRole="button"
          accessibilityLabel="Filter shops"
        >
          <Ionicons name="options-outline" size={23} color="#536A83"/>
        </Pressable>
      </View>
    </View>
  );
}