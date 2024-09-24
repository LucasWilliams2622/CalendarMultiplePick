import { colors } from "./color";
import {
  StyleSheet,
  Dimensions,
  TextStyle,
  Platform,
  StatusBar,
} from "react-native";
export const isIOS = Platform.OS === "ios";

export const PADDING_HORIZONTAL = 24;
export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const windowContainer =
  Dimensions.get("window").width - PADDING_HORIZONTAL * 2;

const fontFamilyRegular = "Regular";
const fontFamilyMedium = "Medium";
const fontFamilySemiBold = "SemiBold";
const fontFamilyBold = "Bold";
const fontFamilyHeavy = "Heavy";

export const fontSize8 = 8;
export const fontSize10 = 10;
export const fontSize12 = 12;
export const fontSize14 = 14;
export const fontSize16 = 16;
export const fontSize18 = 18;
export const fontSize20 = 20;
export const fontSize24 = 24;
export const fontSize28 = 28;
export const fontSize32 = 32;
export const fontSize34 = 34;

export const lineHeight8 = 10;
export const lineHeight10 = 12;
export const lineHeight12 = 16;
export const lineHeight14 = 20;
export const lineHeight16 = 24;
export const lineHeight18 = 28;
export const lineHeight20 = 32;
export const lineHeight24 = 40;
export const lineHeight28 = 48;
export const lineHeight32 = 52;
export const lineHeight34 = 60;
const generateTextStyle = (
  fontSize: number,
  fontFamily: string,
  lineHeight: number,
  letterSpacing = 0
): TextStyle => ({
  fontSize: fontSize,
  color: colors.text,
  fontStyle: "normal",
  fontFamily: fontFamily,
  letterSpacing: letterSpacing,
  lineHeight: lineHeight,
});

