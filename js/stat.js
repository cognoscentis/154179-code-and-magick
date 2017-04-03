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

  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (maxTime < time) {
      maxTime = time;
    }
  }

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
    return (Math.random() * (max - min) + min).toFixed(3);
  }

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    time = times [i];

    var height = histoStep * time;
    var positionX = (histoBetween + histoWidth) * i;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomNumber(0.2, 1) + ')';
    }
    ctx.fillRect(histoX + positionX, 250, histoWidth, -height);
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.fillText(name, histoX + positionX, 260);
    ctx.fillText(Math.round(time), histoX + positionX, (250 - height - 15));
  }
};
