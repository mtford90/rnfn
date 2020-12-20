import get from "lodash.get";
import compact from "lodash.compact";

export function capitalize(key: string) {
  return key[0].toUpperCase() + key.slice(1);
}

function camelCase(value: string) {
  if (value) {
    const items = value.split("-");

    if (items.length) {
      return items.map(capitalize).join("");
    }

    return value;
  }

  return value;
}

type Property = string;
type Value = string;

// Represents the combination of a property e.g. "mt" and a value e.g. "32" or `mg="32"`
export type StylesheetTuple = [Property, Value]; // TODO: Why not just a single property object instead?

function getStyle(sheet: StyleSheet, tuple: StylesheetTuple) {
  const key = tuple[0] + camelCase(camelCase(tuple[1]));
  return get(sheet, key);
}

export function combineStyles(
  style: unknown,
  sheet: StyleSheet,
  ...values: StylesheetTuple[]
) {
  return compact([style, ...values.map((value) => getStyle(sheet, value))]);
}
