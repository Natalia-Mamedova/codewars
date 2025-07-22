// Задача
// У вас есть доступ к параметрам «осадка» и «экипаж» корабля. «Осадка» — это общий вес корабля, а «экипаж» — количество людей на корабле.
// Каждый член экипажа добавляет 1,5 единицы к осадке корабля. Если после вычета веса экипажа осадка всё ещё больше 20, то корабль стоит ограбить.
//  У любого корабля такого веса должно быть много добычи!
// Добавьте метод isWorthIt для определения, достоин ли корабль добычи.

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  isWorthIt() {
    let draftWithoutCrew = this.draft - (this.crew * 1.5)
    if (draftWithoutCrew > 20) {
        return true
    } else {
        return false
    }
  }
}
const engShip = new Ship(150, 15);
console.log(engShip.isWorthIt())
