import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",

  red: "red",
  /* Text Colors */
  white: "#fff",
  offwhite: "#eee",
  whitegray: "#CCD6F6",
  grayText: "#8892B0",
  grayDarkText: "#76819E",

  /* Colors */
  grayLight: "#d3dbde",
  grayDark: "#a3aaad",
  gray: "#74858C",

  blue: "#112240",
  blueDark: "#0A192F",
  blueHighlight: "#64FFDA",
};

export const SIZES = {
  letter: 2,
  margin: 6,
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  title: 30,
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
  helvetica: "HelveticaNeue",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export const STYLES = StyleSheet.create({
  header: {
    background: COLORS.gray,
  },
});
