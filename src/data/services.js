import {
  Landmark,
  Calculator,
  BadgeDollarSign,
  Briefcase,
  FileText,
  TrendingUp,
  Users,
  ShieldCheck,
  Globe,
  PiggyBank,
} from "lucide-react";

export const services = [
  // ==========================
  // Business Services
  // ==========================

  {
    id: "accounting",
    slug: "accounting",
    category: "business",
    icon: Landmark,
  },

  {
    id: "bookkeeping",
    slug: "bookkeeping",
    category: "business",
    icon: Calculator,
  },

  {
    id: "payroll",
    slug: "payroll",
    category: "business",
    icon: BadgeDollarSign,
  },

  {
    id: "craCompliance",
    slug: "cra-compliance",
    category: "business",
    icon: ShieldCheck,
  },

  // ==========================
  // Tax Services
  // ==========================

  {
    id: "corporateTax",
    slug: "corporate-tax",
    category: "tax",
    icon: Briefcase,
  },

  {
    id: "personalTax",
    slug: "personal-tax",
    category: "tax",
    icon: FileText,
  },

  {
    id: "crossBorder",
    slug: "cross-border-tax",
    category: "tax",
    icon: Globe,
  },

  {
    id: "taxPlanning",
    slug: "tax-planning",
    category: "tax",
    icon: PiggyBank,
  },

  // ==========================
  // Advisory Services
  // ==========================

  {
    id: "financialAdvisory",
    slug: "financial-advisory",
    category: "advisory",
    icon: TrendingUp,
  },

  {
    id: "businessConsulting",
    slug: "business-consulting",
    category: "advisory",
    icon: Users,
  },
];