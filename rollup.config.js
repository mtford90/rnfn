import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import shebang from "rollup-plugin-add-shebang";

export default {
  input: "src/scripts/tsGen.ts",
  output: {
    file: "dist/rnfn-ts-gen",
    format: "cjs",
  },
  plugins: [
    typescript({ module: "CommonJS" }),
    commonjs({ extensions: [".js", ".ts"] }),
    shebang({
      include: "dist/rnfn-ts-gen",
    }),
  ],
};
