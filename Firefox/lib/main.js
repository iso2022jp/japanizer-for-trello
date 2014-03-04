/**
 * for Firefox
 *
 * Copyright 2013 Hiroyuki Ushito (@iso2022jp)
 */

var self = require('sdk/self');
var tabs = require('sdk/tabs');

exports.main = function() {

    tabs.on('ready', function (tab) {
        if (tab.url.lastIndexOf('https://trello.com', 0) == 0) {
            tab.attach({
                contentScriptFile: self.data.url('japanizer-for-trello.js'),
            })
        }
    })

}
