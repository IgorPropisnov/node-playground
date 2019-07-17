console.log(global.process.version)
console.log('                       ');
console.log(global.process.versions);
console.log('                       ');
console.log(global.process.cwd())
console.log('                       ');

const logger = (str) => {
    process.stdout.write(str + '\n');
}

logger('Hello World');