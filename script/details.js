//变速置顶
var imgP1 = document.querySelector(".imgP1");
var img = document.querySelector(".img");
var scr = document.documentElement.scrollTop;
var scr = 0;
var timer = null;

window.onscroll = function() {
    scr = document.documentElement.scrollTop;
    if (scr > 500) {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

imgP1.onclick = function() {
    timer = setInterval(function() {
        var tmp = Math.floor(scr / 10) + 1;
        scr = scr + (-tmp);
        document.documentElement.scrollTop = scr;
        console.log(scr);
        if (scr == 0) {
            clearInterval(timer);
        }
    }, 30);
}

var more = document.querySelector(".r_p1+a");
var r_p1 = document.querySelector(".r_p1");

more.onclick = function() {
    if (this.innerHTML == "[更多]") {
        this.innerHTML = this.innerHTML.replace("更多", "收起");
        r_p1.style.whiteSpace = "normal";
        r_p1.style.float = "none";
        r_p1.style.display = "inline";
    } else if (this.innerHTML == "[收起]") {
        this.innerHTML = this.innerHTML.replace("收起", "更多");
        r_p1.style.whiteSpace = "nowrap";
        r_p1.style.float = "left";
        r_p1.style.display = "block";
    }
}

var imgP3 = document.querySelector(".imgP3");
var img_index = 3;
// console.log(imgP3);

setInterval(function() {
    img_index++;
    if (img_index > 6) {
        img_index = 3;
    }
    imgP3.style.cssText = `background:url("img/download${img_index}.png") no-repeat;background-size:100%;background-postion:center; transition:all 0.5s;`;
    //  console.log(img_index);
}, 2000);


var jsonp_text = document.querySelector(".jsonp_text");
var jsonp_ul = document.querySelector(".jsonp_ul");

jsonp_text.onkeyup = function() {
    var js = document.createElement("script");
    js.src = `http://songsearch.kugou.com/song_search_v2?callback=showData&keyword=${this.value}`;
    document.body.appendChild(js);
    if (js) {
        js.remove();
    }
    if (this.value == "") {
        jsonp_ul.style.display = "none";
    } else {
        jsonp_ul.style.display = "block";
    }
}


function showData(res) {
    var str = ""
    for (var i = 0; i < 10; i++) {
        console.log(res.data.lists);
        str += `<li><a href="music.html">${res.data.lists[i].FileName}</a></li>`;
    }
    jsonp_ul.innerHTML = str;

    var jsonp_ul_li = document.querySelectorAll(".jsonp_ul li");

    for (var i = 0; i < jsonp_ul_li.length; i++) {
        jsonp_ul_li[i].index = i;
        jsonp_ul_li[i].onclick = function() {
            var bannerLi = "test" + this.index;
            var json_shuju2 = {
                id: `${this.index}`,
                name: `${res.data.lists[this.index].SongName}`,
                mv: `${res.data.lists[this.index].SingerName}`,
                date: `05:20`,
                src: `img/imgLoad/img暂无.jpg`
            }
            window.sessionStorage[`${bannerLi}`] = JSON.stringify(json_shuju2);
            window.sessionStorage.getItem(JSON.stringify(json_shuju2));
        }
    }
}