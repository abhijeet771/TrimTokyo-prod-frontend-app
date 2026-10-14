export type TablePaymentStatus =
  | "RECEIVED"
  | "PENDING"
  | "FAILED"
  | "REFUNDED";

export type TablePaymentMethod = "CASH" | "ONLINE";

export interface TablePayment {
  id: string;
  paymentId: string;
  orderId: string;
  customerName: string;
  date: string;
  time: string;
  method: TablePaymentMethod;
  amount: number;
  status: TablePaymentStatus;
  confirmedBy: string;
}

export const PAYMENTS_TABLE_CONTENT = {
  title: "Payments Table",
  subtitle: "Manage and track all payment records",
  searchPlaceholder: "Search payment, order or customer...",
  emptyTitle: "No payments found",
  emptyDescription: "Try changing your search or filters.",
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 15, 20],
} as const;

export const PAYMENT_TABLE_STATUSES: {
  label: string;
  value: "ALL" | TablePaymentStatus;
}[] = [
  { label: "All", value: "ALL" },
  { label: "Received", value: "RECEIVED" },
  { label: "Pending", value: "PENDING" },
  { label: "Failed", value: "FAILED" },
  { label: "Refunded", value: "REFUNDED" },
];

export const PAYMENT_TABLE_METHODS: {
  label: string;
  value: "ALL" | TablePaymentMethod;
}[] = [
  { label: "All methods", value: "ALL" },
  { label: "Cash", value: "CASH" },
  { label: "Online", value: "ONLINE" },
];

export const PAYMENT_TABLE_STATUS_LABELS: Record<
  TablePaymentStatus,
  string
> = {
  RECEIVED: "Received",
  PENDING: "Pending",
  FAILED: "Failed",
  REFUNDED: "Refunded",
};

export const PAYMENT_TABLE_STATUS_COLORS: Record<
  TablePaymentStatus,
  { background: string; text: string }
> = {
  RECEIVED: {
    background: "#E4F9EE",
    text: "#139A59",
  },
  PENDING: {
    background: "#FFF1DE",
    text: "#D97706",
  },
  FAILED: {
    background: "#FDEBEC",
    text: "#DC2626",
  },
  REFUNDED: {
    background: "#E4F0FF",
    text: "#2563EB",
  },
};

export const INITIAL_TABLE_PAYMENTS: TablePayment[] = [
  {
    id: "payment-001",
    paymentId: "PAY1001",
    orderId: "#TT1001",
    customerName: "Amit Shah",
    date: "20 Oct 2026",
    time: "02:30 PM",
    method: "CASH",
    amount: 500,
    status: "RECEIVED",
    confirmedBy: "Barber",
  },
  {
    id: "payment-002",
    paymentId: "PAY1002",
    orderId: "#TT1002",
    customerName: "Priya Mehta",
    date: "20 Oct 2026",
    time: "01:15 PM",
    method: "ONLINE",
    amount: 300,
    status: "RECEIVED",
    confirmedBy: "Payment provider",
  },
  {
    id: "payment-003",
    paymentId: "PAY1003",
    orderId: "#TT1003",
    customerName: "Rahul Verma",
    date: "19 Oct 2026",
    time: "11:45 AM",
    method: "CASH",
    amount: 200,
    status: "PENDING",
    confirmedBy: "Not confirmed",
  },
  {
    id: "payment-004",
    paymentId: "PAY1004",
    orderId: "#TT1004",
    customerName: "Neha Singh",
    date: "19 Oct 2026",
    time: "10:00 AM",
    method: "ONLINE",
    amount: 700,
    status: "FAILED",
    confirmedBy: "Payment provider",
  },
  {
    id: "payment-005",
    paymentId: "PAY1005",
    orderId: "#TT1005",
    customerName: "Karan Trivedi",
    date: "18 Oct 2026",
    time: "06:20 PM",
    method: "ONLINE",
    amount: 300,
    status: "REFUNDED",
    confirmedBy: "Payment provider",
  },
  {
    id: "payment-006",
    paymentId: "PAY1006",
    orderId: "#TT1006",
    customerName: "Simran Das",
    date: "18 Oct 2026",
    time: "04:30 PM",
    method: "CASH",
    amount: 450,
    status: "PENDING",
    confirmedBy: "Not confirmed",
  },
  {
    id: "payment-007",
    paymentId: "PAY1007",
    orderId: "#TT1007",
    customerName: "Vikram Kumar",
    date: "17 Oct 2026",
    time: "12:20 PM",
    method: "ONLINE",
    amount: 600,
    status: "RECEIVED",
    confirmedBy: "Payment provider",
  },
  {
    id: "payment-008",
    paymentId: "PAY1008",
    orderId: "#TT1008",
    customerName: "Riya Gupta",
    date: "17 Oct 2026",
    time: "11:10 AM",
    method: "CASH",
    amount: 250,
    status: "RECEIVED",
    confirmedBy: "Barber",
  },
];