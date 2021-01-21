import get from "lodash.get";
import compact from "lodash.compact";

function getStyle(sheet: StyleSheet, key: string) {
  const style = get(sheet, key);

  if (!style) {
    console.warn(
      `Invalid style "${key}" (looked for ${key} in the StyleSheet)`
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
