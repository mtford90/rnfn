import { FlexStyle, TextStyle, ViewStyle } from "react-native";
import tinycolor from "tinycolor2";
import { flexMapping } from "./stylesheets/mappings";

export function getBgOpacityStyle(
  color: string,
  opacity: number | string
): ViewStyle {
  return {
    backgroundColor: tinycolor(color)
      .setAlpha(typeof opacity === "number" ? opacity : parseFloat(opacity))
      .toRgbString(),
  };
}

export function getBgStyle(color: string): ViewStyle {
  return {
    backgroundColor: color,
  };
}

export function getFlexStyle(
  prop: keyof typeof flexMapping,
  pixels: number
): FlexStyle {
  return {
    [flexMapping[prop]]: pixels,
  };
}

export function getOpacityStyle(opacity: number | string): ViewStyle {
  return {
    opacity: typeof opacity === "number" ? opacity : parseFloat(opacity),
  };
}

export function getColorStyle(colorCode: string): TextStyle {
  return {
    color: colorCode,
  };
}

export function getFontSizeStyle(
  size: number,
  xtra: { letterSpacing?: number; lineHeight?: number }
): TextStyle {
  return {
    fontSize: size,
    ...xtra,
  };
}

export function getFontFamilyStyle({ family }: { family: string }): TextStyle {
  return {
    fontFamily: family,
  };
}
