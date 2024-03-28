<script lang="ts">
	// import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
	import "@lottiefiles/lottie-player";
	// import landing from "@asspublic/landing.json
</script>

<div
	id="hero"
	class="flex flex-col justify-center items-center m-auto overflow-clip"
>
	<div class="max-w-[35rem]">
		<lottie-player src="/landing.json" autoplay loop mode="normal" />
	</div>
	<!-- <img
		class="w-full max-w-[35rem] transform"
		src={landing.src}
		alt="Hyceate at a desk with a graphics tablet"
	/> -->
	<h1 class="text-9xl max-md:text-7xl text-[#db7471]">hyceate</h1>
</div>

<style>
</style>
