import camelCase from "lodash.camelcase";
import { StyleSheet } from "react-native";
import defaultConfig from "../theme/defaultConfig";
import { getColorPropValues } from "../props/color";
import { NamedStyles } from "./types";
import { getSpacingPropValues } from "../props/spacing";
import { spacingMappings } from "./mappings";

export const colorMappings = {
  color: "color",
  bg: "backgroundColor",
};

export function getTextStyleSheet(config = defaultConfig) {
  const colorPropValues = getColorPropValues(config);
  const spacingPropValues = getSpacingPropValues(config);

  const namedStyles: NamedStyles = {};

  Object.entries(colorMappings).forEach(([propName, styleSheetKey]) => {
    Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
      namedStyles[camelCase(`${propName}-${propValue}`)] = {
        [styleSheetKey]: colorCode,
      };
    });
  });

  Object.entries(spacingMappings).forEach(([propName, styleSheetKey]) => {
    Object.entries(spacingPropValues).forEach(([propValue, pixels]) => {
      namedStyles[camelCase(`${propName}-${propValue}`)] = {
        [styleSheetKey]: pixels,
      };
    });
  });

  return StyleSheet.create(namedStyles);
}
