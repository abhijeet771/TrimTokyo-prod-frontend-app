export type BarberOrderStatus =  | "PENDING"  | "CONFIRMED"  | "COMPLETED"  | "CANCELLED";

export interface BarberOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  phone: string;
  serviceName: string;
  quantity: number;
  date: string;
  time: string;
  amount: number;
  status: BarberOrderStatus;
}

export const BARBER_ORDERS_CONTENT = {
  title: "Recent Orders",
  subtitle: "Your latest customer bookings",
  viewAll: "View All",
  emptyTitle: "No recent orders",
  emptyDescription:
    "New customer bookings will appear here.",
  currency: "₹",
  recentLimit: 5,
} as const;

export const BARBER_ORDERS: BarberOrder[] = [
  {
    id: "order-001",
    orderNumber: "#TT1001",
    customerName: "Rahul Sharma",
    phone: "9876543210",
    serviceName: "Hair Cut",
    quantity: 1,
    date: "14 Oct 2026",
    time: "11:30 AM",
    amount: 300,
    status: "CONFIRMED",
  },
  {
    id: "order-002",
    orderNumber: "#TT1002",
    customerName: "Priya Mehta",
    phone: "9876543211",
    serviceName: "Hair Cut + Beard",
    quantity: 1,
    date: "14 Oct 2026",
    time: "12:00 PM",
    amount: 500,
    status: "PENDING",
  },
  {
    id: "order-003",
    orderNumber: "#TT1003",
    customerName: "Aarav Singh",
    phone: "9876543212",
    serviceName: "Beard Trim",
    quantity: 1,
    date: "14 Oct 2026",
    time: "02:00 PM",
    amount: 200,
    status: "CONFIRMED",
  },
  {
    id: "order-004",
    orderNumber: "#TT1004",
    customerName: "Karan Patel",
    phone: "9876543213",
    serviceName: "Hair Cut + Beard",
    quantity: 1,
    date: "15 Oct 2026",
    time: "10:00 AM",
    amount: 450,
    status: "COMPLETED",
  },
  {
    id: "order-005",
    orderNumber: "#TT1005",
    customerName: "Neha Gupta",
    phone: "9876543214",
    serviceName: "Hair Spa",
    quantity: 1,
    date: "15 Oct 2026",
    time: "11:00 AM",
    amount: 600,
    status: "CANCELLED",
  },
  {
    id: "order-006",
    orderNumber: "#TT1006",
    customerName: "Vikram Kumar",
    phone: "9876543215",
    serviceName: "Hair Cut",
    quantity: 1,
    date: "15 Oct 2026",
    time: "01:00 PM",
    amount: 300,
    status: "CONFIRMED",
  },
];

export const BARBER_ORDER_STATUS_LABELS: Record<
  BarberOrderStatus,
  string
> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};

export const BARBER_ORDER_STATUS_COLORS: Record<
  BarberOrderStatus,
  { background: string; text: string }
> = {
  PENDING: {
    background: "#FFF4E5",
    text: "#C77700",
  },
  CONFIRMED: {
    background: "#E8F9EE",
    text: "#16803D",
  },
  COMPLETED: {
    background: "#EAF1FF",
    text: "#2856B6",
  },
  CANCELLED: {
    background: "#FDECEC",
    text: "#D93036",
  },
};

export const ALL_ORDERS_CONTENT = {
  title: "All Orders",
  subtitle: "Manage and track all customer bookings",
  emptyTitle: "No orders found",
  emptyDescription:
    "Try changing your search or filters.",
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 15, 20],
} as const;

export const ORDER_TABLE_COLUMNS = [
  { key: "orderNumber", label: "Order ID", width: 105 },
  { key: "customerName", label: "Customer", width: 145 },
  { key: "serviceName", label: "Service", width: 145 },
  { key: "date", label: "Date", width: 115 },
  { key: "time", label: "Time", width: 100 },
  { key: "status", label: "Status", width: 115 },
  { key: "amount", label: "Amount", width: 100 },
] as const;
