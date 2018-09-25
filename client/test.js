function getUser(data) {
    return callback => setTimeout(() => {
        console.log('Пользователь получен!');
        callback();
    }, 3000);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function* f() {
    console.log('Start');
    yield delay(2000);
    yield getUser();
    console.log('End');
}

function framework(generator) {
    const next = generator.next();
    console.log(next);

    if (next.done) {
        console.log('Выполенны завершено!');
    } else {
        const {value} = next;

        if (value.then !== undefined) {
            console.log('PROMISE!')
            value.then(() => framework(generator));
        } else if (typeof value === 'function') {
            console.log('FUNCTION!');
            value(() => framework(generator));
        } else {
            framework(generator);
        }

    }
}

framework(f());
console.log('Продолжаем работу');