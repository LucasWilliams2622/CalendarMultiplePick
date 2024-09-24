import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { DayProps } from "react-native-calendars/src/calendar/day";
import { CalendarList, DateData, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { MarkedDate } from "./type";
import { colors } from "@/app/theme/color";
import { squareImageSize } from "@/app/theme/responsive";
import { windowWidth } from "@/app/theme/appStyle";

LocaleConfig.locales["vn"] = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthNamesShort: [
    "Th 1",
    "Th 2",
    "Th 3",
    "Th 4",
    "Th 5",
    "Th 6",
    "Th 7",
    "Th 8",
    "Th 9",
    "Th 10",
    "Th 11",
    "Th 12",
  ],
  dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  today: "Hôm nay",
};

const isConsecutiveDays = (date1, date2) => {
  // Get the difference in time between the two dates in milliseconds
  const diffInMs = Math.abs(date1?.getTime() - date2?.getTime());

  // Convert the difference in milliseconds to days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  // Check if the difference is exactly 1 day
  return diffInDays === 1;
};

LocaleConfig.defaultLocale = "vn";
const CURRENT_DATE = new Date();
const AppDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: MarkedDate }>(
    {}
  );

  const onDayPress = (day: DateData) => {
    const selectedDate = moment.utc(day.dateString).toDate();
    console.log("🚀 ~ onDayPress ~ selectedDate:", selectedDate);
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
      setMarkedDates({
        [day.dateString]: { color: colors.primary, textColor: colors.white },
      });
    } else {
      // Check if the selected date is before the start date
      if (selectedDate < startDate) {
        setEndDate(startDate);
        setStartDate(selectedDate);
      } else {
        setEndDate(selectedDate);
      }

      const start = moment(startDate);
      const end = moment(selectedDate);
      const newMarkedDates: { [key: string]: MarkedDate } = {};

      for (let m = start; m.isBefore(end) || m.isSame(end); m.add(1, "days")) {
        newMarkedDates[m.format("YYYY-MM-DD")] = {
          color: colors.secondary,
          textColor: colors.white,
        };
      }

      newMarkedDates[startDate.toISOString().split("T")[0]] = {
        color: colors.primary,
        textColor: colors.white,
      };
      newMarkedDates[selectedDate.toISOString().split("T")[0]] = {
        color: colors.primary,
        textColor: colors.white,
      };

      setMarkedDates(newMarkedDates);
    }
  };

  const renderDay = ({
    date,
    state,
    bookedDates,
  }: DayProps & { date?: DateData } & { bookedDates?: any }) => {
    const isDateSelected = date && markedDates[date.dateString];
    const isSunday = date && new Date(date.timestamp).getDay() === 0;
    const isSaturday = date && new Date(date.timestamp).getDay() === 6;

    const backgroundColor = isDateSelected
      ? markedDates[date.dateString].color
      : "white";

    const textColor = isDateSelected
      ? markedDates[date.dateString].textColor
      : isSunday
      ? colors.red3
      : isSaturday
      ? colors.lightOrange
      : "black";

    const disabledTextColor = isDateSelected
      ? markedDates[date.dateString].textColor
      : "gray";

    const isStartDate =
      date && date.dateString === startDate?.toISOString().split("T")[0];
    const isEndDate =
      date && date.dateString === endDate?.toISOString().split("T")[0];
    console.log("🚀 ~ AppDatePicker ~ isStartDate:", endDate, startDate);
    // const isNearBy =
    const width = 58;

    const borderRadius = isStartDate || isEndDate ? 99 : 0;
    return (
      <>
        {isStartDate && endDate != null && (
          <View
            style={{
              width: width / 2,
              height: width,
              position: "absolute",
              left: "50%",
              backgroundColor: isConsecutiveDays(startDate, endDate)
                ? colors.primary
                : colors.secondary,
              zIndex: 1,
            }}
          />
        )}
        {isEndDate && startDate != null && (
          <View
            style={{
              width: width / 2,
              height: width,
              right: "50%",
              position: "absolute",
              backgroundColor: isConsecutiveDays(startDate, endDate)
                ? colors.primary
                : colors.secondary,
              zIndex: 1,
            }}
          />
        )}
        <TouchableWithoutFeedback onPress={() => date && onDayPress(date)}>
          <View
            style={{
              backgroundColor,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              width: width,
              borderRadius: borderRadius,
              height: width,
              zIndex: 2,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: state === "disabled" ? disabledTextColor : textColor,
                fontWeight: "bold",
                alignSelf: "center",
                fontSize: 14,
              }}
            >
              {date?.day}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  };

  const DayComponent = (props: any) => renderDay({ ...props });

  return (
    <View style={styles.container}>
      <CalendarList
        minDate={CURRENT_DATE.toISOString().split("T")[0]}
        current={CURRENT_DATE.toISOString().split("T")[0]}
        firstDay={1}
        pastScrollRange={1}
        futureScrollRange={3}
        scrollEnabled={false}
        showScrollIndicator={false}
        horizontal={true}
        pagingEnabled={true}
        staticHeader={true}
        stickyHeaderHiddenOnScroll={true}
        headerStyle={{ borderWidth: 2 }}
        dayComponent={DayComponent}
        style={{
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default AppDatePicker;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
  },
});
