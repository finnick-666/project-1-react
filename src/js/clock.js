"use strict"
var add = setInterval("getTime()", 1000);

function getTime() {
    var date = new Date().toLocaleString();
    var id1 = document.getElementById("clock");
    id1.innerHTML = date;
}