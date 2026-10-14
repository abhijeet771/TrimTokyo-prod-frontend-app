
export type BarberExpenseCategory =
  | "PRODUCTS"
  | "EQUIPMENT"
  | "RENT_UTILITIES"
  | "STAFF"
  | "MAINTENANCE"
  | "CLEANING"
  | "MARKETING"
  | "TRAVEL"
  | "OTHER";

export type BarberExpensePaymentStatus =
  | "PAID"
  | "PENDING"
  | "PARTIALLY_PAID";

export type BarberExpensePaymentMethod =
  | "CASH"
  | "UPI"
  | "CARD"
  | "BANK_TRANSFER"
  | "CREDIT";

export interface BarberExpense {
  id: string;
  expenseId: string;
  name: string;
  category: BarberExpenseCategory;
  amount: number;
  paidAmount: number;
  date: string;
  vendor: string;
  paymentMethod: BarberExpensePaymentMethod;
  paymentStatus: BarberExpensePaymentStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export const EXPENSE_HISTORY_CONTENT = {
  title: "Expense History",
  subtitle: "Manage your business expenses",
  searchPlaceholder: "Search expense, vendor or ID...",
  emptyTitle: "No expenses found",
  emptyDescription: "Add an expense to start tracking your spending.",
  addButton: "Add Expense",
  editButton: "Edit",
  deleteButton: "Delete",
  viewButton: "View",
  allCategoriesLabel: "All Categories",
  allStatusesLabel: "All Statuses",
  allMethodsLabel: "All Methods",
  resetFiltersLabel: "Reset Filters",
  previousLabel: "Previous",
  nextLabel: "Next",
  rowsPerPageLabel: "Rows per page",
  pageLabel: "Page",
  ofLabel: "of",
  currencySymbol: "₹",
};

export const EXPENSE_CATEGORY_OPTIONS: {
  label: string;
  value: BarberExpenseCategory;
}[] = [
  { label: "Products & Consumables", value: "PRODUCTS" },
  { label: "Tools & Equipment", value: "EQUIPMENT" },
  { label: "Rent & Utilities", value: "RENT_UTILITIES" },
  { label: "Staff Expenses", value: "STAFF" },
  { label: "Maintenance", value: "MAINTENANCE" },
  { label: "Cleaning & Hygiene", value: "CLEANING" },
  { label: "Marketing", value: "MARKETING" },
  { label: "Travel & Delivery", value: "TRAVEL" },
  { label: "Other", value: "OTHER" },
];

export const EXPENSE_PAYMENT_STATUS_OPTIONS: {
  label: string;
  value: BarberExpensePaymentStatus;
}[] = [
  { label: "Paid", value: "PAID" },
  { label: "Pending", value: "PENDING" },
  { label: "Partially Paid", value: "PARTIALLY_PAID" },
];

export const EXPENSE_PAYMENT_METHOD_OPTIONS: {
  label: string;
  value: BarberExpensePaymentMethod;
}[] = [
  { label: "Cash", value: "CASH" },
  { label: "UPI", value: "UPI" },
  { label: "Card", value: "CARD" },
  { label: "Bank Transfer", value: "BANK_TRANSFER" },
  { label: "Credit / Pay Later", value: "CREDIT" },
];

export const EXPENSE_CATEGORY_LABELS: Record<
  BarberExpenseCategory,
  string
> = {
  PRODUCTS: "Products",
  EQUIPMENT: "Equipment",
  RENT_UTILITIES: "Rent & Utilities",
  STAFF: "Staff",
  MAINTENANCE: "Maintenance",
  CLEANING: "Cleaning",
  MARKETING: "Marketing",
  TRAVEL: "Travel",
  OTHER: "Other",
};

export const EXPENSE_STATUS_LABELS: Record<
  BarberExpensePaymentStatus,
  string
> = {
  PAID: "Paid",
  PENDING: "Pending",
  PARTIALLY_PAID: "Partially Paid",
};

export const EXPENSE_STATUS_COLORS: Record<
  BarberExpensePaymentStatus,
  { text: string; background: string }
> = {
  PAID: {
    text: "#15803D",
    background: "#DCFCE7",
  },
  PENDING: {
    text: "#B45309",
    background: "#FEF3C7",
  },
  PARTIALLY_PAID: {
    text: "#1D4ED8",
    background: "#DBEAFE",
  },
};

export const EXPENSE_CATEGORY_COLORS: Record<
  BarberExpenseCategory,
  { text: string; background: string }
> = {
  PRODUCTS: { text: "#6D28D9", background: "#EDE9FE" },
  EQUIPMENT: { text: "#1D4ED8", background: "#DBEAFE" },
  RENT_UTILITIES: { text: "#047857", background: "#D1FAE5" },
  STAFF: { text: "#B45309", background: "#FEF3C7" },
  MAINTENANCE: { text: "#C2410C", background: "#FFEDD5" },
  CLEANING: { text: "#0E7490", background: "#CFFAFE" },
  MARKETING: { text: "#BE185D", background: "#FCE7F3" },
  TRAVEL: { text: "#4338CA", background: "#E0E7FF" },
  OTHER: { text: "#475569", background: "#F1F5F9" },
};

export const EXPENSE_HISTORY_ROWS_PER_PAGE = [5, 10, 15, 20];

/**
 * Mock records for frontend development.
 * Replace with API data when backend integration is added.
 */
export const INITIAL_BARBER_EXPENSES: BarberExpense[] = [
  {
    id: "expense-001",
    expenseId: "EXP-1001",
    name: "Hair Wax",
    category: "PRODUCTS",
    amount: 450,
    paidAmount: 450,
    date: "2026-10-14",
    vendor: "Style Pro Supplies",
    paymentMethod: "UPI",
    paymentStatus: "PAID",
    notes: "Hair styling products",
    createdAt: "2026-10-14T09:00:00.000Z",
    updatedAt: "2026-10-14T09:00:00.000Z",
  },
  {
    id: "expense-002",
    expenseId: "EXP-1002",
    name: "Shop Rent",
    category: "RENT_UTILITIES",
    amount: 2000,
    paidAmount: 0,
    date: "2026-10-12",
    vendor: "Property Owner",
    paymentMethod: "BANK_TRANSFER",
    paymentStatus: "PENDING",
    notes: "Monthly shop rent",
    createdAt: "2026-10-12T10:00:00.000Z",
    updatedAt: "2026-10-12T10:00:00.000Z",
  },
  {
    id: "expense-003",
    expenseId: "EXP-1003",
    name: "Electricity Bill",
    category: "RENT_UTILITIES",
    amount: 800,
    paidAmount: 800,
    date: "2026-10-10",
    vendor: "Electricity Provider",
    paymentMethod: "UPI",
    paymentStatus: "PAID",
    notes: "Monthly electricity bill",
    createdAt: "2026-10-10T08:00:00.000Z",
    updatedAt: "2026-10-10T08:00:00.000Z",
  },
  {
    id: "expense-004",
    expenseId: "EXP-1004",
    name: "Social Media Ads",
    category: "MARKETING",
    amount: 300,
    paidAmount: 300,
    date: "2026-10-08",
    vendor: "Advertising Platform",
    paymentMethod: "CARD",
    paymentStatus: "PAID",
    notes: "Local customer promotion",
    createdAt: "2026-10-08T11:00:00.000Z",
    updatedAt: "2026-10-08T11:00:00.000Z",
  },
  {
    id: "expense-005",
    expenseId: "EXP-1005",
    name: "Shampoo Bulk Purchase",
    category: "PRODUCTS",
    amount: 1200,
    paidAmount: 600,
    date: "2026-10-06",
    vendor: "Professional Hair Care",
    paymentMethod: "CREDIT",
    paymentStatus: "PARTIALLY_PAID",
    notes: "Bulk shampoo purchase",
    createdAt: "2026-10-06T12:00:00.000Z",
    updatedAt: "2026-10-06T12:00:00.000Z",
  },
  {
    id: "expense-006",
    expenseId: "EXP-1006",
    name: "Clipper Maintenance",
    category: "MAINTENANCE",
    amount: 500,
    paidAmount: 500,
    date: "2026-10-04",
    vendor: "Local Repair Shop",
    paymentMethod: "CASH",
    paymentStatus: "PAID",
    notes: "Clipper servicing",
    createdAt: "2026-10-04T09:30:00.000Z",
    updatedAt: "2026-10-04T09:30:00.000Z",
  },
  {
    id: "expense-007",
    expenseId: "EXP-1007",
    name: "Disposable Blades",
    category: "PRODUCTS",
    amount: 350,
    paidAmount: 350,
    date: "2026-10-02",
    vendor: "Barber Essentials",
    paymentMethod: "CASH",
    paymentStatus: "PAID",
    notes: "Replacement blades",
    createdAt: "2026-10-02T10:00:00.000Z",
    updatedAt: "2026-10-02T10:00:00.000Z",
  },
  {
    id: "expense-008",
    expenseId: "EXP-1008",
    name: "Cleaning Supplies",
    category: "CLEANING",
    amount: 250,
    paidAmount: 250,
    date: "2026-10-01",
    vendor: "Local General Store",
    paymentMethod: "CASH",
    paymentStatus: "PAID",
    notes: "Shop cleaning supplies",
    createdAt: "2026-10-01T08:30:00.000Z",
    updatedAt: "2026-10-01T08:30:00.000Z",
  },
];
