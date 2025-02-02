const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

for (let i = 1; i < 7; i++) {
  let dayText = week[i];

  if (i === todayIndex) {
    dayText = `<b>${dayText}</b>`;
  }

  if (i === 5 || i === 6) {
    dayText = `<i>${dayText}</i>`;
  }

  week[i] = dayText;
}

document.body.innerHTML = week.join('<br>');
