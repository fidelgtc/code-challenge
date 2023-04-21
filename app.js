var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);
prompts.question("app ", function (stdin) {
    const arguments = stdin.split(' ')
    const arr = arguments[0].split(',')
    const sum = arguments[1]

    sumFunction( arr.map(Number), +sum )
});

function sumFunction( arr, sum) {
    if( arr.length > 1) {
        for(let i = 1; i<arr.length; i++){
            if( arr[0] + arr[i] == sum ) [
                console.log( '+ ' + arr[0] + ',' + arr[i] )
            ]
        }
        arr.splice(0,1)
        sumFunction( arr, sum)
    }
}
