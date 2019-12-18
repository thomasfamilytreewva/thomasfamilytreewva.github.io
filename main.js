//comment
//15 jul 2019
var maintree;
var mwcurrNode;
var mwcurrNodei;
var mwcontext;
var mwtree;
var mwnodes;
var mwoldNode = "";
var mwcurrNodeCheck = "";
var mwcurrNodei = "";
var currNodeuid = "";
var mwcurrNodeuid = "";
var mwOlduid = "";
var mwpreChildrenYesNo = "";
var curruid = "";
var displayFamilyMemberInfoMWMessage = "";
var mwChildsName = "";
var mwChildsNamePlus = "";
var displayAncestors = "";
var arrayJsTreeData;



	


 
//var mwnumofchildren
//currNode = "";
function initialize() { 
		
	
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
		
	
        tree = TREE.create("Chaney"),
        nodes = TREE.getNodeList(tree),
        currNode = tree,
        add_child_button = document.getElementById("add_child"),
        remove_node = document.getElementById("remove_node"),
        zoom_in = document.getElementById("zoom_in"),
        zoom_out = document.getElementById("zoom_out");

    canvas.addEventListener("click", function (event) {
        var x = event.pageX - canvas.offsetLeft,
            y = event.pageY - canvas.offsetTop;
			
				
        for (var i = 0; i < nodes.length; i++) {
            if (x > nodes[i].xPos && y > nodes[i].yPos && x < nodes[i].xPos + nodes[i].width && y < nodes[i].yPos + nodes[i].height) {
                currNode.selected(false);
                nodes[i].selected(true);
                currNode = nodes[i];
				
				
				TREE.clear(context);
                TREE.draw(context, tree);
				curruid = currNode.uid
					mwcontext = context
				mwtree = tree;
				mwnodes = nodes;
				mwcurrNode = currNode;
				mwcurrNodeCheck = currNode;
				mwcurrNodei = i;
				mwcurrNodeiCheck = i;
				mwnodes = nodes;
	
 
	//getIdAndName();
	//mwTreeData();
	  descendants();
				mwfunction();
				displayFamilyMemberInfoMW();
				break;
            }
        }
   
   }, false);
   
		
   

    canvas.addEventListener("mousemove", function (event) {
        var x = event.pageX - canvas.offsetLeft,
            y = event.pageY - canvas.offsetTop;
        for (var i = 0; i < nodes.length; i++) {
            if (x > nodes[i].xPos && y > nodes[i].yPos && x < nodes[i].xPos + nodes[i].width && y < nodes[i].yPos + nodes[i].height) {
                canvas.style.cursor = "pointer";
                break;
            }
            else {
                canvas.style.cursor = "auto";
            }
        }
    }, false);
    add_child_button.addEventListener('click', function (event) {
        currNode.addChild(TREE.create("Child of " + currNode.text));
        TREE.clear(context);
        nodes = TREE.getNodeList(tree);
        TREE.draw(context, tree);
    }, false);
    remove_node.addEventListener('click', function (event) {
        TREE.destroy(currNode);
        TREE.clear(context);
        nodes = TREE.getNodeList(tree);
        TREE.draw(context, tree);
    }, false);
    zoom_in.addEventListener('click', function (event) {
        for (var i = 0; i < nodes.length; i++){
            nodes[i].width *= 1.05;
            nodes[i].height *= 1.05;
        }
        TREE.config.width *= 1.05;
        TREE.config.height *= 1.05;
        TREE.clear(context);
        TREE.draw(context, tree);
    }, false);
    zoom_out.addEventListener('click', function (event) {
        for (var i = 0; i < nodes.length; i++){
           nodes[i].width = nodes[i].width * 0.95;
           nodes[i].height = nodes[i].height * 0.95;
			
        }
        TREE.config.width *= 0.95;
        TREE.config.height *= 0.95;
        TREE.clear(context);
        TREE.draw(context, tree);
    }, false);
    context.canvas.width = document.getElementById("main").offsetWidth;
    context.canvas.height = document.getElementById("main").offsetHeight;
    populateDummyData(tree);
    nodes = TREE.getNodeList(tree);
    TREE.draw(context, tree);
    maintree = tree;
	
	/**/
	scrollWin();
	function scrollWin() {
    window.scrollTo(3300, 0);
	}
	
	
}

