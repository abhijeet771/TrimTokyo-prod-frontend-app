import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./UserPopularBarbersShops.styles";

import {
  USER_POPULAR_BARBERS,
  USER_NEARBY_SHOPS,
  USER_SHOP_SECTION_LABELS,
  type PopularBarber,
  type NearbyShop,
} from "../../constants/user/userPopularBarbersShops";

interface UserPopularBarbersShopsProps {
  onBarberPress?: (barber: PopularBarber) => void;
  onShopPress?: (shop: NearbyShop) => void;
  onSeeAllBarbersPress?: () => void;
  onSeeAllShopsPress?: () => void;
  onFavoritePress?: (
    shop: NearbyShop,
    isFavorite: boolean
  ) => void;
}

const BARBER_IMAGES: Record<number, number> = {
  1: require("../../assets/barber/b1.png"),
  2: require("../../assets/barber/b2.png"),
  3: require("../../assets/barber/b3.png"),
  4: require("../../assets/barber/b4.png"),
};

const SHOP_IMAGES: Record<number, number> = {
  1: require("../../assets/shop/s1.png"),
};

export default function UserPopularBarbersShops({
  onBarberPress,
  onShopPress,
  onSeeAllBarbersPress,
  onSeeAllShopsPress,
  onFavoritePress,
}: UserPopularBarbersShopsProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (shop: NearbyShop) => {
    const isFavorite = favorites.includes(shop.id);

    setFavorites((current) =>
      isFavorite
        ? current.filter((id) => id !== shop.id)
        : [...current, shop.id]
    );

    onFavoritePress?.(shop, !isFavorite);
  };

  return (
    <View style={styles.container}>
      {/* Popular Barbers */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {USER_SHOP_SECTION_LABELS.popularBarbers}
          </Text>

          <Pressable
            style={styles.seeAllButton}
            onPress={onSeeAllBarbersPress}
            accessibilityRole="button"
            accessibilityLabel="See all popular barbers"
          >
            <Text style={styles.seeAllText}>
              {USER_SHOP_SECTION_LABELS.seeAll}
            </Text>

            <Ionicons
              name="chevron-forward"
              size={15}
              color="#1769F5"
            />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.barbersContent}
        >
          {USER_POPULAR_BARBERS.map((barber) => (
            <Pressable
              key={barber.id}
              style={styles.barberCard}
              onPress={() => onBarberPress?.(barber)}
              accessibilityRole="button"
              accessibilityLabel={`View ${barber.name}`}
            >
              <Image
                source={BARBER_IMAGES[barber.imageKey]}
                style={styles.barberImage}
                resizeMode="cover"
              />

              <View style={styles.barberInfo}>
                <Text
                  style={styles.barberName}
                  numberOfLines={1}
                >
                  {barber.name}
                </Text>

                <View style={styles.ratingRow}>
                  <Ionicons
                    name="star"
                    size={12}
                    color="#F5AE24"
                  />

                  <Text style={styles.ratingText}>
                    {barber.rating.toFixed(1)}
                  </Text>
                </View>

                <Text
                  style={styles.bookingText}
                  numberOfLines={1}
                >
                  {barber.bookings}+ bookings
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Nearby Shops */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {USER_SHOP_SECTION_LABELS.nearbyShops}
          </Text>

          <Pressable
            style={styles.seeAllButton}
            onPress={onSeeAllShopsPress}
            accessibilityRole="button"
            accessibilityLabel="See all nearby shops"
          >
            <Text style={styles.seeAllText}>
              {USER_SHOP_SECTION_LABELS.seeAll}
            </Text>

            <Ionicons
              name="chevron-forward"
              size={15}
              color="#1769F5"
            />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.shopsContent}
        >
          {USER_NEARBY_SHOPS.map((shop) => {
            const isFavorite = favorites.includes(shop.id);

            return (
              <View
                key={shop.id}
                style={styles.shopCard}
              >
                {/* Shop image and favorite button */}
                <View style={styles.shopImageContainer}>
                  <Pressable
                    style={styles.shopImagePressable}
                    onPress={() => onShopPress?.(shop)}
                    accessibilityRole="button"
                    accessibilityLabel={`View ${shop.name}`}
                  >
                    <Image
                      source={SHOP_IMAGES[shop.imageKey]}
                      style={styles.shopImage}
                      resizeMode="cover"
                    />
                  </Pressable>

                  {/* Separate sibling button: no nested buttons */}
                  <Pressable
                    style={styles.favoriteButton}
                    onPress={() => toggleFavorite(shop)}
                    accessibilityRole="button"
                    accessibilityLabel={
                      isFavorite
                        ? "Remove shop from favorites"
                        : "Add shop to favorites"
                    }
                  >
                    <Ionicons
                      name={
                        isFavorite
                          ? "heart"
                          : "heart-outline"
                      }
                      size={19}
                      color={
                        isFavorite ? "#F04452" : "#FFFFFF"
                      }
                    />
                  </Pressable>
                </View>

                {/* Shop details */}
                <View style={styles.shopInfo}>
                  <Pressable
                    onPress={() => onShopPress?.(shop)}
                    accessibilityRole="button"
                    accessibilityLabel={`View ${shop.name} details`}
                  >
                    <View style={styles.shopNameRow}>
                      <Text
                        style={styles.shopName}
                        numberOfLines={1}
                      >
                        {shop.name}
                      </Text>

                      {shop.verified && (
                        <Ionicons
                          name="checkmark-circle"
                          size={15}
                          color="#2475F5"
                        />
                      )}
                    </View>
                  </Pressable>

                  {/* Rating and distance */}
                  <View style={styles.shopMetaRow}>
                    <Ionicons
                      name="star"
                      size={13}
                      color="#F5AE24"
                    />

                    <Text style={styles.shopRating}>
                      {shop.rating.toFixed(1)}
                    </Text>

                    <Text style={styles.shopMuted}>
                      ({shop.reviewCount}+)
                    </Text>

                    <Text style={styles.shopSeparator}>
                      ·
                    </Text>

                    <Ionicons
                      name="location-outline"
                      size={12}
                      color="#7A8BA0"
                    />

                    <Text
                      style={styles.shopMuted}
                      numberOfLines={1}
                    >
                      {shop.distance}
                    </Text>
                  </View>

                  {/* Price and opening status */}
                  <View style={styles.shopMetaRow}>
                    <Text style={styles.priceLabel}>
                      {shop.priceLabel}
                    </Text>

                    <Text style={styles.shopSeparator}>
                      ·
                    </Text>

                    <View
                      style={[
                        styles.statusDot,
                        shop.openingStatus === "OPEN"
                          ? styles.openDot
                          : styles.closedDot,
                      ]}
                    />

                    <Text
                      style={[
                        styles.openStatus,
                        shop.openingStatus === "OPEN"
                          ? styles.openText
                          : styles.closedText,
                      ]}
                    >
                      {shop.openingStatus === "OPEN"
                        ? USER_SHOP_SECTION_LABELS.open
                        : USER_SHOP_SECTION_LABELS.closed}
                    </Text>

                    <Text
                      style={styles.shopMuted}
                      numberOfLines={1}
                    >
                      · {shop.closingTime}
                    </Text>
                  </View>

                  {/* Services */}
                  <View style={styles.serviceTags}>
                    {shop.services.slice(0, 3).map((service) => (
                      <View
                        key={service}
                        style={styles.serviceTag}
                      >
                        <Text
                          style={styles.serviceTagText}
                          numberOfLines={1}
                        >
                          {service}
                        </Text>
                      </View>
                    ))}

                    {shop.services.length > 3 && (
                      <View style={styles.serviceTag}>
                        <Text style={styles.serviceTagText}>
                          +{shop.services.length - 3}
                        </Text>
                      </View>
                    )}
                  </View>

                  {/* View shop action */}
                  <Pressable
                    style={styles.viewShopButton}
                    onPress={() => onShopPress?.(shop)}
                    accessibilityRole="button"
                  >
                    <Text style={styles.viewShopText}>
                      {USER_SHOP_SECTION_LABELS.viewShop}
                    </Text>

                    <Ionicons
                      name="arrow-forward"
                      size={15}
                      color="#1769F5"
                    />
                  </Pressable>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
