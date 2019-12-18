15 Dec 2019
000Webhost.com archived my Website around Oct 2019. They will only
unarchive it if I open a paid premium account. So I am attempting to convert
all of the php/mysql code to javascript.

To use the program after these conversions I must
1. Update my localhost sql database with any new family info.
2. Export the testtable as a json file.
3. Edit the json file by opening and deleting the headers resulting in an array [{...}]
4. Copy and paste the edited file into index.html


14 Feb 2019
/*
This is how to echo a html form using php. 
It seems to be you must use " quotation marks outside 
and ' single quotation marks inside
echo "<form action='myPhpFunctions.php' method='POST'>"; 
echo  "First Name:<input type='text' name='FirstNameEcho' value='$FirstName'/>"; 
echo  "Last Name:<input type='text' name='LastNameEcho' value='$LastName'/>"; 
echo  "<input type='submit' value='Submit'>";
echo "</form>"; 
*/


13 Feb 2019
/*
function crudAdd(){
	echo ("This is crudAdd");
}

function crudDelete(){
	echo ("This is crudDelete");
}

function crudEdit(){
	echo ("This is crudEdit");
}
function crudSelect(){
	echo ("This is crudSelect");
}
function crudUpdate(){
	echo ("This is crudUpdate");
	}
	*/


echo '<form action="" method="post">
      <input type="text" name="yourname" value="'.$name.'"<br>
     <input type="text" name="yourname" value="'.$code.'"<br> 
     <input type="text" name="yourname" value="'.$password.'"<br> 
</form>';


23 Jan 2019


From html I cannot call a php function in another php file. 

I think all the php functions run automatically when a page is loaded.

I can call a specific php function from another php function file thru
a javascript function. See index.php
Must have the php file included in index.php using
<?php include("myPhpFunctions.php"); ?>

The javascript function that calls the php function must be located in 
the head of the index.php file.
function callPhp1(){
	var result="<?php php1();?>";
	alert (result);
}

I can call a specific JS function on another page (myJsFunctions.js) but 
I must have script src in head of index.php
<script src="myJsFunctions.js"></script>




  UID and Descendant number is counted from 1... starting with Chaney number 1
and Grandpa number 15. The number progresses from top to bottom left to right.

When manually adding or deleting a family member in function populateDummyData
(main.js) the UID/Descendant number will change for all members downstream from
from the added/deleted family member and the family tree diagram will display
erroneous relationships.
Solution:
Create and MSExcel Sub DescendantUpdate
If family member is deleted all downstream family members DescendantNumber will 
be decreased by 1.
If family member is added all downstream family members DescendantNumber will 
be increased by 1.



When adding a new family member in function populateDummyData (main.js)
all node user ids (UID) of the newly added member and all node user ids (UID)
a number higher than the newly added UID no longer match the UID of the
SQL Database. The UID increases by the number of new family members 
added in function populateDummyData.

For example
Taj original UID in both the Family Tree and Database is 122.
I then add 1 new family member (Constance) Cynthia's daughter.
Contance new UID is 122 as assigned by the Java Code.
All Old UID starting at 122 are now increased by 1.
Taj original UID 122 now becomes 123.
UID 123 becomes 124 
And so forth until the last UID.

Solution: Create a function which updates the SQL Database 
with the same UID as the function getIDandName of function initialize in
main.js

The new function MatchUidJavaSql()
Var NewUID = UID of new family member.
Var NumberNewFamilyMembersAdded
Sort SQL table by UID high to low.
Loop thru each UID until UID = NewUID
UID = UID + Number of new family members added.

function populateDummyData(tree) --- This creates Chaney
tree.addChild(TREE.create("Sally")); --- This adds Chaney's children.
         It's repeated for each of Chaney's children.
//William Thomas family Grandpa's father
tree.getChildAt() is counted from 0.... starting with Sally
	tree.getChildAt(3).addChild(TREE.create("John"));

	//Grandpa Joe Thomas family 
	tree.getDescendent() is counted from 1... starting with Chaney number 1
	        and Grandpa number 15
  tree.getDescendent(15).addChild(TREE.create("Gladys"));
  

