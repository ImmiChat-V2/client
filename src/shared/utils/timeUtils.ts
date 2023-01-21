import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

export const customTimeFormat = (time: Date) => {
  const date = new Date(time);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const datetime = `${hour}:${minutes}:${seconds} ${month}/${day}/${year}`;
  return datetime;
};

export const formatTime = (date: Date) => timeAgo.format(date);
