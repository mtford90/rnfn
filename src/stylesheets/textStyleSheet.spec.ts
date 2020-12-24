import { getTextStyleSheet } from "./textStyleSheet";
import colors from "../theme/colors";
import Config from "../theme/Config";
import defaultConfig from "../theme/defaultConfig";

describe("text stylesheet", () => {
  describe("with default config", () => {
    it("should match the snapshot", async () => {
      const stylesheet = getTextStyleSheet();
      expect(stylesheet).toMatchSnapshot();
    });

    it("should match colours correctly", () => {
      const stylesheet = getTextStyleSheet();
      expect(stylesheet.bgGreen).toEqual({
        backgroundColor: colors.green["500"],
      });
      expect(stylesheet.bgGreen50).toEqual({
        backgroundColor: colors.green["50"],
      });
      expect(stylesheet.colorGreen).toEqual({
        color: colors.green["500"],
      });
      expect(stylesheet.colorGreen50).toEqual({
        color: colors.green["50"],
      });
    });

    it("should add fontsizes", async () => {
      const stylesheet = getTextStyleSheet();

      expect(stylesheet.text2Xl).toEqual({
        fontSize: defaultConfig.theme.fontSize["2xl"][0],
        lineHeight: defaultConfig.theme.fontSize["2xl"][1].lineHeight,
      });
    });
  });

  describe("with a custom config", () => {
    const customConfig: Config = {
      theme: {
        colors: {
          customColor: {
            50: "#fff",
            DEFAULT: "#ccc",
          },
        },
        spacing: {
          lg: 50,
        },
        fontSize: {
          customFontSize: [21, { lineHeight: 19 }],
        },
        fontFamily: {
          customFont: {
            normal: { fontFamily: "customFont" },
            thin: { fontFamily: "customFont-Thin" },
            bold: { fontFamily: "customFont-Bold" },
          },
        },
      },
    };

    it("should match snapshot", async () => {
      const styles = getTextStyleSheet(customConfig);
      expect(styles).toMatchSnapshot();
    });
  });
});
