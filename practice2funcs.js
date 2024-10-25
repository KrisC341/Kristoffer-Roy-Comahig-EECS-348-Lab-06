function apply() {
		const input1 = document.getElementById("input1").value;
		const input2 = document.getElementById("input2").value;
		const input3 = document.getElementById("input3").value;
		const rgbColor = `rgb(${input1}, ${input2}, ${input3})`;
		document.getElementById("bees").style.color = rgbColor;
		document.getElementById("bees").style.borderColor = rgbColor;
		
		const borderWidth = document.getElementById("input4").value;
		document.getElementById("bees").style.borderWidth = borderWidth;

		const input5 = document.getElementById("input5").value;
		const input6 = document.getElementById("input6").value;
		const input7 = document.getElementById("input7").value;
		const rgbColor2 = `rgb(${input5}, ${input6}, ${input7})`;
		document.getElementById("bees").style.backgroundColor = rgbColor2;


		}
