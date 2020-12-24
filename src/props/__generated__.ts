import FontWeightName from "../theme/FontWeightName";

export type FnColor = string;
export type FnSpacing = string;
export type FnFontSize = string;
export type FnFontFamily = string;
export type FnFontWeight = {
  normal: {
    [systemFontFamily: string]: FontWeightName;
  };
  italic: {
    [systemFontFamily: string]: FontWeightName;
  };
};
export type FnFontStyle = {
  [systemFontFamily: string]: "normal" | "italic";
};
