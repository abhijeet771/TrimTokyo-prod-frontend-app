import React, { useState } from "react";
import { View, ScrollView, Alert,} from "react-native";
import { useRouter } from "expo-router";

import UserHeader from "../../components/user/UserHeader";
import UserShopCategories from "../../components/user/UserShopCategories";
import UserPopularBarbersShops from "../../components/user/UserPopularBarbersShops";
import UserBottomNav, { type UserTab,} from "../../components/user/UserBottomNav";

import type { PopularBarber, NearbyShop,} from "../../constants/user/userPopularBarbersShops";

import { styles } from "./UserShopScreen.styles";

export default function UserShopScreen() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<UserTab>("home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocationPress = () => {
    Alert.alert(
      "Choose Location",
      "Location selection will be available soon."
    );
  };

  const handleNotificationsPress = () => {
    Alert.alert(
      "Notifications",
      "Your notifications will appear here."
    );
  };

  const handleFilterPress = () => {
    Alert.alert(
      "Filters",
      "Shop filters will be available soon."
    );
  };

  const handleCartPress = () => {
    Alert.alert(
      "Cart",
      "Your cart will appear here."
    );
  };

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log("Selected category:", categoryId);
  };

  const handleBookNowPress = () => {
    console.log("Promotional banner booking pressed");
  };

  const handleBarberPress = (barber: PopularBarber) => {
    console.log("Selected barber:", barber.id);
  };

  const handleShopPress = (shop: NearbyShop) => {
    console.log("Selected shop:", shop.id);
  };

  const handleFavoritePress = (
    shop: NearbyShop,
    isFavorite: boolean
  ) => {
    console.log(
      `${shop.name} ${
        isFavorite ? "added to" : "removed from"
      } favorites`
    );
  };

  const handleTabPress = (tab: UserTab) => {
    setActiveTab(tab);

    switch (tab) {
      case "home":
        router.replace("/user");
        break;

      case "home-service":
        router.push("/user/home-service");
        break;

      case "slots":
        router.push("/user/slots");
        break;

      case "event":
        router.push("/user/event");
        break;

      case "more":
        router.push("/user/more");
        break;
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <UserHeader
          userName="Adam"
          location="Choose your location"
          notificationCount={1}
          searchValue={searchQuery}
          onLocationPress={handleLocationPress}
          onNotificationsPress={handleNotificationsPress}
          onSearchChange={setSearchQuery}
          onFilterPress={handleFilterPress}
          onCartPress={handleCartPress}
        />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <UserShopCategories
          selectedCategory={selectedCategory}
          onCategoryPress={handleCategoryPress}
          onBookNowPress={handleBookNowPress}
        />

        <UserPopularBarbersShops
          onBarberPress={handleBarberPress}
          onShopPress={handleShopPress}
          onSeeAllBarbersPress={() => {
            console.log("View all barbers");
          }}
          onSeeAllShopsPress={() => {
            console.log("View all nearby shops");
          }}
          onFavoritePress={handleFavoritePress}
        />
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <UserBottomNav
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />
      </View>
    </View>
  );
}