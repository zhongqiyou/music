var img_qh = document.querySelector(".qh");
var img_span = document.querySelector(".qh+span");

img_span.onmouseover = function() {
    setTimeout(function() {
        img_qh.src = "img/切换.png"
    }, 300)

}
img_span.onmouseout = function() {
    setTimeout(function() {
        img_qh.src = "img/播放器.png"
    }, 300)
}

var index = 2;
var list = document.querySelector(".list");
var str = "";
for (var i = 0; i < window.sessionStorage.length; i++) {
    index = i + 1;
    var res = window.sessionStorage.key(i);
    var result = window.sessionStorage.getItem(res);
    var result_json = JSON.parse(result)
    for (value in result_json) {}
    result_json.name.replace(/[\r\n]/g, "");
    str += `<ul><li><input type="checkbox" id="che_${index+2}"><label for="che_${index+2}" class="che_one"></label></li><li class="list_li"><i></i>${result_json.name}<span class="src_img">${result_json.src}</span></li><li class="mv_mus">${result_json.mv}</li><li>${result_json.date}</li></ul>`;

}
list.innerHTML += str;

var list_ul = document.querySelectorAll(".list ul");
var list_ul_input = document.querySelectorAll(".list ul input");
console.log(list_ul_input);
var input_kg = false;
list_ul_input[0].onclick = function() {
    if (input_kg) {
        for (var i = 0; i < list_ul_input.length; i++) {
            list_ul_input[i].checked = true;
        }
        input_kg = false
    } else {
        for (var i = 0; i < list_ul_input.length; i++) {
            list_ul_input[i].checked = false;
        }
        input_kg = true;
    }
}


var list_span = document.querySelector(".c_l_p span + span + span");
var list_span2 = document.querySelector(".c_l_p span + span + span+span");
var video = document.querySelector("video");

list_span.onclick = function() {
    for (var i = 1; i < list_ul_input.length; i++) {
        if (list_ul_input[i].checked == true) {
            list_ul[i].remove();
            window.sessionStorage.removeItem(`test${result_json.id}`);
        };
    }
}

list_span2.onclick = function() {
    for (var i = 1; i < list_ul_input.length; i++) {
        list_ul[i].remove();
        window.sessionStorage.clear();
    };
}

var b_img = document.querySelector(".b_left li+li>img");
b_img.src = "img/imgLoad/暂停 (1).png";
var b_img_s = true;



var r_i = document.querySelector(".b_mus i");
var r_p = document.querySelector(".b_mus i>div");
var r_img = document.querySelector(".b_right img");
var r_img_s = false;
var x = 0;
var xx = 0;
var xxx = 0;

r_img.onclick = function() {
    if (r_img_s) {
        this.src = "img/imgLoad/声音 (2).png";
        r_i.style.transform = `translateX(50px)`;
        xx = 50;
        r_img_s = false;
        video.volume = 0.5;
    } else {
        this.src = "img/imgLoad/声音 静音 线性.png";
        r_i.style.transform = `translateX(0px)`;
        r_i.style.transition = `all 0.2s`;
        r_img_s = true;
        video.volume = 0;
    }
}


r_i.onmousedown = function() {
    r_i.style.transition = `none`;
    var r_i_x = event.pageX;
    document.onmousemove = function() {
        x = event.pageX - r_i_x;
        xxx = x + xx;
        if (xxx < 0) { xxx = 0; }
        if (xxx > 119) { xxx = 119; }
        r_i.style.transform = `translateX(${xxx}px)`;
        video.volume = xxx / 100;
        console.log(xxx / 100);
    }
    document.onmouseup = function() {
        xx = xx + x;
        document.onmousemove = "";
    }
}



var c_mus_i = document.querySelector(".c_mus i");
var p_a = document.querySelectorAll(".b_center p>span>a");
var xxx2 = 0;
var xx2 = 0;
var x2 = 0;


