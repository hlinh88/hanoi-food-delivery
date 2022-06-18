import { scaleFont } from "./scale";

/* FONT FAMILY */
export const FONT_FAMILY = "Poppins";

/* FONT WEIGHT */
export const FONT_WEIGHT_EXTRA_BOLD = "800";
export const FONT_WEIGHT_SEMI_BOLD = "600";
export const FONT_WEIGHT_MEDIUM = "500";
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_THIN = "100";

/* FONT SIZE */
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_40 = scaleFont(40);

/* FONT STYLE */
export const NORMAL_TEXT = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_REGULAR,
  fontSize: FONT_SIZE_14,
};

export const APP_TITLE = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_EXTRA_BOLD,
  fontSize: FONT_SIZE_40,
};

export const HEADING_1 = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_SEMI_BOLD,
  fontSize: FONT_SIZE_16,
};

export const HEADING_2 = {
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT_MEDIUM,
  fontSize: FONT_SIZE_16,
};
