function volume_sphere() {
    //Write your code here
	event.preventDefault();

	const radiusInput = document.getElementById("radius").value;
	const radius = parseFloat(radiusInput);

	let volume = NaN;
	if(!isNaN(radius) && radius >=0){
		volume =(4/3)*Math.PI*Math.pow(radius,3);
		volume = volume.toFixed(4);
	}
	document.getElementById("volume").value=volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
