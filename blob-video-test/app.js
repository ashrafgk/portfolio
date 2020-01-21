function onload() {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "./video.mp4");
	xhr.responseType = "arraybuffer";

	xhr.onload = function (e) {
		var blob = new Blob([xhr.response], {type: "video/mp4"});
		var url = URL.createObjectURL(blob);

		console.log(url);

		var img = document.getElementById("video");
		img.src = url;
	}

	xhr.send();
}