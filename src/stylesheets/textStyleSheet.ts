import { StyleSheet, TextStyle } from "react-native";
import defaultConfig from "../theme/defaultConfig";
import { getColorPropValues } from "../props/color";
import { NamedStyles } from "./types";
import {
  getColorStyle,
  getFontFamilyStyle,
  getFontSizeStyle,
} from "../dynamicStyles";

export function getColorNamedStyleKey(colorName: string | number) {
  return `color-${colorName}`;
}

export function getFontSizeNamedStyleKey(fontSizeName: string | number) {
  return `text-${fontSizeName}`;
}

export function getFontFamilyNamedStyleKey(
  style: string | number,
  familyName: string | number,
  weight: string | number
) {
  return `font-family-${style}-${familyName}-${weight}`;
}

export function getTextAlignmentNamedStyleKey(
  alignment: "auto" | "left" | "right" | "center" | "justify" | undefined
) {
  return `align-${alignment}`;
}

export function getTextTransformNamedStyleKey(
  transform: "none" | "capitalize" | "uppercase" | "lowercase" | undefined
) {
  return `transform-${transform}`;
}

export function getTextDecorationLineNamedStyleKey(
  line:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined
) {
  return `line-${line}`;
}

export function getNamedColorStyles(config = defaultConfig) {
  const namedStyles: NamedStyles = {};
  const colorPropValues = getColorPropValues(config);

  Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
    namedStyles[getColorNamedStyleKey(propValue)] = getColorStyle(colorCode);
  });

  return namedStyles;
}

function getNamedFontSizeStyles(config = defaultConfig) {
  const namedStyles: NamedStyles = {};

  Object.entries(config.theme.fontSize).forEach(
    ([propName, [fontSize, props]]) => {
      namedStyles[getFontSizeNamedStyleKey(propName)] = getFontSizeStyle(
        fontSize,
        props
      );
    }
  );

  return namedStyles;
}

function getNamedFontFamilyStyles(config = defaultConfig) {
  const namedStyles: NamedStyles = {};

  Object.entries(config.theme.fontFamily).forEach(([familyName, styles]) => {
    Object.entries(styles).forEach(([style, weights = {}]) => {
      Object.entries(weights).forEach(([weight, definition]) => {
        if (definition) {
          namedStyles[
            getFontFamilyNamedStyleKey(style, familyName, weight)
          ] = getFontFamilyStyle({
            family: definition.fontFamily,
          });
        }
      });
    });
  });

  return namedStyles;
}

function getNamedTextAlignmentStyles() {
  const namedStyles: NamedStyles = {};

  const alignments: Array<TextStyle["textAlign"]> = [
    "auto",
    "left",
    "right",
    "center",
    "justify",
  ];

  alignments.forEach((alignment) => {
    namedStyles[getTextAlignmentNamedStyleKey(alignment)] = {
      textAlign: alignment,
    };
  });

  return namedStyles;
}

function getNamedTextTransformStyles() {
  const namedStyles: NamedStyles = {};

  const transforms: Array<TextStyle["textTransform"]> = [
    "none",
    "capitalize",
    "uppercase",
    "lowercase",
  ];

  transforms.forEach((transform) => {
    namedStyles[getTextTransformNamedStyleKey(transform)] = {
      textTransform: transform,
    };
  });

  return namedStyles;
}

function getNamedTextDecorationLineStyles() {
  const namedStyles: NamedStyles = {};

  const decorationLines: Array<TextStyle["textDecorationLine"]> = [
    "none",
    "underline",
    "line-through",
    "underline line-through",
  ];

  decorationLines.forEach((line) => {
    namedStyles[getTextDecorationLineNamedStyleKey(line)] = {
      textDecorationLine: line,
    };
  });

  return namedStyles;
}

export function getTextStyleSheet(config = defaultConfig) {
  const namedStyles: NamedStyles = {
    ...getNamedColorStyles(config),
    ...getNamedFontSizeStyles(config),
    ...getNamedFontFamilyStyles(config),
    ...getNamedTextAlignmentStyles(),
    ...getNamedTextTransformStyles(),
    ...getNamedTextDecorationLineStyles(),
  };

  return StyleSheet.create(namedStyles);
}