function updatePage(tree) {
	mwfunction();
	
    var info_panel = document.getElementById("information_panel");
    var header = document.getElementById("header");
   // header.innerHTML = "Thomas Family";
    var info_panel_html = "<ul>";
    info_panel_html += "<li>First Name: " +tree.text +"</li>";
    info_panel_html += "<li>Last Name: " +"Thomas" +"</li>";
    info_panel_html += "</ul>";
    info_panel.innerHTML = info_panel_html;
	
	
}




function populateDummyData(tree) {

tree.selected(true);
//updatePage(tree);
//Chaney family Grandpa's grandmother
tree.addChild(TREE.create("Sally"));
tree.addChild(TREE.create("John"));
tree.addChild(TREE.create("Mary"));
tree.addChild(TREE.create("William"));
tree.addChild(TREE.create("Lucy"));

//William Thomas family Grandpa's father
tree.getChildAt(3).addChild(TREE.create("John"));
tree.getChildAt(3).addChild(TREE.create("George"));
tree.getChildAt(3).addChild(TREE.create("Mamie"));
tree.getChildAt(3).addChild(TREE.create("Cornnelia"));
tree.getChildAt(3).addChild(TREE.create("Bessie"));
tree.getChildAt(3).addChild(TREE.create("James"));
tree.getChildAt(3).addChild(TREE.create("Sallie"));
tree.getChildAt(3).addChild(TREE.create("William"));
tree.getChildAt(3).addChild(TREE.create("Joe Thomas"));
tree.getChildAt(3).addChild(TREE.create("Daniel"));


//Grandpa Joe Thomas family  
tree.getDescendent(15).addChild(TREE.create("Gladys"));
tree.getDescendent(15).addChild(TREE.create("Lillie"));
tree.getDescendent(15).addChild(TREE.create("Joseph"));
tree.getDescendent(15).addChild(TREE.create("Lucille"));
tree.getDescendent(15).addChild(TREE.create("Ruth"));
tree.getDescendent(15).addChild(TREE.create("James"));
tree.getDescendent(15).addChild(TREE.create("Clara"));
tree.getDescendent(15).addChild(TREE.create("John"));

//Gladys Family
tree.getDescendent(17).addChild(TREE.create("Dora"));
tree.getDescendent(17).addChild(TREE.create("Don"));
tree.getDescendent(17).addChild(TREE.create("Juanita"));

//Lillie Family
tree.getDescendent(18).addChild(TREE.create("Wyatt"));
tree.getDescendent(18).addChild(TREE.create("Kay"));
tree.getDescendent(18).addChild(TREE.create("Constance"));
tree.getDescendent(18).addChild(TREE.create("Angela"));
tree.getDescendent(18).addChild(TREE.create("Sabirina"));
tree.getDescendent(18).addChild(TREE.create("Sheila"));
tree.getDescendent(18).addChild(TREE.create("Richard"));

//Ruth family
tree.getDescendent(21).addChild(TREE.create("Thomas Jr"));
tree.getDescendent(21).addChild(TREE.create("Sheryl"));
tree.getDescendent(21).addChild(TREE.create("Michael"));
tree.getDescendent(21).addChild(TREE.create("David"));

tree.getDescendent(22).addChild(TREE.create("Angela"));
tree.getDescendent(22).addChild(TREE.create("Anita"));
tree.getDescendent(22).addChild(TREE.create("Michael"));

tree.getDescendent(23).addChild(TREE.create("Phylis"));
tree.getDescendent(23).addChild(TREE.create("Belinda"));

//Ned family 
tree.getDescendent(24).addChild(TREE.create("Juanda"));
tree.getDescendent(24).addChild(TREE.create("Yolanda"));
tree.getDescendent(24).addChild(TREE.create("John Jr"));
tree.getDescendent(24).addChild(TREE.create("Tony")); 
tree.getDescendent(24).addChild(TREE.create("Elwin"));



//Dora family
tree.getDescendent(25).addChild(TREE.create("Bruce Jr"));
tree.getDescendent(25).addChild(TREE.create("Cheryl"));
tree.getDescendent(25).addChild(TREE.create("James"));
tree.getDescendent(25).addChild(TREE.create("Lisa"));
tree.getDescendent(25).addChild(TREE.create("Tony"));
 
//Don family
tree.getDescendent(26).addChild(TREE.create("Donna"));
tree.getDescendent(26).addChild(TREE.create("Debbie"));
tree.getDescendent(26).addChild(TREE.create("Danita"));

//Peaty family
tree.getDescendent(27).addChild(TREE.create("Benny"));
tree.getDescendent(27).addChild(TREE.create("James"));
tree.getDescendent(27).addChild(TREE.create("Kim"));

//Melvin family
tree.getDescendent(28).addChild(TREE.create("Michelle"));
tree.getDescendent(28).addChild(TREE.create("Sherisse"));

//Kay Francis family
tree.getDescendent(29).addChild(TREE.create("Antonio"));
tree.getDescendent(29).addChild(TREE.create("Thomas"));

//Connie family
tree.getDescendent(30).addChild(TREE.create("James Jr"));
tree.getDescendent(30).addChild(TREE.create("Cynthia"));

//Angela family
tree.getDescendent(31).addChild(TREE.create("April"));
tree.getDescendent(31).addChild(TREE.create("Kimmey"));
tree.getDescendent(31).addChild(TREE.create("Carl"));

//Sabrina Lulu family
tree.getDescendent(32).addChild(TREE.create("Wayneman"));
tree.getDescendent(32).addChild(TREE.create("Richard"));
tree.getDescendent(32).addChild(TREE.create("Monica"));
tree.getDescendent(32).addChild(TREE.create("Tamara"));

//Sheila Tbaby family
tree.getDescendent(33).addChild(TREE.create("Angel"));
tree.getDescendent(33).addChild(TREE.create("Jack"));
tree.getDescendent(33).addChild(TREE.create("Benjamin Jr"));

//Richard Cokie family
tree.getDescendent(34).addChild(TREE.create("Ricardo"));
tree.getDescendent(34).addChild(TREE.create("Kaylyn"));
tree.getDescendent(34).addChild(TREE.create("Kennedy"));

//Tom family
tree.getDescendent(35).addChild(TREE.create("Thomas 3rd"));
tree.getDescendent(35).addChild(TREE.create("Shaughn"));

//Sheryl family
tree.getDescendent(36).addChild(TREE.create("Stacy"));
tree.getDescendent(36).addChild(TREE.create("Monique"));

//Anita family
tree.getDescendent(40).addChild(TREE.create("Jessica"));

//Michael Thomas family
tree.getDescendent(41).addChild(TREE.create("Michael Jr"));
tree.getDescendent(41).addChild(TREE.create("Erica"));

//Denise harris Coe family
tree.getDescendent(42).addChild(TREE.create("Christian"));

//Binky harris family
tree.getDescendent(43).addChild(TREE.create("Markel"));

//Kim Thomas family
tree.getDescendent(44).addChild(TREE.create("Tawanda"));
tree.getDescendent(44).addChild(TREE.create("Kristopher"));

//Yolanda Teenie family
//tree.getDescendent(45).addChild(TREE.create("Josiah"));


//John Jr family
tree.getDescendent(46).addChild(TREE.create("Derrick"));
tree.getDescendent(46).addChild(TREE.create("Brandon"));
tree.getDescendent(46).addChild(TREE.create("Candice"));
tree.getDescendent(46).addChild(TREE.create("Joseph"));

//Tony family
tree.getDescendent(47).addChild(TREE.create("Teven"));
tree.getDescendent(47).addChild(TREE.create("Katurah"));

//Elwin family
tree.getDescendent(48).addChild(TREE.create("Latosha"));
tree.getDescendent(48).addChild(TREE.create("Elwin Jr"));
tree.getDescendent(48).addChild(TREE.create("Donte"));
tree.getDescendent(48).addChild(TREE.create("Santana"));

//Peo family
tree.getDescendent(49).addChild(TREE.create("Melody"));
tree.getDescendent(49).addChild(TREE.create("Bruce 3rd"));
tree.getDescendent(49).addChild(TREE.create("Damarcus"));

//Tony family
tree.getDescendent(51).addChild(TREE.create("Victoria"));
tree.getDescendent(51).addChild(TREE.create("Olivia"));

//Lisa Dallas family
tree.getDescendent(52).addChild(TREE.create("Brittany"));
tree.getDescendent(52).addChild(TREE.create("Anthony"));
tree.getDescendent(52).addChild(TREE.create("Donte"));

//Tony Dallas family
tree.getDescendent(53).addChild(TREE.create("Brandon"));
tree.getDescendent(53).addChild(TREE.create("Marcus"));
tree.getDescendent(53).addChild(TREE.create("3rd child"));

//Donna Hodge family
tree.getDescendent(54).addChild(TREE.create("Neaisha"));

//Danita Hodge family
tree.getDescendent(56).addChild(TREE.create("Brandon"));

//Benny Hodge family
tree.getDescendent(57).addChild(TREE.create("Daniel"));
tree.getDescendent(57).addChild(TREE.create("Tyree"));

//James Hodge family
tree.getDescendent(58).addChild(TREE.create("Marquis"));

//Kim Hodge family
tree.getDescendent(59).addChild(TREE.create("Kayden"));
tree.getDescendent(59).addChild(TREE.create("Jayden"));

//Michelle family
tree.getDescendent(60).addChild(TREE.create("Devon"));

//Sherisse Mel's other daughter family
tree.getDescendent(61).addChild(TREE.create("Achinae"));
tree.getDescendent(61).addChild(TREE.create("Wayne"));

//James Cunningham Jr family
  tree.getDescendent(64).addChild(TREE.create("Sheneka"));
   tree.getDescendent(64).addChild(TREE.create("Jamesha"));

//Cynthia Cunningham family
tree.getDescendent(65).addChild(TREE.create("Constance"));

//Benjamin Footes (Tbaby's son) family
tree.getDescendent(75).addChild(TREE.create("Daysha"));
tree.getDescendent(75).addChild(TREE.create("Benjamin 3rd"));

//Marshall family
tree.getDescendent(79).addChild(TREE.create("Taj"));
tree.getDescendent(79).addChild(TREE.create("Tariq"));
tree.getDescendent(79).addChild(TREE.create("Taiquon"));

//Monique family
tree.getDescendent(82).addChild(TREE.create("Angela"));
tree.getDescendent(82).addChild(TREE.create("Brooklyn"));
tree.getDescendent(82).addChild(TREE.create("Stacy"));
tree.getDescendent(82).addChild(TREE.create("Lenox"));

//Jessica family
tree.getDescendent(83).addChild(TREE.create("Michael Jr"));

//Tawanda family
tree.getDescendent(88).addChild(TREE.create("Cederick"));
tree.getDescendent(88).addChild(TREE.create("Ananda"));

//Kristopher family
tree.getDescendent(89).addChild(TREE.create("Caleb"));
tree.getDescendent(89).addChild(TREE.create("Amami"));
tree.getDescendent(89).addChild(TREE.create("Arionna"));
tree.getDescendent(89).addChild(TREE.create("Kristolyn"));
tree.getDescendent(89).addChild(TREE.create("Chaun"));
tree.getDescendent(89).addChild(TREE.create("Jayden"));

//Derrick family
tree.getDescendent(90).addChild(TREE.create("Hannah"));
tree.getDescendent(90).addChild(TREE.create("Jaydon"));
tree.getDescendent(90).addChild(TREE.create("Aiden"));
tree.getDescendent(90).addChild(TREE.create("Addison"));
tree.getDescendent(90).addChild(TREE.create("Alania"));
tree.getDescendent(90).addChild(TREE.create("Asher"));

//Brandon family
tree.getDescendent(91).addChild(TREE.create("Jackson"));
tree.getDescendent(91).addChild(TREE.create("Jordan"));

//Joe family
tree.getDescendent(93).addChild(TREE.create("Joseph"));
tree.getDescendent(93).addChild(TREE.create("Cohen"));
tree.getDescendent(93).addChild(TREE.create("Lillie"));
tree.getDescendent(93).addChild(TREE.create("Gracie"));


//Latosha family
tree.getDescendent(96).addChild(TREE.create("Kyran"));
tree.getDescendent(96).addChild(TREE.create("Kaiden"));

//Elwin Jr family
tree.getDescendent(97).addChild(TREE.create("Child1"));
tree.getDescendent(97).addChild(TREE.create("Child2"));
tree.getDescendent(97).addChild(TREE.create("Child3"));
tree.getDescendent(97).addChild(TREE.create("Child4"));

//Melody family
tree.getDescendent(100).addChild(TREE.create("Breasha"));

//Bruce 3rd family
tree.getDescendent(101).addChild(TREE.create("Bruce 4th"));

//Victoria family
tree.getDescendent(103).addChild(TREE.create("Jaiden"));
tree.getDescendent(103).addChild(TREE.create("Amiwah"));
tree.getDescendent(103).addChild(TREE.create("Jayce"));

//Brandon (Danita's Sons) family
tree.getDescendent(112).addChild(TREE.create("Angel"));
tree.getDescendent(112).addChild(TREE.create("Lizzie"));
tree.getDescendent(112).addChild(TREE.create("Cameron"));

//Cedrick (Kim's granddaughter) family
tree.getDescendent(134).addChild(TREE.create("Kellan"));

//Ananda (Kim's grandson) family
tree.getDescendent(135).addChild(TREE.create("Kynlee"));
}


