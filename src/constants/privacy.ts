export interface PrivacySection {
  id: string;
  title: string;
  content: string[];
}

export const PRIVACY_CONTENT = {
  title: "Privacy Policy",
  subtitle:
    "Your privacy matters. Learn how TrimTokyo handles your information.",
  lastUpdated: "[Insert publication date]",

  introduction:
    "This Privacy Policy explains how TrimTokyo collects, uses, stores, and shares information when you use our application and related services. Our goal is to handle your information responsibly and explain your choices clearly.",

  sections: [
    {
      id: "information",
      title: "Information We Collect",
      content: [
        "Account information: details you provide when registering or managing your account, such as your name, phone number, and email address, if requested.",
        "Booking information: selected services, participating barbershops or salons, appointment dates, booking status, and related requests.",
        "Transaction information: payment status, transaction references, and other records needed to manage bookings. Payment card or banking details may be handled directly by a payment provider.",
        "Technical information: limited device, diagnostic, and usage information where necessary to operate, secure, and improve the application.",
        "Location information: location data only when you enable or provide it for features such as finding nearby service providers.",
      ],
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      content: [
        "Create and manage your account and provide requested services.",
        "Process bookings, communicate appointment updates, and help resolve booking issues.",
        "Maintain transaction records and support payment-related enquiries.",
        "Protect accounts, detect suspicious activity, and maintain application security.",
        "Improve application performance, usability, and customer support.",
        "Send promotional communications only where appropriate and subject to applicable consent and communication preferences.",
      ],
    },
    {
      id: "sharing",
      title: "Information Sharing",
      content: [
        "Service providers: relevant booking details may be shared with the selected barber or salon to fulfil your appointment.",
        "Service partners: information may be shared with hosting, payment, communication, analytics, or customer-support providers when necessary to operate the services.",
        "Legal and security requirements: information may be disclosed when required by applicable law or to protect legitimate rights and safety.",
        "Business changes: information may be transferred as part of a merger, acquisition, or business transfer where legally permitted and appropriate safeguards apply.",
        "We do not describe information as anonymous or claim that we never share it unless our actual practices support those statements.",
      ],
    },
    {
      id: "security",
      title: "Data Security & Retention",
      content: [
        "We use reasonable technical and organisational measures designed to protect information against unauthorised access, alteration, disclosure, or loss.",
        "No internet-based system can guarantee absolute security. You should also protect your account credentials and device.",
        "We retain information for as long as needed to provide services, maintain necessary business records, resolve disputes, and comply with applicable legal obligations.",
        "Retention periods depend on the type of information and the purpose for which it is processed.",
      ],
    },
    {
      id: "rights",
      title: "Your Privacy Rights",
      content: [
        "Depending on applicable law, you may have rights to request access to, correction of, or deletion of certain personal information.",
        "You may be able to withdraw consent where processing relies on consent, subject to applicable legal requirements.",
        "You can manage device permissions, including location access, through your device settings.",
        "Some information may need to be retained where required by law or for legitimate recordkeeping purposes.",
        "Contact us through the verified privacy-support channel provided in the application to submit a privacy request.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies & Analytics",
      content: [
        "The web version may use cookies or similar technologies for essential functionality, security, preferences, or analytics where implemented.",
        "Analytics tools, if enabled, may collect usage and diagnostic information to help us understand application performance.",
        "Where required, we will provide appropriate notice and choices for non-essential cookies or tracking technologies.",
        "The specific cookies and analytics services used should be documented before this policy is published.",
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: [
        "TrimTokyo is not intended to collect personal information from children in violation of applicable law.",
        "Where age-related restrictions or parental consent requirements apply, we will follow the applicable requirements.",
        "If you believe a child has provided personal information inappropriately, contact our privacy-support channel so the matter can be reviewed.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy as our services, data practices, or legal requirements change.",
        "The updated version will display a revised publication date.",
        "Where required, we will provide additional notice or seek consent before implementing material changes.",
      ],
    },
    {
      id: "contact",
      title: "Contact & Privacy Requests",
      content: [
        "For questions, access requests, correction requests, or other privacy concerns, contact TrimTokyo through its official privacy-support channel.",
        "Before publishing this policy, add a monitored support email address and the applicable business or grievance contact details.",
        "Requests will be handled in accordance with applicable law and any relevant verification requirements.",
      ],
    },
  ] satisfies PrivacySection[],
};

export const PRIVACY_THEME = {
  background: "#F4F8FF",
  surface: "#FFFFFF",
  primary: "#1677FF",
  primaryLight: "#EAF3FF",
  heading: "#101B45",
  text: "#435575",
  muted: "#8291AC",
  border: "#E1EAF7",
  iconBackground: "#EDF4FF",
};

export const PRIVACY_CONFIG = {
  initiallyExpanded: "information" as string | null,
};