export function hexToRgba(hex: string, opacity: number): string {
  // Kiểm tra xem mã màu HEX có hợp lệ không
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    throw new Error("Invalid HEX color");
  }

  // Lấy giá trị RGB từ mã màu HEX
  let color: number[] = [];
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
    color = [parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16)];
    return "";
  });

  if (colors.length === 0) {
    hex.replace(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, (m, r, g, b) => {
      color = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
      return "";
    });
  }

  // Trả về mã màu RGBA
  return `rgba(${colors.join(",")},${opacity})`;
}
export const appStyle = StyleSheet.create({
  text8: generateTextStyle(fontSize8, fontFamilyRegular, lineHeight8),
  text8Medium: generateTextStyle(fontSize8, fontFamilyMedium, lineHeight8),
  text8SemiBold: generateTextStyle(fontSize8, fontFamilySemiBold, lineHeight8),
  text8Bold: generateTextStyle(fontSize8, fontFamilyBold, lineHeight8),
  text8ExtraBold: generateTextStyle(fontSize8, fontFamilyHeavy, lineHeight8),

  text10: generateTextStyle(fontSize10, fontFamilyRegular, lineHeight10),
  text10Medium: generateTextStyle(fontSize10, fontFamilyMedium, lineHeight10),
  text10SemiBold: generateTextStyle(
    fontSize10,
    fontFamilySemiBold,
    lineHeight10
  ),
  text10Bold: generateTextStyle(fontSize10, fontFamilyBold, lineHeight10),
  text10ExtraBold: generateTextStyle(fontSize10, fontFamilyHeavy, lineHeight10),

  text12: generateTextStyle(fontSize12, fontFamilyRegular, lineHeight12),
  text12Medium: generateTextStyle(fontSize12, fontFamilyMedium, lineHeight12),
  text12SemiBold: generateTextStyle(
    fontSize12,
    fontFamilySemiBold,
    lineHeight12
  ),
  text12Bold: generateTextStyle(fontSize12, fontFamilyBold, lineHeight12),
  text12ExtraBold: generateTextStyle(fontSize12, fontFamilyHeavy, lineHeight12),

  text14: generateTextStyle(fontSize14, fontFamilyRegular, lineHeight14),
  text14Medium: generateTextStyle(fontSize14, fontFamilyMedium, lineHeight14),
  text14SemiBold: generateTextStyle(
    fontSize14,
    fontFamilySemiBold,
    lineHeight14
  ),
  text14Bold: generateTextStyle(fontSize14, fontFamilyBold, lineHeight14),
  text14ExtraBold: generateTextStyle(fontSize14, fontFamilyHeavy, lineHeight14),

  text16: generateTextStyle(fontSize16, fontFamilyRegular, lineHeight16),
  text16Medium: generateTextStyle(fontSize16, fontFamilyMedium, lineHeight16),
  text16SemiBold: generateTextStyle(
    fontSize16,
    fontFamilySemiBold,
    lineHeight16
  ),
  text16Bold: generateTextStyle(fontSize16, fontFamilyBold, lineHeight16),
  text16ExtraBold: generateTextStyle(fontSize16, fontFamilyHeavy, lineHeight16),

  text18: generateTextStyle(fontSize18, fontFamilyRegular, lineHeight18),
  text18Medium: generateTextStyle(fontSize18, fontFamilyMedium, lineHeight18),
  text18SemiBold: generateTextStyle(
    fontSize18,
    fontFamilySemiBold,
    lineHeight18
  ),
  text18Bold: generateTextStyle(fontSize18, fontFamilyBold, lineHeight18),
  text18ExtraBold: generateTextStyle(fontSize18, fontFamilyHeavy, lineHeight18),

  text20: generateTextStyle(fontSize20, fontFamilyRegular, lineHeight20),
  text20Medium: generateTextStyle(fontSize20, fontFamilyMedium, lineHeight20),
  text20SemiBold: generateTextStyle(
    fontSize20,
    fontFamilySemiBold,
    lineHeight20
  ),
  text20Bold: generateTextStyle(fontSize20, fontFamilyBold, lineHeight20),
  text20ExtraBold: generateTextStyle(fontSize20, fontFamilyHeavy, lineHeight20),

  text24: generateTextStyle(fontSize24, fontFamilyRegular, lineHeight24),
  text24Medium: generateTextStyle(fontSize24, fontFamilyMedium, lineHeight24),
  text24SemiBold: generateTextStyle(
    fontSize24,
    fontFamilySemiBold,
    lineHeight24
  ),
  text24Bold: generateTextStyle(fontSize24, fontFamilyBold, lineHeight24),
  text24ExtraBold: generateTextStyle(fontSize24, fontFamilyHeavy, lineHeight24),

  text28: generateTextStyle(fontSize28, fontFamilyRegular, lineHeight28),
  text28Medium: generateTextStyle(fontSize28, fontFamilyMedium, lineHeight28),
  text28SemiBold: generateTextStyle(
    fontSize28,
    fontFamilySemiBold,
    lineHeight28
  ),
  text28Bold: generateTextStyle(fontSize28, fontFamilyBold, lineHeight28),
  text28ExtraBold: generateTextStyle(fontSize28, fontFamilyHeavy, lineHeight28),

  text32: generateTextStyle(fontSize32, fontFamilyRegular, lineHeight32),
  text32Medium: generateTextStyle(fontSize32, fontFamilyMedium, lineHeight32),
  text32SemiBold: generateTextStyle(
    fontSize32,
    fontFamilySemiBold,
    lineHeight32
  ),
  text32Bold: generateTextStyle(fontSize32, fontFamilyBold, lineHeight32),
  text32ExtraBold: generateTextStyle(fontSize32, fontFamilyHeavy, lineHeight32),

  text34: generateTextStyle(fontSize34, fontFamilyRegular, lineHeight34),
  text324Medium: generateTextStyle(fontSize34, fontFamilyMedium, lineHeight34),
  text34SemiBold: generateTextStyle(
    fontSize34,
    fontFamilySemiBold,
    lineHeight34
  ),
  text34Bold: generateTextStyle(fontSize34, fontFamilyBold, lineHeight34),
  text34ExtraBold: generateTextStyle(fontSize34, fontFamilyHeavy, lineHeight34),

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  main: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  columnCenter: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBtw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  rowAround: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  rowEvenly: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  columnBtw: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  shadow: {
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 12.81,
    elevation: 6,
    backgroundColor: colors.background,
  },
  activeTab: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 8,
    width: "50%",
    shadowColor: colors.primary,
  },
  inativeTab: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  //===============| APP OTP STYLE |=============
  containerOtp: {
    width: "100%",
    marginVertical: 24,
  },
  inputsContainer: {},

  //===============| END APP OTP STYLE |=============
});
