// ==UserScript==
// @name        Hide Elements
// @namespace   home
// @version     1
// @include     http*://*.ro/*
// @include     http*://*gandul.info/*
// @include     http*://*curentul.info/* 
// @grant       none
// ==/UserScript==

var blocklist = new Array();
blocklist["div"]    = [
                        ["class", /.*(anunturi|ad-container).*/i],
                        ["class", /.*(banner|best-of|blogsport|bulina|carousel|collection).*/i],
                        ["class", /.*(games|jsPoll|jurnalisport|nivea).*/i],
                        ["class", /.*(parteneri|pushmenu).*/i],
                        ["class", /.*(sticky|widget).*/i],
                        ["id",    /.*(sponsored|ultima-ora).*/i]
                      ];

blocklist["a"]      = [
                        ["href",      /.*(locuridemunca|promo).*/i],
                        ["class",     /.*(clickthrough|market).*/i],
                        ["onlick",    /.*track.*/i]
                      ];

blocklist["img"]    = [
                        ["src", /.*widget.*/i]
                      ];


for(var tag in blocklist) {
    var elem = document.getElementsByTagName( tag );
    for(var pattern = 0; pattern < blocklist[tag].length; pattern++) {
       for(var el=0; el<elem.length; el++) {
          if ( elem[el].getAttribute(blocklist[tag][pattern][0])!=null &&  elem[el].getAttribute(blocklist[tag][pattern][0]).match( blocklist[tag][pattern][1])){
             elem[el].style.display = 'none';
          }
       }
    }
}





