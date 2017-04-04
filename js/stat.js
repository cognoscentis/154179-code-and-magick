'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText('Ура, вы победили!', 310, 40);
  ctx.fillText('Список результатов:', 310, 60);

// Возвращает наибольшое значение из массива arr
  var maxTime = times[0];
  function getMaxTime(arr) {
    for (var i = 0; i < arr.length; i++) {
      var currentTime = arr[i];
      if (maxTime < currentTime) {
        maxTime = currentTime;
      }
    }
  }
  getMaxTime(times);

  // Построение гистограмм
  /* Дано:
  Высота гистограммы 150px.
  Ширина колонки 40px.
  Расстояние между колонками 50px.
  Цвет колонки игрока Вы rgba(255, 0, 0, 1).
  Цвет колонки других игроков — синие, а насыщенность задается случайным образом.
  */
  var histoHeight = 150;
  var histoWidth = 40;
  var histoBetween = 50;
  var histoX = 155;
  var histoStep = histoHeight / maxTime;

  function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min);
  }

  for (var i = 0; i < names.length; i++) {

    var height = histoStep * times[i];
    var positionX = (histoBetween + histoWidth) * i;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomNumber(0.2, 1).toFixed(1) + ')';
    }
    ctx.fillRect(histoX + positionX, 250, histoWidth, -height);
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.fillText(names[i], histoX + positionX, 260);
    ctx.fillText(Math.round(times[i]), histoX + positionX, (250 - height - 15));
  }
};
