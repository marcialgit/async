const util = require('util'); // para utilizar setTimeOut (por ejemplo)
const sleep = util.promisify(setTimeout); // permite manejar funciones que se controlan con promnesas o con callbacks a funciones manejadas con async-await
module.exports = {
    async taskOne(){
        await sleep(2000);
        return 'a';
    },
    async taskTwo(){
        await sleep(4000);
        return 'b';  
    }
}