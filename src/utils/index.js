import {
  format,
  addMonths,
  isBefore,
  setDefaultOptions,
  getDaysInMonth,
  isWeekend,
} from "date-fns";

import { ptBR } from "date-fns/locale";

setDefaultOptions({ locale: ptBR });

const generateLogs = (year, month, day) => {
  // random number between 00 and 59
  const randomMinuteEnter = Math.floor(Math.random() * 60);
  const randomMinuteLunch = Math.floor(Math.random() * 60);
  //    create a random number between -5 and 5
  const randomMinuteLunchOffset = Math.floor(Math.random() * 11) - 5;
  const randomMinuteEnterOffset = Math.floor(Math.random() * 11) - 5;
  //    add the offset to the randomMinuteLunch
  const randomMinuteLunchWithOffset =
    randomMinuteLunch + randomMinuteLunchOffset;

  const randomMinuteEnterhWithOffset =
    randomMinuteEnter + randomMinuteEnterOffset;

  const firstEnter = new Date().setHours(8, randomMinuteEnter, 0, 0);
  const firstOut = new Date().setHours(12, randomMinuteLunch, 0, 0);
  const secondEnter = new Date().setHours(
    13,
    randomMinuteLunchWithOffset,
    0,
    0
  );
  const secondOut = new Date().setHours(17, randomMinuteEnterhWithOffset, 0, 0);

  return [
    getDayFormated(year, month, day),
    new Date(firstEnter).toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
    new Date(firstOut).toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
    new Date(secondEnter).toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
    new Date(secondOut).toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
  ];
};

const getOfDays = (year, month, day) => {
  return [getDayFormated(year, month, day), "-", "-", "-", "-"];
};

export function getListOfLogs(date = "2023-04") {
  const logs = [];
  const [year, month] = date.split("-");
  const days = getDaysInMonth(new Date(year, month - 1));

  for (let i = 0; i < days; i++) {
    const day = new Date(year, month - 1, i + 1);

    if (isWeekend(day)) {
      logs.push(getOfDays(year, month, i + 1));
    } else {
      logs.push(generateLogs(year, month, i + 1));
    }
  }

  return logs;
}

export function getListOfMonths(startDate = "2022-02", endDate = "2022-05") {
  const [startYear, startMonth] = startDate.split("-");
  const [endYear, endMonth] = endDate.split("-");

  var start = new Date(startYear, startMonth - 1);
  var end = new Date(endYear, endMonth);
  var months = [];

  while (isBefore(start, end)) {
    months.push(format(start, "yyyy-MM"));
    start = addMonths(start, 1);
  }
  return months;
}

function getDayFormated(year, month, day) {
  return format(new Date(year, month - 1, day), "dd-E").slice(0, 6);
}

export function getPeriod(dateMonth) {
  const [year, month] = dateMonth.split("-");
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  const firstDayFormated = format(firstDay, "dd/MM/yyyy");
  const lastDayFormated = format(lastDay, "dd/MM/yyyy");
  return `${firstDayFormated} à ${lastDayFormated}`;
}
