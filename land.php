<?php
header("Content-type:text/html;charset=utf-8");

$username = $_GET['username'];
$password = $_GET['password'];

$link = @mysql_connect("localhost" , "root" , "root");

if(!$link){
   echo "连接失败！！！";
}

mysql_select_db("base_user" , $link);

$sql = "select username , password from tab_user where username ='$username' and password='$password';";

 
$res = mysql_query($sql);

if(!$res){
    echo "失败 ，请重试？？？";
}
$result = mysql_fetch_row($res);
 if($result){
      echo "登录成功！！！";
 }else{
     echo "登录失败？？？";
 }


?>