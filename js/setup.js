'use strict';

var setupNode = document.querySelector('.setup');
var setupSimilarNode = setupNode.querySelector('.setup-similar');
var similarPersonList = setupNode.querySelector('.setup-similar-list');
var similarPersonTemplate = document.getElementById('similar-wizard-template').content;
var similarPersons = [];

var SIMILAR_PERSON_COUNT = 4;
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElement(array) {
  return array[(getRandomInt(0, array.length))];
}

function createSimilarPersonsArray(array, count) {
  for (var i = 0; i < count; i++) {
    array.push({
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLOR),
      eyesColor: getRandomElement(WIZARD_EYES_COLOR)
    });
  }
  return array;
}

function createWizardTemplate(wizardData, i) {
  var wizardElement = similarPersonTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardData[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardData[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardData[i].eyesColor;
  return wizardElement;
}

function createDomWizardsList(count) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    fragment.appendChild(createWizardTemplate(similarPersons, i));
  }
  similarPersonList.appendChild(fragment);
}

createSimilarPersonsArray(similarPersons, SIMILAR_PERSON_COUNT);
createDomWizardsList(SIMILAR_PERSON_COUNT);
