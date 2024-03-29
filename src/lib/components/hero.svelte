<script lang="ts">
	// import "@lottiefiles/lottie-player";
	import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
	// import landing from "@assets/animation/landing.json";
	// @ts-ignore
	import landing2 from "@assets/animation/Landing.lottie";
</script>

<div
	id="hero"
	class="flex flex-col justify-center items-center m-auto overflow-clip"
>
	<DotLottieSvelte src={landing2} loop autoplay />
	<!-- <div class="max-w-[35rem]">
		<lottie-player src={JSON.stringify(landing)} autoplay loop mode="normal" />
	</div> -->
	<!-- <img
		class="w-full max-w-[35rem] transform"
		src={landing.src}
		alt="Hyceate at a desk with a graphics tablet"
	/> -->
	<h1 class="text-9xl max-md:text-6xl text-[#db7471]">hyceate</h1>
</div>

<style>
</style>
