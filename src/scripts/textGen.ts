import { format } from "prettier";
import defaultConfig from "../theme/defaultConfig";
import Config from "../theme/Config";
import { getColorPropValues } from "../props/color";

function constructUnionValue(values: string[]) {
  return values.map((k) => `"${k}"`).join(" | ");
}

export default function generateTextDefs(config: Config = defaultConfig) {
  const colorUnion = constructUnionValue(
    Object.keys(getColorPropValues(config))
  );
  const spacingUnion = constructUnionValue(
    Object.keys(config.theme.spacing).map((n) => n.toString())
  );
  const fontSizeUnion = constructUnionValue(
    Object.keys(config.theme.fontSize).map((n) => n.toString())
  );

  return format(
    `
    export declare type FnColor = ${colorUnion};
    export declare type FnSpacing = ${spacingUnion};
    export declare type FnFontSize = ${fontSizeUnion};
`,
    { parser: "typescript" }
  );
}
