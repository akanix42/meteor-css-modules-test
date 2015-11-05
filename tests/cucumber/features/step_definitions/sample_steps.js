// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
        // process.env.ROOT_URL always points to the mirror
        browser.url(url.resolve(process.env.ROOT_URL, relativePath));
    });

    this.Then(/^I should see the class "([^"]*)" from "([^"]*)"$/, function (expectedClass, sourceFile) {
        var styles = browser.executeAsync(function (sourceFile, done) {
            done(CssModules.import(sourceFile));

        }, sourceFile).value;
        console.log(styles.hello);
        browser.waitForExist('.' + styles[expectedClass].replace(/\s/g, '.'), 500);
    });

};
