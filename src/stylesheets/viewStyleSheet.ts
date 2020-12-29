import camelCase from "lodash.camelcase";
import { StyleSheet } from "react-native";
import tinycolor from "tinycolor2";
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

  Object.entries(config.theme.opacity).forEach(
    ([opacityVariantKey, opacity]) => {
      const opacityFloat = parseFloat(opacity);

      namedStyles[camelCase(`opacity-${opacityVariantKey}`)] = {
        opacity: opacityFloat,
      };

      // Background colours of differing opacity
      Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
        namedStyles[
          camelCase(`bg-opacity-${opacityVariantKey}-${propValue}`)
        ] = {
          backgroundColor: tinycolor(colorCode)
            .setAlpha(opacityFloat)
            .toRgbString(),
        };
      });
    }
  );

  return StyleSheet.create(namedStyles);
}
