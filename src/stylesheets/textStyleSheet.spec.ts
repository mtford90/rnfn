import { getTextStyleSheet } from "./textStyleSheet";
import colors from "../theme/colors";

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
  });

  describe("with a custom config", () => {
    const customConfig = {
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
      },
    };

    it("should match snapshot", async () => {
      const styles = getTextStyleSheet(customConfig);
      expect(styles).toMatchSnapshot();
    });
  });
});
