const message = () => {
    return console.log('Hello World');
}

const start = (callback) => {
    callback();
}

start(message);

const greet = (name) => {
    if(name === "Igor") console.log(`Hello ${name}`);
}

const runGreet = (param, callback) => {
    return callback(param);
}

runGreet('Igor', greet);