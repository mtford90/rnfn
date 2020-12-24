import { getTextProps } from "./text";
import colors from "../../theme/colors";
import defaultConfig from "../../theme/defaultConfig";
import { getTextStyleSheet } from "../../stylesheets/textStyleSheet";

const textStyles = getTextStyleSheet();

describe("text props", () => {
  describe("color", () => {
    describe("default color", () => {
      it("should use the correct style", async () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              color: "green",
            },
          })
        ).toEqual({
          style: [
            {
              color: colors.green["500"],
            },
          ],
        });
      });
    });

    describe("color variant", () => {
      it("should use the correct style", async () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              color: "green-50",
            },
          })
        ).toEqual({
          style: [
            {
              color: colors.green["50"],
            },
          ],
        });
      });
    });
  });

  describe("bg", () => {
    describe("default color", () => {
      it("should use the correct style", async () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              bg: "green",
            },
          })
        ).toEqual({
          style: [
            {
              backgroundColor: colors.green["500"],
            },
          ],
        });
      });
    });

    describe("color variant", () => {
      it("should use the correct style", async () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              bg: "green-50",
            },
          })
        ).toEqual({
          style: [
            {
              backgroundColor: colors.green["50"],
            },
          ],
        });
      });
    });
  });

  describe("bg+color", () => {
    describe("default color", () => {
      it("should use the correct style", async () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              bg: "green",
              color: "green",
            },
          })
        ).toEqual({
          style: [
            {
              color: colors.green["500"],
            },
            {
              backgroundColor: colors.green["500"],
            },
          ],
        });
      });
    });
  });

  describe("margin", () => {
    describe("mt", () => {
      test("24", () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              mt: "24",
            },
          })
        ).toEqual({
          style: [
            {
              marginTop: defaultConfig.theme.spacing["24"],
            },
          ],
        });
      });

      test("dp", () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              mt: "dp",
            },
          })
        ).toEqual({
          style: [
            {
              marginTop: defaultConfig.theme.spacing.dp,
            },
          ],
        });
      });
    });
  });

  describe("padding", () => {
    describe("pt", () => {
      test("24", () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              pt: "24",
            },
          })
        ).toEqual({
          style: [
            {
              paddingTop: defaultConfig.theme.spacing["24"],
            },
          ],
        });
      });
    });
  });

  describe("text", () => {
    test("2xl", () => {
      expect(
        getTextProps({
          textStyles,
          config: defaultConfig,
          props: {
            text: "2xl",
          },
        })
      ).toEqual({
        style: [
          {
            fontSize: defaultConfig.theme.fontSize["2xl"][0],
            lineHeight: defaultConfig.theme.fontSize["2xl"][1].lineHeight,
          },
        ],
      });
    });
  });

  describe("fontFamily", () => {
    describe("system fonts", () => {
      it("should use the fontWeight property", async () => {
        expect(
          getTextProps({
            textStyles,
            config: defaultConfig,
            props: {
              fontFamily: "Helvetica",
              fontWeight: "thin",
            },
          })
        ).toEqual({
          style: [
            {
              fontFamily: "Helvetica",
            },
            {
              fontWeight: "100",
            },
          ],
        });
      });
    });

    describe("custom fonts", () => {
      const configWithFontFamilies = {
        theme: {
          colors: {},
          spacing: {},
          fontSize: {},
          fontFamily: {
            customFont: {
              thin: { fontFamily: "myFont-thin" },
              normal: { fontFamily: "myFont" },
            },
          },
        },
      };

      const stylesWithFontFamilies = getTextStyleSheet(configWithFontFamilies);

      describe("with no font weight specified", () => {
        describe("when normal exists", () => {
          it("should default to normal", () => {
            expect(
              getTextProps({
                textStyles: stylesWithFontFamilies,
                config: configWithFontFamilies,
                props: {
                  fontFamily: "customFont",
                },
              })
            ).toEqual({
              style: [
                {
                  fontFamily: "myFont",
                },
              ],
            });
          });
        });
      });

      describe("with font weight specified", () => {
        it("should use the specified font family for that weight", () => {
          expect(
            getTextProps({
              textStyles: stylesWithFontFamilies,
              props: {
                fontFamily: "customFont",
                fontWeight: "thin",
              },
              config: configWithFontFamilies,
            })
          ).toEqual({
            style: [
              {
                fontFamily: "myFont-thin",
              },
            ],
          });
        });
      });

      describe("when the specified font weight doesn't exist", () => {
        it("should default to normal", () => {
          expect(
            getTextProps({
              textStyles: stylesWithFontFamilies,
              props: {
                fontFamily: "customFont",
                fontWeight: "extrabold",
              },
              config: configWithFontFamilies,
            })
          ).toEqual({
            style: [
              {
                fontFamily: "myFont",
              },
            ],
          });
        });
      });
    });
  });
});
