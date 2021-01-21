import * as path from "path";
import { resolveConfig } from "../resolveConfig";

beforeEach(() => {
  jest.resetModules();
});

describe("config resolution", () => {
  test("override all", async () => {
    const p = path.resolve(__dirname, "./__mocks__/overrideAll.js");
    const config = await resolveConfig(p);
    expect(config).toMatchSnapshot();
  });

  test("override some", async () => {
    const p = path.resolve(__dirname, "./__mocks__/overrideSome.js");
    const config = await resolveConfig(p);
    expect(config).toMatchSnapshot();
  });

  describe("extending colors", () => {
    describe("with an extra colour", () => {
      it("should add the extra color", async () => {
        const p = path.resolve(__dirname, "./__mocks__/extendColors.js");
        const config = await resolveConfig(p);
        expect(config.theme.colors.mycolor).toEqual("pink");
      });

      it("should match the snapshot", async () => {
        const p = path.resolve(__dirname, "./__mocks__/extendColors.js");
        const config = await resolveConfig(p);
        expect(config).toMatchSnapshot();
      });
    });
  });

  describe("extending spacing", () => {
    describe("with extra spacing", () => {
      it("should add the extra spacing", async () => {
        const p = path.resolve(__dirname, "./__mocks__/extendSpacing.js");
        const config = await resolveConfig(p);
        expect(config.theme.spacing.lg).toEqual(32);
      });
    });
  });

  describe("extending fontSize", () => {
    describe("with extra fontSize", () => {
      it("should add the extra fontSize", async () => {
        const p = path.resolve(__dirname, "./__mocks__/extendFontSize.js");
        const config = await resolveConfig(p);
        expect(config.theme.fontSize.hello).toEqual([
          12,
          { letterSpacing: 32, lineHeight: 16 },
        ]);
      });
    });
  });

  describe("extending fontFamily", () => {
    it("should add the extra fontFamily", async () => {
      const p = path.resolve(__dirname, "./__mocks__/extendFontFamily.js");
      const config = await resolveConfig(p);
      expect(config.theme.fontFamily.customFont).toEqual({
        normal: {
          normal: { fontFamily: "myFont" },
          thin: { fontFamily: "myFont-thin" },
        },
      });
    });
  });
});
