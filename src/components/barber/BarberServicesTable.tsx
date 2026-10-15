import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  INITIAL_BARBER_SERVICES,
  BARBER_SERVICE_STATUSES,
  BARBER_SERVICE_STATUS_COLORS,
  BARBER_SERVICE_TABLE_CONTENT,
  type BarberService,
  type BarberServiceStatus,
} from "../../constants/barberServices";

import { styles } from "./BarberServicesTable.styles";

type ServiceFilter = "ALL" | BarberServiceStatus;

interface BarberServicesTableProps {
  services?: BarberService[];
  onAddNew?: () => void;
  onView?: (service: BarberService) => void;
  onEdit?: (service: BarberService) => void;
  onDelete?: (service: BarberService) => void;
}

export default function BarberServicesTable({
  services: servicesProp,
  onAddNew,
  onView,
  onEdit,
  onDelete,
}: BarberServicesTableProps) {
  // Local fallback is retained for standalone use.
  const [localServices, setLocalServices] =
    useState<BarberService[]>(INITIAL_BARBER_SERVICES);

  // Prefer services owned by the parent screen when provided.
  const services = servicesProp ?? localServices;

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<ServiceFilter>("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [menuServiceId, setMenuServiceId] =
    useState<string | null>(null);

  const rowsPerPage = BARBER_SERVICE_TABLE_CONTENT.rowsPerPage;

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return services.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.id.toLowerCase().includes(query);

      const matchesStatus =
        activeFilter === "ALL" ||
        service.status === activeFilter;

      return matchesSearch && matchesStatus;
    });
  }, [services, search, activeFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredServices.length / rowsPerPage)
  );

  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const changeFilter = (filter: ServiceFilter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setMenuServiceId(null);
  };

  const changeSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleView = (service: BarberService) => {
    setMenuServiceId(null);

    if (onView) {
      onView(service);
      return;
    }

    Alert.alert(
      service.title,
      `Service ID: ${service.id}\n\nPrice: ₹${service.price}\nDuration: ${service.duration} minutes\nGender: ${service.gender}\nStatus: ${service.status}\n\n${service.description}`
    );
  };

  const handleEdit = (service: BarberService) => {
    setMenuServiceId(null);

    if (onEdit) {
      onEdit(service);
      return;
    }

    Alert.alert(
      "Edit Service",
      `Editing "${service.title}" will be connected here.`
    );
  };

  const handleDelete = (service: BarberService) => {
    setMenuServiceId(null);

    Alert.alert(
      "Delete Service",
      `Are you sure you want to delete "${service.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            if (onDelete) {
              onDelete(service);
            } else {
              setLocalServices((previous) =>
                previous.filter((item) => item.id !== service.id)
              );
            }

            setCurrentPage(1);
          },
        },
      ]
    );
  };

  const renderStatusFilter = (
    filter: (typeof BARBER_SERVICE_STATUSES)[number]
  ) => {
    const selected = activeFilter === filter.value;

    return (
      <Pressable
        key={filter.value}
        style={[
          styles.filterChip,
          selected && styles.filterChipSelected,
        ]}
        onPress={() => changeFilter(filter.value)}
      >
        <Text
          style={[
            styles.filterChipText,
            selected && styles.filterChipTextSelected,
          ]}
        >
          {filter.label}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <View style={styles.headerText}>
          <Text style={styles.pageTitle}>My Services</Text>
          <Text style={styles.pageSubtitle}>
            Manage your submitted services
          </Text>
        </View>

        <Pressable
          style={styles.addButton}
          onPress={onAddNew}
          accessibilityRole="button"
        >
          <Ionicons name="add" size={20} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add New</Text>
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#858A9B"
        />

        <TextInput
          style={styles.searchInput}
          placeholder={BARBER_SERVICE_TABLE_CONTENT.searchPlaceholder}
          placeholderTextColor="#9298AA"
          value={search}
          onChangeText={changeSearch}
          autoCapitalize="none"
          returnKeyType="search"
        />

        {search.length > 0 && (
          <Pressable
            onPress={() => changeSearch("")}
            accessibilityLabel="Clear search"
          >
            <Ionicons
              name="close-circle"
              size={19}
              color="#9298AA"
            />
          </Pressable>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersContainer}
      >
        {BARBER_SERVICE_STATUSES.map(renderStatusFilter)}
      </ScrollView>

      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>
          Services ({filteredServices.length})
        </Text>
        <Text style={styles.resultsSubtitle}>
          Page {currentPage} of {totalPages}
        </Text>
      </View>

      {paginatedServices.length === 0 ? (
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="cut-outline"
              size={30}
              color="#6558D3"
            />
          </View>

          <Text style={styles.emptyTitle}>
            No services found
          </Text>

          <Text style={styles.emptyDescription}>
            Try changing your search or status filter.
          </Text>
        </View>
      ) : (
        <View style={styles.servicesList}>
          {paginatedServices.map((service) => {
            const statusStyle =
              BARBER_SERVICE_STATUS_COLORS[service.status];

            return (
              <View key={service.id} style={styles.serviceCard}>
                <Pressable
                  style={styles.serviceMain}
                  onPress={() => handleView(service)}
                >
                  <Image
                    source={service.image}
                    style={styles.serviceImage}
                    resizeMode="cover"
                  />

                  <View style={styles.serviceInfo}>
                    <Text
                      style={styles.serviceTitle}
                      numberOfLines={1}
                    >
                      {service.title}
                    </Text>

                    <Text style={styles.serviceMeta}>
                      ₹{service.price} {"  "}•{"  "}
                      {service.duration} mins
                    </Text>

                    <Text
                      style={styles.serviceDescription}
                      numberOfLines={2}
                    >
                      {service.description}
                    </Text>

                    <Text style={styles.serviceGender}>
                      {service.gender === "MALE"
                        ? "Male"
                        : service.gender === "FEMALE"
                          ? "Female"
                          : "Unisex"}
                    </Text>
                  </View>
                </Pressable>

                <View style={styles.serviceFooter}>
                  <View
                    style={[
                      styles.statusBadge,
                      {
                        backgroundColor:
                          statusStyle.backgroundColor,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        { color: statusStyle.color },
                      ]}
                    >
                      {service.status}
                    </Text>
                  </View>

                  <Pressable
                    style={styles.moreButton}
                    onPress={() =>
                      setMenuServiceId((previous) =>
                        previous === service.id
                          ? null
                          : service.id
                      )
                    }
                    accessibilityLabel={`Actions for ${service.title}`}
                  >
                    <Ionicons
                      name="ellipsis-vertical"
                      size={20}
                      color="#68718A"
                    />
                  </Pressable>
                </View>

                {menuServiceId === service.id && (
                  <View style={styles.actionMenu}>
                    <Pressable
                      style={styles.actionItem}
                      onPress={() => handleView(service)}
                    >
                      <Ionicons
                        name="eye-outline"
                        size={18}
                        color="#68718A"
                      />
                      <Text style={styles.actionText}>View</Text>
                    </Pressable>

                    <Pressable
                      style={styles.actionItem}
                      onPress={() => handleEdit(service)}
                    >
                      <Ionicons
                        name="create-outline"
                        size={18}
                        color="#6558D3"
                      />
                      <Text style={styles.actionText}>Edit</Text>
                    </Pressable>

                    <Pressable
                      style={styles.actionItem}
                      onPress={() => handleDelete(service)}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={18}
                        color="#DC2626"
                      />
                      <Text
                        style={[
                          styles.actionText,
                          styles.deleteActionText,
                        ]}
                      >
                        Delete
                      </Text>
                    </Pressable>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}

      <View style={styles.pagination}>
        <Pressable
          style={[
            styles.pageButton,
            currentPage === 1 && styles.pageButtonDisabled,
          ]}
          disabled={currentPage === 1}
          onPress={() =>
            setCurrentPage((page) => Math.max(1, page - 1))
          }
        >
          <Ionicons
            name="chevron-back"
            size={17}
            color={currentPage === 1 ? "#B7BBC7" : "#6558D3"}
          />
          <Text
            style={[
              styles.pageButtonText,
              currentPage === 1 && styles.pageButtonTextDisabled,
            ]}
          >
            Previous
          </Text>
        </Pressable>

        <Text style={styles.pageIndicator}>
          {currentPage} / {totalPages}
        </Text>

        <Pressable
          style={[
            styles.pageButton,
            currentPage === totalPages &&
              styles.pageButtonDisabled,
          ]}
          disabled={currentPage === totalPages}
          onPress={() =>
            setCurrentPage((page) =>
              Math.min(totalPages, page + 1)
            )
          }
        >
          <Text
            style={[
              styles.pageButtonText,
              currentPage === totalPages &&
                styles.pageButtonTextDisabled,
            ]}
          >
            Next
          </Text>
          <Ionicons
            name="chevron-forward"
            size={17}
            color={
              currentPage === totalPages ? "#B7BBC7" : "#6558D3"
            }
          />
        </Pressable>
      </View>
    </View>
  );
}