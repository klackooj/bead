// ==UserScript==
// @name         dark bead
// @namespace    https://github.com/klackooj
// @downloadURL  https://github.com/klackooj/bead/edit/main/bead.user.js
// @include      *bead.inf.elte.hu*
// @include      *lambda.inf.elte.hu*
// @version      0.1
// @description  ELTE bead dark switch
// @author       klackooj
// @grant        make it better
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName("body")[0].style.backgroundColor = "#181818";
    document.getElementsByTagName("body")[0].style.color = "#FCFCFC";
    var code = document.getElementsByTagName("code");
    var div = document.getElementsByTagName("div");
    var td = document.getElementsByTagName("td");
    var textarea = document.getElementsByTagName("textarea");
    var button = document.getElementsByTagName("button");
    var select = document.getElementsByTagName("select");
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
    var elfogadott = document.getElementsByClassName("label-success");
    var cover = document.getElementsByClassName("cover");
    var input = document.getElementsByTagName("input");
    var th = document.getElementsByTagName("th");
    for(var i = 0; i < div.length; i++){
        div[i].style.color = "#A3A3A3";
        div[i].style.backgroundColor = "#121212";
    }
    for (i = 0; i < td.length; i++){
        td[i].style.color = "#A3A3A3";
        td[i].style.backgroundColor = "#121212";
    }
    for (i = 0; i < code.length; i++){
        code[i].style.color = "#ED9CB0";
        code[i].style.backgroundColor = "#171717";
    }
    for (i = 0; i < a.length; i++){
        a[i].style.color = "#74A9D8";
        a[i].style.backgroundColor = "#121212";
    }
    if (timer) {
        timer.style.color = "yellow";
    }
    for (i = 0; i < cover.length; i++) {
        cover[0].append("Köszi, hogy használsz! ☺");
    }
    for (i = 0; i < pre.length; i++){
        pre[i].style.color = "#A3A3A3";
        pre[i].style.backgroundColor = "#121212";
        let temp = pre[i].getElementsByTagName("code");
        for (var j = 0; j < temp.length; j++){
            temp[j].style.backgroundColor = "#121212";
        }
    }
    for (i = 0; i < textarea.length; i++){
        textarea[i].style.color = "#A3A3A3";
        textarea[i].style.backgroundColor = "#181818";
    }
    for (i = 0; i < button.length; i++){
        button[i].style.color = "#A3A3A3";
        button[i].style.backgroundColor = "#181818";
    }
    for (i = 0; i < select.length; i++){
        select[i].style.color = "#A3A3A3";
        select[i].style.backgroundColor = "#181818";
    }
    for (i = 0; i < kw.length; i++){
        kw[i].style.color = "#00C73C";
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
    for (i = 0; i < elfogadott.length; i++){
        elfogadott[i].style.backgroundColor = "#4CAE4C";
    }
    for (i = 0; i < input.length; i++){
        input[i].style.color = "#A3A3A3";
        input[i].style.backgroundColor = "#181818";
    }
    for (i = 0; i < th.length; i++){
        th[i].style.color = "#A3A3A3";
        th[i].style.backgroundColor = "#121212";
    }
})();
