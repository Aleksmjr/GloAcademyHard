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

  function declination(num, unit) {
    if (unit === 'hour') {
      if (num % 10 === 1 && num % 100 !== 11) {
        return 'час';
      } else if (
        num % 10 >= 2 &&
        num % 10 <= 4 &&
        (num % 100 < 10 || num % 100 >= 20)
      ) {
        return 'часа';
      } else {
        return 'часов';
      }
    }

    if (unit === 'minute') {
      if (num % 10 === 1 && num % 100 !== 11) {
        return 'минута';
      } else if (
        num % 10 >= 2 &&
        num % 10 <= 4 &&
        (num % 100 < 10 || num % 100 >= 20)
      ) {
        return 'минуты';
      } else {
        return 'минут';
      }
    }

    if (unit === 'second') {
      if (num % 10 === 1 && num % 100 !== 11) {
        return 'секунда';
      } else if (
        num % 10 >= 2 &&
        num % 10 <= 4 &&
        (num % 100 < 10 || num % 100 >= 20)
      ) {
        return 'секунды';
      } else {
        return 'секунд';
      }
    }

    return '';
  }

  const realDateStr = `Сегодня ${dayWeek}, ${dayMonth} ${month} ${year} года, ${getZero(
    hours,
  )} ${declination(hours, 'hour')} ${getZero(minutes)} ${declination(
    minutes,
    'minute',
  )} ${getZero(seconds)} ${declination(seconds, 'second')}`;
  const realDateNum = `${getZero(dayMonth)}.${getZero(
    now.getMonth() + 1,
  )}.${year} - ${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`;
  document.body.innerHTML = `<div>${realDateStr}</div><div>${realDateNum}</div>`;
}
updateTime();
setInterval(updateTime, 1000);
