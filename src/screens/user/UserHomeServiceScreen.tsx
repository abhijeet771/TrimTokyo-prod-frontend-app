import React, { useState } from "react";
import {
  View,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

import UserHeader from "../../components/user/UserHeader";
import UserBottomNav, {
  type UserTab,
} from "../../components/user/UserBottomNav";
import UserHomeServiceCategories from "../../components/user/UserHomeServiceCategories";
import UserPopularHomeServices from "../../components/user/UserPopularHomeServices";

import type { HomeService } from "../../constants/user/userPopularHomeServices";

import { styles } from "./UserHomeServiceScreen.styles";

export default function UserHomeServiceScreen() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [addedServiceIds, setAddedServiceIds] =
    useState<string[]>([]);

  const activeTab: UserTab = "home-service";

  const handleTabPress = (tab: UserTab) => {
    switch (tab) {
      case "home":
        router.replace("/user");
        break;

      case "home-service":
        // Already on the Home Service screen.
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

      default:
        break;
    }
  };

  const handleAddService = (service: HomeService) => {
    setAddedServiceIds((current) =>
      current.includes(service.id)
        ? current.filter((id) => id !== service.id)
        : [...current, service.id]
    );
  };

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

  const handleCartPress = () => {
    Alert.alert(
      "Your Cart",
      addedServiceIds.length > 0
        ? `${addedServiceIds.length} service(s) selected. Cart checkout will be available soon.`
        : "You haven't added any services yet."
    );
  };

  const handleFilterPress = () => {
    Alert.alert(
      "Filters",
      "Home service filters will be available soon."
    );
  };

  const handleBookNow = () => {
    console.log("Home service booking started");
  };

  const handleCategoryPress = (categoryId: string) => {
    console.log("Selected home service category:", categoryId);
  };

  const handleServicePress = (service: HomeService) => {
    console.log("Selected home service:", service.id);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <UserHeader
          userName="Raman"
          location="Purnea, Bihar"
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
        <UserHomeServiceCategories
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          onFilterPress={handleFilterPress}
          onBookNowPress={handleBookNow}
          onCategoryPress={handleCategoryPress}
          onSeeAllPress={() => {
            console.log("View all home service categories");
          }}
        />

        <UserPopularHomeServices
          addedServiceIds={addedServiceIds}
          onAddService={handleAddService}
          onServicePress={handleServicePress}
          onSeeAllPress={() => {
            console.log("View all popular home services");
          }}
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