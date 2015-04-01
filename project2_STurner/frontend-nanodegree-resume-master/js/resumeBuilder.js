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
	"Skills":  [".sh", ".ksh", "SQL", "Perl", "HTML", "PHP", "Web Application Administration"],
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

		if (bio.Skills.length > 0){//Evaluate bio.Skills and find out if the array is populated, print if true
			$("#header").append(HTMLskillsStart);
		
			for (item in bio.Skills){
				var formattedSkills = HTMLskills.replace("%data%",bio.Skills[item]);
				$("#skills").append(formattedSkills);	
			}//Ends for();
		}//Ends if();
	}//Ends printData
};//Ends bio object

var education = {
	"schools": [
		{
		"name": "University of Phoenix",
		"location": "Phoenix, AZ, US",
		"degree": "Bachelors of Science",
		"major": "Information Technology",
		"dates": "September 2007 - May 2010"
		},
		{
		"name": "Wayne State University",
		"location": "Detroit, MI, US",
		"degree": "",
		"major": "Criminal Justice",
		"dates": "September 1997 - May 1999"
		}
	],
	"onlineCourses": [
		{
		"title": "Front-end Web Developer",
		"school": "Udacity",
		"dates": "January 2015 - Present",
		"url": "http://www.udacity.com/course/nd001"
		},
		{
		"title": "Angular JS",
		"school": "Code School",
		"dates":"March 2015 - Present",
		"url": "http://campus.codeschool.com/"
		}
	],
	"displaySchools": function() {
		if (education.schools.length > 0){
			$("#education").append(HTMLschoolStart);
			
			for (inst in education.schools){
				var formattedTitle = HTMLschoolName.replace("%data%",education.schools[inst].name);
				var formattedDegree =  HTMLschoolDegree.replace("%data%",education.schools[inst].degree);
				var formattedDate =  HTMLschoolDates.replace("%data%",education.schools[inst].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[inst].location);
				var formattedMajor =  HTMLschoolMajor.replace("%data%",education.schools[inst].major);
				$(".education-entry:last").append(formattedTitle);
				$(".education-entry:last").append(formattedDate);
				$(".education-entry:last").append(formattedDegree);  
				$(".education-entry:last").append(formattedLocation);
				$(".education-entry:last").append(formattedMajor);
			}//Ends education.schools for();
		}//Ends education.schools if();
	},
	"displayOnline": function(){
		if (education.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
		
			for(crse in education.onlineCourses){
				$("#education").append(HTMLschoolStart);
				var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[crse].title);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[crse].school);
				var formattedonlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[crse].dates);
				var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[crse].url);
				$(".education-entry:last").append(formattedonlineTitle);
				$(".education-entry:last").append(formattedonlineSchool);
				$(".education-entry:last").append(formattedonlineDate);
				$(".education-entry:last").append(formattedonlineURL);
			}//Ends for();
		}//Ends if());
	}//Ends displayOnline();
};//Ends education object

var work = {
	"jobs": [
		{
		"employer": "AT&T",
		"title": "Senior Specialist",
		"datesWorked": "July 16, 2012 - Present",
		"location": "Plymouth, MI",
		"description": "As a Senior Specialist in Application Production Support I have been tasked with the administration and support of an Enterprise Billing Web Application. Ensuring flawless service and custom billing solutions to AT&T's customers is the focus of my team."
		},
		{
		"employer": "AT&T",
		"title": "Senior Specialist",
		"datesWorked": "November 3, 2010 - July 16, 2012",
		"location": "Kansas City, MO",
		"description": "As a Senior Specialist in Advanced Technical Support I was responsible for performing surveillance and maintenance on multiple network platforms. Our focus was to ensure the reliability of the 4ESS adjunct facilities and perform root cause investigations on service interruptions 24 hours a day, seven days a week."
		},
		{
		"employer": "AT&T",
		"title": "Customer Service Specialist",
		"datesWorked": "September 10, 2001 - November 3, 2010",
		"location": "Royal Oak, MI; Comstock Park, MI; Greenville, MI",
		"description": "As a Customer Service Specialist I was responsible for installing and repairing network elements from the central office to the customer premise. My team worked directly with business and residential customers to ensure flawless service and reliability."
		}
	],
	"printJobs": function (){
		if (work.jobs.length > 0){
			
			for (pos in work.jobs){
					$("#workExperience").append(HTMLworkStart);
					
					var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[pos].employer);
					var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[pos].title);
					var formattedEmployerTitle = formattedEmployer + formattedTitle;
					$(".work-entry:last").append(formattedEmployerTitle);
					
					var formattedDates = HTMLworkDates.replace("%data%", work.jobs[pos].datesWorked);
					var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[pos].location);
					var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[pos].description); 
					$(".work-entry:last").append(formattedDates);
					$(".work-entry:last").append(formattedDescription);	
			}//Ends for();
		}//ends if();
	}//Ends printJobs())
};//Ends jobs object
	

	var workProjects = {
		"project": [
			{
			"title": "Billing Consolidator: SToNC",
			"dates": "June 2014 - October 2014",
			"description": "Customize the invoice output to meet the Business Requirements for all AT&T products for the State of North Carolina."
			},
			{
			"title": "Document  Access Provisioning process",
			"dates": "March 2014 - May 2014",
			"description": "Create a Desk Level Procedure that describes the user provisioning process for the Billing Consolidator."
			}
		],
		"display": function(){
			if (workProjects.project.length > 0){
				
				for(itm in workProjects.project){
					$("#projects").append(HTMLprojectStart);
					var formattedTitle = HTMLprojectTitle.replace("%data%",workProjects.project[itm].title);
					var formattedDate = HTMLprojectDates.replace("%data%",workProjects.project[itm].dates);
					var formattedTitleDate = formattedTitle + formattedDate;
					$(".project-entry:last").append(formattedTitleDate);
					var formattedDescription = HTMLprojectDescription.replace("%data%",workProjects.project[itm].description);
					$(".project-entry:last").append(formattedDescription);
					var formattedImage = HTMLprojectImage.replace("%data%",workProjects.project[itm].image);
					$(".project-entry:last").append(formattedImage);
				}//Ends for loop
			}//Ends if statement
		}//Ends display();
	};//Ends workProjects
	
	

// MAIN//
		bio.printData();
		education.displaySchools();
		education.displayOnline();
		work.printJobs();
		workProjects.display();
		
	$(document).click(function(loc){
	
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
	});
function inName (){
	var _nameArray = bio.name.split(" ");
	_nameArray[0] .slice(0,1).toUpperCase + _nameArray[0] .slice(1).toLowerCase();
	_nameArray[2] = _nameArray[2].toUpperCase();
	return _nameArray[0]  + " " + _nameArray[1] + " " + _nameArray[2] ;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
	
	
	
	
