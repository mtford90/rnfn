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
