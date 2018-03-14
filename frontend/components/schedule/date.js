export const dayOfTheWeek = (date) => {
  const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return daysOfTheWeek[date.getDay()];
}

export const month = (date) => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return months[date.getMonth()];
}
