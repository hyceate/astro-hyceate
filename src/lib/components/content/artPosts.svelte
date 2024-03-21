<script lang="ts">
  import { Image } from "@unpic/svelte";
  import { urlFor } from "@lib/utils/image";
  export let post: any;
  export let category: string;
  // console.log(`Post Data for art Cards`, post);
</script>

<li>
  <a href="/projects/{category}/{post.slug}">
    <section
      id="art-card"
      class="flex flex-[1_1_0%] w-full justify-center items-center border-2 border-darkBorder rounded-lg transition-all hover:scale-105 transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      {#if post.mainImage}
        <figure class="max-w-[50rem] rounded-lg min-h-[15rem] min-w-[15rem]">
          <Image
            class="flex-1 h-full w-dvw min-h-[15rem] min-w-[15rem] rounded-md object-cover object-center"
            src={urlFor(post.mainImage).width(500).height(300).url()}
            width={1280}
            loading="lazy"
            decoding="async"
            layout="fullWidth"
            background="auto"
            alt={post.mainImage.alt}
          />
          <!-- <slot name="image" /> -->
        </figure>
      {/if}
    </section>
  </a>
</li>
