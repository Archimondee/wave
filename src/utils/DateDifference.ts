const DateDifference = (second: number) => {
  const hours = second / 3600;
  if (hours > 24) {
    return Math.round(second / 3600 / 24) + " Hari yang lalu ";
  } else if (hours < 1) {
    return Math.round(second / 60) + " Menit yang lalu ";
  } else {
    return Math.round(hours) + " Jam yang lalu";
  }
};

export default DateDifference;
