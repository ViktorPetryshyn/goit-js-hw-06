function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

//     Размеры самого первого <div> - 30px на 30px.
//     Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//     Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
const createBntEl = document.querySelector("[data-create]");
const destoyBntEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
createBntEl.addEventListener("click", getAmount);
destoyBntEl.addEventListener("click", destroyBoxes);
function getAmount() {
  const amount = +inputEl.value;
  createBoxes(amount);
}
let basicSize = 30;
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    basicSize += 10;
    let size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  basicSize = 30;
  boxesEl.innerHTML = "";
}
