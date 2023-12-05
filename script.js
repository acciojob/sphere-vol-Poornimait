function volume_sphere() {
    //Write your code here
	let radiusinput=document.getElementById("radius");
	let radius=parseFloat(radiusinput.value);
	var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    var volumeField = document.getElementById("volume");
	if (!isNaN(volume)) {
        volumeField.value = volume.toFixed(4);
    } 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
