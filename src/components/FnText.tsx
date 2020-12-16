import { Text, TextProps } from "react-native";
import * as React from "react";
import { useRnfnStyles } from "../context";
import { combineStyles } from "../utils";

export function FnText({
  style,
  color = "",
  ...rest
}: TextProps & { color: string; children?: React.ReactNode }) {
  const { textStyles } = useRnfnStyles();

  const styles = combineStyles(style, textStyles, ["color", color]);

  return <Text {...rest} style={styles} />;
}
