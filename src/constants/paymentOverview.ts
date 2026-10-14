export type PaymentStatus =
  | "RECEIVED"
  | "PENDING"
  | "FAILED"
  | "REFUNDED";

export type PaymentMethod = "CASH" | "ONLINE";

export interface PaymentSummaryItem {
  id: string;
  title: string;
  amount: number;
  change: string;
  icon: string;
  color: string;
  background: string;
}

export interface PaymentMethodItem {
  id: PaymentMethod;
  title: string;
  amount: number;
  orderCount: number;
  percentage: number;
  color: string;
  background: string;
}

export interface PaymentStatusItem {
  id: PaymentStatus;
  title: string;
  count: number;
  amount: number;
  color: string;
  background: string;
  icon: string;
}

export const PAYMENT_OVERVIEW_CONTENT = {
  title: "Payment Overview",
  summaryTitle: "Payment Summary",
  methodTitle: "Payment Method Breakdown",
  statusTitle: "Payment Status",
  currency: "₹",
  defaultPeriod: "Last 7 Days",
} as const;

export const PAYMENT_SUMMARY: PaymentSummaryItem[] = [
  {
    id: "received",
    title: "Total Payments Received",
    amount: 10500,
    change: "12% from last week",
    icon: "wallet",
    color: "#16A765",
    background: "#E3F9EC",
  },
  {
    id: "pending",
    title: "Pending Payments",
    amount: 2000,
    change: "Awaiting confirmation",
    icon: "time-outline",
    color: "#F28A20",
    background: "#FFF0DE",
  },
  {
    id: "cash",
    title: "Cash Received",
    amount: 6200,
    change: "Confirmed cash payments",
    icon: "cash-outline",
    color: "#16A765",
    background: "#DDF8F0",
  },
  {
    id: "online",
    title: "Online Payments",
    amount: 4800,
    change: "Direct to barber",
    icon: "card-outline",
    color: "#6554F0",
    background: "#EEEAFE",
  },
];

export const PAYMENT_METHODS: PaymentMethodItem[] = [
  {
    id: "CASH",
    title: "Cash Payments",
    amount: 6200,
    orderCount: 18,
    percentage: 56,
    color: "#16A765",
    background: "#E3F9EC",
  },
  {
    id: "ONLINE",
    title: "Online Payments",
    amount: 4800,
    orderCount: 14,
    percentage: 44,
    color: "#6554F0",
    background: "#EEEAFE",
  },
];

export const PAYMENT_STATUSES: PaymentStatusItem[] = [
  {
    id: "RECEIVED",
    title: "Received",
    count: 32,
    amount: 10500,
    color: "#16A765",
    background: "#E3F9EC",
    icon: "checkmark-circle",
  },
  {
    id: "PENDING",
    title: "Pending",
    count: 6,
    amount: 2000,
    color: "#F28A20",
    background: "#FFF0DE",
    icon: "time-outline",
  },
  {
    id: "FAILED",
    title: "Failed",
    count: 2,
    amount: 400,
    color: "#EF4444",
    background: "#FDEBEC",
    icon: "close-circle",
  },
  {
    id: "REFUNDED",
    title: "Refunded",
    count: 1,
    amount: 300,
    color: "#2580F5",
    background: "#E4F0FF",
    icon: "return-up-back-outline",
  },
];