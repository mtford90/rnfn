import { fs } from "mz";
import * as path from "path";
import generateTextDefs from "./textGen";
import { resolveConfig } from "./resolveConfig";

(async function main() {
  const [, , configPath] = process.argv;

  const config = await resolveConfig(configPath);
  const textDefs = generateTextDefs(config);

  const paths = [
    path.resolve(__dirname, "../props/__generated__.d.ts"),
    path.resolve(__dirname, "./props/__generated__.d.ts"),
    path.resolve(__dirname, "../@rnfn/core/dist/props/__generated__.d.ts"),
  ];

  let success = false;

  // eslint-disable-next-line no-restricted-syntax
  for (const p of paths) {
    // eslint-disable-next-line no-await-in-loop
    if (await fs.exists(p)) {
      // eslint-disable-next-line no-await-in-loop
      await fs.writeFile(p, textDefs);
      console.debug(`${p} does exist`);
      success = true;
      break;
    } else {
      console.debug(`${p} does not exist`);
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
