<script lang="ts">
	import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
	import Landing from "@assets/animation/landing.json";
	// import landing from "@assets/svg/landing_1.svg";
</script>

<div
	id="hero"
	class="flex flex-col justify-center items-center m-auto overflow-clip"
>
	<div class="max-w-[35rem]">
		<LottiePlayer
			src={Landing}
			autoplay={true}
			loop={true}
			background="transparent"
			renderer="svg"
			controls={false}
			width={560}
			height={526.81}
		/>
	</div>
	<!-- <img
		class="w-full max-w-[35rem] transform"
		src={landing.src}
		alt="Hyceate at a desk with a graphics tablet"
	/> -->
	<h1 class="text-9xl max-md:text-7xl text-[#db7471]">hyceate</h1>
</div>
