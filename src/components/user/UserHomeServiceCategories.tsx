
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./UserHomeServiceCategories.styles";

import {
  USER_HOME_SERVICE_CATEGORIES,
  USER_HOME_SERVICE_BANNER,
} from "../../constants/user/userHomeService";

interface UserHomeServiceCategoriesProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onFilterPress?: () => void;
  onBookNowPress?: () => void;
  onCategoryPress?: (categoryId: string) => void;
  onSeeAllPress?: () => void;
}

export default function UserHomeServiceCategories({
  searchValue,
  onSearchChange,
  onFilterPress,
  onBookNowPress,
  onCategoryPress,
  onSeeAllPress,
}: UserHomeServiceCategoriesProps) {
  const [search, setSearch] = useState(searchValue ?? "");

  React.useEffect(() => {
    if (searchValue !== undefined) {
      setSearch(searchValue);
    }
  }, [searchValue]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange?.(value);
  };

  return (
    <View style={styles.container}>
      {/* Search */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={22}
            color="#71839F"
          />

          <TextInput
            value={search}
            onChangeText={handleSearchChange}
            placeholder="Search services at home..."
            placeholderTextColor="#8293AD"
            style={styles.searchInput}
            returnKeyType="search"
            accessibilityLabel="Search home services"
          />

          {search.length > 0 && (
            <Pressable
              onPress={() => handleSearchChange("")}
              accessibilityLabel="Clear search"
            >
              <Ionicons
                name="close-circle"
                size={19}
                color="#8293AD"
              />
            </Pressable>
          )}
        </View>

        <Pressable
          style={styles.filterButton}
          onPress={onFilterPress}
          accessibilityRole="button"
          accessibilityLabel="Filter home services"
        >
          <Ionicons
            name="options-outline"
            size={24}
            color="#18334F"
          />
        </Pressable>
      </View>

      {/* Promotional banner */}
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerEyebrow}>
            {USER_HOME_SERVICE_BANNER.eyebrow}
          </Text>

          <Text style={styles.bannerTitle}>
            {USER_HOME_SERVICE_BANNER.title}
          </Text>

          <Text style={styles.bannerSubtitle}>
            {USER_HOME_SERVICE_BANNER.subtitle}
          </Text>

          <Pressable
            style={styles.bookButton}
            onPress={onBookNowPress}
            accessibilityRole="button"
          >
            <Text style={styles.bookButtonText}>
              {USER_HOME_SERVICE_BANNER.buttonText}
            </Text>

            <Ionicons
              name="arrow-forward"
              size={17}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        <View
          pointerEvents="none"
          style={styles.bannerImagePlaceholder}
        >
          <Ionicons
            name="cut-outline"
            size={64}
            color="#8BBCEB"
          />
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>

        <Pressable
          style={styles.seeAllButton}
          onPress={onSeeAllPress}
          accessibilityRole="button"
        >
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons
            name="arrow-forward"
            size={17}
            color="#1769F5"
          />
        </Pressable>
      </View>

      <View style={styles.categoriesGrid}>
        {USER_HOME_SERVICE_CATEGORIES.map((category) => (
          <Pressable
            key={category.id}
            style={styles.categoryItem}
            onPress={() => onCategoryPress?.(category.id)}
            accessibilityRole="button"
            accessibilityLabel={category.label}
          >
            <View
              style={[
                styles.categoryIconContainer,
                { backgroundColor: category.backgroundColor },
              ]}
            >
              <Ionicons
                name={
                  category.icon as keyof typeof Ionicons.glyphMap
                }
                size={31}
                color={category.iconColor}
              />
            </View>

            <Text
              style={styles.categoryLabel}
              numberOfLines={1}
            >
              {category.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