function mwfunction(){
	if (mwOlduid == curruid) {
		//console.log ("Same Node");
		return;
	}
	
	ancestors(); //
	
	console.log (mwcurrNode);
	console.log ("Family member's name is " + mwcurrNode.text + ".");
	console.log (mwcurrNode.text + " has " + mwcurrNode.children.length + " children.");
	//console.log (mwcurrNode.children[0].bgcolor);
	//mwcurrNode.children[0].setbgColor("red");//
	//mwnumofchildren = mwcurrNode.children.length;//
	
	
	
	//Start if previous member has children then sets background to white
	if (mwpreChildrenYesNo == "Yes") {
		//console.log = "ok";
		var i = 0;
		for (i = 0; i < mwOldNode.children.length; i++) {
    mwOldNode.children[i].setbgColor("green");
	mwOldNode.children[i].setColor("black");
}

mwcurrNode.setbgColor("red");
//var to display message for member who has no children.
//displayFamilyMemberInfoMWMessage = ("Family member's name is " + mwcurrNode.text + 
//"." + "\n" + mwcurrNode.text + " has no children.");


TREE.clear(mwcontext);
                TREE.draw(mwcontext, mwtree);
				mwOldNode = mwcurrNode;
				mwOlduid = curruid;
	
	}
	//End if previous member has children then sets background to white

//Start if else current member has children 
		if (mwcurrNode.children.length > 0) {
			
			//Start for block sets backgroud color to red for current member's children
	var i = 0;
    for (i = 0; i < mwcurrNode.children.length; i++) {
    mwcurrNode.children[i].setbgColor("red");
	mwChildsName = mwcurrNode.children[i].text + " ";
	mwChildsNamePlus = mwChildsNamePlus + mwChildsName;
}
//End for block

var child = "";

if (mwcurrNode.children.length == 1) {
child = "child";
}else{
child = "children";
}	

//var to display message for member who has children.
displayFamilyMemberInfoMWMessage = (mwcurrNode.text + " has " + mwcurrNode.children.length + " " + child + ". \n");
displayFamilyMemberInfoMWMessage = displayFamilyMemberInfoMWMessage + mwChildsNamePlus;
mwChildsNamePlus = "";
	TREE.clear(mwcontext);
                TREE.draw(mwcontext, mwtree);
				mwpreChildrenYesNo = "Yes";
				mwOldNode = mwcurrNode;
				mwOlduid = curruid;
	}else{
		mwpreChildrenYesNo = "No";
		mwOldNode = mwcurrNode;
		mwOlduid = curruid;
//var to display message for member who has no children.		
		displayFamilyMemberInfoMWMessage = (mwcurrNode.text + " has no children.");
	
	}
	
	

	
}


	

   
function displayFamilyMemberInfoMW(){
	if (mwcurrNode.text == "Chaney"){
		alert (displayFamilyMemberInfoMWMessage + "\n \n" + descendantsDisplay);
		//setTimeout(function(){alert (displayFamilyMemberInfoMWMessage + "\n \n" + descendantsDisplay);},100);
displayFamilyMemberInfoMWMessage = "";
displayAncestors = "";
descendantsDisplay = "";
	}else{

//This Ori Alert worked but would fire before background color changed
//alert (displayAncestors  + "\n" + displayFamilyMemberInfoMWMessage + "\n" +  descendantsDisplay);
//This Timeout was reommended --- https://stackoverflow.com/questions/41936043/javascript-alert-supersedes-preceding-code
setTimeout(function() {alert(displayAncestors  + "\n" + displayFamilyMemberInfoMWMessage + "\n" +  descendantsDisplay);},200);
//displayFamilyMemberInfoMWMessage = "";
//displayAncestors = "";
}
}



