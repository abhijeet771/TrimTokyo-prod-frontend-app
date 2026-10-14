
export type ExpenseCategory =
  | "PRODUCTS"
  | "EQUIPMENT"
  | "RENT_UTILITIES"
  | "STAFF"
  | "MAINTENANCE"
  | "CLEANING"
  | "MARKETING"
  | "TRAVEL"
  | "OTHER";

export interface ExpenseCategoryBreakdown {
  id: ExpenseCategory;
  label: string;
  amount: number;
  color: string;
}

export interface ExpenseOverviewKpi {
  id: string;
  label: string;
  amount: number;
  prefix: string;
  icon: string;
  color: string;
  backgroundColor: string;
  description: string;
}

export const EXPENSE_OVERVIEW_CONTENT = {
  title: "Expense Overview",
  subtitle: "Track your business spending",
  periodLabel: "This Month",
  totalExpensesLabel: "Total Expenses",
  pendingExpensesLabel: "Pending Payments",
  expenseEntriesLabel: "Expense Entries",
  averageExpenseLabel: "Average Expense",
  chartTitle: "Expense Breakdown",
  chartEmptyTitle: "No expenses yet",
  chartEmptyDescription:
    "Your expense breakdown will appear here after you add expenses.",
  currencySymbol: "₹",
};

export const EXPENSE_OVERVIEW_PERIODS = [
  {
    label: "Today",
    value: "TODAY",
  },
  {
    label: "Last 7 Days",
    value: "LAST_7_DAYS",
  },
  {
    label: "This Month",
    value: "THIS_MONTH",
  },
  {
    label: "Last Month",
    value: "LAST_MONTH",
  },
  {
    label: "This Year",
    value: "THIS_YEAR",
  },
] as const;

export type ExpenseOverviewPeriod =
  (typeof EXPENSE_OVERVIEW_PERIODS)[number]["value"];

/**
 * Sample data for frontend development.
 * Replace this with API-derived data when the backend is integrated.
 */
export const INITIAL_EXPENSE_OVERVIEW_KPIS: ExpenseOverviewKpi[] = [
  {
    id: "total-expenses",
    label: "Total Expenses",
    amount: 8450,
    prefix: "₹",
    icon: "wallet-outline",
    color: "#5145E5",
    backgroundColor: "#EEF2FF",
    description: "Total spending in the selected period",
  },
  {
    id: "pending-payments",
    label: "Pending Payments",
    amount: 750,
    prefix: "₹",
    icon: "time-outline",
    color: "#D97706",
    backgroundColor: "#FFF7ED",
    description: "Expenses that are not fully paid",
  },
  {
    id: "expense-entries",
    label: "Expense Entries",
    amount: 24,
    prefix: "",
    icon: "receipt-outline",
    color: "#0284C7",
    backgroundColor: "#E0F2FE",
    description: "Number of recorded expenses",
  },
  {
    id: "average-expense",
    label: "Average Expense",
    amount: 352,
    prefix: "₹",
    icon: "calculator-outline",
    color: "#059669",
    backgroundColor: "#ECFDF5",
    description: "Average amount per expense entry",
  },
];

export const INITIAL_EXPENSE_CATEGORY_BREAKDOWN: ExpenseCategoryBreakdown[] =
  [
    {
      id: "PRODUCTS",
      label: "Products & Consumables",
      amount: 3200,
      color: "#6D5DFB",
    },
    {
      id: "EQUIPMENT",
      label: "Tools & Equipment",
      amount: 1650,
      color: "#3B82F6",
    },
    {
      id: "RENT_UTILITIES",
      label: "Rent & Utilities",
      amount: 1400,
      color: "#10B981",
    },
    {
      id: "STAFF",
      label: "Staff Expenses",
      amount: 800,
      color: "#F59E0B",
    },
    {
      id: "CLEANING",
      label: "Cleaning & Hygiene",
      amount: 550,
      color: "#F43F5E",
    },
    {
      id: "MARKETING",
      label: "Marketing",
      amount: 350,
      color: "#8B5CF6",
    },
    {
      id: "OTHER",
      label: "Other",
      amount: 500,
      color: "#94A3B8",
    },
  ];
