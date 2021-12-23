export const parseDate = (dateStr) => {
  const date = new Date(dateStr);

  let day = date.getDate(),
    month = date.getMonth();

  if (day < 10) {
    day = "0" + date.getDate();
  } else if (month < 10) {
    month = "0" + date.getMonth();
  } else {
    day = date.getDate();
    month = date.getMonth();
  }

  return `${day}/${month}/${date.getFullYear()}`;
};
