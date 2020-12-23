import { render } from "@testing-library/react-native";
import React from "react";
import { FnText } from "./FnText";
import { RnFnProvider } from "../context";

describe("Functional text styles", () => {
  describe("color", () => {
    describe("default color", () => {
      it("should use the correct color", async () => {
        expect(
          render(<FnText color="green">Hello</FnText>, {
            wrapper: ({ children }) => <RnFnProvider>{children}</RnFnProvider>,
          })
        ).toMatchInlineSnapshot(`
          <Text
            style={
              Array [
                Object {
                  "color": "#22c55e",
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
      it("should use the correct color", async () => {
        expect(
          render(<FnText color="green-50">Hello</FnText>, {
            wrapper: ({ children }) => <RnFnProvider>{children}</RnFnProvider>,
          })
        ).toMatchInlineSnapshot(`
          <Text
            style={
              Array [
                Object {
                  "color": "#f0fdf4",
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

  describe("spacing", () => {
    describe("mt", () => {
      it("should use the correct margin", async () => {
        expect(
          render(<FnText mt="dp">Hello</FnText>, {
            wrapper: ({ children }) => <RnFnProvider>{children}</RnFnProvider>,
          })
        ).toMatchInlineSnapshot(`
          <Text
            style={
              Array [
                Object {
                  "marginTop": 1,
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

  describe("text", () => {
    it("should use the correct font styles", () => {
      expect(
        render(<FnText text="2xl">Hello</FnText>, {
          wrapper: ({ children }) => <RnFnProvider>{children}</RnFnProvider>,
        })
      ).toMatchInlineSnapshot(`
        <Text
          style={
            Array [
              Object {
                "fontSize": 24,
                "lineHeight": 32,
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
