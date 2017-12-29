var blocklist = new Array();
blocklist["A"]      = [["href", /.*doubleclick.net.*/i],
                       ["href", /.*(clickthrough|market).*/i]
                      ];

blocklist["IMG"]    = [["src", /.*doubleclick.net.*/i],
                       ["src", /.*last.fm\/adserver.*/i]];
 
blocklist["SCRIPT"] = [["src", /.*doubleclick.net.*/i]];
 
blocklist["IFRAME"] = [["id",    /.*ad-google.*/i],
                       ["name",  /.*google_ads.*/i],
                       ["name",  /.*sponsored.*/i],
                       ["src",   /.*adsrv.*/i],
                       ["src",   /.*facebook.*/i],
                       ["src",   /.*winmasters.*/i]];
 

function adblock(event)
{
    var tag = event.target.tagName;
    if (!blocklist[tag])
        return;
    for(var i = 0; i < blocklist[tag].length; i++) {
        if (event.target.getAttribute(blocklist[tag][i][0])) {
            if (event.target.getAttribute(blocklist[tag][i][0]).match(blocklist[tag][i][1])) {
                event.preventDefault();
                return;
            }
        }
    }
}
 
document.addEventListener("beforeload", adblock, true);

