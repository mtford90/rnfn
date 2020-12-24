import camelCase from "lodash.camelcase";
import { StyleSheet } from "react-native";
import defaultConfig from "../theme/defaultConfig";
import { getColorPropValues } from "../props/color";
import { NamedStyles } from "./types";
import { spacingMappings } from "./mappings";

export const colorMappings = {
  color: "color",
  bg: "backgroundColor",
};

export function getTextStyleSheet(config = defaultConfig) {
  const colorPropValues = getColorPropValues(config);

  const namedStyles: NamedStyles = {};

  Object.entries(colorMappings).forEach(([propName, styleSheetKey]) => {
    Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
      namedStyles[camelCase(`${propName}-${propValue}`)] = {
        [styleSheetKey]: colorCode,
      };
    });
  });

  Object.entries(spacingMappings).forEach(([propName, styleSheetKey]) => {
    Object.entries(config.theme.spacing).forEach(([propValue, pixels]) => {
      namedStyles[camelCase(`${propName}-${propValue}`)] = {
        [styleSheetKey]: pixels,
      };
    });
  });

  Object.entries(config.theme.fontSize).forEach(
    ([propName, [fontSize, { lineHeight }]]) => {
      namedStyles[camelCase(`text-${propName}`)] = {
        fontSize,
        lineHeight,
      };
    }
  );

  Object.entries(config.theme.fontFamily).forEach(([familyName, weights]) => {
    Object.entries(weights).forEach(([weight, definition]) => {
      if (definition) {
        namedStyles[
          camelCase(`font-family-${familyName}-${weight}`)
        ] = definition;
      }
    });
  });

  return StyleSheet.create(namedStyles);
}
