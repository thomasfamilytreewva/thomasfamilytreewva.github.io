<?php
$q = $_REQUEST["q"];
//echo $q;

if ($q=="strDateConvert"){
dateConvertUpdate();
}


if ($q=="test"){
phpTest();
}

function phpTest(){
	echo ("This is function phpTest");
}

if ($q=="updatepobs"){
updatepobs();
}

if ($q=="updatepobc"){
updatepobc();
}


if ($q=="updatepodc"){
updatepodc();
}


if ($q=="updatepods"){
updatepods();
}

?>

<?php
function updatepods(){
	//echo ("This is function updatepods");
	
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
	
	// echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfDeathCity. "   ".$PlaceOfDeathState."\n");
	 //echo nl2br("One line.\nAnother line.");
	 
	 $PlaceOfDeathState = trim($PlaceOfDeathState);
    $PlaceOfDeathState = substr($PlaceOfDeathState, -3, 3);  
	$PlaceOfDeathState = trim($PlaceOfDeathState);
	$PlaceOfDeathState = trim($PlaceOfDeathState, ",");
	
				echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfDeathCity. "   ".$PlaceOfDeathState."\n");
			$sql="UPDATE testtable SET PlaceOfDeathState = '".$PlaceOfDeathState."' WHERE NodeUID = '".$NodeUID."'"; 
						 $resultupdatepods = mysqli_query($conn,$sql);
		//echo ("This is end of SQL Update");
  }
mysqli_close($conn);
}
?>


<?php
function updatepodc(){
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
	
	// echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfDeathCity."\n");
	 
	 $PlaceOfDeathCity = trim($PlaceOfDeathCity);
    $PlaceOfDeathCity = substr($PlaceOfDeathCity, 0, -3);  
	$PlaceOfDeathCity = trim($PlaceOfDeathCity);
	$PlaceOfDeathCity = trim($PlaceOfDeathCity, ",");
	
				echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfDeathCity. "   ".$PlaceOfDeathState."\n");
		$sql="UPDATE testtable SET PlaceOfDeathCity = '".$PlaceOfDeathCity."' WHERE NodeUID = '".$NodeUID."'"; 
						 $resultupdatepodc = mysqli_query($conn,$sql);
		//echo ("This is end of SQL Update");
  }
mysqli_close($conn);
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
	
	 //echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthCity."\n");
	 //echo nl2br("One line.\nAnother line.");
	 
	 $PlaceOfBirthCity = trim($PlaceOfBirthCity);
    $PlaceOfBirthCity = substr($PlaceOfBirthCity, 0, -3);  
	$PlaceOfBirthCity = trim($PlaceOfBirthCity);
	$PlaceOfBirthCity = trim($PlaceOfBirthCity, ",");
	
				echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthCity. "   ".$PlaceOfBirthState."\n");
		$sql="UPDATE testtable SET PlaceOfBirthCity = '".$PlaceOfBirthCity."' WHERE NodeUID = '".$NodeUID."'"; 
						 $resultupdatepobc = mysqli_query($conn,$sql);
		//echo ("This is end of SQL Update");
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
	
	// echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthState."\n");
	 //echo nl2br("One line.\nAnother line.");
	 
	 $PlaceOfBirthState = trim($PlaceOfBirthState);
    $PlaceOfBirthState = substr($PlaceOfBirthState, -3, 3);  
	$PlaceOfBirthState = trim($PlaceOfBirthState);
		$PlaceOfBirthState = trim($PlaceOfBirthState, ",");
			echo nl2br($NodeUID. "   ".$FirstName. "   ".$LastName. "   ".$PlaceOfBirthCity. "   ".$PlaceOfBirthState."\n");

	$sql="UPDATE testtable SET PlaceOfBirthState = '".$PlaceOfBirthState."' WHERE NodeUID = '".$NodeUID."'"; 
						 $resultupdatepobs = mysqli_query($conn,$sql);
	 }
mysqli_close($conn);
}
?>

