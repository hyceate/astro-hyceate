<script lang="ts">
	export const prerender = false;
	import { onMount, onDestroy } from "svelte";
	import { DotLottie } from "@lottiefiles/dotlottie-web";
	// @ts-ignore
	import landing2 from "@assets/animation/Landing.lottie";
	import { isReady } from "@lib/stores/stores";
	let dotLottie: DotLottie | null = null;
	onMount(() => {
		$isReady = true;
		setTimeout(() => {
			if ($isReady) {
				dotLottie = new DotLottie({
					autoplay: false,
					loop: true,
					useFrameInterpolation: true,
					layout: {
						fit: "contain",
						align: [0.5, 0.5],
					},
					canvas: document.querySelector("#dotlottie-canvas"),
					src: landing2, // or .json file
				});
				setTimeout(() => {
					dotLottie.play();
				}, 300);
			}
		}, 500);
	});
	onDestroy(() => {
		if (dotLottie) {
			dotLottie.destroy();
			$isReady = false;
		}
	});
</script>

<div
	id="hero"
	class="flex flex-col justify-center items-center m-auto overflow-clip"
>
	<div id="lottie-container" class="overflow-clip max-w-[37rem]">
		<canvas
			id="dotlottie-canvas"
			style="width: 100%; height: 100%"
			width="700"
			height="680"
		></canvas>
	</div>
	<h1
		class="opacity-0 absolute font-medium bottom-[20dvh] text-9xl max-md:text-8xl max-md:bottom-[25dvh] max-sm:bottom-[30dvh] max-sm:text-[20dvw] text-[#db7471] text-stroke"
	>
		hyceate
	</h1>
	<div class="h-[10rem]" tabindex="-1"></div>
</div>

<style>
</style>
