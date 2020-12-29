import camelCase from "lodash.camelcase";
import { StyleSheet } from "react-native";
import defaultConfig from "../theme/defaultConfig";
import { getColorPropValues } from "../props/color";
import { NamedStyles } from "./types";
import { spacingMappings } from "./mappings";

export function getViewStyleSheet(config = defaultConfig) {
  const colorPropValues = getColorPropValues(config);
  const namedStyles: NamedStyles = {};

  Object.entries(spacingMappings).forEach(([propName, styleSheetKey]) => {
    Object.entries(config.theme.spacing).forEach(([propValue, pixels]) => {
      namedStyles[camelCase(`${propName}-${propValue}`)] = {
        [styleSheetKey]: pixels,
      };
    });
  });

  Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
    namedStyles[camelCase(`bg-${propValue}`)] = {
      backgroundColor: colorCode,
    };
  });

  return StyleSheet.create(namedStyles);
}
