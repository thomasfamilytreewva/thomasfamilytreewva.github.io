<?php include 'C:\xampp\htdocs\thomasfamilytreewva\previous\maincss.php'; ?>
<?php
//10 Aug 2019
$NodeUIDOK='';
$CrudOptionOK='';
$CrudOptionErr='';
$NodeUIDErr='';
$CrudOption='';
$NodeUID='';
$FirstName= $MiddleName= $MaidenName= $LastName= $NickName='';
$DateOfBirth= $PlaceOfBirth= $DateOfDeath= $PlaceOfDeath='';
$Tel1= $Tel2= $Email='';
$StreetAddress= $City= $State= $Comments='';

//$CrudOption = ($_POST['CrudOption']);
//echo $CrudOption;
//echo ($_POST['NodeUID']);
//echo ($_POST['FirstName']);


//if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["NodeUID"])) {
    $NodeUIDErr = "Node UID  is required";
	//exit('this is exit');
  } else {
	  $NodeUIDOK = 'ok';
	  $NodeUID = ($_POST['NodeUID']);
   echo $NodeUID;
   //$CrudOption = ($_POST['CrudOption']);
   // echo $CrudOption;
  }
  
   if (empty($_POST["CrudOption"])) {
    $CrudOptionErr = "Crud Option  is required";
	} else {
		$CrudOptionOK = 'ok';
	  $CrudOption = ($_POST['CrudOption']);
   echo $CrudOption;
   //$CrudOption = ($_POST['CrudOption']);
   // echo $CrudOption;
  }
  
  
 
//}

