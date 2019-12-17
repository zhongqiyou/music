// 伪造模板数据
var btn_json = document.querySelectorAll(".hyp");
var tbody_json = document.querySelector(".top tbody");
var music_json = [
        [{ "id": "01", "musicName": "我应该", "name": "张学友", "src": "img/下载.png" },
            { "id": "02", "musicName": "十七岁", "name": "刘德华", "src": "img/下载.png" },
            { "id": "03", "musicName": "今夜你会不会来", "name": "黎明", "src": "img/下载.png" },
            { "id": "04", "musicName": "对你爱不完", "name": "郭富城", "src": "img/下载.png" },
            { "id": "05", "musicName": "念亲恩", "name": "陈百强", "src": "img/下载.png" },
            { "id": "06", "musicName": "是否", "name": "苏芮", "src": "img/下载.png" },
            { "id": "07", "musicName": "再到几天", "name": "谭咏麟", "src": "img/下载.png" },
            { "id": "08", "musicName": "无心快语", "name": "蔡国权", "src": "img/下载.png" },
            { "id": "09", "musicName": "落花流水", "name": "陈奕迅", "src": "img/下载.png" },
            { "id": "10", "musicName": "大雨", "name": "李克勤·陈冰", "src": "img/下载.png" }
        ],

        [{ "id": "01", "musicName": "等你等了那么久", "name": "祁隆", "src": "img/下载.png" },
            { "id": "02", "musicName": "小苹果", "name": "筷子兄弟", "src": "img/下载.png" },
            { "id": "03", "musicName": "我的快乐就是想你", "name": "陈雅森", "src": "img/下载.png" },
            { "id": "04", "musicName": "爱的世界只有你", "name": "祁隆", "src": "img/下载.png" },
            { "id": "05", "musicName": "看透爱情看透你", "name": "冷漠", "src": "img/下载.png" },
            { "id": "06", "musicName": "爱情这杯酒谁喝都得醉", "name": "闫旭", "src": "img/下载.png" },
            { "id": "07", "musicName": "一生无悔", "name": "高安", "src": "img/下载.png" },
            { "id": "08", "musicName": "一万个舍不得", "name": "庄心妍", "src": "img/下载.png" },
            { "id": "09", "musicName": "伤不起", "name": "王麟", "src": "img/下载.png" },
            { "id": "10", "musicName": "不要在我寂寞", "name": "郑源", "src": "img/下载.png" }
        ],

        [{ "id": "01", "musicName": "荷塘月色", "name": "凤凰传奇", "src": "img/下载.png" },
            { "id": "02", "musicName": "云在飞", "name": "祁隆", "src": "img/下载.png" },
            { "id": "03", "musicName": "醉相思", "name": "张学友", "src": "img/下载.png" },
            { "id": "04", "musicName": "最炫民族风", "name": "凤凰传奇", "src": "img/下载.png" },
            { "id": "05", "musicName": "叹情缘", "name": "祁隆", "src": "img/下载.png" },
            { "id": "06", "musicName": "风干的玫瑰", "name": "陈瑞", "src": "img/下载.png" },
            { "id": "07", "musicName": "哥有老婆", "name": "纪晓斌", "src": "img/下载.png" },
            { "id": "08", "musicName": "一万个理由", "name": "郑源", "src": "img/下载.png" },
            { "id": "09", "musicName": "包容", "name": "郑源", "src": "img/下载.png" },
            { "id": "10", "musicName": "花桥流水", "name": "高安", "src": "img/下载.png" }
        ]
    ]
    //初始化
var index = 0;
var index2 = 0;
setTimeout(function() {
    var obj = {
        "targe": music_json[index]
    }
    var resultStr = template('template', obj);
    tbody_json.innerHTML = resultStr;

    var obj2 = {
        "targe2": music_json2[0]
    }
    var resultStr2 = template('template_two', obj2);
    oneUl.innerHTML = resultStr2;


}, 100)

btn_json[1].onclick = function() {
    index++;
    if (index > music_json.length - 1) { index = 0; }
    var obj = {
        "targe": music_json[index]
    }
    var resultStr = template('template', obj);
    tbody_json.innerHTML = resultStr;
    music_tr();
}


var oneUl = document.querySelector(".oneUl");

var music_json2 = [
    [{ "src": "img/刘德华.jpg", "name": "刘德华" }, { "src": "img/张学友.jpg", "name": "张学友" }, { "src": "img/郭富城.jpg", "name": "郭富城" }, { "src": "img/黎明.jpg", "name": "黎明" }],
    [{ "src": "img/杨坤.jpg", "name": "杨坤" }, { "src": "img/那英.jpg", "name": "那英" }, { "src": "img/谢霆锋.jpg", "name": "谢霆锋" }, { "src": "img/郑源.jpg", "name": "郑源" }],
    [{ "src": "img/张国荣.jpg", "name": "张国荣" }, { "src": "img/陈百强.jpg", "name": "陈百强" }, { "src": "img/陈奕迅.jpg", "name": "陈奕迅" }, { "src": "img/梅艳芳.jpg", "name": "梅艳芳" }]
];

btn_json[0].onclick = function() {
    index2++;
    if (index2 > music_json2.length - 1) { index2 = 0; }
    var obj2 = {
        "targe2": music_json2[index2]
    }
    var resultStr2 = template('template_two', obj2);
    oneUl.innerHTML = resultStr2;
}


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
    clearInterval(timer);
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

//进度条
var large = document.querySelector(".large");
var progress_width = document.querySelector(".progress_width");
var load = document.querySelector(".load");
var largeP = document.querySelector(".large p");
var bodyHeight = (document.documentElement.clientHeight - 16) / 2;
var bodyWidth = (document.documentElement.clientWidth - 500) / 2;
var progressWidth = progress_width.offsetWidth;
var Width = 0;
var widthP = 0;
var timerWidth = null;

progress_width.style.marginTop = `${bodyHeight}px`;
progress_width.style.marginLeft = `${bodyWidth}px`;

timerWidth = setInterval(function() {
    Width += 12;

    if (widthP == 100) {
        widthP = 100;
    } else {
        widthP += 2;
    }
    load.style.width = `${Width}px`;
    largeP.innerHTML = `${widthP}%`;
    if (Width > progressWidth + 100) {
        large.style.display = "none";
        clearInterval(timerWidth);
    }
}, 130);


var imgP3 = document.querySelector(".imgP3");
var img_index = 3;
console.log(imgP3);

setInterval(function() {
    img_index++;
    if (img_index > 6) {
        img_index = 3;
    }
    imgP3.style.cssText = `background:url("img/download${img_index}.png") no-repeat;background-size:100%;background-postion:center; transition:all 0.5s;`;
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

function music_tr() {
    setTimeout(function() {
        var tr_hover = document.querySelectorAll(".tr_hover");
        var td_hover = document.querySelectorAll(".tr_hover td");
        for (var i = 0; i < tr_hover.length; i++) {
            tr_hover[i].index = i;
            tr_hover[i].ondblclick = function() {
                var test = "test" + this.index;
                var json_shuju = {
                    id: `${this.index}`,
                    name: `${td_hover[(this.index)*3].innerHTML}`,
                    mv: `${td_hover[(this.index)*3+1].innerHTML}`,
                    date: `04:11`,
                    src: `img/黎明.jpg`
                }
                window.sessionStorage[`${test}`] = JSON.stringify(json_shuju);
                location.href = "music.html";
            }
        }

    }, 500)
}
music_tr();