export interface BookingDateOption {
  id: string;
  day: string;
  date: number;
  month: string;
}

export const USER_SLOT_BOOKING_CONTENT = {
  title: "Select Your Slot",
  selectDate: "Select Date",
  selectTime: "Select Time",
  bookButton: "Book Slot",
  cancelButton: "Cancel",
  closeLabel: "Close booking dialog",
  noDateMessage: "Please select a date.",
  noTimeMessage: "Please select a time.",
  successTitle: "Slot Selected",
  successMessage: "Your selected slot is ready for confirmation.",
};

export const BOOKING_DATES: BookingDateOption[] = (() => {
  const dates: BookingDateOption[] = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    dates.push({
      id: date.toISOString().slice(0, 10),
      day: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", {
        month: "short",
      }),
    });
  }

  return dates;
})();

export const BOOKING_TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
];
