import Constants from "expo-constants";
import { palette } from "./palette";

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * Header color.
   */
  header:
    Constants.expoConfig.extra.headerColorWhite === true
      ? "white"
      : Constants.expoConfig.extra.themeColor,
  /**
   * The main tinting color.
   */
  primary: "#03A9F4",
  secondary: "#CDDC39",
  third: "#F1FFF2",
  /**
   * The header color
   */
  animationColor: Constants.expoConfig.extra.animationBackground
    ? Constants.expoConfig.extra.animationBackground
    : "#FFFFFF",

  headerTitle:
    Constants.expoConfig.extra.headerColorWhite === true ? "black" : "white",
  /**
   * The header icon
   */
  headerIcon:
    Constants.expoConfig.extra.headerColorWhite === true
      ? Constants.expoConfig.extra.themeColor
      : "white",
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.gray,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.black,
  /**
   * The default color of placeholder in many components.
   */

  placeholder: palette.gray,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,
  /**
   * Color wwhen user focus component
   */
  focusColor: "#3394EF",
  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,
  /**
   * Color wwhen user focus component
   */
  shadowColor: "rgba(94, 94, 94, 1)",
  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */

  /**
   * Alert colors
   */
  dangerColor: "#F0463B",
  dangerColor2: "#FEDDDD",

  warningColor: "#FDEC53",
  warningColor2: "#FFFFCF",

  successColor: "#52AF57",
  successColor2: "#DEFFDF",

  activeColor: "#3394EF",
  activeColor2: "#DFFFFF",
  disable: "#AEAEB2",
  borderColor: "#F0463B",
  storybookTextColor: palette.black,
  bgButton: Constants.expoConfig.extra.themeColor,
  bgComponent: "#F8F8F8",
  titleButton: palette.white,

  colorGray: "#9E9E9E",
  borderGray: "#E0E0E0",

  greenOpacity20: `${Constants.expoConfig.extra.themeColor}20`,

  textBlack: "#000000",
  textNormal: "#48484A",
  textGray: "#636366",
  whiteOpacity20: "#FFFFFF40",
  //region Light Mode Text
  systemDark5: "#0F0F0F",
  systemDark4: "#636366",
  systemDark3: "#48484A",
  systemDark2: "#636366",
  systemDark1: "#8E8E93",

  //region Dark Mode Text
  systemLight5: "#F2F2F7",
  systemLight4: "#636366",
  systemLight3: "#D1D1D6",
  systemLight2: "#C7C7CC",
  systemLight1: "#AEAEB2",

  gray757575: "#757575",

  colorEEEEF0: "#EEEEF0",

  colorFFFFFF: "#FFFFFF",

  colorFFFFF50: "#FFFFFF50",

  colorF5F5F5: "#F5F5F5",

  color212121: "#21212130",
  colorbdbdbd: "#bdbdbd",
  colorBDBDBD: "#BDBDBD",
  colorF48FB1: "#F48FB1",
  color90CAF9: "#90CAF9",
  colorFFCDD2: "#FFCDD2",

  black: "#000000",
  gray: "#808080",
  gray3: "#AEAEB2",
  white: "#FFFFFF",
  aqua: "#00FFFF",
  lightGray: "#FAFAFA",

  greenLight: "#00FF00",
  green: "#4CAF50",
  lime: "#a4c403",
  greenLeaves: "#60a916",
  emerald: "#1d8a02",
  teal: "#2daba8",
  ligthGreen: "#E0FFF4",

  cyan: "#30a1e1",
  blue: "#3e65ff",
  blue2: "#2550ef",
  indigo: "#6a00ff",
  violet: "#6a00ff",
  pink: "#f472d0",

  magenta: "#d82372",
  crimson: "#a21a25",
  red: "#F0463B",
  red2: "#cc0000",
  red3: "#e52a00",

  orange: "#f86802",
  lightOrange: "#E07900",
  amber: "#f0a309",

  yellow: "#e3c800",
  brown: "#825a2b",
  olive: "#6c8764",
  gray2: "#424242",
  redReportContract: "#D94940",
  green2: "#0CA89A",
  green3: "#3172A5",
  bgItem: "#F5F5F5",
  bgItemBooking: "#424648",
  bgClean: "#ecbfbd",
  textSectionTitleColor: "#b6cdbc",
  selectedDayTextColor: "#d75f23",
  radio: "#2b6fee",
  unRadio: "#d4d4d8",
};
