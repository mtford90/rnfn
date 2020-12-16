import generateTextDefs from "./text";

describe("generate definition files", () => {
  it("should work", async () => {
    const defs = generateTextDefs();

    console.log("defs", defs);

    expect(defs).toMatchInlineSnapshot(`
      "import { TextProps } from \\"react-native\\";
      import React from \\"react\\";

      export type FnTextColors = \\"transparent\\" | \\"black\\" | \\"white\\" | \\"gray50\\" | \\"gray100\\" | \\"gray200\\" | \\"gray300\\" | \\"gray400\\" | \\"gray500\\" | \\"gray600\\" | \\"gray700\\" | \\"gray800\\" | \\"gray900\\" | \\"gray\\" | \\"red50\\" | \\"red100\\" | \\"red200\\" | \\"red300\\" | \\"red400\\" | \\"red500\\" | \\"red600\\" | \\"red700\\" | \\"red800\\" | \\"red900\\" | \\"red\\" | \\"yellow50\\" | \\"yellow100\\" | \\"yellow200\\" | \\"yellow300\\" | \\"yellow400\\" | \\"yellow500\\" | \\"yellow600\\" | \\"yellow700\\" | \\"yellow800\\" | \\"yellow900\\" | \\"yellow\\" | \\"green50\\" | \\"green100\\" | \\"green200\\" | \\"green300\\" | \\"green400\\" | \\"green500\\" | \\"green600\\" | \\"green700\\" | \\"green800\\" | \\"green900\\" | \\"green\\" | \\"blue50\\" | \\"blue100\\" | \\"blue200\\" | \\"blue300\\" | \\"blue400\\" | \\"blue500\\" | \\"blue600\\" | \\"blue700\\" | \\"blue800\\" | \\"blue900\\" | \\"blue\\" | \\"indigo50\\" | \\"indigo100\\" | \\"indigo200\\" | \\"indigo300\\" | \\"indigo400\\" | \\"indigo500\\" | \\"indigo600\\" | \\"indigo700\\" | \\"indigo800\\" | \\"indigo900\\" | \\"indigo\\" | \\"purple50\\" | \\"purple100\\" | \\"purple200\\" | \\"purple300\\" | \\"purple400\\" | \\"purple500\\" | \\"purple600\\" | \\"purple700\\" | \\"purple800\\" | \\"purple900\\" | \\"purple\\" | \\"pink50\\" | \\"pink100\\" | \\"pink200\\" | \\"pink300\\" | \\"pink400\\" | \\"pink500\\" | \\"pink600\\" | \\"pink700\\" | \\"pink800\\" | \\"pink900\\" | \\"pink\\"; 

      export default function FnText({
        style,
        color,
        ...rest
      }: TextProps & {
        color?: FnTextColors;
        children: React.ReactNode;
      }): JSX.Element;
      "
    `);
  });
});
