# Manejo de funciones asíncronas
### Requisitos revios
- sea taskOne(x) función que retorna 'a', después de 2 segundos
- sea taskTwo(x) función que retorna 'b', después de 4 segundos

### Problema: 
- pregunta 1: llamar a ambas funciones en paralelo y retornar solo la primera en respuesta.
- pregunta 2: llamar ambas funciones en paralelo y esperar que ambas se ejecuten, para mostrar el resultado de ambas.
- pregunta 3: llamar taskOne(x) y posteriormente taskTwo(x), entonces mostrar el resultado de ambas (llamada secuencial).

### Solución: 
- para resolverlo usé promesas en las funciones taskOne(x) y taskTwo(x).
- la librería util de NodeJS facilita el uso de funciones como setTimeOut(x), aunque en este caso se utiliza promisify(x).
- promisify facilita el uso de funciones del tipo async await en promesas, de esa manera se pueden responder todas las preguntas con las mismas herramientas.
- en la pregunta 1 utilizar promise.race([promise 1, promise 2,... ]).
- en la pregunta 2 utilizar promise.([promise 1, promise 2,... ]).
- en la pregunta 3 se puede llamar una promesa, luego la siguiente y mostrar ambos datos concatenados.
- en la ubicación de los archivos correr:
`$ node index.js`

#### Fuente: https://nodejs.dev/understanding-javascript-promises