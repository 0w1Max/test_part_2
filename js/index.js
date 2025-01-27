import config from './config.js'

const videoWindowsText = document.querySelector('.video-windows__text');
const videoWindowsOverlay = document.querySelector('.video-windows__text--overlay');

// Функция, которая убирает лишние пробелы и создаёт массив из текста
const createTextArray = (text) => {
  const currentText = text.textContent.replace(/\s+/g, ' ').trim();
  const textArray = currentText.split(' ');

  return textArray;
}

// Функция, которая создаёт элемент окошка
//// windowSize - Размер окошка
//// step - Шаг
const createWindowElement = (windowSize, step) => {
  const space = '&nbsp;';
  const windowElement = `<span class="text__video">${space.repeat(windowSize * step)}</span>`;

  return windowElement;
}

// Функция, которая добавляет окошко с видео после определённого слова
//// text - Элемент с текстом, в который будет добавлено окошко
//// overlay - Вспомогательный элемент для правильного отображения текста
//// arr - Массив с текстом
//// index - Слово, после которого добавляем окошко
//// element - Элемент, который добавляем после слова для создания окошка
const addWindow = (text, overlay, arr, index, element) => {
  arr.splice(index, 0, element);
  const result = arr.join(' ');
  text.innerHTML = result;
  overlay.innerHTML = result;
}

const textArray = createTextArray(videoWindowsText);

// Итерируем по массиву настроек из config.js
config.windowSettings.forEach((setting) => {
  addWindow(
    videoWindowsText,
    videoWindowsOverlay,
    textArray,
    setting.index,
    createWindowElement(setting.windowSize, setting.step)
  );
});
