// ==UserScript==
// @name         dark bead
// @namespace    https://github.com/klackooj
// @version      0.1
// @description  ELTE bead dark switch
// @author       klackooj
// @grant        make it better
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName("body")[0].style.backgroundColor = "#444";
    var code = document.getElementsByTagName("code");
    var div = document.getElementsByTagName("div");
    var td = document.getElementsByTagName("td");
    var textarea = document.getElementsByTagName("textarea");
    var button = document.getElementsByTagName("button");
    var timer = document.getElementById("ctd");
    var a = document.getElementsByTagName("a");
    var pre = document.getElementsByTagName("pre");
    var kw = document.getElementsByClassName("kw");
    var dt = document.getElementsByClassName("dt");
    var st = document.getElementsByClassName("st");
    var fu = document.getElementsByClassName("fu");
    var ot = document.getElementsByClassName("ot");
    var dv = document.getElementsByClassName("dv");
    var ch = document.getElementsByClassName("ch");
    for(var i = 0; i < div.length; i++){
        div[i].style.color = "#FFF";
        div[i].style.backgroundColor = "#444";
    }
    for (i = 0; i < td.length; i++){
        td[i].style.color = "#FFF";
        td[i].style.backgroundColor = "#444";
    }
    for (i = 0; i < code.length; i++){
        code[i].style.color = "#ED9CB0";
        code[i].style.backgroundColor = "#222222";
    }
    for (i = 0; i < a.length; i++){
        a[i].style.color = "#FFF";
        a[i].style.backgroundColor = "#444";
    }
    timer.style.color = "yellow";
    for (i = 0; i < pre.length; i++){
        pre[i].style.color = "#FFF";
        pre[i].style.backgroundColor = "#444";
    }
    for (i = 0; i < textarea.length; i++){
        textarea[i].style.color = "#FFF";
        textarea[i].style.backgroundColor = "#666";
    }
    for (i = 0; i < button.length; i++){
        button[i].style.color = "#FFF";
        button[i].style.backgroundColor = "#666";
    }
    for (i = 0; i < kw.length; i++){
        kw[i].style.color = "#00E641";
    }
    for (i = 0; i < dt.length; i++){
        dt[i].style.color = "#FF734D";
    }
    for (i = 0; i < st.length; i++){
        st[i].style.color = "#FF734D";
    }
    for (i = 0; i < fu.length; i++){
        fu[i].style.color = "#B4C7F9";
    }
    for (i = 0; i < ot.length; i++){
        ot[i].style.color = "#00E641";
    }
    for (i = 0; i < dv.length; i++){
        dv[i].style.color = "#8ED2B0";
    }
    for (i = 0; i < ch.length; i++){
        ch[i].style.color = "#ABC5DE";
    }
})();
