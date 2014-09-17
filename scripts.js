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

var commands = this;
getData("https://raw.githubusercontent.com/Heark/serverscripts/master/modules/module.js")
 
