<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { DotLottie } from "@lottiefiles/dotlottie-web";
	// @ts-ignore
	import landing2 from "@assets/animation/Landing.lottie";

	let dotLottie: DotLottie | null = null;
	onMount(() => {
		dotLottie = new DotLottie({
			autoplay: true,
			loop: true,
			layout: {
				fit: "fit-width",
				align: [0.5, 0.5],
			},
			canvas: document.querySelector("#dotlottie-canvas"),
			src: landing2, // or .json file
		});
	});
</script>

<div
	id="hero"
	class="flex flex-col justify-center items-center m-auto overflow-clip"
>
	<div class="overflow-clip max-w-[37rem]">
		<canvas
			id="dotlottie-canvas"
			style="width: 100%; height: 100%"
			width="700"
			height="680"
		></canvas>
	</div>
	<h1
		class="absolute font-medium bottom-[20dvh] text-9xl max-md:text-8xl max-md:bottom-[25dvh] max-sm:bottom-[30dvh] max-sm:text-[20dvw] text-[#db7471] text-stroke"
	>
		hyceate
	</h1>
	<div class="h-[10rem]" tabindex="-1"></div>
</div>

<style>
	#dotlottie-canvas {
		animation: 0.5s ease-in-out slideInFromBottom;
	}
	#hero h1 {
		animation: 0.6s ease-in-out slideInFromBottom;
	}
	@keyframes slideInFromBottom {
		from {
			transform: translateY(50px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
