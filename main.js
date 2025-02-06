function updateTime() {
  const now = new Date();

  const weekdays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const dayWeek = weekdays[now.getDay()]; // День недели
  const dayMonth = now.getDate(); // Число месяца
  const month = months[now.getMonth()]; // Месяц
  const year = now.getFullYear(); // Год
  const hours = now.getHours(); // Часы
  const minutes = now.getMinutes(); // Минуты
  const seconds = now.getSeconds(); // Секунды/

  function getZero(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  const declination = function (hours) {
    if (hours === 1) {
      return 'час';
    } else if (hours >= 2 && hours <= 4) {
      return 'часа';
    } else {
      return 'часов';
    }
  };

  const realDateStr = `Сегодня ${dayWeek}, ${dayMonth} ${month} ${year} года, ${hours} ${declination(
    hours,
  )} ${minutes} минут ${seconds} секунды`;
  const realDateNum = `${getZero(dayMonth)}.${getZero(
    now.getMonth() + 1,
  )}.${year} - ${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`;
  document.body.innerHTML = `<div>${realDateStr}</div><div>${realDateNum}</div>`;
}
updateTime();
setInterval(updateTime, 1000);
// const now = new Date();
// // const dayMonth = now.getDate();
// // console.log(dayMonth);
