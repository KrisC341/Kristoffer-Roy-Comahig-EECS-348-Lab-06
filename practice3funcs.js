function password() {
		let pass1 = document.getElementById("pass1").value
		let pass2 = document.getElementById("pass2").value
		if ((pass1.length < 8) || (pass2.length < 8)) {
			document.getElementById("result").innerText = "Password less than 8 characters.";
			} else if (pass1 != pass2) {
			document.getElementById("result").innerText = "Passwords do not match.";
			} else {
			document.getElementById("result").innerText = "Passwords are verified and match!";
			}
		}
