let mainPage = require('./command/goto-main-page');
function route() {
    let response = mainPage();
    return {
        text: response.text
    }
}

module.exports = route;