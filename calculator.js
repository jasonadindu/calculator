'use strict'

let display=document.getElementById("display");
function allclear()
{
    display.value = "";
}

function show(n)
{
    display.value += n;
}

function calc()
{
    display.value = eval(display.value);
}