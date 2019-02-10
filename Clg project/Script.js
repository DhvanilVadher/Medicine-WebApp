function validateForm()
{
	"use strict";
	var x=document.forms["myForm1"]["adid"].value;
	var y=document.forms["myForm1"]["adpwd"].value;
	if(x==="" || y==="" )
	{
		alert("Id and passwoed must be filled out");
		return false;
	}
	else
	{
		window.open("MainSite.html");
		return true;
	}
}
var p=0,q="",r=1;
var medname,medcost,isGov,ContectNo,LicenceNO;
function validateForm2(){
	"use strict";
	var x = document.forms["myForm1"]["adid"].value;
	var y = document.forms["myForm1"]["adpwd"].value;
	if(x==="" || y==="" )
		{
		alert("Id and passwoed must be filled out");
		return false;
		}
	else if((x==="Dhvanil222" && y==="DCV!@#") ||  (x==="dh" && y==="DC"))
	{
		window.open("MainSite.html");
		return true;
	}
	else{
		
		alert("Amind id and password must be Right");
		return false;
	}
}
function ThisFunc()
{
	"use strict";
	console.log("dfgf");
	medname=prompt("Enter Medicine name");
	if(medname!==null){
	medcost=(prompt("Enter Medicine cost"))*1;
	}
	if(medcost!==0){
	LicenceNO = prompt("Enter Licence no");
	}
	document.getElementById(String(r)).addEventListener('click',()=>{
		thi(medcost, String(medname));
	});
	document.getElementById(String(r)).innerHTML=medcost+"   "+ medname;
//	document.getElementById(String(r)).value=medcost+"   "+ medname;
	document.getElementById(String(r)).style.display='block';
	r++;
}
function thi(valuebutton,medname)
{
	"use strict";
	p=p+valuebutton;
    q=q+"you have bought "+medname+"<br>";
		document.getElementById("hup").innerHTML=q+"your total is "+p;
	return p;
}	
function Bought(){
	"use strict";
	window.alert("You have bought all medicines worth ruppes "+p);
}