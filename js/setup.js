'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarPersonList = document.querySelector('.setup-similar-list');
var similarPersonTemplate = document.getElementById('similar-wizard-template').content;
var similarPersonsArray = [];
var similarPersonRandomData = {
  name: ' ',
  coatColor: ' ',
  eyesColor: ' '
};
var fragment = document.createDocumentFragment();

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Если не определить функцию генерации случайного числа в этом файле, то будет ругаться. Не понимаю, почему не берет эту же функцию из файла stat.js.
// Он ведь раньше подключен.
function getRandomNumber(min, max) {
  return (Math.random() * (max - min) + min);
}

function createSimilarPerson(object) {
  object.name = WIZARD_NAMES[Math.floor(getRandomNumber(0, WIZARD_NAMES.length))] + ' ' + WIZARD_SURNAMES[Math.floor(getRandomNumber(0, WIZARD_SURNAMES.length))];
  object.coatColor = WIZARD_COAT_COLOR[Math.floor(getRandomNumber(0, WIZARD_COAT_COLOR.length))];
  object.eyesColor = WIZARD_EYES_COLOR[Math.floor(getRandomNumber(0, WIZARD_EYES_COLOR.length))];
  return object;
}

function createSimilarPersonsArray(array, count) {
  for (var i = 0; i < count; i++) {
    var personData = createSimilarPerson(similarPersonRandomData);
    array.push(personData);
  }
  return array;
}

function createDomWizard(array, i) {
  var wizardElement = similarPersonTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = array[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = array[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
  return wizardElement;
}

function createDomWizardsList(count) {
  for (var i = 0; i < count; i++) {
    fragment.appendChild(createDomWizard(similarPersonsArray, i));
  }
}

function renderSimilarWizardsList() {
  similarPersonList.appendChild(fragment);
}

createSimilarPersonsArray(similarPersonsArray, 4);
createDomWizardsList(4);
renderSimilarWizardsList();

// Первоначальный вариант и комментарии к нему.
// Проблема - верстка иногда съезжает от переполнения строки с именем. Пытаюсь решить это через JS - вставить тэг <br> между именем и фамилией. Не получается.
// Наверное из-за того, что вставляю с помощью .textContent, а не .innerHTML.
// .innerHTML тоже не срабатывает. А! Складывание со строкой приводит все элементы к строке.
// нет, это не влияет. Пробовал вставлять через .innerHTML и без пробела ' ' - результат такой же. Хз что тут сделать можно
// function createSimilarWizard() {
//   var lineBreak = document.createElement('br');
//   for (var i = 0; i < 4; i++) {
//     var wizardElement = similarPersonTemplate.cloneNode(true);
//     var similarPersonName = wizardElement.querySelector('.setup-similar-label');
//     var randomName = WIZARD_NAMES[Math.floor(getRandomNumber(0, WIZARD_NAMES.length))];
//     var randomSurname = WIZARD_SURNAMES[Math.floor(getRandomNumber(0, WIZARD_SURNAMES.length))];
//     var randomCoatColor = WIZARD_COAT_COLOR[Math.floor(getRandomNumber(0, WIZARD_COAT_COLOR.length))];
//     var randomEyeColor = WIZARD_EYES_COLOR[Math.floor(getRandomNumber(0, WIZARD_EYES_COLOR.length))];
//
//     similarPersonName.textContent = randomName + ' ' + similarPersonName.appendChild(lineBreak) + randomSurname;
//     wizardElement.querySelector('.wizard-coat').style.fill = randomCoatColor;
//     wizardElement.querySelector('.wizard-eyes').style.fill = randomEyeColor;
//
//     fragment.appendChild(wizardElement);
//   }
// }
//
// similarPersonList.appendChild(fragment);
