// ==UserScript==
// @name         Remove Google Click-tracking
// @description  Removes Google's click-tracking from result links
// @version      1.1.2
// @namespace    skeeto
// @license      Public Domain
// @include      *://*.google.tld/*
// @grant        none
// ==/UserScript==

Object.defineProperty(window, 'rwt', {
    value: function() {},
    writable: false
});

