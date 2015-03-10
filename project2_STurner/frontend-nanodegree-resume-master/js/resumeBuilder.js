
var name = "Shaun D. Turner";
var formattedName = HTMLheaderName.replace("%data%", name);
//$("#main").append(formattedName); This causes my name to appear twice.

var role =  "Application Administrator";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/* 	var bio = {
		"name" : "Shaun D. Turner",
		"role" : "Application Administrator",
		"contacts" : {
		"office": "734-738-2641",
		"mobile" :  "616-951-2138",
		"email": "shaun.cell74@gmail.com",
		"github": "st2641"
		},
		"welcomeMessage" :  "Welcome to my interactive resume",
		"skills" :  [".sh", ".ksh", "SQL", "Perl", "HTML", "PHP", "Web Security Administration"]
	}; */
	var work = {};
	var education = {};
	
	work.position = "Senior Specialist Application Production Support";
	work.employer = "AT&T";
	work.yearsWorked = "2.5";
	
	education["name"] = "University of Phoenix";
	education["yearsAttended"] = "2007 - 2010";
	education["city"] = "Phoenix, AZ, US";
	
	$("#main").append(work["position"]);
	$("#main").append(education.name);
	//$("#main").append(bio.welcomeMessage); //This prints out whatever object you call in ()
	
	// myObj["property"] = "some value"; for example,  bio["office"] = "734-738-2600";
	//myObj.property = "some value"; for example, bio.office="734-738-2600";
