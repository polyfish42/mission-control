export const dayOfTheWeek = date => {
  const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return daysOfTheWeek[date.getDay()];
}

export const abbrvDayOfTheWeek = date => {
  const day = dayOfTheWeek(date);
  return day.slice(0,3);
}

export const month = (date) => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return months[date.getMonth()];
}

export const abbrvMonth = date => {
  return month(date).slice(0, 3)
}

export const isSameDay = (date1, date2) => {
  return date1.toDateString() === date2.toDateString()
}

export const isSameTime = (date1, date2) => {
  return date1.getTime() === date2.getTime()
}

export const formatTime = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes}${amOrPm}`
}

export const approxTime = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours
  minutes = minutes < 30 ? '00' : "30";

  return `${hours}:${minutes}${amOrPm}`
}

export const now = () => {
  return new Date;
}

export const minutesFromNow = minutes => {
  return (new Date).setTime((new Date).getTime() + minutes * 1000)
}

export const parseTime = time => {
  const r = new RegExp(/(\d+):(\d+)(\w+)/);
  const t = time.match(r)

  const hours = t[3] === "pm" && t[1] != 12 ? parseInt(t[1]) + 12 : t[1] === "12" ? "00" : t[1]
  const minutes = t[2]
  const seconds = "00"

  return `${hours}:${minutes}:${seconds}`
}
