/*
# Задача 2

Улучшить класс `DB` из предыдущей задачи.

- Добавить метод `find`, который будет возвращать массив 
пользователей которые удовлетворяют условие переданное в качестве параметра
- Генерировать ошибку, если query не валидный
- Поля `name` и `country` ищут 100% совпадение
- Поля `age` и `salary` принимают объект в котором должны быть
 или 2 параметра `min` и `max` или хотя-бы один из них
- Возвращать пустой массив если не удалось найти пользователей
 которые удовлетворяют объект запроса
*/

// Решение
class DB {
    constructor() {
        this.obj = new Map();
        this.query = new Map();
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

    find(query) {
        if(Object.entries(query).length === 0 && query.constructor === Object) {
            throw new Error('Объект пустой!');
        }
        // console.log(query.country);
        
        this.query.set(query);
        console.log(this.query);
        
        console.log( this.obj.get(age));
        // console.log( this.obj.has(country));
        
    }
}

const db = new DB();

const person = {
    name: "Pitter", // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: "ua", // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
// const customer = db.read(id);
// const customers = db.readAll(); // массив пользователей
// db.update(id, { age: 22 }); // id
// db.delete(id); // true

// Проверка
const query = {
    country: "ua",
    age: {
      min: 21
    },
    salary: {
      min: 300,
      max: 600
    }
  };
  
const customers = db.find(query); // массив пользователей