function findAreaRectangel(length, width) {
  return length * width;
}
console.log(findAreaRectangel(5, 3));

function findPerimeterRectangel(length, width) {
  return 2 * (length + width);
}
console.log(findPerimeterRectangel(5, 3));

function findDiameterCircle(diameter) {
  return 2 * diameter;
}
console.log(findDiameterCircle(5));

function findCircumfencesCircle(circ) {
  return 2 * Math.PI * circ;
}
console.log(findCircumfencesCircle(5));

function findAreaCircle(area) {
  return Math.PI * Math.pow(area, 2);
}
console.log(findAreaCircle(5));

function getDifferentDate(start, end) {
  const date1 = start.getTime();
  const date2 = end.getTime();

  const different = Math.abs(date1 - date2);

  return Math.floor(different / (1000 * 60 * 60 * 24));
}
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
console.log(getDifferentDate(date1, date2));

function confertDaysToYear(days) {
  const years = Math.floor(days / 365);
  let remainingDays = days % 365;
  const months = Math.floor(remainingDays / 30);
  remainingDays = remainingDays % 30;

  return {
    year: years,
    month: months,
    days: remainingDays,
  };
}

console.log(confertDaysToYear(365));
