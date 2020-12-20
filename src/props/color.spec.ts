import { getColorPropValues } from "./color";

describe("getColorPropValues", () => {
  it("should match snapshot", async () => {
    const values = getColorPropValues();
    expect(values).toMatchSnapshot();
  });
});
