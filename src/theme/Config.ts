import FontWeightName from "./FontWeightName";

type FontWeightMap = Partial<Record<FontWeightName, { fontFamily: string }>>;

export default interface Config {
  theme: {
    colors: Record<string | number, string | Record<string | number, string>>;
    spacing: Record<string, number>;
    fontSize: Record<string, [number, { lineHeight: number }]>;
    fontFamily: Record<
      string,
      Partial<Record<"normal" | "italic", FontWeightMap>>
    >;
  };
}
