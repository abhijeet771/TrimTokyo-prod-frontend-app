export interface TermsSection {
  id: string;
  title: string;
  icon: string;
  content: string[];
}

export const TERMS_CONTENT = {
  title: "Terms & Conditions",
  subtitle: "Please read these terms carefully before using TrimTokyo.",
  lastUpdated: "[Insert publication date]",
  introduction:
    "Welcome to TrimTokyo. These Terms & Conditions govern your access to and use of the TrimTokyo application and related services. By accessing or using our services, you agree to these terms.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: "check-circle",
      content: [
        "By creating an account, accessing, or using TrimTokyo, you agree to these Terms & Conditions and any applicable policies.",
        "If you do not agree with these terms, please discontinue use of the application.",
        "You must provide accurate information when registering and keep your account details up to date.",
      ],
    },
    {
      id: "services",
      title: "Use of Our Services",
      icon: "scissors",
      content: [
        "TrimTokyo helps users discover grooming services, explore participating barbershops and salons, and manage appointments where these features are available.",
        "Service availability, prices, operating hours, and appointment slots may vary by provider and location.",
        "You agree to use the application lawfully and not interfere with its security, functionality, or availability.",
      ],
    },
    {
      id: "bookings",
      title: "Bookings & Payments",
      icon: "credit-card",
      content: [
        "Please review the service details, selected provider, appointment time, and displayed price before confirming a booking.",
        "Payment methods, payment timing, and applicable charges will be communicated through the relevant booking flow.",
        "Where payments are processed by a third-party provider, its applicable terms and policies may also apply.",
        "A booking is subject to the confirmation status shown in the application.",
      ],
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: "user-check",
      content: [
        "Provide truthful registration and contact information.",
        "Keep your login credentials secure and notify us of suspected unauthorized account access.",
        "Treat barbers, salon staff, other users, and support personnel respectfully.",
        "Do not misuse the platform, submit fraudulent information, or attempt unauthorized access to another account.",
      ],
    },
    {
      id: "cancellations",
      title: "Cancellations & Refunds",
      icon: "calendar-x",
      content: [
        "Cancellation, rescheduling, and refund eligibility depend on the applicable booking conditions and the service provider's published policy.",
        "Any applicable cancellation fees or refund timelines should be disclosed before you confirm a booking or payment.",
        "Contact TrimTokyo support if you need help resolving a booking or payment issue.",
      ],
    },
    {
      id: "availability",
      title: "Service Availability & Changes",
      icon: "refresh-cw",
      content: [
        "We may update, suspend, or discontinue features to maintain or improve the service.",
        "Appointment availability and service delivery may be affected by circumstances outside our control.",
        "We will make reasonable efforts to communicate material changes where appropriate.",
      ],
    },
    {
      id: "contact",
      title: "Contact & Support",
      icon: "mail",
      content: [
        "For questions about these terms, bookings, or account access, contact TrimTokyo through the official support channel provided in the application.",
        "Replace this section with your verified support email or business contact details before publishing.",
      ],
    },
  ] satisfies TermsSection[],
};

export const TERMS_THEME = {
  background: "#F4F8FF",
  surface: "#FFFFFF",
  primary: "#1677FF",
  primaryLight: "#EAF3FF",
  heading: "#101B45",
  text: "#435575",
  muted: "#8291AC",
  border: "#E1EAF7",
  iconBackground: "#EDF4FF",
  shadow: "#B8CBE5",
};

export const TERMS_CONFIG = {
  initiallyExpanded: "acceptance" as string | null,
};