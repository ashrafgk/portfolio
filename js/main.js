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