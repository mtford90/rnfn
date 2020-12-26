/* eslint-disable react/forbid-prop-types */
import * as Yup from "yup";
import { ValidationError } from "yup";
import { fontWeights } from "../stylesheets/mappings";

function validateColourVariantObject(
  // eslint-disable-next-line @typescript-eslint/ban-types
  colorValue: object | null | undefined = {},
  path: string[]
) {
  Object.entries(colorValue || {}).forEach(
    ([colorVariantName, colorVariantValue]) => {
      if (typeof colorVariantValue !== "string") {
        throw new Yup.ValidationError(
          `Must be a string`,
          colorValue,
          [...path, colorVariantName].join(".")
        );
      }
    }
  );
}

const colorsSchema = (p: string) =>
  Yup.lazy((value) => {
    if (typeof value === "object") {
      Object.entries(value).forEach(([colorName, colorValue]) => {
        const path = [p, colorName];

        if (typeof colorValue === "string") {
          // Nothing to do, all good
        } else if (typeof colorValue === "object") {
          validateColourVariantObject(colorValue, path);
        } else {
          throw new Yup.ValidationError(
            "Colors must either be a string or object",
            colorValue,
            path.join(".")
          );
        }
      });
    }

    return Yup.object();
  });

const spacingSchema = (p: string) =>
  Yup.lazy((value) => {
    if (typeof value === "object") {
      Object.entries(value).forEach(([spacingName, spacingValue]) => {
        if (typeof spacingValue !== "number") {
          throw new Yup.ValidationError(
            `Must be a number`,
            spacingValue,
            `${p}.${spacingName}`
          );
        }
      });
    }

    return Yup.object();
  });

const fontSizeSchema = (p: string) =>
  Yup.lazy((value) => {
    if (typeof value === "object") {
      Object.entries(value).forEach(([fontSizeName, fontSizeValue]) => {
        if (Array.isArray(fontSizeValue)) {
          const [dp, props = {}] = fontSizeValue;

          if (typeof dp === "number") {
            try {
              Yup.object({
                lineHeight: Yup.number(),
                letterSpacing: Yup.number(),
              }).validateSync(props);
            } catch (err) {
              throw new ValidationError(
                err.message,
                props,
                `${p}.${fontSizeName}[1]`
              );
            }
          } else {
            throw new ValidationError(
              `First argument of the array must be a number`,
              dp,
              `${p}.${fontSizeName}[0]`
            );
          }
        } else {
          throw new ValidationError(
            `Must be an array`,
            fontSizeValue,
            `${p}.${fontSizeName}`
          );
        }
      });
    }

    return Yup.object();
  });

const fontWeightSchema = Yup.string().oneOf(fontWeights).required().strict();

const fontStyleSchema = Yup.string()
  .oneOf(["normal", "italic"])
  .required()
  .strict();

const fontTextPropsSchema = Yup.object({
  fontFamily: Yup.string().required(),
})
  .required()
  .strict();

const fontFamilySchema = (p: string) =>
  Yup.lazy((value) => {
    if (typeof value === "object") {
      Object.entries(value).forEach(([fontName, fontStyleConfig]) => {
        if (fontStyleConfig && typeof fontStyleConfig === "object") {
          Object.entries(fontStyleConfig).forEach(
            ([fontStyle, fontWeightConfig]) => {
              try {
                fontStyleSchema.validateSync(fontStyle);
              } catch (err) {
                throw new ValidationError(
                  `fontStyle must be "italic" or "normal"`,
                  fontStyle,
                  `${p}.${fontName}`
                );
              }

              Object.entries(fontWeightConfig).forEach(
                ([fontWeight, textStyle]) => {
                  try {
                    fontWeightSchema.validateSync(fontWeight);
                  } catch (err) {
                    throw new ValidationError(
                      err.message,
                      fontWeight,
                      `${p}.${fontName}.${fontStyle}`
                    );
                  }

                  try {
                    fontTextPropsSchema.validateSync(textStyle);
                  } catch (err) {
                    throw new ValidationError(
                      err.message,
                      textStyle,
                      `${p}.${fontName}.${fontStyle}.${fontWeight}`
                    );
                  }
                }
              );
            }
          );
        } else {
          throw new ValidationError(
            `Must be an object`,
            fontStyleConfig,
            `theme.extend.fontFamily.${fontName}`
          );
        }
      });
    }

    return Yup.object();
  });

export const configSchema = Yup.object({
  theme: Yup.object({
    extend: Yup.object({
      colors: colorsSchema("theme.extend.colors"),
      spacing: spacingSchema("theme.extend.spacing"),
      fontSize: fontSizeSchema("theme.extend.fontSize"),
      fontFamily: fontFamilySchema("theme.extend.fontFamily"),
    }).strict(),
    colors: colorsSchema("theme.colors"),
    spacing: spacingSchema("theme.spacing"),
    fontSize: fontSizeSchema("theme.fontSize"),
    fontFamily: fontFamilySchema("theme.fontFamily"),
  }).strict(),
})
  .required()
  .strict();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validate(schema: any): any {
  try {
    return configSchema.validateSync(schema);
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      // Throw a more user-friendly error
      throw new Error(`[${err.path}] ${err.message} - got "${err.value}"`);
    } else {
      throw err;
    }
  }
}
