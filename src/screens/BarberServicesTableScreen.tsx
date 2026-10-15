import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Pressable,
  Alert,
} from "react-native";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";
import BarberServices from "../components/barber/BarberServices";
import BarberServicesTable from "../components/barber/BarberServicesTable";

import {
  INITIAL_BARBER_SERVICES,
  type BarberService,
} from "../constants/barberServices";

import { styles } from "./BarberServicesTableScreen.styles";

type ServicesTab = "ADD_SERVICE" | "MY_SERVICES";

export default function BarberServicesTableScreen() {
  const [activeTab, setActiveTab] =
    useState<ServicesTab>("ADD_SERVICE");

  const [services, setServices] = useState<BarberService[]>(
    INITIAL_BARBER_SERVICES
  );

  const handleSubmitService = (
    service: Omit<BarberService, "id" | "createdAt" | "status">
  ) => {
    const newService: BarberService = {
      ...service,
      id: `SRV${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 10),
      status: "PENDING",
    };

    setServices((previous) => [newService, ...previous]);
  };

  const handleDeleteService = (service: BarberService) => {
    setServices((previous) =>
      previous.filter((item) => item.id !== service.id)
    );
  };

  const handleViewService = (service: BarberService) => {
    Alert.alert(
      service.title,
      `Service ID: ${service.id}\n\nPrice: ₹${service.price}\nDuration: ${service.duration} minutes\nGender: ${service.gender}\nStatus: ${service.status}\n\n${service.description}`
    );
  };

  const handleEditService = (service: BarberService) => {
    Alert.alert(
      "Edit Service",
      `Editing "${service.title}" will be implemented next.`
    );
  };

  return (
    <View style={styles.container}>
      <BarberHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.intro}>
          <Text style={styles.eyebrow}>SERVICE MANAGEMENT</Text>
          <Text style={styles.screenTitle}>Services</Text>
          <Text style={styles.screenSubtitle}>
            Add services, manage submissions, and track approval status.
          </Text>
        </View>

        {/* Services tabs */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#EDEBFA",
            padding: 4,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Pressable
            onPress={() => setActiveTab("ADD_SERVICE")}
            style={{
              flex: 1,
              paddingVertical: 12,
              alignItems: "center",
              borderRadius: 9,
              backgroundColor:
                activeTab === "ADD_SERVICE"
                  ? "#6558D3"
                  : "transparent",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color:
                  activeTab === "ADD_SERVICE"
                    ? "#FFFFFF"
                    : "#6558D3",
              }}
            >
              Add Service
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("MY_SERVICES")}
            style={{
              flex: 1,
              paddingVertical: 12,
              alignItems: "center",
              borderRadius: 9,
              backgroundColor:
                activeTab === "MY_SERVICES"
                  ? "#6558D3"
                  : "transparent",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color:
                  activeTab === "MY_SERVICES"
                    ? "#FFFFFF"
                    : "#6558D3",
              }}
            >
              My Services
            </Text>
          </Pressable>
        </View>

        {/* Active tab content */}
        {activeTab === "ADD_SERVICE" ? (
          <BarberServices
            onViewAll={() => setActiveTab("MY_SERVICES")}
            onSubmitService={handleSubmitService}
          />
        ) : (
          <BarberServicesTable
            services={services}
            onAddNew={() => setActiveTab("ADD_SERVICE")}
            onView={handleViewService}
            onEdit={handleEditService}
            onDelete={handleDeleteService}
          />
        )}
      </ScrollView>

      <BarberBottomNav />
    </View>
  );
}