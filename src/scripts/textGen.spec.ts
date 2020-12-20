import generateTextDefs from "./textGen";

describe("generate definition files", () => {
  it("should work", async () => {
    const defs = generateTextDefs();

    expect(defs).toMatchSnapshot();
  });
});
