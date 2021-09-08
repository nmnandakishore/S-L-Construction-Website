//Todo: Use axios next time

document
	.querySelector("#contact-form-send")
	.addEventListener("click", function (e) {
		var form = document.getElementById("contact-form");
		if (!form.checkValidity()) {
			return;
		}

		e.preventDefault();

		document.querySelector("#modal").classList.remove("hidden");
		document
			.querySelector("#modal .loading")
			.setAttribute("style", "display: inline-block;");
		document.querySelector("#modal #toggleModalButton").classList.add("hidden");
		document.querySelector("#modal .failure-icon").classList.add("hidden");
		document.querySelector("#modal .success-icon").classList.add("hidden");
		document.querySelector("#modal .text").innerHTML = "";

		var name = document.querySelector("input#input-name").value;
		var phone = document.querySelector("input#input-phone").value;
		var workType = document.querySelector("#input-job").value;

		var msg = document.querySelector("textarea#msg")
			? document.querySelector("textarea#msg").value
			: "";

		// var xhr = new XMLHttpRequest();

		var url =
			"https://script.google.com/macros/s/AKfycbweQx0SNw1f3qClrTBxQfrhi4c0QbEM2TkdorwZDHV4inRtIvvkFhZM3JszjE0Q8I-mVA/exec";
		// xhr.open("POST", url, true);
		// xhr.withCredentials = true;
		// xhr.setRequestHeader("Content-Type", "application/json");

		var postData = {
			name: name,
			phone: phone,
			workType: workType,
			msg: msg ? msg : "",
		};

		console.log(postData);
		fetch(url, {
			method: "POST",
			headers: new Headers({ "content-type": "application/json" }),
			mode: "no-cors",
			body: JSON.stringify(postData),
		})
			.then((response) => response.text())
			.then((result) => {
				console.log(result);
				document
					.querySelector("#modal .loading")
					.setAttribute("style", "display: none;");
				// if(result === 0){
				document
					.querySelector("#modal .success-icon")
					.classList.remove("hidden");
				document.querySelector("#modal .failure-icon").classList.add("hidden");
				document.querySelector("#modal .text").innerHTML =
					"Your message was sent. Someone will reach you shortly. Thank you.";
				// } else {
				//     document.querySelector("#modal .success-icon").classList.add('hidden');
				//     document.querySelector("#modal .failure-icon").classList.remove('hidden');
				//     document.querySelector("#modal .text").innerHTML = "Something went wrong. Your message couldn't be sent. Please try again after a while.";
				// }
				document
					.querySelector("#modal #toggleModalButton")
					.classList.remove("hidden");
				document.querySelector("#modal #toggleModalButton").focus();
			})
			.catch((error) => {
				document
					.querySelector("#modal .loading")
					.setAttribute("style", "display: none;");
				console.error("Error:", error);
				document.querySelector("#modal .success-icon").classList.add("hidden");
				document
					.querySelector("#modal .failure-icon")
					.classList.remove("hidden");
				document.querySelector("#modal .text").innerHTML =
					"Something went wrong. Your message couldn't be sent. Please try again after a while";
				document
					.querySelector("#modal #toggleModalButton")
					.classList.remove("hidden");
				document.querySelector("#modal #toggleModalButton").focus();
			});
	});