function getIdAndName(){
	
var idNameArray, text, arrayLen, i;
idNameArray = [];
arrayLen = idNameArray.length;
arrayLen = idNameArray.length;
	
//displays Node Number, Node ID and Name of each member on Family Tree
 var results = ""; 
				var stridname1 = ("");
				for (var i = 0; i < mwnodes.length; i++) {
					var nodeidname = (i);
					var ididname = (mwnodes[i].uid);
					var nameidname = (mwnodes[i].text);
					var stridname = ("ID " + ididname + "   Node Number " + nodeidname + "    Name " + nameidname + "\n");
							
					
					stridname1 = (stridname1 + "\n" + stridname);
					console.log (stridname1);
					idNameArray[idNameArray.length] = stridname;
								
					}
				
				    results = "<table><tr><th>Node ID</th><th>Node Number</th><th>Node Name</th></tr>";
					
					
					
    
    
 
					
					//for (var i=0; i<idNameArray.length; i=i+2) { //###NOTICE THE CHANGE FROM i++ TO     i=i+2               
                    for (var i=0; i<idNameArray.length; i++) {
    results += "<tr><td>" + mwnodes[i].uid + "</td><td>" + i + "</td><td>" + mwnodes[i].text + "</td></tr>";  
   // results += "<td>" + idNameArray[i+1] + "</td></tr>";  
}

results += "<tr><td colspan=1></td></tr>";
results += "<table><br /> <br />";

 var div = document.getElementById("associatedAssets");
    div.innerHTML = results;    
			}      


		


