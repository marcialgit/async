const {taskOne, taskTwo } = require('./tools');


async function pregunta_1(){ // paralelo
    console.log('pregunta 1: se consultan las funciones en paralelo, y se retorna el valor finalizada la primera');
    console.time('respuesta 1');
    const result = await Promise.race([taskOne(), taskTwo()]);
    console.timeEnd('respuesta 1');
    console.log(result);
}

async function pregunta_2(){ // paralelo
    console.log('pregunta 2: se consultan las funciones en paralelo, se retorna el valor finalizadas ambas');
    console.time('respuesta 2');
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd('respuesta 2');
    console.log(results[0], results[1]);
}

async function pregunta_3(){ // secuencial
    console.log('pregunta 3: las funciones son consultadas secuencialmente (una después de la otra), se retorna el valor finalizadas ambas');
    console.time('respuesta 3');
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd('respuesta 3');
    console.log(valueOne, valueTwo);
}

async function main(){
    await pregunta_1();
    await pregunta_2();
    await pregunta_3();
}

main();
