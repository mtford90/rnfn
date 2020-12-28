/* eslint-disable global-require,import/no-dynamic-require,@typescript-eslint/no-var-requires,react/forbid-prop-types */
import defaultConfig from "../theme/defaultConfig";
import Config from "../theme/Config";
import { validate } from "./schema";

export function resolveConfig(path: string): Config {
  if (path) {
    delete require.cache[path];
    console.debug(`dynamically requiring ${path}`);
    const userConfig = validate(require(path));
    const extend = userConfig.theme?.extend;
    const extendedColors = extend?.colors || {};
    const extendedSpacing = extend?.spacing || {};
    const extendedFontSize = extend?.fontSize || {};
    const extendedFontFamily = extend?.fontFamily || {};

    delete userConfig.theme?.extend;

    const extendedTheme = {
      ...defaultConfig.theme,
      colors: {
        ...defaultConfig.theme.colors,
        ...extendedColors,
      },
      spacing: {
        ...defaultConfig.theme.spacing,
        ...extendedSpacing,
      },
      fontSize: {
        ...defaultConfig.theme.fontSize,
        ...extendedFontSize,
      },
      fontFamily: {
        ...defaultConfig.theme.fontFamily,
        ...extendedFontFamily,
      },
    };

    return {
      theme: {
        ...extendedTheme,
        ...userConfig.theme,
      },
    };
  }

  return defaultConfig;
}