function getIdAndNameORI(){
	
		var idNameArray, text, arrayLen, i;
idNameArray = [];
arrayLen = idNameArray.length;
arrayLen = idNameArray.length;
	
//displays ID and Name of all members on Family Tree
 var results = ""; 
				var stridname1 = ("");
				for (var i = 0; i < mwnodes.length; i++) {
					var nodeidname = (i);
					var ididname = (mwnodes[i].uid);
					var nameidname = (mwnodes[i].text);
					var stridname = ("ID " + ididname + "   Node Number " + nodeidname + "    Name " + nameidname + "\n");
							
					
					stridname1 = (stridname1 + "\n" + stridname);
					console.log (stridname1);
					idNameArray[idNameArray.length] = stridname;
								
					}
				
				    results = "<table>";
					//for (var i=0; i<idNameArray.length; i=i+2) { //###NOTICE THE CHANGE FROM i++ TO     i=i+2               
                    for (var i=0; i<idNameArray.length; i++) {
    results += "<tr><td>" + idNameArray[i] + "</td>";  
   // results += "<td>" + idNameArray[i+1] + "</td></tr>";  
}

results += "<tr><td colspan=1></td></tr>";
results += "<table><br /> <br />";

 var div = document.getElementById("associatedAssets");
    div.innerHTML = results;    
			}      




