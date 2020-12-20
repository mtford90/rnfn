import { render } from "@testing-library/react-native";
import React from "react";
import { FnText } from "./FnText";
import { RnFnProvider } from "../context";

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
                      "color": "`);
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
                      "color": "`);
      });
    });
  });

  describe("spacing", () => {
    describe("mt", () => {
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
