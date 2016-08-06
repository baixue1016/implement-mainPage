let route = require('./route');

function main() {
    let response = route();
    console.log(response.text);
}
function start() {
    main();
}

start();
// module.exports = start;