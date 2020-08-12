import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DateCalender(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <Calendar
        value={[
          new Date(
            props.periods[1]["start_time"].split(" ")[2],
            months.indexOf(props.periods[1]["start_time"].split(" ")[0]),
            props.periods[1]["start_time"].split(" ")[1]
          ),
          new Date(
            props.periods[props.periods.length - 1]["start_time"].split(" ")[2],
            months.indexOf(
              props.periods[props.periods.length - 1]["start_time"].split(
                " "
              )[0]
            ),
            props.periods[props.periods.length - 1]["start_time"].split(" ")[1]
          ),
        ]}
      />
    </div>
  );
}

export default DateCalender;
