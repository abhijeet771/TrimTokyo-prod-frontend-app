import React, { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BARBER_ORDERS, ALL_ORDERS_CONTENT, BARBER_ORDER_STATUS_LABELS, BARBER_ORDER_STATUS_COLORS, ORDER_TABLE_COLUMNS, BarberOrder,
} from "../../constants/barberorder";

import { styles } from "./AllOrdersTable.styles";
interface AllOrdersTableProps { orders?: BarberOrder[]; onOrderPress?: (order: BarberOrder) => void;}

export default function AllOrdersTable({  orders = BARBER_ORDERS,  onOrderPress,}: AllOrdersTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>( ALL_ORDERS_CONTENT.rowsPerPage);
  const [showPageSizeOptions, setShowPageSizeOptions] = useState(false);
  const totalPages = Math.max( 1, Math.ceil(orders.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const pageOrders = useMemo(() => {
    const startIndex = (safePage - 1) * pageSize;
    return orders.slice(startIndex, startIndex + pageSize);
  }, [orders, safePage, pageSize]);

  const firstRecord = orders.length === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const lastRecord = Math.min( safePage * pageSize, orders.length);

  const changePageSize = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
    setShowPageSizeOptions(false);
  };

  const renderCell = (
    order: BarberOrder,
    columnKey: string
  ) => {
    switch (columnKey) {
      case "orderNumber":
        return (
          <Text style={styles.orderId}>
            {order.orderNumber}
          </Text>
        );

      case "customerName":
        return (
          <View style={styles.customerCell}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {order.customerName.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("")}
              </Text>
            </View>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName} numberOfLines={1}>
                {order.customerName}
              </Text>
              <Text style={styles.phone} numberOfLines={1}>
                {order.phone}
              </Text>
            </View>
          </View>
        );

      case "serviceName":
        return (
          <View>
            <Text style={styles.serviceName} numberOfLines={2}>
              {order.serviceName}
            </Text>
            <Text style={styles.quantity}>
              Qty: {order.quantity}
            </Text>
          </View>
        );

      case "date": return <Text style={styles.cellText}>{order.date}</Text>;
      case "time": return <Text style={styles.cellText}>{order.time}</Text>;
      case "status": { const colors = BARBER_ORDER_STATUS_COLORS[order.status];

        return (
          <View
            style={[ styles.statusBadge, { backgroundColor: colors.background },]}>
            <Text
              style={[ styles.statusText, { color: colors.text },]}>
              {BARBER_ORDER_STATUS_LABELS[order.status]}
            </Text>
          </View>
        );
      }

      case "amount":
        return (
          <Text style={styles.amount}>
            ₹{order.amount.toLocaleString("en-IN")}
          </Text>
        );
      default: return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>
          {ALL_ORDERS_CONTENT.title}
        </Text>
        <Text style={styles.subtitle}>
          {ALL_ORDERS_CONTENT.subtitle}
        </Text>
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyCard}>
          <Ionicons name="receipt-outline" size={38} color="#5145FF"/>
          <Text style={styles.emptyTitle}>
            {ALL_ORDERS_CONTENT.emptyTitle}
          </Text>
          <Text style={styles.emptyDescription}>
            {ALL_ORDERS_CONTENT.emptyDescription}
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.tableCard}>
            <View style={styles.tableInfo}>
              <Text style={styles.recordCount}>
                {firstRecord}–{lastRecord} of {orders.length} orders
              </Text>

              <View style={styles.scrollHint}>
                <Ionicons name="swap-horizontal-outline" size={15} color="#71839F"/>
                <Text style={styles.scrollHintText}>
                  Swipe to view all columns
                </Text>
              </View>
            </View>

            <ScrollView horizontal
              showsHorizontalScrollIndicator
              nestedScrollEnabled
            >
              <View>
                <View style={styles.tableHeader}>
                  {ORDER_TABLE_COLUMNS.map((column) => (
                    <View
                      key={column.key}
                      style={[
                        styles.headerCell,
                        { width: column.width },
                      ]}
                    >
                      <Text style={styles.headerText}>
                        {column.label}
                      </Text>
                    </View>
                  ))}
                </View>

                {pageOrders.map((order) => (
                  <Pressable
                    key={order.id}
                    style={styles.tableRow}
                    onPress={() => onOrderPress?.(order)}
                    accessibilityRole="button"
                    accessibilityLabel={
                      `View order ${order.orderNumber}`
                    }
                  >
                    {ORDER_TABLE_COLUMNS.map((column) => (
                      <View
                        key={`${order.id}-${column.key}`}
                        style={[
                          styles.cell,
                          { width: column.width },
                        ]}
                      >
                        {renderCell(order, column.key)}
                      </View>
                    ))}
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.pagination}>
            <View style={styles.pageSizeContainer}>
              <Text style={styles.pageSizeLabel}>
                Rows:
              </Text>

              <Pressable
                style={styles.pageSizeButton}
                onPress={() => setShowPageSizeOptions((previous) => !previous)}>
                <Text style={styles.pageSizeValue}>
                  {pageSize}
                </Text>
                <Ionicons name="chevron-down" size={14} color="#475569"/>
              </Pressable>
            </View>

            <View style={styles.pageControls}>
              <Pressable
                style={[
                  styles.pageButton,
                  safePage === 1 && styles.disabledPageButton,
                ]}
                disabled={safePage === 1}
                onPress={() => setCurrentPage((page) => Math.max(1, page - 1))}
                accessibilityLabel="Previous page"
              >
                <Ionicons name="chevron-back" size={18} color={safePage === 1 ? "#B6C0D0" : "#334155"}/>
              </Pressable>

              <Text style={styles.pageText}>
                {safePage} / {totalPages}
              </Text>

              <Pressable
                style={[ styles.pageButton,
                  safePage === totalPages && styles.disabledPageButton, ]}
                disabled={safePage === totalPages}
                onPress={() =>
                  setCurrentPage((page) =>
                    Math.min(totalPages, page + 1)
                  )
                }
                accessibilityLabel="Next page"
              >
                <Ionicons name="chevron-forward"
                  size={18}
                  color={ safePage === totalPages ? "#B6C0D0" : "#334155" }
                />
              </Pressable>
            </View>
          </View>

          {showPageSizeOptions && (
            <View style={styles.pageSizeOptions}>
              {ALL_ORDERS_CONTENT.rowsPerPageOptions.map(
                (size) => (
                  <Pressable
                    key={size}
                    style={[
                      styles.pageSizeOption,
                      pageSize === size &&
                        styles.selectedPageSizeOption,
                    ]}
                    onPress={() => changePageSize(size)}
                  >
                    <Text style={[
                        styles.pageSizeOptionText,
                        pageSize === size &&
                          styles.selectedPageSizeOptionText,
                      ]}
                    >
                      {size} rows
                    </Text>
                  </Pressable>
                )
              )}
            </View>
          )}
        </>
      )}
    </View>
  );
}