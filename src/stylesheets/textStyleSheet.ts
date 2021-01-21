import camelCase from "lodash.camelcase";
import { StyleSheet, TextStyle } from "react-native";
import defaultConfig from "../theme/defaultConfig";
import { getColorPropValues } from "../props/color";
import { NamedStyles } from "./types";
import {
  getColorStyle,
  getFontFamilyStyle,
  getFontSizeStyle,
} from "../dynamicStyles";

export function getTextStyleSheet(config = defaultConfig) {
  const colorPropValues = getColorPropValues(config);

  const namedStyles: NamedStyles = {};

  Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
    namedStyles[camelCase(`color-${propValue}`)] = getColorStyle(colorCode);
  });

  Object.entries(config.theme.fontSize).forEach(
    ([propName, [fontSize, props]]) => {
      namedStyles[camelCase(`text-${propName}`)] = getFontSizeStyle(
        fontSize,
        props
      );
    }
  );

  Object.entries(config.theme.fontFamily).forEach(([familyName, styles]) => {
    Object.entries(styles).forEach(([style, weights = {}]) => {
      Object.entries(weights).forEach(([weight, definition]) => {
        if (definition) {
          namedStyles[
            camelCase(`font-family-${style}-${familyName}-${weight}`)
          ] = getFontFamilyStyle({
            family: definition.fontFamily,
          });
        }
      });
    });
  });

  const alignments: Array<TextStyle["textAlign"]> = [
    "auto",
    "left",
    "right",
    "center",
    "justify",
  ];

  alignments.forEach((alignment) => {
    namedStyles[camelCase(`align-${alignment}`)] = { textAlign: alignment };
  });

  const transforms: Array<TextStyle["textTransform"]> = [
    "none",
    "capitalize",
    "uppercase",
    "lowercase",
  ];

  transforms.forEach((transform) => {
    namedStyles[camelCase(`transform-${transform}`)] = {
      textTransform: transform,
    };
  });

  const decorationLines: Array<TextStyle["textDecorationLine"]> = [
    "none",
    "underline",
    "line-through",
    "underline line-through",
  ];

  decorationLines.forEach((line) => {
    namedStyles[camelCase(`line-${line}`)] = {
      textDecorationLine: line,
    };
  });

  return StyleSheet.create(namedStyles);
}
