/* Louis Adams */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}    
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}

// AJAX request to Open Weather Map
var apiKey = 'fa7d80c48643dfadde2cced1b1be6ca1';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('citySubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		//var city = document.getElementById('city').value;
		var city = "Pohang";
    	req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey, true);
		req.addEventListener('load', function(){
      		if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				console.log(response);
        		document.getElementById('displayCity').textContent = response.name + ", South Korea";
				document.getElementById('displayTemperature').textContent = (response.main.temp - 273.15) * (9.0 / 5.0) + 32.0 + " degrees Fahrenheit";
				document.getElementById('displayHumidity').textContent = response.main.humidity + " %";
				document.getElementById('displayWind').textContent = response.wind.speed + " meters per second";
			}
			else{
        		console.log("Error in network request: " + req.statusText);
			}
		});
		req.send(null);
        event.preventDefault();
	});
}

// Variables to store survey question results
var results;         // Includes the questions, possible answers, and the number of people who gave each answer
var q1a1 = 0;        // The number of responses to each possible answer is initialized to zero
var q1a2 = 0;
var q1a3 = 0;
var q1a4 = 0;
var q1a5 = 0;
var q1a6 = 0;
var q1a7 = 0;
var q2a1 = 0;
var q2a2 = 0;
var q2a3 = 0;
var q2a4 = 0;
var q2a5 = 0;
var q3a1 = 0;
var q3a2 = 0;
var q3a3 = 0;
var q3a4 = 0;
var q3a5 = 0;
var q3a6 = 0;         
var q3a7 = 0;
var q4a1 = 0;
var q4a2 = 0;
var q4a3 = 0;
var q4a4 = 0;
var q4a5 = 0;
var q4a6 = 0;
var q4a7 = 0;
var q4a8 = 0;
var q4a9 = 0;
var q4a10 = 0;
var q4a11 = 0;
var q4a12 = 0;
var q4a13 = 0;
var q5a1 = 0;
var q5a2 = 0;
var q5a3 = 0;
var q5a4 = 0;
var q5a5 = 0;
var q5a6 = 0;
var q5a7 = 0;
var q5a8 = 0;
var q5a9 = 0;

// Display results for the 5 survey questions.

