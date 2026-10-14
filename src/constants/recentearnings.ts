
export type RecentEarningStatus = "RECEIVED" | "PENDING";

export interface RecentEarning {
  id: string;
  orderId: string;
  customerName: string;
  serviceName: string;
  date: string;
  time: string;
  amount: number;
  status: RecentEarningStatus;
  paymentMethod: "ONLINE" | "CASH";
  initials: string;
  avatarColor: string;
}

export const RECENT_EARNINGS_CONTENT = {
  title: "Recent Earnings",
  viewAll: "View all",
  emptyTitle: "No recent earnings",
  emptyDescription:
    "Completed services and their earnings will appear here.",
  currency: "₹",
  visibleLimit: 4,
} as const;

export const RECENT_EARNINGS: RecentEarning[] = [
  {
    id: "earning-001",
    orderId: "#TT1001",
    customerName: "Amit Shah",
    serviceName: "Haircut + Beard",
    date: "20 Oct 2026",
    time: "02:30 PM",
    amount: 500,
    status: "RECEIVED",
    paymentMethod: "ONLINE",
    initials: "AS",
    avatarColor: "#EAE7FF",
  },
  {
    id: "earning-002",
    orderId: "#TT1002",
    customerName: "Priya Mehta",
    serviceName: "Haircut",
    date: "20 Oct 2026",
    time: "01:15 PM",
    amount: 300,
    status: "RECEIVED",
    paymentMethod: "CASH",
    initials: "PM",
    avatarColor: "#FCE7F3",
  },
  {
    id: "earning-003",
    orderId: "#TT1003",
    customerName: "Rahul Verma",
    serviceName: "Beard Trim",
    date: "19 Oct 2026",
    time: "11:45 AM",
    amount: 200,
    status: "PENDING",
    paymentMethod: "CASH",
    initials: "RV",
    avatarColor: "#DDF8EB",
  },
  {
    id: "earning-004",
    orderId: "#TT1004",
    customerName: "Neha Singh",
    serviceName: "Haircut + Styling",
    date: "19 Oct 2026",
    time: "10:00 AM",
    amount: 700,
    status: "RECEIVED",
    paymentMethod: "ONLINE",
    initials: "NS",
    avatarColor: "#E3F0FF",
  },
];
