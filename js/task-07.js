const inputChange = document.querySelector("input#font-size-control");
const abracadabra = document.querySelector("span#text");

inputChange.addEventListener("input", (e) => {
  abracadabra.style.fontSize = `${e.target.value}px`;
});

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
