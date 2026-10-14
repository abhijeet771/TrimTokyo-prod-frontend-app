export type RecentPaymentStatus =
  | "RECEIVED"
  | "PENDING"
  | "FAILED"
  | "REFUNDED";

export type RecentPaymentMethod = "CASH" | "ONLINE";

export interface RecentPayment {
  id: string;
  orderId: string;
  customerName: string;
  date: string;
  time: string;
  method: RecentPaymentMethod;
  amount: number;
  status: RecentPaymentStatus;
  initials: string;
  avatarColor: string;
}

export const RECENT_PAYMENTS_CONTENT = {
  title: "Recent Payments",
  viewAll: "View all",
  emptyTitle: "No recent payments",
  emptyDescription:
    "Customer payment records will appear here.",
  visibleLimit: 5,
} as const;

export const RECENT_PAYMENTS: RecentPayment[] = [
  {
    id: "payment-001",
    orderId: "#TT1001",
    customerName: "Amit Shah",
    date: "20 Oct 2026",
    time: "02:30 PM",
    method: "CASH",
    amount: 500,
    status: "RECEIVED",
    initials: "AS",
    avatarColor: "#EAE7FF",
  },
  {
    id: "payment-002",
    orderId: "#TT1002",
    customerName: "Priya Mehta",
    date: "20 Oct 2026",
    time: "01:15 PM",
    method: "ONLINE",
    amount: 300,
    status: "RECEIVED",
    initials: "PM",
    avatarColor: "#FCE7F3",
  },
  {
    id: "payment-003",
    orderId: "#TT1003",
    customerName: "Rahul Verma",
    date: "19 Oct 2026",
    time: "11:45 AM",
    method: "CASH",
    amount: 200,
    status: "PENDING",
    initials: "RV",
    avatarColor: "#DDF8EB",
  },
  {
    id: "payment-004",
    orderId: "#TT1004",
    customerName: "Neha Singh",
    date: "19 Oct 2026",
    time: "10:00 AM",
    method: "ONLINE",
    amount: 700,
    status: "FAILED",
    initials: "NS",
    avatarColor: "#E3F0FF",
  },
  {
    id: "payment-005",
    orderId: "#TT1005",
    customerName: "Karan Trivedi",
    date: "18 Oct 2026",
    time: "06:20 PM",
    method: "ONLINE",
    amount: 300,
    status: "REFUNDED",
    initials: "KT",
    avatarColor: "#FFF0DE",
  },
];

export const PAYMENT_STATUS_LABELS: Record<
  RecentPaymentStatus,
  string
> = {
  RECEIVED: "Received",
  PENDING: "Pending",
  FAILED: "Failed",
  REFUNDED: "Refunded",
};

export const PAYMENT_STATUS_COLORS: Record<
  RecentPaymentStatus,
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