<?php
function dateConvertUpdate(){
	echo ("This is beginning of php function dateConvertUpdate");

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
echo ($connYesNo);

mysqli_select_db($conn,"id4184148_testdatabase");
	//$sql = "SELECT * FROM testtable WHERE NodeUID = '".$NodeUID."'";
	//$sql = "SELECT * FROM testtabletestdate WHERE NodeUID = '1'";
$sql = "SELECT * FROM testtabletestdatestr ";
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

 $DateOfBirthStr=$row['DateOfBirth'];
$DateOfDeathStr=$row['DateOfDeath'];
var_dump($DateOfBirthStr);
var_dump($DateOfDeathStr);

$DateOfBirthYear = substr($DateOfBirth, 7, 4);
$DateOfBirthMonth = substr($DateOfBirth, 3, 3);
$DateOfBirthDay = substr($DateOfBirth, 0, 2);

if($DateOfBirthMonth=="Jan"){
$DateOfBirthMonth=("01");
}
if($DateOfBirthMonth=="Feb"){
$DateOfBirthMonth=("02");
}

if($DateOfBirthMonth=="Mar"){
$DateOfBirthMonth=("03");
}

if($DateOfBirthMonth=="Apr"){
$DateOfBirthMonth=("04");
}

if($DateOfBirthMonth=="May"){
$DateOfBirthMonth=("05");
}

if($DateOfBirthMonth=="Jun"){
$DateOfBirthMonth=("06");
}

if($DateOfBirthMonth=="Jul"){
$DateOfBirthMonth=("07");
}

if($DateOfBirthMonth=="Aug"){
$DateOfBirthMonth=("08");
}
if($DateOfBirthMonth=="Sep"){
$DateOfBirthMonth=("09");
}

if($DateOfBirthMonth=="Oct"){
$DateOfBirthMonth=("10");
}

if($DateOfBirthMonth=="Nov"){
$DateOfBirthMonth=("11");
}

if($DateOfBirthMonth=="Dec"){
$DateOfBirthMonth=("12");
}

//echo ($DateOfBirthYear."-".$DateOfBirthMonth."-".$DateOfBirthDay);
$DateOfBirth=($DateOfBirthYear."-".$DateOfBirthMonth."-".$DateOfBirthDay);


//DateOfDeath Begins Here

$DateOfDeathYear = substr($DateOfDeath, 7, 4);
$DateOfDeathMonth = substr($DateOfDeath, 3, 3);
$DateOfDeathDay = substr($DateOfDeath, 0, 2);

if($DateOfDeathMonth=="Jan"){
$DateOfDeathMonth=("01");
}
if($DateOfDeathMonth=="Feb"){
$DateOfDeathMonth=("02");
}

if($DateOfDeathMonth=="Mar"){
$DateOfDeathMonth=("03");
}

if($DateOfDeathMonth=="Apr"){
$DateOfDeathMonth=("04");
}

if($DateOfDeathMonth=="May"){
$DateOfDeathMonth=("05");
}

if($DateOfDeathMonth=="Jun"){
$DateOfDeathMonth=("06");
}

if($DateOfDeathMonth=="Jul"){
$DateOfDeathMonth=("07");
}

if($DateOfDeathMonth=="Aug"){
$DateOfDeathMonth=("08");
}

if($DateOfDeathMonth=="Sep"){
$DateOfDeathMonth=("09");
}

if($DateOfDeathMonth=="Oct"){
$DateOfDeathMonth=("10");
}

if($DateOfDeathMonth=="Nov"){
$DateOfDeathMonth=("11");
}

if($DateOfDeathMonth=="Dec"){
$DateOfDeathMonth=("12");
}

//echo ($DateOfDeathYear."-".$DateOfDeathMonth."-".$DateOfDeathDay);
$DateOfDeath=($DateOfDeathYear."-".$DateOfDeathMonth."-".$DateOfDeathDay);
//DateOfDeath Ends Here

	$sql="UPDATE testtable Set DateOfBirth = '".$DateOfBirth."', 
	DateOfDeath = '".$DateOfDeath."' 
WHERE NodeUID = '".$NodeUID."'"; 
//		$sql="UPDATE testtable Set DateOfBirth = '1949-10-04', 
//	DateOfDeath = '".$DateOfDeath."' 
//	WHERE NodeUID = '".$NodeUID."'"; 
						 $resultDOB = mysqli_query($conn,$sql);
//echo ($DateOfBirth);					 
	 }
mysqli_close($conn);
}

?>

<html>
<head>
<script>
function updateall(str) {
//var str="updatepodc"
  var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
				//document.getElementById("txtHint").innerHTML = this.responseText;
alert("function updateall done") ;
	 }
        }
        xmlhttp.open("GET", "adminMWStuff.php?q="+str, true);
        xmlhttp.send();
}
</script>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // document.getElementById("demo").innerHTML = this.responseText;
	alert("function loadDoc done") ;
    }
  };
  xhttp.open("GET", "adminSqlJson.php", true);
  xhttp.send();
}

</script>


<script>
function dateConvert(str) {
//var str="updatepodc"
  var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
				//document.getElementById("txtHint").innerHTML = this.responseText;
alert("function dateConvert done") ;
	 }
        }
        xmlhttp.open("GET", "adminMWStuff.php?q="+str, true);
        xmlhttp.send();
}
</script>



</head>

<body>

<a href="index.html">Main Menu</a><br><br>
<a href="adminMenu.php">Admin Menu</a><br><br>
<p> Be very care with these updates 06 Jan 2019</p>
<p>Update Sql DB with proper date so I can run queries against dates</p>
<p>Going forward I must enter dates with proper format</p>
<p>I must also work on CRUD for proper date formatting in DE</p>
<button onclick="dateConvert('strDateConvert');">Date Convert Update</button><br><br>
<p>The POB/POD updates are to be used only one time to extract the </p>
<p>City and State because at first I had the City State in same field </p>
<p>Going forward I have created separate POB/POD City/State fields</p>
<button onclick="updateall('updatepobc');loadDoc();">Update POB City</button><br><br>
<button onclick="updateall('updatepobs');loadDoc();">Update POB State</button><br><br>
<button onclick="updateall('updatepodc');loadDoc();">Update POD City</button><br><br>
<button onclick="updateall('updatepods');loadDoc();">Update POD State</button><br><br>
<!--//<button onclick="function1();function2();">Click to fire</button>-->
<br><br>
 
 
</script> 

 </body>
</html>
