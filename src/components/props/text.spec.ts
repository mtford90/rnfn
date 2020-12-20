import { getTextProps } from "./text";
import colors from "../../theme/colors";
import defaultConfig from "../../theme/defaultConfig";
import { getTextStyleSheet } from "../../stylesheets/textStyleSheet";

const textStyles = getTextStyleSheet();

describe("FnText", () => {
  describe("color", () => {
    describe("default color", () => {
      it("should use the correct style", async () => {
        expect(
          getTextProps({
            textStyles,
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
});
