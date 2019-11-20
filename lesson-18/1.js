/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение

class DB {
    constructor() {
        this.obj = new Map();
    }

    create(person) {
        for (let name in person) {
            if (!person.hasOwnProperty(name)) {
                throw new Error('Объект невалиден!')
            }

            if(typeof person.name !== 'string' || typeof person.country !== 'string') {
                throw new Error('должно быть поле с типом string!')
            }

            if(typeof person.age !== 'number' || typeof person.salary !== 'number') {
                throw new Error('должно быть поле с типом number!')
            }
        }

        const id = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 15);

        this.obj.set(id, person);

        return id;
    }

    read() {
        if(typeof id !== 'string' || null) {
            throw new Error('в метод read передана не строка, или отсутствует параметр вообще!');
        }
        if(!this.obj.has(id)) {
            return null;
        }

        return this.obj;
    }

    readAll(param) {
        if(param) {
            throw new Error('в метод readAll передан параметр!');
        }
        return Array.from(this.obj);
    }

    update(id, param) {

        if(this.obj.get(id) === null) {
            throw new Error('передан несуществующий id!');
        }

        if(typeof id !== 'string') {
            throw new Error('передан id с типом не строка!');
        }

        if(typeof param.age !== 'number') {
            throw new Error('должно быть поле с типом number!')
        }

        this.obj.set(id, param)
    }

    delete() {
        if(this.obj.get(id) === null) {
            throw new Error('передан несуществующий id!');
        }
        this.obj.delete(id)
    }

}

// Проверка
const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
db.delete(id); // true
// console.log(db.delete(id))