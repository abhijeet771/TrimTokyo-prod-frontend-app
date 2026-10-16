import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import UserHeader from "./UserHeader";
import UserBottomNav, { type UserTab } from "./UserBottomNav";

import {
  USER_SLOTS_SHOPS,
  USER_SLOTS_CONTENT,
  type SlotsShop,
} from "../../constants/user/userSlotsShops";

import { styles } from "./UserSlotsShopCards.styles";

const SHOP_IMAGES = {
  shop1: require("../../assets/shop/s1.png"),
  shop2: require("../../assets/shop/s2.png"),
  shop3: require("../../assets/shop/s3.png"),
  shop4: require("../../assets/shop/s4.png"),
};

type ShopFilter =
  | "All"
  | "Near Me"
  | "Top Rated"
  | "Available Today";

interface UserSlotsShopCardsProps {
  onAddSlot: (shop: SlotsShop) => void;
  onLocationPress?: () => void;
  onNotificationsPress?: () => void;
  onSearchChange?: (value: string) => void;
  onFilterPress?: () => void;
  onCartPress?: () => void;
  onTabPress?: (tab: UserTab) => void;
}

export default function UserSlotsShopCards({
  onAddSlot,
  onLocationPress,
  onNotificationsPress,
  onSearchChange,
  onFilterPress,
  onCartPress,
  onTabPress,
}: UserSlotsShopCardsProps) {
  const [activeFilter, setActiveFilter] =
    useState<ShopFilter>("All");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredShops = USER_SLOTS_SHOPS.filter((shop) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      shop.name.toLowerCase().includes(query) ||
      shop.location.toLowerCase().includes(query);

    if (!matchesSearch) {
      return false;
    }

    if (activeFilter === "Top Rated") {
      return shop.rating >= 4.5;
    }

    if (activeFilter === "Near Me") {
      return shop.location.toLowerCase().includes("purnea");
    }

    // Availability will be connected to real booking data later.
    return true;
  });

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <UserHeader
          userName="Raman"
          location="Purnea, Bihar"
          notificationCount={1}
          searchValue={searchQuery}
          onLocationPress={onLocationPress ?? (() => {})}
          onNotificationsPress={
            onNotificationsPress ?? (() => {})
          }
          onSearchChange={handleSearchChange}
          onFilterPress={onFilterPress ?? (() => {})}
          onCartPress={onCartPress ?? (() => {})}
        />
      </View>

      {/* Page heading */}
      <View style={styles.pageHeading}>
        <Text style={styles.title}>
          {USER_SLOTS_CONTENT.title}
        </Text>

        <Text style={styles.subtitle}>
          {USER_SLOTS_CONTENT.subtitle}
        </Text>
      </View>

      {/* Filters: do not allow the horizontal scroll view to grow vertically */}
      <ScrollView
        horizontal
        style={{ flexGrow: 0, flexShrink: 0 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersContainer}
      >
        {USER_SLOTS_CONTENT.filters.map((filter) => {
          const selected = activeFilter === filter;

          return (
            <Pressable
              key={filter}
              style={[
                styles.filterButton,
                selected && styles.filterButtonActive,
              ]}
              onPress={() =>
                setActiveFilter(filter as ShopFilter)
              }
              accessibilityRole="button"
              accessibilityState={{ selected }}
            >
              <Text
                style={[
                  styles.filterText,
                  selected && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Shop list occupies only the remaining available space */}
      <ScrollView
        style={styles.shopList}
        contentContainerStyle={styles.shopListContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {filteredShops.map((shop) => (
          <View key={shop.id} style={styles.shopCard}>
            <Image
              source={SHOP_IMAGES[shop.imageKey]}
              style={styles.shopImage}
              resizeMode="cover"
            />

            <View style={styles.shopDetails}>
              <Text
                style={styles.shopName}
                numberOfLines={2}
              >
                {shop.name}
              </Text>

              <View style={styles.detailRow}>
                <Ionicons
                  name="star"
                  size={16}
                  color="#FFA51F"
                />

                <Text style={styles.detailText}>
                  {shop.rating.toFixed(1)} ({shop.reviewCount} reviews)
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons
                  name="location-outline"
                  size={17}
                  color="#7B8798"
                />

                <Text
                  style={styles.detailText}
                  numberOfLines={1}
                >
                  {shop.location}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Ionicons
                  name="time-outline"
                  size={17}
                  color="#7B8798"
                />

                <Text
                  style={styles.detailText}
                  numberOfLines={2}
                >
                  {USER_SLOTS_CONTENT.openLabel} · {shop.openingTime} - {shop.closingTime}
                </Text>
              </View>

              <Pressable
                style={styles.addSlotButton}
                onPress={() => onAddSlot(shop)}
                accessibilityRole="button"
                accessibilityLabel={`Add slot at ${shop.name}`}
              >
                <Ionicons
                  name="calendar-outline"
                  size={19}
                  color="#FFFFFF"
                />

                <Text style={styles.addSlotText}>
                  {USER_SLOTS_CONTENT.addSlot}
                </Text>
              </Pressable>
            </View>
          </View>
        ))}

        {filteredShops.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons
              name="search-outline"
              size={36}
              color="#7B8798"
            />

            <Text style={styles.emptyTitle}>
              No shops found
            </Text>

            <Text style={styles.emptySubtitle}>
              Try another search or filter.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomNavigation}>
        <UserBottomNav
          activeTab="slots"
          onTabPress={onTabPress}
        />
      </View>
    </View>
  );
}