import * as React from "react";
import { TextProps } from "react-native";
import { spacingMappings, spacingProperties } from "../../stylesheets/mappings";
import { combineStyles, StylesheetTuple } from "../../utils";
import { FnColor, FnSpacing } from "../../props/__generated__";

export type FnTextStyleProps = {
  color?: FnColor;
  bg?: FnColor;
  children?: React.ReactNode;
} & Partial<Record<keyof typeof spacingMappings, FnSpacing>>;
export type FnTextProps = TextProps & FnTextStyleProps;

export function getTextProps({
  props: { color = "", bg = "", style, ...rest },
  textStyles,
}: {
  props: FnTextProps;
  textStyles: StyleSheet;
}) {
  const spacingTuples: StylesheetTuple[] = [];

  spacingProperties.forEach((spacingProperty) => {
    const value = rest[spacingProperty];
    if (value) {
      spacingTuples.push([spacingProperty, value]);
      // eslint-disable-next-line no-param-reassign
      delete rest[spacingProperty]; // Do not try to pass the property onto the Text
    }
  });

  return {
    style: combineStyles(
      style,
      textStyles,
      ["color", color],
      ["bg", bg],
      ...spacingTuples
    ),
    ...rest,
  };
}