console.log();
c_mus_i.onmousedown = function() {
    var r_i_x = event.pageX;

    document.onmousemove = function() {
        x2 = event.pageX - r_i_x;
        xxx2 = x2 + xx2;
        if (xxx2 < 0) { xxx2 = 0; }
        if (xxx2 > 784) { xxx2 = 784; }


        c_mus_i.style.transform = `translateX(${xxx2}px)`;
    }

    document.onmouseup = function() {
        xx2 = xx2 + x2;
        document.onmousemove = "";

    }
}

var timer_speed = null;
var timer_swi = true;
var c_mus_x = document.querySelector(".c_mus_x");
b_img.onclick = function() {
    mus_pd();
}


var list_ul_liZ = document.querySelectorAll(".list ul>li");
var list_ulZ = document.querySelectorAll(".list ul");
var b_centerSpan = document.querySelector(".b_center span");
var geci_span = document.querySelectorAll(".geci li>span");
var geci_ul = document.querySelectorAll(".geci");
var geci_li = document.querySelectorAll(".geci li");
var ge_img = document.querySelector(".geimg img");
var musZ = document.querySelectorAll(".list ul li+li i");

var mv_mus = document.querySelectorAll(".mv_mus");

var timer_geci = null;
var tmp_geci = 0;
var geci_index = 0;
var img_index = 0;

for (var i = 0; i < musZ.length; i++) {
    musZ[i].style.display = "none";
}
for (var i = 1; i < list_ulZ.length; i++) {
    list_ulZ[i].index = i;
    list_ulZ[i].ondblclick = function() {
        img_index = this.index;
        clearInterval(timer_geci);
        var src_img = document.querySelectorAll(".src_img");
        ge_img.src = src_img[img_index - 1].innerHTML;
        c_mus_i.style.transform = `translateX(${0}px)`;
        video.src = "http://rm01.sycdn.kuwo.cn/914a3e4ac188acb5eee03c51336c9026/5df8a810/resource/n2/67/72/2145188669.mp3";
        var mv_mus = document.querySelectorAll(".mv_mus");
        console.log(mv_mus);
        if (mv_mus[img_index - 1].innerHTML == "黎明") {
            video.play();
        }


        b_img_s = true;
        tmp_geci = 0;
        geci_index = 0;
        for (var i = 0; i < geci_li.length; i++) {
            geci_li[i].style.color = "#cccccc";
            geci_li[i].style.fontSize = "14px";
        }
        b_centerSpan.innerHTML = list_ul_liZ[5 + ((img_index - 1) * 4)].innerHTML;
        p_a[1].innerHTML = list_ul_liZ[7 + ((img_index - 1) * 4)].innerHTML;
        geci_span[0].innerHTML = list_ul_liZ[6 + ((img_index - 1) * 4)].innerHTML;
        geci_span[1].innerHTML = list_ul_liZ[5 + ((img_index - 1) * 4)].innerHTML;
        var date_musD = p_a[0].innerHTML.split(":");
        var date_musX = p_a[1].innerHTML.split(":");
        var str = /^0/;
        date_musD0 = parseInt(date_musD[0].replace(str, ""));
        date_musD1 = parseInt(date_musD[1].replace(str, ""));
        date_musX0 = parseInt(date_musX[0].replace(str, ""));
        date_musX1 = parseInt(date_musX[1].replace(str, ""));
        date_musZ = date_musD0 * 60 + parseInt(date_musD1);
        date_musZ2 = date_musX0 * 60 + parseInt(date_musX1);
        date_musD1 = 0;
        date_musD0 = 0;
        geci_ul[0].style.top = `0px`;
        for (var i = 0; i < musZ.length; i++) {
            musZ[i].style.display = "none";
        }
        musZ[img_index - 1].style.display = "inline-block";
        mus_pd();
        geci_tran();
    }
}



