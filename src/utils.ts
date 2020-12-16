import get from "lodash.get";
import compact from "lodash.compact";

export function capitalize(key: string) {
  return key[0].toUpperCase() + key.slice(1);
}

function getStylesheetKey(value: string) {
  if (value) {
    const items = value.split("-");

    if (items.length) {
      return items.map(capitalize).join("");
    }

    return value;
  }

  return value;
}

function getStyle(sheet: StyleSheet, tuple: [string, string]) {
  const key = tuple[0] + getStylesheetKey(getStylesheetKey(tuple[1]));
  return get(sheet, key);
}

export function combineStyles(
  style: unknown,
  sheet: StyleSheet,
  ...values: [string, string][]
) {
  return compact([style, ...values.map((value) => getStyle(sheet, value))]);
}
