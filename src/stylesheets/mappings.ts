import FontWeightName from "../theme/FontWeightName";

export const flexMapping = {
  m: "margin",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mb: "marginBottom",
  mx: "marginHorizontal",
  my: "marginVertical",
  p: "padding",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  px: "paddingHorizontal",
  py: "paddingVertical",
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
};

export const flexProperties = Object.keys(flexMapping) as Array<
  keyof typeof flexMapping
>;

const nativeFontWeights = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

const fontStyles = ["italic", "normal"] as const;

export type NativeFontWeight = typeof nativeFontWeights[number];
export type NativeFontStyle = typeof fontStyles[number];

export function isNativeFontWeight(
  weight: unknown
): weight is NativeFontWeight {
  return nativeFontWeights.includes(weight as never);
}

export function isNativeFontStyle(style: unknown): style is NativeFontStyle {
  return nativeFontWeights.includes(style as never);
}

export const fontWeightMappings: Record<FontWeightName, NativeFontWeight> = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

export type FontWeights = keyof typeof fontWeightMappings;

export const fontWeights: Array<FontWeights> = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
];
