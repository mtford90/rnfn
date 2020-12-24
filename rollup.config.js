import typescript from "@rollup/plugin-typescript";
import shebang from "rollup-plugin-add-shebang";

export default {
  input: "src/scripts/tsGen.ts",
  output: {
    file: "dist/rnfn-ts-gen",
    format: "cjs",
  },
  plugins: [
    typescript(),
    shebang({
      include: "dist/rnfn-ts-gen",
    }),
  ],
};
