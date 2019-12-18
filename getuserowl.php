<!--08 Jan 2019-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>getuserowl.php</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!--  
<script>
  

</script>
-->
</head>
<body>



</body>
</html>


<?php

//000WebHost Settings
$servername = "localhost";
$username = "id4184148_localhost";
$password = "We135711!";
$dbname = "id4184148_testdatabase";


/*
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testdatabase";
*/
$lastnamevar = 'Thomas';
$idvar = 1;
$query = "Angela";
//$q = 1;
$q = intval($_GET['q']);


$FirstName = "";
$LastName = "";
$NickName = "";
$DateOfBirth = "";
$PlaceOfBirth = "";

$DisplayInfo = "";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
	


mysqli_select_db($conn,"id4184148_testdatabase");
//$sql="SELECT * FROM user WHERE id = '".$q."'";
//$sql="SELECT FirstName FROM user WHERE id = '".$q."'";
//$sql="SELECT * FROM user";
//$sql = "SELECT * FROM testtable WHERE id LIKE '%".$q."%'";
//$sql = "SELECT * FROM testtable WHERE ID LIKE '%".$q."%'";
$sql = "SELECT * FROM testtable WHERE NodeUID = '".$q."'";

$result = mysqli_query($conn,$sql);



while($row = mysqli_fetch_array($result)) {
    // echo ($row['FirstName']);
	
$FirstName = ($row['FirstName']);
//echo ($FirstName);
$LastName = ($row['LastName']);
//echo ($LastName);
$NickName = ($row['NickName']);
$DateOfBirth = ($row['DateOfBirth']);
$PlaceOfBirth = ($row['PlaceOfBirth']);
$DateOfDeath = ($row['DateOfDeath']);
$PlaceOfDeath = ($row['PlaceOfDeath']);
$Tel1 = ($row['Tel1']);
$Email = ($row['Email']);

$DisplayInfo = nl2br("First Name: " . $FirstName . "\nLast Name: " . $LastName .
"\nNick Name: " . $NickName . "\nPlace of birth: " . $PlaceOfBirth .
"\nDate of birth: " . $DateOfBirth . "\nDate of death: " . $DateOfDeath .
"\nPlace of death: " . $PlaceOfDeath ."\nTel: " . $Tel1 . "\nEmail: " . $Email);

echo ($DisplayInfo);
echo  nl2br("\n-----------------------------------------------------");




mysqli_close($conn);

}



?>
