import { format } from "prettier";
import defaultConfig from "../theme/defaultConfig";
import Config from "../theme/Config";
import { getColorPropValues } from "../props/color";

function constructUnionValue(values: string[]) {
  if (values.length) {
    return ` | ${values.map((k) => `"${k}"`).join(" | ")}`;
  }

  return "";
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
  const fontFamilies = Object.keys(config.theme.fontFamily).map((n) =>
    n.toString()
  );

  const fontFamiliesUnion = constructUnionValue(fontFamilies);

  const fontStyleObjectBody = fontFamilies
    .map(
      (family) =>
        `"${family}": ${constructUnionValue(
          Object.keys(config.theme.fontFamily[family])
        )}`
    )
    .join(";\n");

  let normalStyleWeightObjectBody = "";
  let italicStyleWeightObjectBody = "";

  fontFamilies.forEach((family) => {
    const { normal, italic } = config.theme.fontFamily[family];
    if (normal) {
      normalStyleWeightObjectBody += `"${family}": ${constructUnionValue(
        Object.keys(normal)
      )};`;
    } else {
      normalStyleWeightObjectBody += `"${family}": never;`;
    }
    if (italic) {
      italicStyleWeightObjectBody += `"${family}": ${constructUnionValue(
        Object.keys(italic)
      )};`;
    } else {
      italicStyleWeightObjectBody += `"${family}": never;`;
    }
  });

  return format(
    `
    import FontWeightName from "../theme/FontWeightName";
    
    export declare type FnColor = ${colorUnion};
    export declare type FnSpacing = ${spacingUnion};
    export declare type FnFontSize = ${fontSizeUnion};
    export declare type FnFontFamily = | string ${fontFamiliesUnion};
    export declare type FnFontWeight = {
      normal: {
        ${normalStyleWeightObjectBody}
        [systemFontFamily: string]: FontWeightName;
      },
      italic: {
        ${italicStyleWeightObjectBody}
        [systemFontFamily: string]: FontWeightName;
      }
    };
    export type FnFontStyle = {
      ${fontStyleObjectBody}
      [systemFontFamily: string]: "normal" | "italic";
    };
`,
    { parser: "typescript" }
  );
}
