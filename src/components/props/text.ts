import * as React from "react";
import { TextProps, TextStyle } from "react-native";
import compact from "lodash.compact";
import {
  fontWeightMappings,
  flexMapping,
  flexProperties,
} from "../../stylesheets/mappings";
import { combineStyles } from "../../utils";
import {
  FnColor,
  FnSpacing,
  FnFontSize,
  FnFontFamily,
  FnFontWeight,
  FnFontStyle,
} from "../../props/__generated__";
import Config from "../../theme/Config";

export type FnTextStyleProps<
  TFontFamily extends FnFontFamily,
  TFontStyle extends "normal" | "italic"
> = {
  color?: FnColor;
  bg?: FnColor;
  text?: FnFontSize;
  children?: React.ReactNode;
  fontFamily?: TFontFamily;
  fontStyle?: FnFontStyle[TFontFamily];
  fontWeight?: FnFontWeight[TFontStyle][TFontFamily];
  align?: TextStyle["textAlign"];
  transform?: TextStyle["textTransform"];
  line?: TextStyle["textDecorationLine"];
} & Partial<Record<keyof typeof flexMapping, FnSpacing>>;

export type FnTextProps<
  TFontFamily extends FnFontFamily,
  TFontStyle extends "normal" | "italic"
> = TextProps & FnTextStyleProps<TFontFamily, TFontStyle>;

export function getTextProps<
  TFontFamily extends FnFontFamily,
  TFontStyle extends "normal" | "italic"
>({
  props: {
    color = "",
    bg = "",
    text = "",
    fontWeight,
    fontFamily,
    fontStyle = "normal" as const,
    style,
    align,
    line,
    transform,
    ...rest
  },
  textStyles,
  viewStyles,
  config,
}: {
  props: FnTextProps<TFontFamily, TFontStyle>;
  textStyles: StyleSheet;
  viewStyles: StyleSheet;
  config: Config;
}) {
  const spacingTuples: string[] = [];

  flexProperties.forEach((spacingProperty) => {
    const value = rest[spacingProperty];
    if (value) {
      spacingTuples.push(`${spacingProperty}-${value}`);
      // eslint-disable-next-line no-param-reassign
      delete rest[spacingProperty]; // Do not try to pass the property onto the Text
    }
  });

  const customFontFamilyConfig =
    fontFamily && config.theme.fontFamily[fontFamily];

  const fontWeightExists = Boolean(
    customFontFamilyConfig &&
      customFontFamilyConfig[fontStyle]?.[fontWeight || "normal"]
  );

  const resolvedFontWeight = fontWeightExists
    ? fontWeight || "normal"
    : "normal"; // TODO: What if normal doesn't exist? Fall back to closest weight?

  const combinedTextStyles = combineStyles(
    style,
    textStyles,
    color && `color-${color}`,
    bg && `bg-${bg}`,
    text && `text-${text}`,
    align && `align-${align}`,
    transform && `transform-${transform}`,
    line && `line-${line}`,
    customFontFamilyConfig &&
      fontFamily &&
      `font-family-${fontStyle}-${fontFamily}-${resolvedFontWeight}`
  );

  const combinedViewStyles = combineStyles(
    undefined, // TODO Remove
    viewStyles,
    bg && `bg-${bg}`,
    ...spacingTuples
  );

  return {
    style: compact([
      ...combinedViewStyles,
      ...combinedTextStyles,
      // TODO: Can these be StyleSheets instead? Automatically add to the StyleSheet?
      !customFontFamilyConfig && fontFamily && { fontFamily },
      !customFontFamilyConfig &&
        fontWeight && { fontWeight: fontWeightMappings[fontWeight] },
      // END TODO
    ]),
    ...rest,
  };
}
