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
      expect(stylesheet["color-green"]).toEqual({
        color: colors.green["500"],
      });
      expect(stylesheet["color-green-50"]).toEqual({
        color: colors.green["50"],
      });
    });

    it("should add fontsizes", async () => {
      const stylesheet = getTextStyleSheet();

      expect(stylesheet["text-2xl"]).toEqual({
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
          customFontSize: [21, { lineHeight: 19, letterSpacing: 1.5 }],
        },
        fontFamily: {
          customFont: {
            normal: {
              normal: { fontFamily: "customFont" },
              thin: { fontFamily: "customFont-Thin" },
              bold: { fontFamily: "customFont-Bold" },
            },
            italic: {
              normal: { fontFamily: "customFont-Italic" },
              thin: { fontFamily: "customFont-Italic-Thin" },
              bold: { fontFamily: "customFont-Italic-Bold" },
            },
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
