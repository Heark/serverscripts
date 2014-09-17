// (C)opyright Heark Gaming Co.
// Special Thanks Coyotte508
// Created 9/17/2014
var getData = src

step : function() {
    sys.changeAnnouncement("<head>
<script>
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var time = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
</script>
</head>

<body onload="startTime()">

<div id="txt"></div>")
}
step : function() {
    sys.changeAnnouncement(<table style="background-color:#FF0000FF"><tr><td width="100%">
<p><center><font size=48 color=black>❖</font><font size=12 color=white> Pokemon </font><font size=24 color=black>❖</font></center><br /><br /><center><b>The current time is: <script>time</script></b></center></p></td></tr></table>)
}
 
var commands = this;
getData("https://raw.githubusercontent.com/Heark/serverscripts/master/modules/module.js")
 
