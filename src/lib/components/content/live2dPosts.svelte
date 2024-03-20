<script lang="ts">
  // import { urlFor } from "@lib/utils/image";
  export let post: any;
  export let category: string;
  category = category.toLowerCase();
</script>

<li
  id="live2d-card"
  class="flex flex-[1_1_15%] w-full m-2 bg-primary border-2 border-darkBorder rounded-lg hover:scale-105 transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
>
  <a href="/projects/{category}/{post.slug}">
    <figure class="w-full max-h-[15rem] overflow-hidden">
      <slot name="image" />
      <!-- <img
				class="flex-[1_1_auto] h-full w-full min-h-[10rem] min-w-[15rem] rounded-md object-cover object-center"
				src={urlFor(post.coverImage).width(1280).height(720).url()}
				alt={post.coverImage.alt}
			/> -->
    </figure>
  </a>
</li>
