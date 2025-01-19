let lang = 'eu';
let weekRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let weekEu = ['Mnd', 'Tsd', 'Wdn', 'Thu', 'Fri', 'Strd', 'Snd'];
if (lang === 'ru') {
  console.log(weekRu);
} else if (lang === 'eu') {
  console.log(weekEu);
} else {
  console.log('undefinded lang');
}

switch (lang) {
  case 'ru':
    console.log(weekRu);
    break;
  case 'eu':
    console.log(weekEu);
    break;
}
let weekObjects = {
  ru: weekRu,
  eu: weekEu,
};
console.log(weekObjects[lang]);

let namePerson = 'Артем';

namePerson === 'Артем'
  ? console.log('Директор')
  : namePerson === 'Александр'
  ? console.log('Преподаватель')
  : console.log('Студент');
