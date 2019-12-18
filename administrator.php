<?php

//08 Jan 2019


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
	window.open ('myPhpFunctions.php',false);
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



<!-- 
<form name="login" action="">
 <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar">
  </div>



  <div class="container">
   <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

<br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
<br>
    <button type="submit">Login</button>
	
	<br>
<label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>

  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
<span class="psw">Forgot <a href="#">password?</a></span> 
  </div>
</form>
-->

 </body>
</html>


