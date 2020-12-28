import { validate } from "./schema";

describe("schema", () => {
  describe("extend", () => {
    describe("colors", () => {
      describe("when color is of invalid type", () => {
        it("should throw an error", async () => {
          expect(() => {
            validate({
              theme: {
                extend: {
                  colors: {
                    red: 2,
                  },
                },
              },
            });
          }).toThrow();
        });
      });

      describe("when color is a string", () => {
        it("should validate", async () => {
          expect(
            validate({
              theme: {
                extend: {
                  colors: {
                    red: "red",
                  },
                },
              },
            })
          ).toEqual({
            theme: {
              extend: {
                colors: {
                  red: "red",
                },
              },
            },
          });
        });
      });

      describe("when color is a valid variant map", () => {
        it("should validate", async () => {
          expect(
            validate({
              theme: {
                extend: {
                  colors: {
                    red: {
                      50: "lightred",
                      100: "red",
                    },
                  },
                },
              },
            })
          ).toEqual({
            theme: {
              extend: {
                colors: {
                  red: {
                    50: "lightred",
                    100: "red",
                  },
                },
              },
            },
          });
        });
      });

      describe("when color is an invalid variant map", () => {
        it("should throw error", async () => {
          expect(() =>
            validate({
              theme: {
                extend: {
                  colors: {
                    red: {
                      50: 2,
                      100: "red",
                    },
                  },
                },
              },
            })
          ).toThrow();
        });
      });
    });

    describe("spacing", () => {
      describe("when spacing is of invalid type", () => {
        it("should throw an error", async () => {
          expect(() => {
            validate({
              theme: {
                extend: {
                  spacing: 2,
                },
              },
            });
          }).toThrow();
        });
      });

      describe("when spacing value is of invalid type", () => {
        it("should throw an error", async () => {
          expect(() => {
            validate({
              theme: {
                extend: {
                  spacing: {
                    sm: "asdasd",
                  },
                },
              },
            });
          }).toThrow();
        });
      });

      describe("when spacing value is of valid type", () => {
        it("should validate", async () => {
          const config = {
            theme: {
              extend: {
                spacing: {
                  sm: 2,
                },
              },
            },
          };

          expect(validate(config)).toEqual(config);
        });
      });
    });

    describe("fontSize", () => {
      describe("when fontSize root is invalid", () => {
        it("should throw", async () => {
          expect(() =>
            validate({
              theme: {
                extend: {
                  fontSize: 2,
                },
              },
            })
          ).toThrow();
        });
      });

      describe("when fontSize is invalid", () => {
        describe("with invalid dp", () => {
          it("should throw", async () => {
            expect(() =>
              validate({
                theme: {
                  extend: {
                    fontSize: {
                      xs: ["12", { lineHeight: 16 }],
                    },
                  },
                },
              })
            ).toThrow();
          });
        });

        describe("with invalid value", () => {
          it("should throw", async () => {
            expect(() =>
              validate({
                theme: {
                  extend: {
                    fontSize: {
                      xs: {},
                    },
                  },
                },
              })
            ).toThrow();
          });
        });

        describe("with invalid props", () => {
          it("should throw", async () => {
            expect(() =>
              validate({
                theme: {
                  extend: {
                    fontSize: {
                      xs: [12, 12],
                    },
                  },
                },
              })
            ).toThrow();
          });
        });
      });

      describe("when fontSize is valid", () => {
        describe("with dp only", () => {
          it("should validate", async () => {
            const config = {
              theme: {
                extend: {
                  fontSize: {
                    xs: [12],
                  },
                },
              },
            };

            expect(validate(config)).toEqual(config);
          });
        });

        describe("with props", () => {
          it("should validate", async () => {
            const config = {
              theme: {
                extend: {
                  fontSize: {
                    xs: [12, { lineHeight: 16, letterSpacing: 1.5 }],
                  },
                },
              },
            };

            expect(validate(config)).toEqual(config);
          });
        });
      });
    });

    describe("fontFamily", () => {
      describe("when invalid", () => {
        describe("with invalid root value", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                extend: {
                  fontFamily: 2,
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font family value", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                extend: {
                  fontFamily: {
                    customFont: 2,
                  },
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font style name", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                extend: {
                  fontFamily: {
                    customFont: {
                      oops: {
                        thin: { fontFamily: "myFont-thin" },
                        normal: { fontFamily: "myFont" },
                      },
                    },
                  },
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font weight name", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                extend: {
                  fontFamily: {
                    customFont: {
                      normal: {
                        oops: { fontFamily: "myFont-thin" },
                      },
                    },
                  },
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font family", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                extend: {
                  fontFamily: {
                    customFont: {
                      normal: {
                        thin: { fontFamily: 2 },
                      },
                    },
                  },
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });
      });

      describe("when valid", () => {
        it("should validate", async () => {
          const config = {
            theme: {
              extend: {
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
            },
          };

          expect(validate(config)).toEqual(config);
        });
      });
    });
  });

  describe("override", () => {
    describe("colors", () => {
      describe("when color is of invalid type", () => {
        it("should throw an error", async () => {
          expect(() => {
            validate({
              theme: {
                colors: {
                  red: 2,
                },
              },
            });
          }).toThrow();
        });
      });

      describe("when color is a string", () => {
        it("should validate", async () => {
          expect(
            validate({
              theme: {
                colors: {
                  red: "red",
                },
              },
            })
          ).toEqual({
            theme: {
              colors: {
                red: "red",
              },
            },
          });
        });
      });

      describe("when color is a valid variant map", () => {
        it("should validate", async () => {
          expect(
            validate({
              theme: {
                colors: {
                  red: {
                    50: "lightred",
                    100: "red",
                  },
                },
              },
            })
          ).toEqual({
            theme: {
              colors: {
                red: {
                  50: "lightred",
                  100: "red",
                },
              },
            },
          });
        });
      });

      describe("when color is an invalid variant map", () => {
        it("should throw error", async () => {
          expect(() =>
            validate({
              theme: {
                colors: {
                  red: {
                    50: 2,
                    100: "red",
                  },
                },
              },
            })
          ).toThrow();
        });
      });
    });

    describe("spacing", () => {
      describe("when spacing is of invalid type", () => {
        it("should throw an error", async () => {
          expect(() => {
            validate({
              theme: {
                spacing: 2,
              },
            });
          }).toThrow();
        });
      });

      describe("when spacing value is of invalid type", () => {
        it("should throw an error", async () => {
          expect(() => {
            validate({
              theme: {
                spacing: {
                  sm: "asdasd",
                },
              },
            });
          }).toThrow();
        });
      });

      describe("when spacing value is of valid type", () => {
        it("should validate", async () => {
          const config = {
            theme: {
              spacing: {
                sm: 2,
              },
            },
          };

          expect(validate(config)).toEqual(config);
        });
      });
    });

    describe("fontSize", () => {
      describe("when fontSize root is invalid", () => {
        it("should throw", async () => {
          expect(() =>
            validate({
              theme: {
                fontSize: 2,
              },
            })
          ).toThrow();
        });
      });

      describe("when fontSize is invalid", () => {
        describe("with invalid dp", () => {
          it("should throw", async () => {
            expect(() =>
              validate({
                theme: {
                  fontSize: {
                    xs: ["12", { lineHeight: 16 }],
                  },
                },
              })
            ).toThrow();
          });
        });

        describe("with invalid value", () => {
          it("should throw", async () => {
            expect(() =>
              validate({
                theme: {
                  fontSize: {
                    xs: {},
                  },
                },
              })
            ).toThrow();
          });
        });

        describe("with invalid props", () => {
          it("should throw", async () => {
            expect(() =>
              validate({
                theme: {
                  fontSize: {
                    xs: [12, 12],
                  },
                },
              })
            ).toThrow();
          });
        });
      });

      describe("when fontSize is valid", () => {
        describe("with dp only", () => {
          it("should validate", async () => {
            const config = {
              theme: {
                fontSize: {
                  xs: [12],
                },
              },
            };

            expect(validate(config)).toEqual(config);
          });
        });

        describe("with props", () => {
          it("should validate", async () => {
            const config = {
              theme: {
                fontSize: {
                  xs: [12, { lineHeight: 16, letterSpacing: 1.5 }],
                },
              },
            };

            expect(validate(config)).toEqual(config);
          });
        });
      });
    });

    describe("fontFamily", () => {
      describe("when invalid", () => {
        describe("with invalid root value", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                fontFamily: 2,
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font family value", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                fontFamily: {
                  customFont: 2,
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font style name", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                fontFamily: {
                  customFont: {
                    oops: {
                      thin: { fontFamily: "myFont-thin" },
                      normal: { fontFamily: "myFont" },
                    },
                  },
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font weight name", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                fontFamily: {
                  customFont: {
                    normal: {
                      oops: { fontFamily: "myFont-thin" },
                    },
                  },
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });

        describe("with invalid font family", () => {
          it("should throw", async () => {
            const config = {
              theme: {
                fontFamily: {
                  customFont: {
                    normal: {
                      thin: { fontFamily: 2 },
                    },
                  },
                },
              },
            };

            expect(() => validate(config)).toThrow();
          });
        });
      });

      describe("when valid", () => {
        it("should validate", async () => {
          const config = {
            theme: {
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
          };

          expect(validate(config)).toEqual(config);
        });
      });
    });
  });
});
