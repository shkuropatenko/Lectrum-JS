let user = {
    name: "John"
};

function wrap(target) {


    return new Proxy(target, {
        get(target, phrase, receiver) { // перехватываем чтение свойства в dictionary
            // console.log(receiver, '!!!!!')
            if (phrase in target) { // если перевод для фразы есть в словаре
                return Reflect.get(target, phrase, receiver)
            } else {
                // иначе возвращаем непереведённую фразу
                throw new ReferenceError(`Свойство не существует: "${phrase}"`);
            }
        }
    });

}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует