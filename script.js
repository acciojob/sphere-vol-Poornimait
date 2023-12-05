function volume_sphere() {
    //Write your code here
	const radius = document.getElementById('radius').value;
	const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	const roundedVolume = parseFloat(volume.toFixed(4));
	document.getElementById('volume').value = roundedVolume;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
