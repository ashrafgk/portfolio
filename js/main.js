/*
  JavaScript version of the CSS-Only https://codepen.io/bramus/pen/vYXQGXo
*/



const $images = document.querySelectorAll(".revealing-image");

$images.forEach(($image) => {
	$image.animate(
		{
			opacity: [0, 1],
			clipPath: ['inset(80% 10% )', 'inset(0% 0%)'],
		},
		{
			duration: 1,
			fill: "both",
			timeline: new ScrollTimeline({
				scrollSource: document.documentElement,
				timeRange: 1,
				fill: "both",
				scrollOffsets: [
					{ target: $image, edge: 'end', threshold: 0.05 },
					{ target: $image, edge: 'end', threshold: 1 },
				],
			}),
		}
	);
});



function playVid() {
    var myVideo = document.getElementById("myvid");
	var videobg = document.getElementById("bg-black");
	var ppbutton = document.getElementById("vidbutton");
        myVideo.play();
        myVideo.setAttribute("controls", "");
		ppbutton.style.display = "none";
		videobg.style.display = "none";
   
}

function playVid2() {
	var myVideo2 = document.getElementById("myvid2");
	var videobg2 = document.getElementById("bg-black2");
	var ppbutton2 = document.getElementById("vidbutton2");
        myVideo2.play();
        myVideo2.setAttribute("controls", "");
		ppbutton2.style.display = "none";
		videobg2.style.display = "none";
}

function playVid3() {
	var myVideo3 = document.getElementById("myvid3");
	var videobg3 = document.getElementById("bg-black3");
	var ppbutton3 = document.getElementById("vidbutton3");
        myVideo3.play();
        myVideo3.setAttribute("controls", "");
		ppbutton3.style.display = "none";
		videobg3.style.display = "none";
}