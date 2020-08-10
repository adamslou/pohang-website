// This function adds a job to the list of jobs.
function addJob(form)  {
	var table;          // table of job opportunities
	var row;            // row in displayed table of jobs

	table = document.getElementById("jobs-table");
	row = table.insertRow(table.rows.length);

	row.insertCell(0).innerHTML = form.elements["employer-name"].value;
	row.insertCell(1).innerHTML = form.elements["employer-address"].value;
	row.insertCell(2).innerHTML = form.elements["job-description"].value;
	row.insertCell(3).innerHTML = form.elements["working-hours"].value;
	row.insertCell(4).innerHTML = form.elements["salary-and-benefits"].value;
	row.insertCell(5).innerHTML = form.elements["months"].value;
	row.insertCell(6).innerHTML = form.elements["days"].value;
	row.insertCell(7).innerHTML = form.elements["contact-info"].value;
}  // end addJob

document.addEventListener('DOMContentLoaded', bindButtons);