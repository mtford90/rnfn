import { Text } from "react-native";
import * as React from "react";
import { useRnfnStyles } from "../context";
import { FnTextProps, getTextProps } from "./props/text";
import { FnFontFamily } from "../props/__generated__";

export function FnText<
  TFontFamily extends FnFontFamily,
  TFontStyle extends "normal" | "italic" = "normal"
>(props: FnTextProps<TFontFamily, TFontStyle>) {
  const { textStyles, viewStyles, config } = useRnfnStyles();

  return <Text {...getTextProps({ props, textStyles, viewStyles, config })} />;
}