function mus_pd() {
    clearInterval(timer_geci);
    clearInterval(timer_speed);
    if (b_img_s) {
        geci_tran();
   
    if(document.querySelectorAll(".list ul")[1]){
        if (mv_mus[img_index - 1].innerHTML == "黎明") {
            video.play();
        }
    }
      
        b_img.src = "img/imgLoad/暂停.png";
        timer_speed = setInterval(function() {
            if (timer_swi) {
                var date_musD = p_a[0].innerHTML.split(":");
                var date_musX = p_a[1].innerHTML.split(":");
                var str = /^0/;
                date_musD0 = parseInt(date_musD[0].replace(str, ""));
                date_musD1 = parseInt(date_musD[1].replace(str, ""));
                date_musX0 = parseInt(date_musX[0].replace(str, ""));
                date_musX1 = parseInt(date_musX[1].replace(str, ""));
                date_musZ = date_musD0 * 60 + parseInt(date_musD1);
                date_musZ2 = date_musX0 * 60 + parseInt(date_musX1);
                timer_swi = false;
            }
            date_musD1++;
            if ((date_musD0 + "").length < 2) {
                date_musD0 = "0" + date_musD0;
            }
            if ((date_musD1 + "").length < 2) {
                date_musD1 = "0" + date_musD1;
            }
            if (date_musD1 > 59) {
                date_musD1 = 0;
                date_musD0++;
            }
            date_musZ = date_musD0 * 60 + parseInt(date_musD1);
            date_musZ2 = date_musX0 * 60 + parseInt(date_musX1);
            var bf = date_musZ / date_musZ2;
            if (date_musD1 == date_musX1) {
                if (date_musD0 == date_musX0) {
                    clearInterval(timer_speed);
                    for (var i = 0; i < musZ.length; i++) {
                        musZ[i].style.display = "none";
                    }
                    geci_index = 0;
                    tmp_geci = 0;
                    geci_ul[0].style.top = `0px`;
                    clearInterval(timer_geci);
                    b_img.src = "img/imgLoad/暂停 (1).png";
                    p_a[0].innerHTML = "00:00";
                    date_musD1 = 0;
                    date_musD0 = 0;
                    b_img_s = true;
                    c_mus_i.style.transform = `translateX(0px)`;
                    return false;
                }
            }
            c_mus_i.style.transform = `translateX(${bf*784}px)`;
            p_a[0].innerHTML = `${date_musD0}:${date_musD1}`;
        }, 100);

        b_img_s = false;
    } else {

        if(document.querySelectorAll(".list ul")[1]){
            if (mv_mus[img_index - 1].innerHTML == "黎明") {
                video.pause();
            }
        }
      

        b_img.src = "img/imgLoad/暂停 (1).png";
        b_img_s = true;
        clearInterval(timer_geci);
        clearInterval(timer_speed);
    }
}


function geci_tran() {
    clearInterval(timer_geci);
    timer_geci = setInterval(function() {
        geci_index++;
        tmp_geci += 50;
        if (geci_index > geci_li.length - 1) {
            geci_index = geci_li.length - 1;
        }
        if (tmp_geci > 2800) {
            clearInterval(timer_geci);
        }
        geci_ul[0].style.top = `${-tmp_geci}px`;
        geci_ul[0].style.transition = `all 1s`;
        for (var i = 0; i < geci_li.length; i++) {
            geci_li[i].style.color = "#cccccc";
            geci_li[i].style.fontSize = "14px";
        }
        geci_li[geci_index].style.color = "#31c27c";
        geci_li[geci_index].style.fontSize = "18px";
        geci_li[geci_index].style.transition = "all 0.5s";
    }, 2000);
}





var b_leftLi = document.querySelectorAll(".b_left li");



