var c_p = document.querySelectorAll(".c_p span");
var c = document.querySelector(".c_p");
var form = document.querySelectorAll("form");
var icon3 = document.querySelector(".icon3");
var icon4 = document.querySelector(".icon4");
var form2 = document.querySelector(".form2");
var btn_yzm = document.querySelector(".btn_yzm");





c_p[0].style.color = "red";
c_p[0].onclick = function(){
	this.style.color = "red";
	c_p[1].style.color = "#666666";
	form[0].style.display = "block";
	form[1].style.display = "none";
}

c_p[1].onclick = function(){
	this.style.color = "red";
	c_p[0].style.color = "#666666";
	form[0].style.display = "none";
	form[1].style.display = "block";
}
var icon = true;

icon4.onclick = function (){
	if(icon){
		c.style.opacity = "0";
		form[0].style.display = "none";
		form[1].style.display = "none";
		form2.style.display = "block";
		c_p[0].style.color = "red";
		c_p[1].style.color = "#666666";
		icon3.style.background = "url(img/saoma_p_login.png) no-repeat";
		this.style.background = "url(img/saoma_computer.png) no-repeat";
		icon = false;
	}else{
		c.style.opacity = "1";
		form[0].style.display = "block";
		form2.style.display = "none";
		icon3.style.background = "url(img/saoma_login.png) no-repeat";
		this.style.background = "url(img/saoma_wx.png) no-repeat";
		icon = true;
	}
}


var deta_s = 60;
var timer = null;
var swi_yzm = true;
btn_yzm.onclick = function (){
	var ran_yzm = Math.floor(Math.random()*899999 + 100000);
	this.style.background = "#cccccc";
if(swi_yzm){
	timer = setInterval(function(){
	    swi_yzm = false;
		deta_s--;
		btn_yzm.value = `注意查收（${deta_s}s）`;
		if(deta_s == 0){
			clearInterval(timer);
			btn_yzm.value = `重新获取`;
			deta_s = 60;
			swi_yzm = true;
			btn_yzm.style.background = "cornflowerblue";
		}
		if(deta_s == 50){
			alert("请查收验证码：" + ran_yzm);
		}
	} , 1000);
	}
}

var input = document.querySelectorAll("input");
var icon = document.querySelectorAll(".icon");
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
var mPattern = /^1[34578]\d{9}$/;
console.log(input);

input[0].onblur = function (){
	if(this.value == ""){
	   icon[0].innerHTML = "手机号不能为空";
	   icon[0].style.display = "block";
	   icon[0].classList.remove("icon_js");
	}else{
	   if(mPattern.test(this.value)){
		   icon[0].innerHTML = "格式正确";
		   icon[0].classList.add("icon_js");
		   icon[0].style.display = "block";
		}else{
		   icon[0].innerHTML = "格式错误";
		   icon[0].classList.remove("icon_js");
		   icon[0].style.display = "block";
		}
	}
   
}

input[1].onblur = function (){
   if(this.value == ""){
	   icon[1].innerHTML = "密码不能为空";
	   icon[1].style.display = "block";
	   icon[1].classList.remove("icon_js");
	}else{
   if(pPattern.test(this.value)){
	   icon[1].innerHTML = "格式正确";
	   icon[1].classList.add("icon_js");
	   icon[1].style.display = "block";
   }else{
	   icon[1].innerHTML = "格式错误";
	   icon[1].classList.remove("icon_js");
	   icon[1].style.display = "block";
   }
}
}

input[2].onclick = function (){
       if(icon[0].innerHTML == "格式正确" &&   icon[1].innerHTML == "格式正确"){
		  var ajax = new XMLHttpRequest();
		  
		  ajax.open("get" , `land.php?username=${input[0].value}&password=${input[1].value}`);

		  ajax.send();

		  ajax.onreadystatechange = function (){
			  if(ajax.readyState == 4 && ajax.status == 200){
				  if(ajax.responseText == "登录成功！！！"){
					alert(ajax.responseText);
				    location.href = "index.html";
				  }else{
					alert(ajax.responseText);
				  }
			  }
		  }
	   }
}