function ancestors(){
	
	
/*This Ancestry code will get selected member's ancestry (parent, grandparent, 
until it reaches Chaney

//var ididname = (mwnodes[i].uid);
//var nameidname = (mwnodes[i].text);
//the i of node[i] is different from uid

*/

try{
	parentName = (mwcurrNode.parentTree.text);
	displayAncestors = ("Family member's name is " + mwcurrNode.text + ".\n" + mwcurrNode.text + "'s Parent name is " + parentName + " \n");
}catch(err){
	//alert (err);
}
	
	try{
	grandParentName = (mwcurrNode.parentTree.parentTree.text);
	displayAncestors = ("Family member's name is " + mwcurrNode.text + ".\n" + mwcurrNode.text + "'s Parent name is " + parentName + " \n"
	                    + "Grand Parent name is " + grandParentName + " \n");
}catch(err){
	//alert (err);
}

	try{
	greatGrandParentName = (mwcurrNode.parentTree.parentTree.parentTree.text);
	displayAncestors = ("Family member's name is " + mwcurrNode.text + ".\n" + mwcurrNode.text + "'s Parent name is " + parentName + " \n"
	                    + "Grand Parent name is " + grandParentName + " \n"
						 + "Great Grand Parent name is " + greatGrandParentName + " \n");
}catch(err){
	//alert (err);
}
	

	try{
	greatGreatGrandParentName = (mwcurrNode.parentTree.parentTree.parentTree.parentTree.text);
   displayAncestors = ("Family member's name is " + mwcurrNode.text + ".\n" + mwcurrNode.text + "'s Parent name is " + parentName + " \n"
	                    + "Grand Parent name is " + grandParentName + " \n"
						 + "Great Grand Parent name is " + greatGrandParentName + " \n"
						 + "Great Great Grand Parent name is " + greatGreatGrandParentName + " \n");
}catch(err){
	//alert (err);
}

	 try{
	greatGreatGreatGrandParentName = (mwcurrNode.parentTree.parentTree.parentTree.parentTree.parentTree.text);
	displayAncestors = ("Family member's name is " + mwcurrNode.text + ".\n" + mwcurrNode.text + "'s Parent name is " + parentName + " \n"
	                    + "Grand Parent name is " + grandParentName + " \n"
						 + "Great Grand Parent name is " + greatGrandParentName + " \n"
						 + "Great Great Grand Parent name is " + greatGreatGrandParentName + " \n"
						  + "Great Great Great Grand Parent name is " + greatGreatGreatGrandParentName + " \n");
}catch(err){
	//alert (err);
}

try 
{greatGreatGreatGreatGrandParentName = (mwcurrNode.parentTree.parentTree.parentTree.parentTree.parentTree.parentTree.text);
displayAncestors = ("Family member's name is " + mwcurrNode.text + ".\n" + mwcurrNode.text + "'s Parent name is " + parentName + " \n"
	                    + "Grand Parent name is " + grandParentName + " \n"
						 + "Great Grand Parent name is " + greatGrandParentName + " \n"
						 + "Great Great Grand Parent name is " + greatGreatGrandParentName + " \n"
						  + "Great Great Great Grand Parent name is " + greatGreatGreatGrandParentName + " \n"
						  + "Great Great Great Great Grand Parent name is " + greatGreatGreatGreatGrandParentName + " \n");
}catch(err){
	//alert (err);
}


try 
{greatGreatGreatGreatGreatGrandParentName = (mwcurrNode.parentTree.parentTree.parentTree.parentTree.parentTree.parentTree.parentTree.text);
displayAncestors = ("Family member's name is " + mwcurrNode.text + ".\n" + mwcurrNode.text + "'s Parent name is " + parentName + " \n"
	                    + "Grand Parent name is " + grandParentName + " \n"
						 + "Great Grand Parent name is " + greatGrandParentName + " \n"
						 + "Great Great Grand Parent name is " + greatGreatGrandParentName + " \n"
						  + "Great Great Great Grand Parent name is " + greatGreatGreatGrandParentName + " \n"
						  + "Great Great Great Great Grand Parent name is " + greatGreatGreatGreatGrandParentName + " \n"
						  + "Great Great Great Great Great Grand Parent name is " + greatGreatGreatGreatGreatGrandParentName + " \n");
}catch(err){
	//alert (err);
}


}
/*Ancestry code ends here*/	



