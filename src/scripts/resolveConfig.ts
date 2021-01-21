/* eslint-disable global-require,import/no-dynamic-require,@typescript-eslint/no-var-requires,react/forbid-prop-types */
import defaultConfig from "../theme/defaultConfig";
import Config from "../theme/Config";
import { validate } from "./schema";
import { mergeConfig } from "./mergeConfig";

export function resolveConfig(path: string): Config {
  if (path) {
    delete require.cache[require.resolve(path)];
    console.debug(`dynamically requiring ${path}`);
    const userConfig = validate(require(path));
    return mergeConfig(userConfig);
  }

  return defaultConfig;
}
