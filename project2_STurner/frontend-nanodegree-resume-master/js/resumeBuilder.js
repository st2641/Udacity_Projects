	var bio = {
		"name" : "Shaun D. Turner",
		"role" : "Application Administrator",
		"contacts" : {
		"office": "734-738-2641",
		"mobile" :  "616-951-2138",
		"email": "shaun.cell74@gmail.com",
		"location": "White Lake, MI",
		"github": "st2641"
		},
		"pic": "images/fry.jpg",
		"welcomeMessage":  "Welcome to my interactive resume",
		"Skills":  [".sh", ".ksh", "SQL", "Perl", "HTML", "PHP", "Web Security Administration"],
		"printData": function() {
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var  formattedPic = HTMLbioPic.replace("%data%",bio.pic);
		var  formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
		var  formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
		var  formattedGithub= HTMLgithub.replace("%data%",bio.contacts.github);
		var  formattedLocation= HTMLlocation.replace ("%data%",bio.contacts.location);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		}                                    
	};
	bio.printData( );
	
	var education = {
		"schools": [
			{
			"name": "University of Phoenix",
			"location": "Phoenix, AZ, US",
			"degree": "Bachelors of Science",
			"major": "Information Technology",
			"gradYr": "2010"
			},
			{
			"name": "Wayne State University",
			"location": "Detroit, MI, US",
			"degree": "NA",
			"major": "Criminal Justice",
			"gradYr": "NA"
			}
		],
		"onlineCourses": [
			{
			"title": "Front-end Web Developer",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com/course/nd001"
			}
		],
		"renderData": function() {
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools.name);
			$("#education").append(formattedschoolName);
		}
	}

/* 	var workExperience = {
	"employer": "AT&T",
	"position": "Application Administrator",
	"title": "Senior Specialist Application Production",
	"yearsWorked": "2.5"	
	}
	var projects = {
		"projects": [
			{
			"title": "Billing Consolidator: SToNC",
			"dates": "2014",
			"description": "This is a project description"
			}
		]
	} */
	
	
	
	
	
	
	
	
	
