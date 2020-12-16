import { StyleSheet } from "react-native";
import defaultConfig from "../theme/defaultConfig";
import Config from "../theme/Config";
import { capitalize } from "../utils";

export default function generateTextStyles(config: Config = defaultConfig) {
  const namedStyles: StyleSheet.NamedStyles<any> = {};

  Object.entries(config.theme.colors).forEach(([key, value]) => {
    if (typeof value === "string") {
      namedStyles[`color${capitalize(key)}`] = { color: value };
    } else if (typeof value === "object") {
      Object.entries(value).forEach(([secondaryKey, secondaryValue]) => {
        if (secondaryKey !== "DEFAULT") {
          namedStyles[`color${capitalize(key)}${capitalize(secondaryKey)}`] = {
            color: secondaryValue,
          };
        }
      });

      const defaultColour = value["500"] || value.DEFAULT;

      if (defaultColour) {
        namedStyles[`color${capitalize(key)}`] = { color: defaultColour };
      }
    }
  });

  return namedStyles;
}
