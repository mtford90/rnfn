import FontWeightName from "./FontWeightName";

export default interface Config {
  theme: {
    colors: Record<string | number, string | Record<string | number, string>>;
    spacing: Record<string, number>;
    fontSize: Record<string, [number, { lineHeight: number }]>;
    fontFamily: Record<
      string,
      Partial<Record<FontWeightName, { fontFamily: string }>>
    >;
  };
}