function displaySurveyResults(form) {
	var question1;       // value for the first survey question
	var question2;       // value for the second survey question
	var question3;       // value for the third survey question
	var question4;       // value for the fourth survey question
	var question5;       // value for the fifth survey question

	question1 = form.elements["survey1"];
	question2 = form.elements["survey2"];
	question3 = form.elements["survey3"];
	question4 = form.elements["survey4"];
	question5 = form.elements["survey5"];

	if (form.checkValidity()) {      // check to make sure the user answered all the questions
		if (question1[0].checked) {     
		q1a1++;                      // if a user selects an answer, the variable for that answer get incremented
		}
		if (question1[1].checked) { 
		q1a2++;
		}
		if (question1[2].checked) { 
		q1a3++;
		}
		if (question1[3].checked) { 
		q1a4++;
		}
		if (question1[4].checked) { 
		q1a5++;
		}
		if (question1[5].checked) { 
		q1a6++;
		}
		if (question1[6].checked) { 
		q1a7++;
		}
		if (question2[0].checked) { 
		q2a1++;
		}
		if (question2[1].checked) { 
		q2a2++;
		}
		if (question2[2].checked) { 
		q2a3++;
		}
		if (question2[3].checked) { 
		q2a4++;
		}
		if (question2[4].checked) { 
		q2a5++;
		}
		if (question3[0].checked) { 
		q3a1++;
		}
		if (question3[1].checked) { 
		q3a2++;
		}
		if (question3[2].checked) { 
		q3a3++;
		}
		if (question3[3].checked) { 
		q3a4++;
		}
		if (question3[4].checked) { 
		q3a5++;
		}
		if (question3[5].checked) { 
		q3a6++;
		}
		if (question3[6].checked) { 
		q3a7++;
		}
		if (question4[0].checked) { 
		q4a1++;
		}
		if (question4[1].checked) { 
		q4a2++;
		}
		if (question4[2].checked) { 
		q4a3++;
		}
		if (question4[3].checked) { 
		q4a4++;
		}
		if (question4[4].checked) { 
		q4a5++;
		}
		if (question4[5].checked) { 
		q4a6++;
		}
		if (question4[6].checked) { 
		q4a7++;
		}
		if (question4[7].checked) { 
		q4a8++;
		}
		if (question4[8].checked) { 
		q4a9++;
		}
		if (question4[9].checked) { 
		q4a10++;
		}
		if (question4[10].checked) { 
		q4a11++;
		}
		if (question4[11].checked) { 
		q4a12++;
		}
		if (question4[12].checked) { 
		q4a13++;
		}
		if (question5[0].checked) { 
		q5a1++;
		}
		if (question5[1].checked) { 
		q5a2++;
		}
		if (question5[2].checked) { 
		q5a3++;
		}
		if (question5[3].checked) { 
		q5a4++;
		}
		if (question5[4].checked) { 
		q5a5++;
		}
		if (question5[5].checked) { 
		q5a6++;
		}
		if (question5[6].checked) { 
		q5a7++;
		}
		if (question5[7].checked) { 
		q5a8++;
		}
		if (question5[8].checked) { 
		q5a9++;
		}

		// results lists every question and every possible answer, it then gives the total number of responses for each answer
		results = "<h2>Survey Results</h2>" + "What was your primary reason for coming to Pohang?" + "<br><br>" + "tourism: " + q1a1 + "<br>" + "teaching English: " + q1a2 + "<br>" + "business: " + q1a3 + "<br>" + "attending university: " + q1a4 + "<br>" + "military service: " + q1a5 + "<br>" + "visiting family: " + q1a6 + "<br>" + "other: " + q1a7 + "<br><br>" +
				"How long have you been staying in Pohang?" + "<br><br>" + "less than 1 year: " + q2a1 + "<br>" + "1-3 years: " + q2a2 + "<br>" + "3-5 years: " + q3a3 + "<br>" + "5-10 years: " + q4a4 + "<br>" + "more than 10 years: " + q5a5 + "<br><br>" +  
				"What continent did you come from originally?" + "<br><br>" + "North America: " + q3a1 + "<br>" + "South America: " + q3a2 + "<br>" + "Europe: " + q3a3 + "<br>" + "Africa: " + q3a4 + "<br>" + "Asia: " + q3a5 + "<br>" + "Australia/Oceania: " + q3a6 + "<br>" + "Antarctica: " + q3a7 + "<br><br>" +
				"What is your favorite Korean food?" + "<br><br>" + "kimchi: " + q4a1 + "<br>" + "samgyeopsal: " + q4a2 + "<br>" + "dwaenjangjjigae: " + q4a3 + "<br>" + "bulgogi: " + q4a4 + "<br>" + "bibimbap: " + q4a5 + "<br>" + "gimbap: " + q4a6 + "<br>" + "ddeokbokki: " + q4a7 + "<br>" + "kalguksu: " + q4a8 + "<br>" + "bossam: " + q4a9 + "<br>" + "haejangguk: " + q4a10 + "<br>" + "mulhoe: " + q4a11 + "<br>" + "gwamegi: " + q4a12 + "<br>" + "other: " + q4a13 + "<br><br>" +
				"What is your least favorite Korean food?" + "<br><br>" + "kimchi: " + q5a1 + "<br>" + "sundae: " + q5a2 + "<br>" + "ddeokbokki: " + q5a3 + "<br>" + "chicken feet: " + q5a4 + "<br>" + "beondegi: " + q5a5 + "<br>" + "dried squid: " + q5a6 + "<br>" + "hongeohoe: " + q5a7 + "<br>" + "brown seaweed: " + q5a8 + "<br>" + "other: " + q5a9;
	} // end if

	else {
		results = "Please select one answer for each question in order to see the results.";
	} // end else

	document.getElementById("results").innerHTML = results;
} // end displaySurveyResults  