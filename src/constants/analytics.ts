export type AnalyticsPeriod = "7 Days" | "30 Days" | "3 Months";

export interface DailyEarning {
  date: string;
  amount: number;
}

export interface ServiceEarning {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface AnalyticsMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
  background: string;
}

export const ANALYTICS_CONTENT = {
  title: "Earnings Analytics",
  dailyChartTitle: "Earnings by Day",
  serviceChartTitle: "Service-wise Earnings",
  customerMetricsTitle: "Orders & Customers",
  highestDayTitle: "Highest Earning Day",
  lowestDayTitle: "Lowest Earning Day",
  currency: "₹",
} as const;

export const ANALYTICS_PERIODS: AnalyticsPeriod[] = [
  "7 Days",
  "30 Days",
  "3 Months",
];

export const DAILY_EARNINGS: DailyEarning[] = [
  { date: "14 Oct", amount: 800 },
  { date: "15 Oct", amount: 1400 },
  { date: "16 Oct", amount: 1200 },
  { date: "17 Oct", amount: 2100 },
  { date: "18 Oct", amount: 1700 },
  { date: "19 Oct", amount: 2500 },
  { date: "20 Oct", amount: 2200 },
];

export const EARNING_DAY_SUMMARY = {
  highest: {
    label: "19 Oct 2026",
    amount: 2500,
  },
  lowest: {
    label: "14 Oct 2026",
    amount: 800,
  },
} as const;

export const SERVICE_EARNINGS: ServiceEarning[] = [
  {
    id: "haircut",
    name: "Haircut",
    amount: 5000,
    percentage: 40,
    color: "#6554F0",
  },
  {
    id: "beard",
    name: "Beard Trim",
    amount: 2750,
    percentage: 22,
    color: "#5296F5",
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard",
    amount: 2250,
    percentage: 18,
    color: "#F59A35",
  },
  {
    id: "styling",
    name: "Hair Styling",
    amount: 1500,
    percentage: 12,
    color: "#20B879",
  },
  {
    id: "other",
    name: "Other Services",
    amount: 1000,
    percentage: 8,
    color: "#A6AEC4",
  },
];

export const ANALYTICS_METRICS: AnalyticsMetric[] = [
  {
    id: "orders",
    title: "Total Orders",
    value: "40",
    change: "10%",
    icon: "bar-chart-outline",
    color: "#6554F0",
    background: "#EEEAFE",
  },
  {
    id: "customers",
    title: "Unique Customers",
    value: "28",
    change: "7%",
    icon: "people-outline",
    color: "#6554F0",
    background: "#EEEAFE",
  },
  {
    id: "services",
    title: "Avg. Services per Customer",
    value: "2.1",
    change: "",
    icon: "people",
    color: "#F28A20",
    background: "#FFF0DE",
  },
  {
    id: "average-earnings",
    title: "Avg. Earnings per Order",
    value: "₹312",
    change: "8%",
    icon: "receipt-outline",
    color: "#6554F0",
    background: "#EEEAFE",
  },
];
