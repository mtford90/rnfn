import camelCase from "lodash.camelcase";
import { StyleSheet } from "react-native";
import defaultConfig from "../theme/defaultConfig";
import { getColorPropValues } from "../props/color";
import { NamedStyles } from "./types";
import { flexProperties } from "./mappings";
import {
  getBgOpacityStyle,
  getBgStyle,
  getFlexStyle,
  getOpacityStyle,
} from "../dynamicStyles";

function getNamedFlexStyles(config = defaultConfig) {
  const namedStyles: NamedStyles = {};

  flexProperties.forEach((propName) => {
    Object.entries(config.theme.spacing).forEach(([propValue, pixels]) => {
      namedStyles[camelCase(`${propName}-${propValue}`)] = getFlexStyle(
        propName,
        pixels
      );
    });
  });

  return namedStyles;
}

function getBgColorWithOpacityKey(
  opacityVariantKey: string | number,
  colorName: string | number
) {
  return camelCase(`bg-opacity-${opacityVariantKey}-${colorName}`);
}

function getNamedBackgroundColorStyles(config = defaultConfig) {
  const namedStyles: NamedStyles = {};

  const colorPropValues = getColorPropValues(config);

  Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
    namedStyles[camelCase(`bg-${propValue}`)] = getBgStyle(colorCode);
  });

  Object.entries(config.theme.opacity).forEach(
    ([opacityVariantKey, opacity]) => {
      // Background colours of differing opacity
      Object.entries(colorPropValues).forEach(([propValue, colorCode]) => {
        namedStyles[
          getBgColorWithOpacityKey(opacityVariantKey, propValue)
        ] = getBgOpacityStyle(colorCode, opacity);
      });
    }
  );

  return namedStyles;
}

function getOpacityNamedStyleKey(opacityVariantKey: string | number) {
  return camelCase(`opacity-${opacityVariantKey}`);
}

function getNamedOpacityStyles(config = defaultConfig) {
  const namedStyles: NamedStyles = {};

  Object.entries(config.theme.opacity).forEach(
    ([opacityVariantKey, opacity]) => {
      namedStyles[getOpacityNamedStyleKey(opacityVariantKey)] = getOpacityStyle(
        opacity
      );
    }
  );

  return namedStyles;
}

export function getViewStyleSheet(config = defaultConfig) {
  const namedStyles: NamedStyles = {
    ...getNamedFlexStyles(config),
    ...getNamedBackgroundColorStyles(config),
    ...getNamedOpacityStyles(config),
  };

  return StyleSheet.create(namedStyles);
}