/*This Descendants code starts here. It will get selected member's 
children, grandchildren, great....*/
var descendantsDisplay = "";

var cUid;
var numberOfGC = 0, numberOfGCTotal = 0;
var numberOfGGC = 0, numberOfGGCTotal = 0;
var numberOfGGGC = 0, numberOfGGGCTotal = 0;
var numberOfGGGGC = 0, numberOfGGGGCTotal = 0;
var numberOfGGGGGC = 0, numberOfGGGGGCTotal = 0;
var numberOfGGGGGGC = 0, numberOfGGGGGGCTotal = 0;
var numberOfGGGGGGGC = 0, numberOfGGGGGGGCTotal = 0;
			
function descendants(){
		
cUid = "";
gcUid = "";
ggcUid = "";
gggcUid = "";
numberOfGC = 0;
numberOfGGC = 0;
numberOfGGGC = 0;
numberOfGGGGC = 0;
numberOfGCTotal = 0;
numberOfGGCTotal = 0;
numberOfGGGCTotal = 0;
numberOfGGGGCTotal = 0;
numberOfGGGGGCTotal = 0;
arrayDescendants = [];
arrayDescendantsLen = mwcurrNode.children.length;

				//Total GC
				for (var ic = 0; ic < mwcurrNode.children.length; ic++) {
					cUid = mwcurrNode.children[ic].uid;
					cName = mwcurrNode.children[ic].text;
					
//Total GGC					
for (var igc = 0; igc < mwcurrNode.children[ic].children.length; igc++) {
	gcUid = mwcurrNode.children[ic].children[igc].uid;
	gcName = mwcurrNode.children[ic].children[igc].text;
	
	//Total GGGC
	for (var iggc = 0; iggc < mwcurrNode.children[ic].children[igc].children.length; iggc++) {
	ggcUid = mwcurrNode.children[ic].children[igc].children[iggc].uid;
	ggcName = mwcurrNode.children[ic].children[igc].children[iggc].text;
	
	
	//Total GGGGC
	for (var igggc = 0; igggc < mwcurrNode.children[ic].children[igc].children[iggc].children.length; igggc++) {
	gggcUid = mwcurrNode.children[ic].children[igc].children[iggc].children[igggc].uid;
	gggcName = mwcurrNode.children[ic].children[igc].children[iggc].children[igggc].text;
	
	//Total GGGGGC
	for (var iggggc = 0; iggggc < mwcurrNode.children[ic].children[igc].children[iggc].children[igggc].children.length; iggggc++) {
	ggggcUid = mwcurrNode.children[ic].children[igc].children[iggc].children[igggc].children[iggggc].uid;
	gggcName = mwcurrNode.children[ic].children[igc].children[iggc].children[igggc].children[iggggc].text;
	numberOfGGGGGC = mwcurrNode.children[ic].children[igc].children[iggc].children[igggc].children[iggggc].children.length;
	numberOfGGGGGCTotal = numberOfGGGGGCTotal + numberOfGGGGGC;
}	
	
	
	numberOfGGGGC = mwcurrNode.children[ic].children[igc].children[iggc].children[igggc].children.length;
	numberOfGGGGCTotal = numberOfGGGGCTotal + numberOfGGGGC;
}	
	
	numberOfGGGC = mwcurrNode.children[ic].children[igc].children[iggc].children.length;
	numberOfGGGCTotal = numberOfGGGCTotal + numberOfGGGC;
}					
	
	
	
	numberOfGGC = mwcurrNode.children[ic].children[igc].children.length;
	numberOfGGCTotal = numberOfGGCTotal + numberOfGGC;
}					
					
					
					numberOfGC = mwcurrNode.children[ic].children.length;
					numberOfGCTotal = numberOfGCTotal + numberOfGC;
				}
				
				childrenTotal = mwcurrNode.children.length;
				descendantsTotal = childrenTotal + numberOfGCTotal + numberOfGGCTotal + numberOfGGGCTotal + numberOfGGGGCTotal + numberOfGGGGGCTotal + numberOfGGGGGGCTotal + + numberOfGGGGGGGCTotal
				
				descendantsDisplay = (numberOfGCTotal + " grandchildren " + "\n"
				+ numberOfGGCTotal + " great grandchildren " + "\n"
				+ numberOfGGGCTotal + " GG grandchildren " + "\n"
				+ numberOfGGGGCTotal + " GGG grandchildren " + "\n"
				+ numberOfGGGGGCTotal + " GGGG grandchildren " + "\n"
				+ "Total Descendants " + descendantsTotal + "\n");

	}
	/*This Descendants code ends here*/
	

	
