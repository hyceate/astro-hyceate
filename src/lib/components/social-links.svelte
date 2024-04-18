<script lang="ts">
	import vgen from "@assets/svg/vgen.svg";
	const vgenDataUri = `data:image/svg+xml;base64,${btoa(vgen)}`;
</script>

<ul
	id="social-links"
	class="flex flex-wrap justify-start max-md:justify-center items-center w-full"
>
	<li class="major-button">
		<a href="https://twitter.com/hyceate"
			><svg
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 24 24"
				aria-labelledby="x"
			>
				<title id="x">x.com</title>
				<path
					d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"
				></path>
			</svg>
		</a>
	</li>
	<li class="major-button">
		<a href="https://instagram.com/hyce.ate"
			><svg
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 24 24"
				aria-labelledby="instagram"
				><title id="instagram">instagram.com</title>
				<path
					d="M 8 3 C 5.2 3 3 5.2 3 8 L 3 16 C 3 18.8 5.2 21 8 21 L 16 21 C 18.8 21 21 18.8 21 16 L 21 8 C 21 5.2 18.8 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.7 5 19 6.3 19 8 L 19 16 C 19 17.7 17.7 19 16 19 L 8 19 C 6.3 19 5 17.7 5 16 L 5 8 C 5 6.3 6.3 5 8 5 z M 17 6 C 16.4 6 16 6.4 16 7 C 16 7.6 16.4 8 17 8 C 17.6 8 18 7.6 18 7 C 18 6.4 17.6 6 17 6 z M 12 7 C 9.2 7 7 9.2 7 12 C 7 14.8 9.2 17 12 17 C 14.8 17 17 14.8 17 12 C 17 9.2 14.8 7 12 7 z M 12 9 C 13.7 9 15 10.3 15 12 C 15 13.7 13.7 15 12 15 C 10.3 15 9 13.7 9 12 C 9 10.3 10.3 9 12 9 z"
				></path>
			</svg>
		</a>
	</li>
	<li class="major-button">
		<a href="https://www.youtube.com/channel/UC6lcT600p-5Z0ILfJB3ufow"
			><svg
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 24 24"
				aria-labelledby="youtubesvg"
				><title id="youtubesvg">youtube.com</title>
				<path
					d="M 12 4 C 12 4 5.6992188 4.0003906 4.1992188 4.4003906 C 3.2992187 4.6003906 2.6003906 5.2992187 2.4003906 6.1992188 C 2.0003906 7.6992188 2 12 2 12 C 2 12 2.0003906 16.300781 2.4003906 17.800781 C 2.6003906 18.700781 3.2992187 19.299609 4.1992188 19.599609 C 5.6992188 19.999609 12 20 12 20 C 12 20 18.300781 19.999609 19.800781 19.599609 C 20.700781 19.399609 21.299609 18.700781 21.599609 17.800781 C 21.999609 16.300781 22 12 22 12 C 22 12 21.999609 7.6992187 21.599609 6.1992188 C 21.399609 5.2992187 20.700781 4.7003906 19.800781 4.4003906 C 18.300781 4.0003906 12 4 12 4 z M 12 6 C 14.9 6 18.500781 6.1007813 19.300781 6.3007812 C 19.500781 6.3007812 19.599219 6.4992187 19.699219 6.6992188 C 19.899219 7.5992187 20 10.3 20 12 C 20 13.7 19.899609 16.400781 19.599609 17.300781 C 19.599609 17.500781 19.399219 17.599219 19.199219 17.699219 C 18.499219 17.899219 14.9 18 12 18 C 9.1 18 5.4992187 17.899609 4.6992188 17.599609 C 4.4992187 17.599609 4.4007813 17.399219 4.3007812 17.199219 C 4.1007812 16.399219 4 13.7 4 12 C 4 10.3 4.1007813 7.5992187 4.3007812 6.6992188 C 4.3007812 6.4992187 4.4992187 6.4007813 4.6992188 6.3007812 C 5.4992187 6.1007812 9.1 6 12 6 z M 10 8.5 L 10 15.5 L 16 12 L 10 8.5 z"
				></path>
			</svg>
		</a>
	</li>
	<li class="major-button">
		<a href="https://vgen.co/hyceate">
			<img src={vgen.src} alt="vgen.co" />
		</a>
	</li>
</ul>

<style>
	#social-links li {
		padding: 0.2rem;
		margin-inline-end: 6px;
		margin-bottom: 0.5em;
		width: 40px;
		height: 40px;
	}
	#social-links svg,
	#social-links img {
		width: 100%;
		height: 100%;
	}
</style>
