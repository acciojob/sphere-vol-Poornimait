function volume_sphere() {
    //Write your code here
	let radiusinput=document.getElementById("radius");
	let radius=radiusinput.value;
	var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    var volumeField = document.getElementById("volume");
	
    volumeField.value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
