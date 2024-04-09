<script lang="ts">
	import "vidstack/bundle";
	export let data: any;
	let video = data.youtubeEmbed;
</script>

<media-player
	title={video.video.title}
	src="youtube/{video.video.id}"
	playsInline
	class="media-player w-full h-full rounded-mdoverflow-hidden"
	style="aspect-ratio: {video.aspectRatio};background-color: transparent;"
	controls={video.controls}
	loop
	load="visible"
	poster="https://i.ytimg.com/vi_webp/{video.video.id}/maxresdefault.webp"
	posterLoad="visible"
	muted
>
	<media-provider>
		<media-poster
			class="absolute inset-0 block h-full w-full rounded-md border-1 border-rose-200 bg-primary opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
			src="https://i.ytimg.com/vi_webp/{video.video.id}/maxresdefault.webp"
			alt="thumbnail for ${video.video.title}"
		/>
	</media-provider>
	<div
		class="media-started:opacity-0 absolute bottom-5 right-5 bg-black/40 text-white p-2 rounded-lg flex items-center text-sm font-medium transition-opacity z-30"
	>
		<media-time class="time" type="current"></media-time>
		<div class="mx-1">/</div>
		<media-time class="time" type="duration"></media-time>
	</div>
</media-player>

<style>
</style>
