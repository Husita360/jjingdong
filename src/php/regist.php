<?php
  header('content-type:text/html;charset=utf-8');

$name = $_POST['username'];
$pwd = $_POST['password'];
$number =$_POST['phoneNumber'];

$link = mysqli_connect('localhost','root','root','jingdong');
$sql = "INSERT INTO `userinfo` (`username`,`password`,`phoneNumber`) VALUES ('$name','$pwd','$number')";

$res = mysqli_query($link,$sql);
$row = mysqli_fetch_assoc($res);

if($row){
    echo json_encode(array("code"=>1));
}else{
    echo json_encode(array("code"=>0));
}

?>
