<?php

//08 Jan 2019
//This includes an external php file in the current php file.
include 'php1.php';
include 'test.php';
php1();

?>

<html>
<head>
<script>
function passwordHint(){
	alert("Fa........!");
}
function login(){
//alert ("this is function login");
password = document.getElementById("password").value;
//alert (password);
if (password=="Fa12345678!") {
	//alert ("Match");
	document.getElementById("password").value="";
	//window.open ('myPhpFunctions.php','_self',false);
	window.open ('adminMenu.php',false);
}else{
		alert("Password " + password + " is not correct");
}
}
</script>

</head>

<body>

<a href="index.html">Main Menu</a><br>
<label for="pw"><b>Password</b></label>
 <input id="password" type="text" name="myPasswordName">
 <br><br>
  <button onclick="login()">Login</button>
  <br><br>
  <button onclick="passwordHint()">Password Hint</button>



 </body>
</html>


