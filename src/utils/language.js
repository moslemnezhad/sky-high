import i18n from "../i18n/i18n";

export const isRTL = () =>
  ["fa", "ar"].includes(i18n.language);

export const textAlign = () =>
  isRTL()
    ? "text-right lg:text-right"
    : "text-left";

export const direction = () =>
  isRTL() ? "rtl" : "ltr";

export const flexDirection = () =>
  isRTL() ? "flex-row-reverse" : "flex-row";