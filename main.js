/**
 * for Firefox
 *
 * Copyright 2013 Hiroyuki Ushito (@iso2022jp)
 */

var pageMod = require("page-mod");
var self = require("self");
var tabs = require('tabs');

exports.main = function() {
/*
    pageMod.PageMode({
        include: 'https://trello.com/*',
        contentScriptWhen: 'ready',
        contentScriptFile: self.data.url('japanize-trello.js')
    })
*/

    tabs.on('ready', function (tab) {
        if (tab.url.lastIndexOf('https://trello.com', 0) == 0) {
            tab.attach({
                contentScriptFile: self.data.url('japanize-trello.js'),
            })
        }
    })

}
