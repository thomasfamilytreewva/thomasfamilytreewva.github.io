<?php


//$text   = ",Tampa,";
//$trimmed = trim($text, ",");
//var_dump($trimmed);
//echo ($trimmed);



$q = $_REQUEST["q"];
//$q=("updatepobs");
//$q=("updatepobc");
echo $q;

if ($q=="test"){
phpTest();
}

if ($q=="updatepobs"){
updatepobs();
}

if ($q=="updatepobc"){
updatepobc();
}

?>



<?php
function updatepobc(){
	//echo ("This is function updatepobs");
	
	$servername = "localhost";
$username = "id4184148_localhost";
$password = "We135711!";
$dbname = "id4184148_testdatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
}

$connYesNo = ("SqlDB connection successful");
//echo ($connYesNo);

mysqli_select_db($conn,"id4184148_testdatabase");
	// $sql = "SELECT * FROM testtable WHERE NodeUID = '".$NodeUID."'";
 $sql = "SELECT * FROM testtable ";
	$result = mysqli_query($conn,$sql);
	
$rowcount = mysqli_num_rows($result);

	 while ($row = mysqli_fetch_array($result)){   
	 $NodeUID=$row['NodeUID'];
	 $FirstName=$row['FirstName'];
	 $MiddleName=$row['MiddleName'];
	 $MaidenName=$row['MaidenName'];
	 $LastName=$row['LastName'];
	 $NickName=$row['NickName'];
	 $DateOfBirth=$row['DateOfBirth'];
	 $PlaceOfBirthCity=$row['PlaceOfBirthCity'];
	 $PlaceOfBirthState=$row['PlaceOfBirthState'];
	 $DateOfDeath=$row['DateOfDeath'];
	 $PlaceOfDeathCity=$row['PlaceOfDeathCity'];
	 $PlaceOfDeathState=$row['PlaceOfDeathState'];
	 $Tel1=$row['Tel1'];
	 $Tel2=$row['Tel2'];
	 $Email = $row['Email'];
$StreetAddress= $row["StreetAddress"];
$City=$row["City"];
$State= $row["State"];
$Comments=$row["Comments"];
	
	 echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthCity."\n");
	 //echo nl2br("One line.\nAnother line.");
	 
	 $PlaceOfBirthCity = trim($PlaceOfBirthCity);
    $PlaceOfBirthCity = substr($PlaceOfBirthCity, 0, -3);  
	$PlaceOfBirthCity = trim($PlaceOfBirthCity);
	$PlaceOfBirthCity = trim($PlaceOfBirthCity, ",");
	
				echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthCity."\n");
		$sql="UPDATE testtable SET PlaceOfBirthCity = '".$PlaceOfBirthCity."' WHERE NodeUID = '".$NodeUID."'"; 
						 $resultupdatepobc = mysqli_query($conn,$sql);
		echo ("This is end of SQL Update");
  }
mysqli_close($conn);
}
?>



<?php
function updatepobs(){
	//echo ("This is function updatepobs");
	
	$servername = "localhost";
$username = "id4184148_localhost";
$password = "We135711!";
$dbname = "id4184148_testdatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
}

$connYesNo = ("SqlDB connection successful");
//echo ($connYesNo);

mysqli_select_db($conn,"id4184148_testdatabase");
	// $sql = "SELECT * FROM testtable WHERE NodeUID = '".$NodeUID."'";
 $sql = "SELECT * FROM testtable ";
	$result = mysqli_query($conn,$sql);
	
$rowcount = mysqli_num_rows($result);

	 while ($row = mysqli_fetch_array($result)){   
	 $NodeUID=$row['NodeUID'];
	 $FirstName=$row['FirstName'];
	 $MiddleName=$row['MiddleName'];
	 $MaidenName=$row['MaidenName'];
	 $LastName=$row['LastName'];
	 $NickName=$row['NickName'];
	 $DateOfBirth=$row['DateOfBirth'];
	 $PlaceOfBirthCity=$row['PlaceOfBirthCity'];
	 $PlaceOfBirthCity=$row['PlaceOfBirthState'];
	 $DateOfDeath=$row['DateOfDeath'];
	 $PlaceOfDeathCity=$row['PlaceOfDeathCity'];
	 $PlaceOfDeathState=$row['PlaceOfDeathState'];
	 $Tel1=$row['Tel1'];
	 $Tel2=$row['Tel2'];
	 $Email = $row['Email'];
$StreetAddress= $row["StreetAddress"];
$City=$row["City"];
$State= $row["State"];
$Comments=$row["Comments"];
	
	 echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthState."\n");
	 //echo nl2br("One line.\nAnother line.");
	 
	 $PlaceOfBirthState = trim($PlaceOfBirthState);
    $PlaceOfBirthState = substr($PlaceOfBirthState, -3);  
	$PlaceOfBirthState = trim($PlaceOfBirthState);
			echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthState."\n");
	$sql="UPDATE testtable SET PlaceOfBirthState = '".$PlaceOfBirthState."' WHERE NodeUID = '".$NodeUID."'"; 
						 $resultupdatepobs = mysqli_query($conn,$sql);
	 }
mysqli_close($conn);
}



?>

<?php
function phpTest(){
	echo ("This is function phpTest");
}

?>
