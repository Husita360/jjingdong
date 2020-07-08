<?php
  header('content-type:text/html;charset=utf-8');
$name = $_POST['username'];
$pwd = $_POST['password'];
$link = mysqli_connect('localhost','root','root','jingdong');
$sql = "SELECT * FROM `userinfo` WHERE `username`='$name' AND `password`='$pwd'";
$res = mysqli_query($link,$sql);
$row = mysqli_fetch_assoc($res);

if($row){
  echo json_encode(array("code"=>1));
}else{
  echo json_encode(array("code"=>0));
}
?>
 