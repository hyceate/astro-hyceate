<script lang="ts">
  import { Image } from "@unpic/svelte";
  import { onMount } from "svelte";
  // import { urlFor } from "@lib/utils/image";
  export let posts: any;
  export let category: string;
  category = category.toLowerCase();
  let imgReady = false;
  function setImageLoad() {
    imgReady = true;
  }
</script>

<ul id="live2d-cards" class="flex flex-wrap gap-2 max-w-6xl justify-normal">
  {#each posts as post}
    <li
      class="live2d-card flex flex-[1_1_25%] items-center justify-center w-full bg-primary border-2 border-darkBorder rounded-lg hover:scale-[102%] transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      <a href="/projects/{category}/{post.slug}">
        <figure
          class="flex justify-center items-center h-full w-full max-h-[18rem] min-w-[16rem] min-h-[11rem] overflow-hidden"
        >
          <Image
            class="flex-[1_1_auto] h-full w-full min-h-[11rem] min-w-[16rem] rounded object-cover object-center"
            src={`https://i.ytimg.com/vi_webp/${post.youtubeEmbed.video.id}/maxresdefault.webp`}
            layout="fullWidth"
            background="auto"
            alt={post.coverImage.alt}
            on:load={setImageLoad}
          />
        </figure>
      </a>
    </li>
  {/each}
</ul>

<style>
</style>
