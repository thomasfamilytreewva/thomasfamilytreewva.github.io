<?php
?>
<html>
<head>
<script>
function passwordHint(){
	alert("Fa1...!");
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
  <button  id="buttonLogin" onclick="login()">Login</button>
  <br><br>
  <button onclick="passwordHint()">Password Hint</button>

  <script>
var input = document.getElementById("password");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("buttonLogin").click();
  }
});

</script> 

 </body>
</html>


