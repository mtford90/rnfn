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
              normal: {
                thin: { fontFamily: "myFont-thin" },
                normal: { fontFamily: "myFont" },
              },
            },
            customFont2: {
              normal: {
                thin: { fontFamily: "myFont2-thin" },
                normal: { fontFamily: "myFont2" },
              },
              italic: {
                thin: { fontFamily: "myFont2-italic-thin" },
                normal: { fontFamily: "myFont2-italic" },
              },
            },
            customFont3: {
              italic: {
                thin: { fontFamily: "myFont3-italic-thin" },
                normal: { fontFamily: "myFont3-italic" },
              },
            },
          },
        },
      });

      expect(defs).toMatchSnapshot();
    });
  });
});
