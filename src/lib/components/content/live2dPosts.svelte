<script lang="ts">
  import { Image } from "@unpic/svelte";
  // import { urlFor } from "@lib/utils/image";
  export let posts: any;
  export let category: string;
  category = category.toLowerCase();
</script>

{#each posts as post}
  <li
    class="live2d-card flex flex-[1_1_25%] w-full max-w-[40rem] bg-primary border-2 border-darkBorder rounded-lg hover:scale-[102%] transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
  >
    <a href="/projects/{category}/{post.slug}">
      <figure class="w-full max-h-[18rem] overflow-hidden">
        <!-- <slot name="image" /> -->
        <Image
          class="flex-[1_1_auto] h-full w-full min-h-[11rem] min-w-[16rem] rounded object-cover object-center"
          src={`https://i.ytimg.com/vi_webp/${post.youtubeEmbed.video.id}/maxresdefault.webp`}
          layout="fullWidth"
          background="auto"
          alt={post.coverImage.alt}
        />
      </figure>
    </a>
  </li>
{/each}