If ($NodeUIDOK=='ok' && $CrudOptionOK=='ok'){

 echo ('Labdah');
 $NodeUID = $_POST["NodeUID"];
$FirstName = $_POST["FirstName"];
$MiddleName = $_POST["MiddleName"];
$MaidenName = $_POST["MaidenName"];
$LastName = $_POST["LastName"];
$NickName = ($_POST['NickName']);
$DateOfBirth = ($_POST['DateOfBirth']);
$PlaceOfBirth = ($_POST['PlaceOfBirth']);
$DateOfDeath = ($_POST['DateOfDeath']);
$PlaceOfDeath = ($_POST['PlaceOfDeath']);
$Tel1 = ($_POST['Tel1']);
$Tel2 = ($_POST['Tel2']);
$Email = ($_POST['Email']);
$StreetAddress= $_POST["StreetAddress"];
$City= $_POST["City"];
$State= $_POST["State"];
$Comments=$_POST["Comments"];
	
	
	
	
 	//000WebHost Settings
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
//echo ($Crud);	

mysqli_select_db($conn,"id4184148_testdatabase");


If ($CrudOption == "insert"){
          //sql here
		  $sql = "INSERT INTO testtable (NodeUID, FirstName, LastName)
VALUES ('".$NodeUID."', '".$FirstName."', '".$LastName."')";
$result = mysqli_query($conn,$sql);
echo ("This is end of SQL Insert");
}elseIf ($CrudOption == "delete"){
		 //sql here
	$sql = "DELETE FROM testtable WHERE NodeUID = '".$NodeUID."'";
	$result = mysqli_query($conn,$sql);
echo ("This is end of SQL DELETE");
   mysqli_close($conn);

}elseIf ($CrudOption == "select"){
   echo ("This is start of SQL Select");
	 //sql here

 $sql = "SELECT * FROM testtable WHERE NodeUID = '".$NodeUID."'";
	$result = mysqli_query($conn,$sql);
	
$rowcount = mysqli_num_rows($result);
echo ($rowcount);
if ($rowcount == 0){
	echo ("This NodeUID not found");
	$NodeUID="";
	}
	
	 while ($row = mysqli_fetch_array($result)){   
	 $NodeUID=$row['NodeUID'];
	 $FirstName=$row['FirstName'];
	 $MiddleName=$row['MiddleName'];
	 $MaidenName=$row['MaidenName'];
	 $LastName=$row['LastName'];
	 $NickName=$row['NickName'];
	 $DateOfBirth=$row['DateOfBirth'];
	 $PlaceOfBirth=$row['PlaceOfBirth'];
	 $DateOfDeath=$row['DateOfDeath'];
	 $PlaceOfDeath=$row['PlaceOfDeath'];
	 $Tel1=$row['Tel1'];
	 $Tel2=$row['Tel2'];
	 $Email = $row['Email'];
$StreetAddress= $row["StreetAddress"];
$City=$row["City"];
$State= $row["State"];
$Comments=$row["Comments"];
	 
	 
	
	 echo ($NodeUID. "   ".$FirstName. "   ".$LastName);
	 
  }
  
   echo ("This is end of SQL Select");
   mysqli_close($conn);
}elseif ($CrudOption == "update"){
	 //sql here
	 
	 echo ("This is elseif update");
	 
	 	   echo ($NodeUID. "   ".$FirstName. "   ".$MiddleName. "   ".$MaidenName. "   
	   ".$LastName. "   ".$NickName." ".$DateOfBirth." ".$PlaceOfBirth);
	  
	 $sql="UPDATE testtable SET FirstName = '".$FirstName."', MiddleName = '".$MiddleName."',
	 MaidenName = '".$MaidenName."', LastName = '".$LastName."', NickName = '".$NickName."',
	 DateOfBirth = '".$DateOfBirth."', PlaceOfBirth = '".$PlaceOfBirth."',
	  DateOfDeath = '".$DateOfDeath."', PlaceOfDeath = '".$PlaceOfDeath."',
	   Tel1 = '".$Tel1."', Tel2 = '".$Tel2."', Email = '".$Email."',
	    StreetAddress = '".$StreetAddress."', City = '".$City."', State = '".$State."',
		Comments = '".$Comments."'
	   
			 WHERE NodeUID = '".$NodeUID."'";
   
$result = mysqli_query($conn,$sql);
echo ("This is end of SQL Update");
   mysqli_close($conn);
}

}
?>

<html>
<head>
<script>

</script>

<script>
</script>




</head>

<body>

<a href="index.html">Main Menu</a><br>


 <form action="searchowl.php" method="GET">
        <input type="text" name="query" />
        <input type="submit" value="Search" />
    </form>


<h2>CRUD</h2>
<form name="formCrud" action="myPhpFunctions.php "method="POST" >
<select name='CrudOption'>
<option value=''></option>
<option value='delete'>Delete</option>
<option value='insert'>Insert</option>
<option value='select'>Select</option>
<option value='update'>Update</option>
</select><br>

 <div>
<label for="node">Node UID:</label>
<input type='text' id='node' name='NodeUID' value="<?php echo $NodeUID;?>"><br>
 </div>
 
  <div>
<label for="first">First Name:</label>
 <input type="text" id='first' name="FirstName" autocomplete='off' value="<?php echo $FirstName;?>"><br>
 </div>
 
  <div>
<label for="middle">Middle Name:</label>
<input type="text" id='middle' name="MiddleName" autocomplete='off' value="<?php echo $MiddleName;?>"><br>
 </div>

  <div>
<label for="maiden">Maiden Name:</label>
<input type="text" id='maiden' name="MaidenName" autocomplete='off' value="<?php echo $MaidenName;?>"><br>
 </div>


<label for="last">Last Name:</label>
 <input  id='last'  type="text" name="LastName" value="<?php echo $LastName;?>"><br>

<label for="nick">Nick Name:</label>
<input  id='nick'  type="text" name="NickName" value="<?php echo $NickName;?>"><br>


Date Of Birth: <input type="text" name="DateOfBirth" value="<?php echo $DateOfBirth;?>"><br>


Place Of Birth: <input type="text" name="PlaceOfBirth" value="<?php echo $PlaceOfBirth;?>"><br>


Date Of Death: <input type="text" name="DateOfDeath" value="<?php echo $DateOfDeath;?>"><br>
Place Of Death: <input type="text" name="PlaceOfDeath" value="<?php echo $PlaceOfDeath;?>"><br>
Tel1: <input type="text" name="Tel1" value="<?php echo $Tel1;?>"><br>
Tel2: <input type="text" name="Tel2" value="<?php echo $Tel2;?>"><br>
Email: <input type="text" name="Email" value="<?php echo $Email;?>"><br>
Street Address: <input type="text" name="StreetAddress" value="<?php echo $StreetAddress;?>"><br>
City: <input type="text" name="City" value="<?php echo $City;?>"><br>
State: <input type="text" name="State" value="<?php echo $State;?>"><br>
Comments: <input type="text" name="Comments" value="<?php echo $Comments;?>"><br>

<input type="submit" name="submit" value="Submit"><br>  
<span class="error"> <?php echo $NodeUIDErr;?></span>
<span class="error"> <?php echo $CrudOptionErr;?></span>
</form>

 </body>
</html>


