export const dayOfTheWeek = date => {
  const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return daysOfTheWeek[date.getDay()];
}

export const abbrvDayOfTheWeek = date => {
  const day = dayOfTheWeek(date);
  return day[0] == "T" ? day.slice(0,4) : day.slice(0,3);
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
