const scenario = [
    {
        index: 1,
        meta: {
            title: 'Регистрация заявок на отдых',
            description: 'Поехать на отдых'
        },
        name: 'Dmitriy',
        user: 'shkuropatenko.d@gmail.com',
        async call(store, logs) {
            logs.push({store});

        },
        async restore(store, logs) {
            logs.push({store});
        },
    },
    {
        index: 2,
        meta: {
            title: 'Заказ билетов',
            description: 'Заказ билетов и вылет'
        },
        number_ticket: '3',
        starting_point: 'Kharkov',
        destination: 'California',
        async call(store, logs) {
            logs.push({store});
        },
        async restore(store, logs) {
            logs.push({store});
        },
    },
    {
        index: 3,
        meta: {
            title: 'Оплата путешествия',
            description: 'Забрать билет'
        },
        cost: '1200-ERROR',
        date: '12-05-2020',
        async call(store, logs) {
            logs.push({store});

        },
        async restore(store, logs) {
            logs.push({store});
        },
    }
];

class Transaction {
    constructor() {
        this.store = [];
        this.logs = [];
        this.error = [];
    }

    dispatch(scenario) {
        let name = '';
        let city = '';

        for(const value of scenario) {
            if(value.name === 'Dmitriy') {
                value.call(value.name, this.store);
                value.restore(value, this.logs);
                name = value.name;

            } else if(value.name) {
                value.restore(value, this.logs);
                name = value.name;
                this.error.push(value.name);

                return (
                    value['Error'] = {
                        cost: value.name,
                        name: 'TypeError',
                        message: 'Is not a valid name!',
                        stack: 'Stack trace'
                    }
                );
            }

            if(value.starting_point === 'Kharkov') {
                value.call(value.starting_point, this.store);
                value.restore(value, this.logs);
                city = value.starting_point;
                value['name'] = name;

            } else if(value.starting_point){
                value.restore(value, this.logs);
                city = value.starting_point;
                value['name'] = name;
                this.error.push(value.starting_point);

                return  (
                    value['Error'] = {
                        cost: value.starting_point,
                        name: 'TypeError',
                        message: 'Is not a valid city!',
                        stack: 'Stack trace'
                    }
                );
            }

            if(value.cost === '1200') {
                value.call(value.cost, this.store);
                value.restore(value, this.logs);
                value['name'] = name;
                value['starting_point'] = city;

            } else if(value.cost){
                value.restore(value, this.logs);
                value['name'] = name;
                value['starting_point'] = city;
                this.error.push(value.cost);

                return (
                    value['Error'] = {
                        cost: value.cost,
                        name: 'TypeError',
                        message: 'Is not a valid cost!',
                        stack: 'Stack trace'
                    }
                );
            }
        }
    }

    rollback(scenario) {
        for(let value of this.error) {
            for(let obj of scenario) {
                Object.keys(obj).forEach(function(key) {
                    if(this[key] === value) {
                        delete this[key];
                    }
                }, obj);
            }
        }
        console.log(this.logs, 'LOGS');
        console.log(this.store, 'STORE');
    }
}

const transaction = new Transaction(scenario);
(async () => {
    try {
        await transaction.dispatch(scenario);
        const { store, logs, status } = transaction;
        log(store);
        log(logs);
        log(status);
    } catch (error) {
        // Send email about broken transaction
        await transaction.rollback(scenario);
    }
})();