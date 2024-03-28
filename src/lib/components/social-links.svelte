<script lang="ts">
	import x from "@assets/svg/x.svg";
	import instagram from "@assets/svg/instagram.svg";
	import youtube from "@assets/svg/youtube.svg";
	import vgen from "@assets/svg/vgen.svg";
</script>

<ul
	id="social-links"
	class="flex flex-wrap justify-start max-md:justify-center items-center w-full"
>
	<li class="major-button">
		<a href="https://twitter.com/hyceate"
			><img src={x.src} class="" alt="x.com or formally known as twitter" /></a
		>
	</li>
	<li class="major-button">
		<a href="https://instagram.com/hyce.ate"
			><img src={instagram.src} class="" alt="instagram" /></a
		>
	</li>
	<li class="major-button">
		<a href="https://www.youtube.com/channel/UC6lcT600p-5Z0ILfJB3ufow"
			><img src={youtube.src} class="" alt="youtube" /></a
		>
	</li>
	<li class="major-button">
		<a href="https://vgen.co/hyceate">
			<img src={vgen.src} alt="vgen" />
		</a>
	</li>
</ul>

<style>
	#social-links li {
		padding: 0.2rem;
		border-radius: 10px;
		margin-inline-end: 0.4em;
		margin-bottom: 0.5em;
	}
	#social-links li a img {
		width: 1.85rem;
		height: 1.85rem;
	}
</style>
