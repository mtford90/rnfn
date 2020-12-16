import { format } from "prettier";
import kebabCase from "lodash.kebabcase";
import generateTextStyles from "../../stylesheets/generateTextStyles";
import defaultConfig from "../../theme/defaultConfig";
import Config from "../../theme/Config";

function getColours(config: Config) {
  return Object.keys(generateTextStyles(config))
    .map(kebabCase)
    .map((k) => k.replace("color-", ""));
}

export default function generateTextDefs(config: Config = defaultConfig) {
  const coloursType = getColours(config)
    .map((k) => `"${k}"`)
    .join(" | ");

  return format(
    `import { TextProps } from "react-native";
import React from "react";

export type FnTextColors = ${coloursType}; 

export function FnText({
  style,
  color,
  ...rest
}: TextProps & {
  color?: FnTextColors;
  children?: React.ReactNode;
}): JSX.Element;
`,
    { parser: "typescript" }
  );
}
