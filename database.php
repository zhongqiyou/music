<?php
header("Content-type:text/html;charset=utf-8");
$link = @mysql_connect("localhost" , "root" , "root");

if($link){
 echo "连接成功！！！" ;
}else{
    echo "连接失败？？？";
}

$sql = "create database base_user";

$res = mysql_query($sql , $link);

if($res){
    echo "创建成功！！！";
}else{
    echo "创建失败？？？";
}


?>