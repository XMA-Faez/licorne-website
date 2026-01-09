import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Building,
  FileText,
  Plane,
  Award,
  Briefcase,
  Landmark,
  MapPin,
  Calculator,
  FileX,
} from "lucide-react"

export type ServiceItem = {
  label: string
  href: string
  icon: LucideIcon
}

export type ServiceCategory = {
  items: ServiceItem[]
}

export type ResourceItem = {
  label: string
  href: string
}

export const SERVICES: Record<string, ServiceCategory> = {
  "Company Formation": {
    items: [
      {
        label: "Mainland Company Setup",
        href: "/services/mainland-company-setup",
        icon: Building2,
      },
      {
        label: "Free Zone Company Setup",
        href: "/services/free-zone-company-setup",
        icon: Building,
      },
      {
        label: "Trade License Services",
        href: "/services/trade-license",
        icon: FileText,
      },
    ],
  },
  "Visas & Immigration": {
    items: [
      {
        label: "Visa & Immigration",
        href: "/services/visa-immigration",
        icon: Plane,
      },
      {
        label: "Golden Visa UAE",
        href: "/services/golden-visa",
        icon: Award,
      },
    ],
  },
  "Business Services": {
    items: [
      {
        label: "PRO & Government Services",
        href: "/services/pro-government-services",
        icon: Briefcase,
      },
      {
        label: "Bank Account Opening",
        href: "/services/bank-account-opening",
        icon: Landmark,
      },
      {
        label: "Office Solutions",
        href: "/services/office-solutions",
        icon: MapPin,
      },
      {
        label: "Accounting & VAT",
        href: "/services/accounting-vat",
        icon: Calculator,
      },
      {
        label: "Company Liquidation",
        href: "/services/company-liquidation",
        icon: FileX,
      },
    ],
  },
}

export const RESOURCES: ResourceItem[] = [
  { label: "Free Zone Comparison", href: "/free-zones" },
  { label: "Cost Guide", href: "/cost-guide" },
  { label: "Business Activities", href: "/business-activities" },
  { label: "How It Works", href: "/how-it-works" },
]

export const SERVICE_CATEGORIES = Object.keys(SERVICES)
