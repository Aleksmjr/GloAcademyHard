const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const todayIndex = new Date().getDay();

const getFormatWeek = week.map(function (day, index) {
  if (index === 5 || index === 6) {
    return day.italics();
  }
  if (todayIndex === index) {
    return day.bold();
  }
  return day;
});
document.body.innerHTML = getFormatWeek.join('<br>');
