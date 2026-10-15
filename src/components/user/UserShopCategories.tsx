import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "./UserShopCategories.styles";

import { USER_SHOP_CATEGORIES, USER_SHOP_BANNER,} from "../../constants/user/userShopCategories";

interface UserShopCategoriesProps {
  selectedCategory?: string;
  onCategoryPress?: (categoryId: string) => void;
  onBookNowPress?: () => void;
}

const CATEGORY_IMAGES: Record<number, number> = {
  1: require("../../assets/category/c1.png"),
  2: require("../../assets/category/c2.png"),
  3: require("../../assets/category/c3.png"),
  4: require("../../assets/category/c4.png"),
  5: require("../../assets/category/c5.png"),
  6: require("../../assets/category/c6.png"),
  7: require("../../assets/category/c7.png"),
};

export default function UserShopCategories({
  selectedCategory = "all",
  onCategoryPress,
  onBookNowPress,
}: UserShopCategoriesProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContent}
      >
        {USER_SHOP_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;

          return (
            <Pressable
              key={category.id}
              style={styles.categoryItem}
              onPress={() => onCategoryPress?.(category.id)}
              accessibilityRole="button"
              accessibilityLabel={category.title}
              accessibilityState={{ selected: isSelected }}
            >
              <View
                style={[
                  styles.categoryIconContainer,
                  isSelected && styles.selectedCategoryIcon,
                ]}
              >
                <Image
                  source={CATEGORY_IMAGES[category.imageKey]}
                  style={styles.categoryImage}
                  resizeMode="contain"
                />
              </View>

              <Text
                numberOfLines={1}
                style={[
                  styles.categoryLabel,
                  isSelected && styles.selectedCategoryLabel,
                ]}
              >
                {category.title}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerEyebrow}>
            {USER_SHOP_BANNER.eyebrow}
          </Text>

          <Text style={styles.bannerTitle}>
            {USER_SHOP_BANNER.title}{" "}
            <Text style={styles.bannerDiscount}>
              {USER_SHOP_BANNER.discount}
            </Text>
          </Text>

          <Text style={styles.bannerSubtitle}>
            {USER_SHOP_BANNER.subtitle}
          </Text>

          <Pressable
            style={styles.bookButton}
            onPress={onBookNowPress}
            accessibilityRole="button"
          >
            <Text style={styles.bookButtonText}>
              {USER_SHOP_BANNER.buttonText}
            </Text>
          </Pressable>
        </View>

        <View
          pointerEvents="none"
          style={styles.bannerDecoration}
        >
          <Text style={styles.bannerDecorationText}>✂</Text>
        </View>

        <View style={styles.bannerDots}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>
      </View>
    </View>
  );
}
