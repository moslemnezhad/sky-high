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
  {
    id: "accounting",
    title: "Accounting",
    icon: Landmark,
    short:
      "Professional accounting services and financial reporting.",
    description:
      "Professional accounting services, financial reporting, statements, and strategic business insights for businesses across Canada.",
  },

  {
    id: "bookkeeping",
    title: "Bookkeeping",
    icon: Calculator,
    short:
      "Accurate bookkeeping and reconciliations.",
    description:
      "Monthly bookkeeping, bank reconciliations, GST/HST tracking, and organized financial records.",
  },

  {
    id: "payroll",
    title: "Payroll Services",
    icon: BadgeDollarSign,
    short:
      "Payroll processing and CRA remittances.",
    description:
      "Payroll processing, T4s, ROEs, payroll remittances, and CRA payroll compliance.",
  },

  {
    id: "corporate-tax",
    title: "Corporate Tax",
    icon: Briefcase,
    short:
      "Corporate tax planning and T2 filing.",
    description:
      "Corporate tax preparation, planning, CRA filing, and tax-efficient strategies.",
  },

  {
    id: "personal-tax",
    title: "Personal Tax",
    icon: FileText,
    short:
      "Personal tax preparation and deductions.",
    description:
      "Personal income tax returns with maximum deduction optimization and CRA compliance.",
  },

  {
    id: "financial-advisory",
    title: "Financial Advisory",
    icon: TrendingUp,
    short:
      "Planning, forecasting and business growth.",
    description:
      "Budgeting, forecasting, financial analysis, and strategic business planning.",
  },

  {
    id: "business-consulting",
    title: "Business Consulting",
    icon: Users,
    short:
      "Helping businesses improve performance.",
    description:
      "Business consulting designed to improve profitability, efficiency, and long-term growth.",
  },

  {
    id: "cra-compliance",
    title: "CRA Compliance",
    icon: ShieldCheck,
    short:
      "Stay compliant with CRA regulations.",
    description:
      "CRA audit support, compliance reviews, reporting requirements, and tax filing assistance.",
  },

  {
    id: "cross-border-tax",
    title: "Cross-Border Tax",
    icon: Globe,
    short:
      "Canada–U.S. tax expertise.",
    description:
      "Canada–U.S. tax planning, treaty guidance, foreign income reporting, and cross-border compliance.",
  },

  {
    id: "tax-planning",
    title: "Tax Planning & Optimization",
    icon: PiggyBank,
    short:
      "Reduce taxes legally.",
    description:
      "Proactive tax planning strategies that minimize taxes while maximizing available opportunities.",
  },
];