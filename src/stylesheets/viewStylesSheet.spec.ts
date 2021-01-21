import colors from "../theme/colors";
import { getViewStyleSheet } from "./viewStyleSheet";
import Config from "../theme/Config";

describe("view stylesheet", () => {
  describe("with default config", () => {
    it("should match the snapshot", async () => {
      const stylesheet = getViewStyleSheet();
      expect(stylesheet).toMatchSnapshot();
    });

    it("should match colours correctly", () => {
      const stylesheet = getViewStyleSheet();
      expect(stylesheet["bg-green"]).toEqual({
        backgroundColor: colors.green["500"],
      });
      expect(stylesheet["bg-green-50"]).toEqual({
        backgroundColor: colors.green["50"],
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
        spacing: {},
        fontSize: {},
        fontFamily: {},
        opacity: {},
      },
    };

    it("should match snapshot", async () => {
      const styles = getViewStyleSheet(customConfig);
      expect(styles).toMatchSnapshot();
    });
  });
});
