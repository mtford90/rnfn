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

  describe("font family", () => {
    describe("with a custom font", () => {
      describe("with normal style", () => {
        it("should use the correct font styles", async () => {
          expect(
            render(
              <FnText fontFamily="customFont" fontWeight="thin">
                Hello
              </FnText>,
              {
                wrapper: ({ children }) => (
                  <RnFnProvider
                    config={{
                      theme: {
                        colors: {},
                        spacing: {},
                        fontSize: {},
                        opacity: {},
                        fontFamily: {
                          customFont: {
                            normal: {
                              thin: { fontFamily: "myFont-thin" },
                              normal: { fontFamily: "myFont" },
                            },
                          },
                        },
                      },
                    }}
                  >
                    {children}
                  </RnFnProvider>
                ),
              }
            )
          ).toMatchInlineSnapshot(`
                  <Text
                    style={
                      Array [
                        Object {
                          "fontFamily": "myFont-thin",
                        },
                      ]
                    }
                  >
                    Hello
                  </Text>
              `);
        });
      });

      describe("with italic style", () => {
        it("should use the correct font styles", async () => {
          expect(
            render(
              <FnText
                fontFamily="customFont"
                fontWeight="thin"
                fontStyle="italic"
              >
                Hello
              </FnText>,
              {
                wrapper: ({ children }) => (
                  <RnFnProvider
                    config={{
                      theme: {
                        colors: {},
                        spacing: {},
                        fontSize: {},
                        opacity: {},
                        fontFamily: {
                          customFont: {
                            normal: {
                              thin: { fontFamily: "myFont-thin" },
                              normal: { fontFamily: "myFont" },
                            },
                            italic: {
                              thin: { fontFamily: "myFont-italic-thin" },
                            },
                          },
                        },
                      },
                    }}
                  >
                    {children}
                  </RnFnProvider>
                ),
              }
            )
          ).toMatchInlineSnapshot(`
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "myFont-italic-thin",
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
    describe("with a system font", () => {
      it("should use the correct font styles", async () => {
        expect(
          render(
            <FnText fontFamily="Helvetica" fontWeight="thin">
              Hello
            </FnText>,
            {
              wrapper: ({ children }) => (
                <RnFnProvider
                  config={{
                    theme: {
                      colors: {},
                      spacing: {},
                      opacity: {},
                      fontSize: {},
                      fontFamily: {},
                    },
                  }}
                >
                  {children}
                </RnFnProvider>
              ),
            }
          )
        ).toMatchInlineSnapshot(`
          <Text
            style={
              Array [
                Object {
                  "fontFamily": "Helvetica",
                },
                Object {
                  "fontWeight": "100",
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

  describe("align", () => {
    it("should use the correct styles", async () => {
      expect(
        render(<FnText align="right">Hello</FnText>, {
          wrapper: ({ children }) => <RnFnProvider>{children}</RnFnProvider>,
        })
      ).toMatchInlineSnapshot(`
        <Text
          style={
            Array [
              Object {
                "textAlign": "right",
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
