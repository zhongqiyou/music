<?php
header("Content-type:text/html;charset=utf-8");

$link = @mysql_connect("localhost" , "root" , "root");

if($link){
      echo "连接成功！！！";
}else{
     echo "连接失败？？？";
}

mysql_select_db("base_user" , $link);
$sql = "create table tab_user(
    id int unsigned auto_increment primary key,
    username varchar(20) unique key not null,
    password varchar(50) not null
);";

$res = mysql_query($sql);

if($res){
    echo "创建成功！！！";
}else{
    echo "创建失败？？？";
}
?>