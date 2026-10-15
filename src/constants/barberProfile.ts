export type BarberBusinessType = "SALON" | "BARBER" | "HOME_SERVICE";

export interface BarberProfileFormData {
  businessType: BarberBusinessType;
  salonName: string;
  description: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  coverImageUrl: string;
  establishedDate: string;
  instagram: string;
  googleMapsLink: string;
  profileSlug: string;
  deliveryAvailable: boolean;
  experienceYears: string;
  latitude: number | null;
  longitude: number | null;
}

export const BARBER_PROFILE_CONTENT = {
  eyebrow: "BARBER PROFILE",
  title: "Update Your Profile",
  subtitle: "Keep your salon information accurate and up to date.",
  formTitle: "Business Information",
  submitLabel: "Submit Profile for Approval",
  locationLabel: "Capture Location",
  locationCapturedLabel: "Location Captured ✓",
  requiredMessage: "Please fill in all required fields.",
  invalidPhoneMessage: "Enter a valid 10-digit Indian mobile number.",
  successTitle: "Profile Submitted",
  successMessage:
    "Your profile has been submitted for admin approval.",
  businessTypes: [
    { label: "Salon", value: "SALON" },
    { label: "Barber", value: "BARBER" },
    { label: "Home Service", value: "HOME_SERVICE" },
  ] as const,
};

export const INITIAL_BARBER_PROFILE: BarberProfileFormData = {
  businessType: "SALON",
  salonName: "",
  description: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  coverImageUrl: "",
  establishedDate: "",
  instagram: "",
  googleMapsLink: "",
  profileSlug: "",
  deliveryAvailable: false,
  experienceYears: "",
  latitude: null,
  longitude: null,
};