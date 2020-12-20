import defaultConfig from "../theme/defaultConfig";

/**
 * Maps e.g. green-50 onto the hex color
 *
 * @param config
 */
export function getColorPropValues(config = defaultConfig) {
  const propValues: Record<string, string> = {};

  Object.entries(config.theme.colors).forEach(([key, value]) => {
    if (typeof value === "string") {
      propValues[key] = value;
    } else if (typeof value === "object") {
      Object.entries(value).forEach(([secondaryKey, secondaryValue]) => {
        if (secondaryKey !== "DEFAULT") {
          propValues[`${key}-${secondaryKey}`] = secondaryValue;
        }
      });

      const defaultColour = value["500"] || value.DEFAULT;

      if (defaultColour) {
        propValues[key] = defaultColour;
      }
    }
  });

  return propValues;
}
