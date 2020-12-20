import { Text } from "react-native";
import * as React from "react";
import { useRnfnStyles } from "../context";
import { FnTextProps, getTextProps } from "./props/text";

export function FnText(props: FnTextProps) {
  const { textStyles } = useRnfnStyles();

  return <Text {...getTextProps({ props, textStyles })} />;
}
