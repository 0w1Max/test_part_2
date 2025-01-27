// Объект с настройками для добавления окошка с видео после определённого слова
//// index - Слово, после которого добавляем окошко
//// windowSize - Размер окошка
//// step - Шаг
const config = {
  windowSettings: [
    { index: 2, windowSize: 4, step: 1 },
    { index: 7, windowSize: 8, step: 4 },
    { index: 13, windowSize: 20, step: 1 },
    { index: 17, windowSize: 12, step: 1 },
  ],
};

export default config;
