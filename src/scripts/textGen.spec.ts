import generateTextDefs from "./textGen";
import defaultConfig from "../theme/defaultConfig";

describe("generate definition files", () => {
  describe("with default config", () => {
    it("should match snapshot", async () => {
      const defs = generateTextDefs();

      expect(defs).toMatchSnapshot();
    });
  });

  describe("with custom config", () => {
    it("should match snapshot", async () => {
      const defs = generateTextDefs({
        ...defaultConfig,
        theme: {
          ...defaultConfig.theme,
          fontFamily: {
            customFont: {
              thin: { fontFamily: "myFont-thin" },
              normal: { fontFamily: "myFont" },
            },
          },
        },
      });

      expect(defs).toMatchSnapshot();
    });
  });
});
