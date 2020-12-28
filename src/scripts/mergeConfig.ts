import Config, { UserConfig } from "../theme/Config";
import defaultConfig from "../theme/defaultConfig";

export function mergeConfig(userConfig: UserConfig): Config {
  const extend = userConfig.theme?.extend;
  const extendedColors = extend?.colors || {};
  const extendedSpacing = extend?.spacing || {};
  const extendedFontSize = extend?.fontSize || {};
  const extendedFontFamily = extend?.fontFamily || {};

  // eslint-disable-next-line no-param-reassign
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
