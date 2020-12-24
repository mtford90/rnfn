import FontWeightName from "../theme/FontWeightName";

export const spacingMappings = {
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

export const spacingProperties = Object.keys(spacingMappings) as Array<
  keyof typeof spacingMappings
>;

export const fontWeightMappings: Record<FontWeightName, string> = {
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
