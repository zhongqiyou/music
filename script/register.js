var change = document.querySelector(".change");
var change_img = document.querySelector(".change_img")
var index = 0;
   change.onclick = function (){
	   index++;
	   if(index > 3){
		   index = 0;
	   }
	   change_img.src = `img/imgYZ/download${index}.png`;
	console.log(index)
   }


var btn_yzm = document.querySelector(".btn_yzm");
// console.log(btn_yzm);
var deta_s = 60;
var timer = null;
var swi_yzm = true;
var ran_yzm = 1;
btn_yzm.onclick = function (){
    ran_yzm = Math.floor(Math.random()*899999 + 100000);
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

var arrImg = ["g8rB" , "HAym" , "uIhB" , "jFDG"];
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
var mPattern = /^1[34578]\d{9}$/;
var icon = document.querySelectorAll(".icon");
var input = document.querySelectorAll("input");
 var pass_img = document.querySelector(".pass_img");




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
		pass_img.style.display = "none";
	}
}
}

input[2].onblur = function (){
	if(this.value == ""){
		icon[2].innerHTML = "验证码不能为空";
		icon[2].style.display = "block";
		icon[2].classList.remove("icon_js");
	 }else{
	if(this.value == arrImg[index]){
		icon[2].innerHTML = "验证通过";
		icon[2].classList.add("icon_js");
		icon[2].style.display = "block";
	}else{
        icon[2].innerHTML = "验证错误 ，请重新输入";
		icon[2].classList.remove("icon_js");
		icon[2].style.display = "block";
		pass_img.style.display = "none";
	}
}
}

input[3].onblur = function (){
	if(this.value == ""){
		icon[3].innerHTML = "验证码不能为空";
		icon[3].style.display = "block";
		icon[3].classList.remove("icon_js");
	 }else{
	if(this.value == ran_yzm){
		icon[3].innerHTML = "验证通过";
		icon[3].classList.add("icon_js");
		icon[3].style.display = "block";
	}else{
		icon[3].innerHTML = "验证错误 ，请重新输入";
		icon[3].classList.remove("icon_js");
		icon[3].style.display = "block";
		pass_img.style.display = "none";
	}
}
}

input[1].onkeyup = function (){
	if(pPattern.test(this.value)){
		// console.log(this.value);
	     	pass_img.style.display = "inline-block";
			if(this.value.length >= 6 && this.value.length <= 8){
				// console.log("弱");
				pass_img.style.backgroundPosition = "0 80px";
			}else if(this.value.length >= 9 && this.value.length <= 11){
				// console.log("一般");
				pass_img.style.backgroundPosition = "0 60px";
			}else if(this.value.length >= 12 && this.value.length <= 14){
				// console.log("强");
				pass_img.style.backgroundPosition = "0 40px";
			}else if(this.value.length >= 15 && this.value.length <= 16){
				// console.log("极佳");
				pass_img.style.backgroundPosition = "0 20px";
			}
		}else{
		        //   console.log(0);
		}
}


input[6].onclick = function (){
	// console.log(icon[1].innerHTML)
	if(icon[0].innerHTML == "格式正确" && icon[1].innerHTML == "格式正确" && icon[2].innerHTML == "验证通过" && icon[3].innerHTML == "验证通过" && input[5].checked == true){
		var ajaxObj = new XMLHttpRequest();

		ajaxObj.open("get" , `register.php?username=${input[0].value}&password=${input[1].value}`);

		ajaxObj.send();

		ajaxObj.onreadystatechange = function (){
			if(ajaxObj.readyState == 4 && ajaxObj.status == 200){
				if(ajaxObj.responseText == "注册成功！！！"){
					alert(ajaxObj.responseText);
					location.href = "land.html";
				}else{
                     alert(ajaxObj.responseText);
				}			
			}
		}
	}
}




	
    









 