b_leftLi[2].onclick = function() {
    img_index++;
    if (img_index > musZ.length) {
        img_index = 1;
    }

    for (var i = 0; i < musZ.length; i++) {
        musZ[i].style.display = "none";
    }
    musZ[img_index - 1].style.display = "inline-block";


    clearInterval(timer_geci);
    var src_img = document.querySelectorAll(".src_img");
    ge_img.src = src_img[img_index - 1].innerHTML;
    c_mus_i.style.transform = `translateX(${0}px)`;
    b_img_s = true;
    tmp_geci = 0;
    geci_index = 0;
    for (var i = 0; i < geci_li.length; i++) {
        geci_li[i].style.color = "#cccccc";
        geci_li[i].style.fontSize = "14px";
    }
    video.src = "http://rm01.sycdn.kuwo.cn/914a3e4ac188acb5eee03c51336c9026/5df8a810/resource/n2/67/72/2145188669.mp3";

    console.log(mv_mus);
    if (mv_mus[img_index - 1].innerHTML == "黎明") {
        video.play();
    }
    b_centerSpan.innerHTML = list_ul_liZ[5 + ((img_index - 1) * 4)].innerHTML;
    p_a[1].innerHTML = list_ul_liZ[7 + ((img_index - 1) * 4)].innerHTML;
    geci_span[0].innerHTML = list_ul_liZ[6 + ((img_index - 1) * 4)].innerHTML;
    geci_span[1].innerHTML = list_ul_liZ[5 + ((img_index - 1) * 4)].innerHTML;
    var date_musD = p_a[0].innerHTML.split(":");
    var date_musX = p_a[1].innerHTML.split(":");
    var str = /^0/;
    date_musD0 = parseInt(date_musD[0].replace(str, ""));
    date_musD1 = parseInt(date_musD[1].replace(str, ""));
    date_musX0 = parseInt(date_musX[0].replace(str, ""));
    date_musX1 = parseInt(date_musX[1].replace(str, ""));
    date_musZ = date_musD0 * 60 + parseInt(date_musD1);
    date_musZ2 = date_musX0 * 60 + parseInt(date_musX1);
    date_musD1 = 0;
    date_musD0 = 0;
    geci_ul[0].style.top = `0px`;

    for (var i = 0; i < musZ.length; i++) {
        musZ[i].style.display = "none";
    }
    musZ[img_index - 1].style.display = "inline-block";
    mus_pd();
    geci_tran();

}


b_leftLi[0].onclick = function() {
    img_index--;
    if (img_index < 1) {
        img_index = musZ.length;
    }
    for (var i = 0; i < musZ.length; i++) {
        musZ[i].style.display = "none";
    }
    musZ[img_index - 1].style.display = "inline-block";
    clearInterval(timer_geci);
    var src_img = document.querySelectorAll(".src_img");
    ge_img.src = src_img[img_index - 1].innerHTML;
    c_mus_i.style.transform = `translateX(${0}px)`;

    b_img_s = true;
    tmp_geci = 0;
    geci_index = 0;
    for (var i = 0; i < geci_li.length; i++) {
        geci_li[i].style.color = "#cccccc";
        geci_li[i].style.fontSize = "14px";
    }
    video.src = "http://rm01.sycdn.kuwo.cn/914a3e4ac188acb5eee03c51336c9026/5df8a810/resource/n2/67/72/2145188669.mp3";
    var mv_mus = document.querySelectorAll(".mv_mus");
    console.log(mv_mus);
    if (mv_mus[img_index - 1].innerHTML == "黎明") {
        video.play();
    }
    b_centerSpan.innerHTML = list_ul_liZ[5 + ((img_index - 1) * 4)].innerHTML;
    p_a[1].innerHTML = list_ul_liZ[7 + ((img_index - 1) * 4)].innerHTML;
    geci_span[0].innerHTML = list_ul_liZ[6 + ((img_index - 1) * 4)].innerHTML;
    geci_span[1].innerHTML = list_ul_liZ[5 + ((img_index - 1) * 4)].innerHTML;
    var date_musD = p_a[0].innerHTML.split(":");
    var date_musX = p_a[1].innerHTML.split(":");
    var str = /^0/;
    date_musD0 = parseInt(date_musD[0].replace(str, ""));
    date_musD1 = parseInt(date_musD[1].replace(str, ""));
    date_musX0 = parseInt(date_musX[0].replace(str, ""));
    date_musX1 = parseInt(date_musX[1].replace(str, ""));
    date_musZ = date_musD0 * 60 + parseInt(date_musD1);
    date_musZ2 = date_musX0 * 60 + parseInt(date_musX1);
    date_musD1 = 0;
    date_musD0 = 0;
    geci_ul[0].style.top = `0px`;

    for (var i = 0; i < musZ.length; i++) {
        musZ[i].style.display = "none";
    }
    musZ[img_index - 1].style.display = "inline-block";
    mus_pd();
    geci_tran();

}