import get from "lodash.get";
import compact from "lodash.compact";
import camelCase from "lodash.camelcase";

function getStyle(sheet: StyleSheet, kebab: string) {
  const key = camelCase(kebab);
  const style = get(sheet, key);

  if (!style) {
    console.warn(
      `Invalid style "${kebab}" (looked for ${key} in the StyleSheet)`
    );
  }

  return style;
}

export function combineStyles(
  style: unknown,
  sheet: StyleSheet,
  ...values: Array<string | undefined | null | false>
) {
  return compact([
    style,
    ...compact(values).map((value) => getStyle(sheet, value)),
  ]);
}
