'use strict';

var setupNode = document.querySelector('.setup');
var setupSimilarNode = setupNode.querySelector('.setup-similar');
var similarPersonList = setupNode.querySelector('.setup-similar-list');
var similarPersonTemplate = document.getElementById('similar-wizard-template').content;
var similarPersons = [];

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария', 'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

setupNode.classList.remove('hidden');
setupSimilarNode.classList.remove('hidden');

function getRandomNumber(min, max) {
  return (Math.random() * (max - min) + min);
}

function generateName(firstArray, secondArray) {
  return firstArray[Math.floor(getRandomNumber(0, firstArray.length))] + ' ' + secondArray[Math.floor(getRandomNumber(0, secondArray.length))];
}

function getRandomColor(array) {
  return array[Math.floor(getRandomNumber(0, array.length))];
}

function createSimilarPersonsArray(array, count) {
  for (var i = 0; i < count; i++) {
    array.push({
      name: generateName(WIZARD_NAMES, WIZARD_SURNAMES),
      coatColor: getRandomColor(WIZARD_COAT_COLOR),
      eyesColor: getRandomColor(WIZARD_EYES_COLOR)
    });
  }
  return array;
}

function createWizardTemplate(array, i) {
  var wizardElement = similarPersonTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = array[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = array[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
  return wizardElement;
}

function createDomWizardsList(count) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    fragment.appendChild(createWizardTemplate(similarPersons, i));
  }
  similarPersonList.appendChild(fragment);
}

createSimilarPersonsArray(similarPersons, 4);
createDomWizardsList(4);
