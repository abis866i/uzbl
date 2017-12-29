// ==UserScript==
// @name        Same Domain
// @namespace   home
// @version     1
// @include     http*://*.ro/*
// @include     http*://*gandul.info/*
// @include     http*://*curentul.info/* 
// @grant       none
// ==/UserScript==


function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    else {
        return null;
    }
}
function getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;
    
    if (hostName != null) {
        var parts = hostName.split('.').reverse();
        
        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];
                
            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
              domain = parts[2] + '.' + domain;
            }
        }
    }
    
    return domain;
}

var domainForPage = getDomain(window.location.origin);
var pattern = /^((http|https|ftp):\/\/)/;

var links = document.getElementsByTagName('a');
for(var i=0; i<links.length; i++) {
    if(pattern.test(links[i].href) && getDomain(links[i].href)!=null){
    var tmp = getDomain(links[i].href);
       if(tmp!=domainForPage){
          links[i].style.display = 'none';
       } 
    }
}

