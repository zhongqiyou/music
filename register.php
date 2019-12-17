<?php
header("Content-type:text/html;charset=utf-8");

$username = $_GET['username'];
$password = $_GET['password'];

$link = @mysql_connect("localhost" , "root" , "root");

if(!$link){
   echo "连接失败？？？<br/>";
}

mysql_select_db("base_user" , $link);

$sel_sql = "select username from tab_user;";

$sql = "insert tab_user (username , password) values ('$username' , '$password');";

$res_sql = mysql_query($sel_sql);

if(!$res_sql){
     echo "查询失败？？？<br/>";
}

$num = mysql_num_rows($res_sql);
$arr = array();
for($i = 0; $i < $num; $i++){
    $arr[$i] = mysql_fetch_row($res_sql)[0];
}

for($i = 0; $i < $num; $i++){
     if($arr[$i] == $username){
         echo "$username 用户已存在， 请重新注册...<br/>";
         exit;
     }
}


$res_inse =  mysql_query($sql);

if(!$res_inse){
    echo "插入失败？？？<br/>";
}else{
    echo "注册成功！！！";  
}
 


?>