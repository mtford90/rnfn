import { fs } from "mz";
import * as path from "path";
import yargs from "yargs";
import generateTextDefs from "./textGen";
import { resolveConfig } from "./resolveConfig";

const { argv } = yargs(process.argv)
  .string("config")
  .alias("c", "config")
  .usage("Usage: $0 -c [path/to/rnfn.config.js]");

const configPath = argv.config || "rnfn.config.js";

const resolvedPath = path.isAbsolute(configPath)
  ? configPath
  : path.resolve(process.cwd(), configPath);

(async function main() {
  const config = await resolveConfig(resolvedPath);
  const textDefs = generateTextDefs(config);

  const paths = [
    "./dist/props/__generated__.d.ts",
    path.resolve(__dirname, "../@rnfn/core/dist/props/__generated__.d.ts"),
    path.resolve(__dirname, "../props/__generated__.d.ts"),
    path.resolve(__dirname, "./props/__generated__.d.ts"),
  ];

  let success = false;

  // eslint-disable-next-line no-restricted-syntax
  for (const p of paths) {
    // eslint-disable-next-line no-await-in-loop
    if (await fs.exists(p)) {
      // eslint-disable-next-line no-await-in-loop
      await fs.writeFile(p, textDefs);
      console.debug(`Generating types @ ${p}`);
      success = true;
      break;
    }
  }

  if (!success) {
    throw new Error(
      `Could not find file to replace, tried: ${paths.join(", ")}`
    );
  }
})()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
