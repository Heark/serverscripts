var doc = this;
var type = lang
doc.type = html("<table style="background-color:#FF0000FF"><tr><td width="100%">
<p><center><font size=48 color=black>❖</font><font size=12 color=white> Pokemon </font><font size=24 color=black>❖</font></center><br /><br /><center><b>The current time is: %%1</b></center></p></td></tr></table>")

({
. . .
stepEvent : function() {
. . .
if (stepcounter % 10 == 0) {
    str = sys.getAnnouncment().replace(/%%1/g,new Date());
    for (var x in players) {
        if (server.muted[sys.ip(x)] != undefined) {
            sys.changeAnnouncement(str.replace(/%%2/g,'muted.'),x); }
        else {
            sys.changeAnnouncement(str.replace(/%%2/g,'not muted.'),x); }
        }
    }
return; }
. . .
})
