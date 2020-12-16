import { render } from "@testing-library/react-native";
import React from "react";
import { FnText } from "./FnText";
import { RnFnProvider } from "../context";
import defaultConfig from "../theme/defaultConfig";

describe("Functional text styles", () => {
  describe("color", () => {
    describe("default color", () => {
      it("should use the correct style", async () => {
        expect(
          render(<FnText color="green">Hello</FnText>, {
            wrapper: ({ children }) => <RnFnProvider>{children}</RnFnProvider>,
          })
        ).toMatchInlineSnapshot(`
      <Text
        style={
          Array [
            Object {
              "color": "${defaultConfig.theme.colors.green[500]}",
            },
          ]
        }
      >
        Hello
      </Text>
    `);
      });
    });

    describe("color variant", () => {
      it("should use the correct style", async () => {
        expect(
          render(<FnText color="green-50">Hello</FnText>, {
            wrapper: ({ children }) => <RnFnProvider>{children}</RnFnProvider>,
          })
        ).toMatchInlineSnapshot(`
      <Text
        style={
          Array [
            Object {
              "color": "${defaultConfig.theme.colors.green[50]}",
            },
          ]
        }
      >
        Hello
      </Text>
    `);
      });
    });
  });
});
