<?php
 	//000WebHost Settings
$servername = "localhost";
$username = "id4184148_localhost";
$password = "We135711!";
$dbname = "id4184148_testdatabase";


//connect to database
$conn = @mysqli_connect($servername, $username, $password, $dbname) or die("Couldn't connet to database.");

//echo "Connected successfully";

 $NodeUID = "1";
 //$sql = "SELECT * FROM testtable WHERE NodeUID = '".$NodeUID."'";
	$sql = "SELECT * FROM testtable";
	$result = mysqli_query($conn,$sql);
	
	$rowcount = mysqli_num_rows($result);

 if(!$result){ echo "Couldn't execute the query"; die();}
else{
 //creates an empty array to hold data
 $data = array();
  while($row = mysqli_fetch_assoc($result)){
    $data[]=$row;
	  }
}

//  echo json_encode($data, JSON_PRETTY_PRINT);
//it will create file results.json with writing mode.
//you can read more about file handling in PHP here. 
//$fp = fopen('results.json', 'w');
//json_enconde($array, $options(optional) is the method to convert array into JSON
//$myObj = fwrite($fp, json_encode($data, JSON_PRETTY_PRINT));
//close the file
//fclose($fp);

$myObj = json_encode($data);
//$myObj = readfile("results.json");
echo $myObj;
//echo $data;
?>
