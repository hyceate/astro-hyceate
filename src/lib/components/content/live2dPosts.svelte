<script lang="ts">
  // import { urlFor } from "@lib/utils/image";
  export let post: any;
  export let category: string;
  category = category.toLowerCase();
</script>

<li
  id="live2d-card"
  class="flex flex-[1_1_15%] w-full px-1 py-1 m-2 bg-primary border-2 border-rose-200 rounded-lg shadow-[2px_2px_6px_#e0dad2,-2px_-4px_9px_#fffffe] hover:shadow-[1px_1px_1px_#e0dad2,-1px_-1px_2px_#fffffe] hover:scale-105 transition-transform ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
>
  <a href="/{category}/{post.slug}">
    <figure class="max-h-[15rem] overflow-hidden">
      <slot name="image" />
      <!-- <img
				class="flex-[1_1_auto] h-full w-full min-h-[10rem] min-w-[15rem] rounded-md object-cover object-center"
				src={urlFor(post.coverImage).width(1280).height(720).url()}
				alt={post.coverImage.alt}
			/> -->
    </figure>
  </a>
</li>