/*	This for block is not computing Totals correctly			
					for (var igc = 0; igc < mwcurrNode.children[ic].children.length; igc++) {
					gcUid = mwcurrNode.children[ic].children[igc].uid;
					gcName = mwcurrNode.children[ic].children[igc].text;
					numberOfGGC = mwcurrNode.children[ic].children.length;
					numberOfGGCTotal = numberOfGGCTotal + numberOfGGC;
					}
	*/
	
	

//WIP Inserts/Updates DB NodeUID FirstName fields in mySqlDb
function mwTreeData() { 
//var arrayJsTreeData;
arrayJsTreeData = [];
var stridname1 = ("");
for (var i = 0; i < mwnodes.length; i++) {
//for (var i = 90; i < 33; i++) {
var nodeNumber = (i);
var nodeUID = (mwnodes[i].uid);
arrayJsTreeData[arrayJsTreeData.length] = nodeUID;
var nodeNumber = (i);
arrayJsTreeData[arrayJsTreeData.length] = nodeNumber;
var nodeName = (mwnodes[i].text);
arrayJsTreeData[arrayJsTreeData.length] = nodeName;

}

var myJSON = JSON.stringify(arrayJsTreeData);
//var obj, dbParam, xmlhttp;
//obj = { "table":"customers", "limit":10 };
//obj = myJSON;
//dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
document.getElementById("demo").innerHTML = this.responseText;
}
};
xmlhttp.open("GET", "connectMySqlDb.php?x=" + myJSON, true);
xmlhttp.send();
}	

			



