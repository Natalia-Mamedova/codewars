// Description:
// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность задать этому свойству новое значение.
// Если свойство уже существует в объекте, должна быть выдана ошибка.

// Solution:
const car = {
    brend: "mazda",
    model: "6",
    color: "red",
}

function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Свойство ${prop} уже существует в объекте`);
    } else {
        obj[prop] = value;
    }
}
try {
    addProperty(car, "year", 2005)
    console.log(car);
} catch (error) {
    console.error(error.massage);
}


