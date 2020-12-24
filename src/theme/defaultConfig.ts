import colors from "./colors";
import Config from "./Config";

const defaultConfig: Config = {
  theme: {
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      emerald: colors.emerald,
      lime: colors.lime,
      rose: colors.rose,
      blue: colors.blue,
      lightBlue: colors.lightBlue,
      amber: colors.amber,
      orange: colors.orange,
      cyan: colors.cyan,
      teal: colors.teal,
      warmGray: colors.warmGray,
      fuchsia: colors.fuchsia,
      violet: colors.violet,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      trueGray: colors.trueGray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
    },
    spacing: {
      dp: 1,
      "0": 0,
      "0.5": 2,
      "1": 4,
      "1.5": 6,
      "2": 8,
      "2.5": 10,
      "3": 12,
      "3.5": 14,
      "4": 16,
      "5": 20,
      "6": 24,
      "7": 28,
      "8": 32,
      "9": 36,
      "10": 40,
      "11": 44,
      "12": 48,
      "14": 52,
      "16": 64,
      "20": 80,
      "24": 96,
      "28": 112,
      "32": 128,
      "36": 144,
      "40": 160,
      "44": 176,
      "48": 192,
      "52": 208,
      "56": 224,
      "60": 240,
      "64": 256,
      "72": 288,
      "80": 320,
      "96": 374,
    },
    fontSize: {
      xs: [12, { lineHeight: 16 }],
      sm: [14, { lineHeight: 20 }],
      base: [16, { lineHeight: 24 }],
      lg: [18, { lineHeight: 28 }],
      xl: [20, { lineHeight: 28 }],
      "2xl": [24, { lineHeight: 32 }],
      "3xl": [30, { lineHeight: 36 }],
      "4xl": [36, { lineHeight: 40 }],
    },
    fontFamily: {},
  },
};

export default defaultConfig;
