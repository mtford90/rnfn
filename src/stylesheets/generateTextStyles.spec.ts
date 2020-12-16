import generateTextStyles from "./generateTextStyles";
import colors from "../theme/colors";
import defaultConfig from "../theme/defaultConfig";

describe("text styles", () => {
  describe("when using default config", () => {
    it("should generate simple base colours", async () => {
      const styles = generateTextStyles();

      expect(styles.colorBlack).toEqual({ color: colors.black });
      expect(styles.colorTransparent).toEqual({
        color: defaultConfig.theme.colors.transparent,
      });
      expect(styles.colorWhite).toEqual({
        color: defaultConfig.theme.colors.white,
      });
    });

    it("should generate colour variants", async () => {
      const styles = generateTextStyles();
      expect(styles.colorBlue300).toEqual({
        color: defaultConfig.theme.colors.blue[300],
      });
    });

    it("should generate default colour, using 500 as the base", async () => {
      const styles = generateTextStyles();
      expect(styles.colorBlue).toEqual({
        color: defaultConfig.theme.colors.blue[500],
      });
    });
  });

  describe("when using custom config", () => {
    it("should generate default colour", async () => {
      const customConfig = {
        theme: {
          colors: {
            customColor: {
              50: "#fff",
              DEFAULT: "#ccc",
            },
          },
          spacing: {},
          fontSize: {},
          fontWeight: {},
        },
      };

      const styles = generateTextStyles(customConfig);

      expect(styles.colorCustomColor).toEqual({
        color: customConfig.theme.colors.customColor.DEFAULT,
      });

      expect(styles.colorCustomColor50).toEqual({
        color: customConfig.theme.colors.customColor[50],
      });

      expect(styles.colorCustomColorDEFAULT).toBe(undefined);
    });
  });
});
