import { fs } from "mz";
import * as path from "path";
import generateTextDefs from "../lab/ts-def-generation/text";

(async function main() {
  const textDefs = generateTextDefs();
  await fs.writeFile(
    path.resolve(__dirname, "../components/FnText.d.ts"),
    textDefs
  );
})()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
